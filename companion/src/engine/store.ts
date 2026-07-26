import { useSyncExternalStore } from 'react'

/** Persistent reader state (localStorage). One object, replaced on every
 *  update so React re-renders via useSyncExternalStore. */

export type ThemePref = 'auto' | 'light' | 'dark'

export interface DeckEntry {
  /** epoch ms when the question is next due */
  due: number
  /** consecutive correct answers in review */
  streak: number
}

export interface AppState {
  /** concept ids whose tooltip the reader has opened */
  discovered: string[]
  /** chapter ids read to the end */
  read: string[]
  lastChapter?: string
  theme: ThemePref
  /** per-chapter list of question indices answered correctly at least once */
  quizDone: Record<string, number[]>
  /** review deck: key `chapterId:questionIndex` */
  deck: Record<string, DeckEntry>
}

const KEY = 'tombs-companion-v1'
const DAY = 24 * 60 * 60 * 1000

function load(): AppState {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const s = JSON.parse(raw)
      return {
        discovered: s.discovered ?? [],
        read: s.read ?? [],
        lastChapter: s.lastChapter,
        theme: s.theme ?? 'auto',
        quizDone: s.quizDone ?? {},
        deck: s.deck ?? {},
      }
    }
  } catch {
    /* corrupted or unavailable storage — start fresh */
  }
  return { discovered: [], read: [], theme: 'auto', quizDone: {}, deck: {} }
}

let state: AppState = load()
const listeners = new Set<() => void>()

function commit(next: AppState) {
  state = next
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    /* private mode etc. — state still works in-memory */
  }
  listeners.forEach((l) => l())
}

export function getState(): AppState {
  return state
}

export function subscribe(l: () => void): () => void {
  listeners.add(l)
  return () => listeners.delete(l)
}

export function useAppState(): AppState {
  return useSyncExternalStore(subscribe, getState)
}

// ---- mutations ----

export function discoverConcept(id: string) {
  if (state.discovered.includes(id)) return
  commit({ ...state, discovered: [...state.discovered, id] })
}

export function markRead(chapterId: string) {
  if (state.read.includes(chapterId)) return
  commit({ ...state, read: [...state.read, chapterId] })
}

export function setLastChapter(chapterId: string) {
  if (state.lastChapter === chapterId) return
  commit({ ...state, lastChapter: chapterId })
}

export function setTheme(theme: ThemePref) {
  commit({ ...state, theme })
}

/** Record a first-pass quiz answer. Wrong answers join the review deck. */
export function recordAnswer(chapterId: string, qi: number, correct: boolean) {
  const key = `${chapterId}:${qi}`
  const quizDone = { ...state.quizDone }
  const deck = { ...state.deck }
  if (correct) {
    const done = new Set(quizDone[chapterId] ?? [])
    done.add(qi)
    quizDone[chapterId] = [...done]
  } else if (!deck[key]) {
    deck[key] = { due: Date.now(), streak: 0 }
  }
  commit({ ...state, quizDone, deck })
}

/** Record a review-deck answer; spaced repetition with doubling intervals. */
export function recordReview(key: string, correct: boolean) {
  const entry = state.deck[key]
  if (!entry) return
  const deck = { ...state.deck }
  if (correct) {
    const streak = entry.streak + 1
    if (streak >= 4) {
      delete deck[key] // graduated
    } else {
      deck[key] = { streak, due: Date.now() + DAY * 2 ** (streak - 1) }
    }
  } else {
    deck[key] = { streak: 0, due: Date.now() + DAY }
  }
  commit({ ...state, deck })
}

export function dueReviewKeys(): string[] {
  const now = Date.now()
  return Object.keys(state.deck).filter((k) => state.deck[k].due <= now)
}
