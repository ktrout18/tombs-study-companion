import type { ReactNode } from 'react'
import { ConceptLink } from './tooltip/ConceptLink'

/**
 * Renders a Rich string into React nodes.
 * Syntax:
 *   {{concept-id|display text}}  → ConceptLink (nested tooltip trigger)
 *   **bold**                     → <strong>
 *   *italic*                     → <em>
 *
 * `ancestors` is the chain of concept ids above this text (empty for main
 * body text) — used for circular-reference prevention and depth capping.
 */
export function renderRich(
  text: string,
  ancestors: string[] = [],
  depth?: number,
): ReactNode[] {
  const out: ReactNode[] = []
  const conceptRe = /\{\{([a-z0-9-]+)\|([^}]+)\}\}/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = conceptRe.exec(text)) !== null) {
    if (m.index > last) out.push(...renderEmphasis(text.slice(last, m.index), k++))
    out.push(
      <ConceptLink key={`c${k++}`} conceptId={m[1]} ancestors={ancestors} depth={depth}>
        {renderEmphasis(m[2], 0)}
      </ConceptLink>,
    )
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(...renderEmphasis(text.slice(last), k++))
  return out
}

function renderEmphasis(text: string, keyBase: number): ReactNode[] {
  const out: ReactNode[] = []
  // **bold** first, then *italic* inside the remainder
  const re = /\*\*([^*]+)\*\*|\*([^*]+)\*/g
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index))
    if (m[1] !== undefined) {
      out.push(<strong key={`b${keyBase}-${i++}`}>{m[1]}</strong>)
    } else {
      out.push(<em key={`i${keyBase}-${i++}`}>{m[2]}</em>)
    }
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}
