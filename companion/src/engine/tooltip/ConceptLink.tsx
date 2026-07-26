import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { getConcept } from '../../content/concepts'
import { MAX_DEPTH, OPEN_DELAY_MS, useTooltips } from './TooltipContext'

interface Props {
  conceptId: string
  /** Concept ids this link must not reopen (circular guard), outermost first. */
  ancestors: string[]
  /** Stack depth this link opens at. Defaults to ancestors.length — override
   *  where the guard chain is not the tooltip chain (e.g. Concept Library). */
  depth?: number
  children: ReactNode
}

/**
 * A hoverable term in the text. Hovering for OPEN_DELAY_MS opens the concept
 * tooltip at this link's depth. Links whose concept is already open higher in
 * the chain (circular reference) or that sit at the depth cap render inert.
 */
export function ConceptLink({ conceptId, ancestors, depth: depthProp, children }: Props) {
  const tips = useTooltips()
  const ref = useRef<HTMLSpanElement>(null)
  const timer = useRef<number | null>(null)
  const depth = depthProp ?? ancestors.length

  const concept = getConcept(conceptId)
  const circular = ancestors.includes(conceptId)
  const inert = !concept || circular || depth >= MAX_DEPTH

  const isOpen = tips.stack[depth]?.conceptId === conceptId

  // While this link's tooltip is open, the link keeps the chain alive.
  useEffect(() => {
    if (!isOpen || !ref.current) return
    return tips.registerChainEl(ref.current)
  }, [isOpen, tips])

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current)
    },
    [],
  )

  if (inert) {
    if (import.meta.env.DEV && !concept) {
      console.warn(`Unknown concept id: ${conceptId}`)
    }
    return <span className="concept-link is-inert">{children}</span>
  }

  const clearPending = () => {
    if (timer.current) {
      window.clearTimeout(timer.current)
      timer.current = null
    }
  }

  return (
    <span
      ref={ref}
      className={`concept-link ${isOpen ? 'is-open' : ''}`}
      onMouseEnter={() => {
        clearPending()
        timer.current = window.setTimeout(() => {
          if (ref.current) tips.open(conceptId, depth, ref.current)
        }, OPEN_DELAY_MS)
      }}
      onMouseLeave={clearPending}
      onClick={(e) => {
        // Touch / click path: open immediately, already locked.
        e.stopPropagation()
        clearPending()
        if (ref.current) {
          if (isOpen) tips.closeAll()
          else tips.openLocked(conceptId, depth, ref.current)
        }
      }}
    >
      {children}
    </span>
  )
}
