import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CHAPTERS } from '../content/chapters'
import { CONCEPTS } from '../content/concepts'
import type { Block } from '../types'

/** ⌘K / Ctrl-K search across every chapter paragraph and concept. */

interface Entry {
  kind: 'chapter' | 'concept'
  id: string
  title: string
  sub: string
  text: string
}

function strip(x: string): string {
  return x
    .replace(/\{\{[a-z0-9-]+\|([^}]+)\}\}/g, '$1')
    .replace(/\*\*?/g, '')
}

function collect(blocks: Block[], out: string[]) {
  for (const b of blocks) {
    if (b.t === 'p' || b.t === 'argument' || b.t === 'voice') out.push(strip(b.x))
    else if (b.t === 'h') out.push(b.x)
    else if (b.t === 'reading') collect(b.blocks, out)
    else if (b.t === 'timeline')
      for (const e of b.events) out.push(strip(e.label) + (e.detail ? ' ' + strip(e.detail) : ''))
  }
}

let INDEX: Entry[] | null = null
function buildIndex(): Entry[] {
  if (INDEX) return INDEX
  const out: Entry[] = []
  for (const c of CHAPTERS) {
    const texts: string[] = [c.era + ' ' + strip(c.blurb)]
    collect(c.blocks, texts)
    for (const t of texts) {
      out.push({ kind: 'chapter', id: c.id, title: c.title, sub: c.era, text: t })
    }
  }
  for (const c of Object.values(CONCEPTS)) {
    out.push({
      kind: 'concept',
      id: c.id,
      title: c.term,
      sub: c.era ?? c.category,
      text: c.body.map(strip).join(' '),
    })
  }
  INDEX = out
  return out
}

export interface SearchHit {
  entry: Entry
  snippet: string
}

function search(q: string): SearchHit[] {
  const needle = q.trim().toLowerCase()
  if (needle.length < 2) return []
  const hits: SearchHit[] = []
  const seen = new Set<string>()
  const idx = buildIndex()
  // Title matches first
  for (const e of idx) {
    const key = e.kind + e.id
    if (seen.has(key)) continue
    if (e.title.toLowerCase().includes(needle)) {
      seen.add(key)
      hits.push({ entry: e, snippet: e.text.slice(0, 110) })
    }
  }
  for (const e of idx) {
    const key = e.kind + e.id
    if (seen.has(key)) continue
    const at = e.text.toLowerCase().indexOf(needle)
    if (at >= 0) {
      seen.add(key)
      const start = Math.max(0, at - 40)
      hits.push({
        entry: e,
        snippet: (start > 0 ? '…' : '') + e.text.slice(start, at + needle.length + 70) + '…',
      })
    }
    if (hits.length >= 24) break
  }
  return hits.slice(0, 24)
}

/** Phrase ChapterPage should flash-highlight after a search jump.
 *  Read non-destructively and clear only after acting on it — StrictMode
 *  double-mounts effects, so a consume-on-read pattern loses the value. */
let pendingHighlight: string | null = null
export function setPendingHighlight(phrase: string) {
  pendingHighlight = phrase
}
export function getPendingHighlight(): string | null {
  return pendingHighlight
}
export function clearPendingHighlight() {
  pendingHighlight = null
}

export function SearchPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const nav = useNavigate()
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const hits = useMemo(() => search(q), [q])

  useEffect(() => {
    if (open) {
      setQ('')
      setSel(0)
      setTimeout(() => inputRef.current?.focus(), 10)
    }
  }, [open])

  useEffect(() => setSel(0), [q])

  if (!open) return null

  const go = (hit: SearchHit) => {
    onClose()
    if (hit.entry.kind === 'concept') {
      nav('/concepts', { state: { q: hit.entry.title } })
    } else {
      setPendingHighlight(q.trim())
      nav(`/c/${hit.entry.id}`)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/35 flex items-start justify-center pt-[12vh] px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[560px] rounded-xl bg-(--color-paper) shadow-2xl border border-(--color-ink)/15 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setSel((s) => Math.min(s + 1, hits.length - 1))
            } else if (e.key === 'ArrowUp') {
              e.preventDefault()
              setSel((s) => Math.max(s - 1, 0))
            } else if (e.key === 'Enter' && hits[sel]) {
              go(hits[sel])
            } else if (e.key === 'Escape') {
              onClose()
            }
          }}
          placeholder="Search chapters and concepts…"
          className="w-full px-5 py-4 bg-transparent outline-none text-[15px] border-b border-(--color-ink)/10"
        />
        <div className="max-h-[50vh] overflow-y-auto">
          {hits.map((h, i) => (
            <button
              key={h.entry.kind + h.entry.id}
              type="button"
              onMouseEnter={() => setSel(i)}
              onClick={() => go(h)}
              className={`block w-full text-left px-5 py-3 border-b border-(--color-ink)/6 ${
                i === sel ? 'bg-(--color-oxblood)/8' : ''
              }`}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-[9.5px] uppercase tracking-[0.13em] text-(--color-gilt) w-14 shrink-0">
                  {h.entry.kind}
                </span>
                <span className="font-serif font-semibold text-[15px]">{h.entry.title}</span>
                <span className="text-[11px] text-(--color-ink-faint)">{h.entry.sub}</span>
              </div>
              <div className="text-[12.5px] text-(--color-ink-soft) mt-0.5 line-clamp-2">
                {h.snippet}
              </div>
            </button>
          ))}
          {q.trim().length >= 2 && hits.length === 0 && (
            <div className="px-5 py-8 text-center text-[13.5px] text-(--color-ink-faint)">
              Nothing found.
            </div>
          )}
          {q.trim().length < 2 && (
            <div className="px-5 py-6 text-center text-[12.5px] text-(--color-ink-faint)">
              Type to search all 29 chapters and {Object.keys(CONCEPTS).length} concepts. ↑↓ to move, Enter to jump.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
