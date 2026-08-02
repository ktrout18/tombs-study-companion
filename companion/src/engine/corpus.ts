import { CHAPTERS } from '../content/chapters'
import { CONCEPTS } from '../content/concepts'
import { MINDMAPS } from '../content/mindmaps'
import type { Block } from '../types'

/** The tutor's knowledge: every passage of the companion's own content,
 *  flattened for retrieval. Nothing from the book itself. */

export interface Passage {
  id: number
  /** Where to send the reader */
  route: string
  source: string
  text: string
}

function strip(x: string): string {
  return x.replace(/\{\{[a-z0-9-]+\|([^}]+)\}\}/g, '$1').replace(/\*\*?/g, '')
}

function collectBlocks(blocks: Block[], out: string[]) {
  for (const b of blocks) {
    if (b.t === 'p' || b.t === 'argument' || b.t === 'voice') out.push(strip(b.x))
    else if (b.t === 'reading') collectBlocks(b.blocks, out)
    else if (b.t === 'timeline')
      out.push(b.events.map((e) => `${e.year}: ${strip(e.label)}. ${e.detail ? strip(e.detail) : ''}`).join(' '))
  }
}

let CORPUS: Passage[] | null = null

export function getCorpus(): Passage[] {
  if (CORPUS) return CORPUS
  const out: Passage[] = []
  let id = 0
  for (const c of CHAPTERS) {
    const texts: string[] = [strip(c.blurb)]
    collectBlocks(c.blocks, texts)
    const mm = MINDMAPS[c.id]
    if (mm) {
      texts.push(mm.keys.map((k) => `${k.h}: ${strip(k.x)}`).join(' '))
    }
    const label = `${c.number ? c.number + '. ' : ''}${c.title}`
    for (const t of texts) {
      if (t.trim().length > 40) out.push({ id: id++, route: `/c/${c.id}`, source: label, text: t })
    }
  }
  for (const con of Object.values(CONCEPTS)) {
    out.push({
      id: id++,
      route: '/concepts',
      source: `Concept: ${con.term}`,
      text: con.body.map(strip).join(' '),
    })
  }
  CORPUS = out
  return out
}

// ---- BM25 retrieval ----

const STOP = new Set(
  'a an and are as at be but by for from had has have in into is it its of on or that the their there they this to was were what when which who why with how did does do england english'.split(' '),
)

function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, ' ')
    .split(/\s+/)
    .map((w) => w.replace(/^'+|'+$/g, ''))
    .filter((w) => w.length > 2 && !STOP.has(w))
}

interface Index {
  df: Map<string, number>
  docTokens: string[][]
  avgLen: number
}

let INDEX: Index | null = null

function getIndex(): Index {
  if (INDEX) return INDEX
  const corpus = getCorpus()
  const docTokens = corpus.map((p) => tokens(p.text + ' ' + p.source))
  const df = new Map<string, number>()
  for (const dt of docTokens) {
    for (const t of new Set(dt)) df.set(t, (df.get(t) ?? 0) + 1)
  }
  const avgLen = docTokens.reduce((s, d) => s + d.length, 0) / docTokens.length
  INDEX = { df, docTokens, avgLen }
  return INDEX
}

/** Top-k passages for a query, BM25-scored. */
export function retrieve(query: string, k = 4): Passage[] {
  const corpus = getCorpus()
  const { df, docTokens, avgLen } = getIndex()
  const q = [...new Set(tokens(query))]
  if (q.length === 0) return []
  const N = corpus.length
  const K1 = 1.4
  const B = 0.75
  const scored = corpus.map((p, i) => {
    const dt = docTokens[i]
    let score = 0
    for (const term of q) {
      const tf = dt.filter((t) => t === term || t.startsWith(term + "'")).length
      if (tf === 0) continue
      const idf = Math.log((N - (df.get(term) ?? 0) + 0.5) / ((df.get(term) ?? 0) + 0.5) + 1)
      score += idf * ((tf * (K1 + 1)) / (tf + K1 * (1 - B + B * (dt.length / avgLen))))
    }
    return { p, score }
  })
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
    .map((s) => s.p)
}
