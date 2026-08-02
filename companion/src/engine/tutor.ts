import { retrieve, type Passage } from './corpus'

/** "Ask the Companion" — a tutor grounded in the companion's own content.
 *
 *  Two modes:
 *  - Retrieval (works everywhere): BM25 over the companion corpus.
 *  - Live chat (public site only): the reader's own Anthropic API key calls
 *    Claude directly from the browser, with retrieved passages as grounding.
 *    The key lives only in this browser's localStorage and is sent only to
 *    Anthropic. The Claude artifact's security policy blocks outside calls,
 *    so live chat is unavailable there.
 */

const KEY_STORAGE = 'tombs-companion-apikey'
const MODEL_STORAGE = 'tombs-companion-model'

export const MODELS = [
  { id: 'claude-opus-5', label: 'Claude Opus 5 (best)' },
  { id: 'claude-sonnet-5', label: 'Claude Sonnet 5 (cheaper)' },
  { id: 'claude-haiku-4-5', label: 'Claude Haiku 4.5 (cheapest)' },
] as const

export function getApiKey(): string {
  try {
    return localStorage.getItem(KEY_STORAGE) ?? ''
  } catch {
    return ''
  }
}

export function setApiKey(key: string) {
  try {
    if (key) localStorage.setItem(KEY_STORAGE, key)
    else localStorage.removeItem(KEY_STORAGE)
  } catch {
    /* private mode */
  }
}

export function getModel(): string {
  try {
    return localStorage.getItem(MODEL_STORAGE) ?? 'claude-opus-5'
  } catch {
    return 'claude-opus-5'
  }
}

export function setModel(model: string) {
  try {
    localStorage.setItem(MODEL_STORAGE, model)
  } catch {
    /* private mode */
  }
}

/** Live chat cannot work where the page's security policy blocks outside
 *  hosts (the Claude artifact). */
export function liveChatPossible(): boolean {
  return !window.location.origin.includes('claude.ai')
}

export interface ChatTurn {
  role: 'user' | 'assistant'
  text: string
}

export interface TutorAnswer {
  text: string
  sources: Passage[]
}

const TUTOR_SYSTEM = `You are the study tutor built into "The English — a study companion", an interactive companion to Robert Tombs' book "The English and Their History". You answer questions about English history and about Tombs' argument.

Ground rules:
- Base your answers on the companion passages provided below. They are original summaries written for this companion — you may quote them freely. Cite where the reader can go deeper by naming the chapter (e.g. "see Chapter 6, Revolution").
- You may add well-established historical context beyond the passages when helpful, but say so ("beyond what the companion covers…"), and never invent facts.
- You do not have the text of Tombs' book itself and must not reproduce it. If asked for the book's exact words, explain that the reader should consult their copy.
- Audience: a curious first-year student. Plain English, short words, active voice. Keep answers focused — a few sentences to a few short paragraphs.
- When Tombs' view is contested, say it is his interpretation and note that critics disagree.`

/** Ask with a live Claude call, grounded in retrieved companion passages. */
export async function askClaude(history: ChatTurn[]): Promise<TutorAnswer> {
  const apiKey = getApiKey()
  const question = history[history.length - 1]?.text ?? ''
  const sources = retrieve(question, 5)
  const passagesBlock = sources
    .map((p) => `[${p.source}]\n${p.text}`)
    .join('\n\n')

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: getModel(),
      max_tokens: 8000,
      system: `${TUTOR_SYSTEM}\n\n# Companion passages relevant to the current question\n\n${passagesBlock}`,
      messages: history.map((t) => ({ role: t.role, content: t.text })),
    }),
  })

  if (!res.ok) {
    let detail = ''
    try {
      const err = await res.json()
      detail = err?.error?.message ?? ''
    } catch {
      /* non-JSON error body */
    }
    if (res.status === 401) throw new Error('That API key was rejected. Check it in settings.')
    if (res.status === 429) throw new Error('Rate limited by Anthropic — wait a moment and try again.')
    throw new Error(detail || `Request failed (${res.status}).`)
  }

  const data = await res.json()
  if (data.stop_reason === 'refusal') {
    throw new Error('Claude declined to answer that question.')
  }
  const text = (data.content ?? [])
    .filter((b: { type: string }) => b.type === 'text')
    .map((b: { text: string }) => b.text)
    .join('\n')
  if (!text) throw new Error('Empty response — try rephrasing the question.')
  return { text, sources }
}

/** Retrieval-only answer: the best-matching companion passages. */
export function askCorpus(question: string): TutorAnswer {
  const sources = retrieve(question, 4)
  return { text: '', sources }
}
