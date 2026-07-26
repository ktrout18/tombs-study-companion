/** Inline rich text. Supports:
 *  {{concept-id|display text}}  — concept tooltip link
 *  **bold**  and  *italic*
 */
export type Rich = string

export type ConceptCategory =
  | 'people'
  | 'events'
  | 'institutions'
  | 'ideas'
  | 'places'
  | 'terms'

export interface Concept {
  id: string
  term: string
  era?: string
  category: ConceptCategory
  /** Paragraphs; may contain {{concept|...}} markers for nested tooltips */
  body: Rich[]
}

export interface TimelineEvent {
  year: string
  label: Rich
  detail?: Rich
}

export interface ChartSeries {
  name: string
  color?: string
  points: { x: number; y: number }[]
}

export type Block =
  | { t: 'p'; x: Rich }
  | { t: 'h'; x: string }
  | { t: 'argument'; title?: string; x: Rich }
  | { t: 'voice'; source: string; x: Rich }
  | { t: 'reading'; title: string; blocks: Block[] }
  | { t: 'timeline'; title?: string; events: TimelineEvent[] }
  | {
      t: 'chart'
      kind: 'line' | 'bar'
      title: string
      unit?: string
      xLabel?: string
      series: ChartSeries[]
      note?: Rich
    }
  | { t: 'widget'; id: string }

export interface Chapter {
  id: string
  /** 0 = front matter (intro/prelude), 1–7 = the book's parts, 8 = conclusion */
  part: number
  number?: string
  title: string
  subtitle?: string
  era: string
  /** One-paragraph overview shown under the chapter heading */
  blurb: Rich
  blocks: Block[]
}

export interface PartInfo {
  n: number
  title: string
  era?: string
}

/** A multiple-choice quiz question, answerable from its chapter's text. */
export interface QuizQ {
  q: string
  options: string[]
  /** Index into options */
  answer: number
  /** Shown after answering; may contain {{concept|...}} links */
  explain: Rich
}
