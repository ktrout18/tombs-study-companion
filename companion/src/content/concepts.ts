import type { Concept } from '../types'
import { EARLY_CONCEPTS } from './concepts-early'
import { MIDDLE_CONCEPTS } from './concepts-middle'
import { MODERN_CONCEPTS } from './concepts-modern'

/** The knowledge graph: every tooltip concept, keyed by id. */
export const CONCEPTS: Record<string, Concept> = Object.fromEntries(
  [...EARLY_CONCEPTS, ...MIDDLE_CONCEPTS, ...MODERN_CONCEPTS].map((c) => [c.id, c]),
)

export function getConcept(id: string): Concept | undefined {
  return CONCEPTS[id]
}
