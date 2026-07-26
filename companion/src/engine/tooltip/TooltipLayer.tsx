import { useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { getConcept } from '../../content/concepts'
import { renderRich } from '../rich'
import { useTooltips, type TipEntry } from './TooltipContext'

const CARD_W = 360
const GAP = 10
const EDGE = 8

const CATEGORY_LABEL: Record<string, string> = {
  people: 'Person',
  events: 'Event',
  institutions: 'Institution',
  ideas: 'Idea',
  places: 'Place',
  terms: 'Term',
}

const CATEGORY_GLYPH: Record<string, string> = {
  people: '♛',
  events: '⚔',
  institutions: '⚖',
  ideas: '✦',
  places: '⌖',
  terms: '❧',
}

export function TooltipLayer() {
  const tips = useTooltips()
  if (tips.stack.length === 0) return null
  return createPortal(
    <div className="fixed inset-0 z-50 pointer-events-none">
      {tips.stack.map((entry, i) => (
        <TooltipCard
          key={entry.key}
          entry={entry}
          ancestors={tips.stack.slice(0, i).map((e) => e.conceptId)}
        />
      ))}
    </div>,
    document.body,
  )
}

function TooltipCard({ entry, ancestors }: { entry: TipEntry; ancestors: string[] }) {
  const tips = useTooltips()
  const ref = useRef<HTMLDivElement>(null)
  const concept = getConcept(entry.conceptId)

  // Measure and position once mounted. Children sit beside their parent card;
  // the root sits below (or above) its anchor. Never cover the anchor text.
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || entry.pos) return
    const vw = window.innerWidth
    const vh = window.innerHeight
    const h = el.offsetHeight
    const w = el.offsetWidth
    const a = entry.anchorRect
    let left: number
    let top: number
    if (entry.depth === 0) {
      left = Math.min(Math.max(a.left, EDGE), vw - w - EDGE)
      top = a.bottom + GAP
      if (top + h > vh - EDGE) {
        top = a.top - h - GAP
        if (top < EDGE) top = Math.max(EDGE, vh - h - EDGE)
      }
    } else {
      const parentEl = tips.getCardEl(tips.stack[entry.depth - 1]?.key ?? -1)
      const p = parentEl?.getBoundingClientRect()
      const fitsRight = !!p && p.right + GAP + w <= vw - EDGE
      const fitsLeft = !!p && p.left - GAP - w >= EDGE
      if (p && (fitsRight || fitsLeft)) {
        left = fitsRight ? p.right + GAP : p.left - w - GAP
        top = Math.min(Math.max(a.top - 8, EDGE), Math.max(EDGE, vh - h - EDGE))
      } else {
        // No room beside the parent (narrow viewport): stack below or above
        // the trigger link instead, so the child never covers it.
        left = Math.min(Math.max(a.left, EDGE), vw - w - EDGE)
        top = a.bottom + GAP
        if (top + h > vh - EDGE) top = a.top - h - GAP
        if (top < EDGE) top = Math.max(EDGE, vh - h - EDGE)
      }
    }
    tips.setCardPos(entry.key, { left, top })
  }, [entry, tips])

  useLayoutEffect(() => {
    tips.registerCardEl(entry.key, ref.current)
    return () => tips.registerCardEl(entry.key, null)
  }, [entry.key, tips])

  if (!concept) return null

  return (
    <div
      ref={ref}
      className={`tooltip-card absolute flex flex-col ${entry.locked ? 'is-locked' : ''}`}
      style={{
        width: CARD_W,
        maxWidth: 'calc(100vw - 16px)',
        left: entry.pos?.left ?? 0,
        top: entry.pos?.top ?? 0,
        visibility: entry.pos ? 'visible' : 'hidden',
        pointerEvents: entry.locked ? 'auto' : 'none',
      }}
    >
      {/* Lock progress indicator */}
      <div className="h-[3px] rounded-t-[7px] overflow-hidden bg-white/5">
        <div
          className="h-full bg-(--color-gilt) transition-[width] duration-75"
          style={{ width: `${Math.round(entry.progress * 100)}%` }}
        />
      </div>
      <div className="px-4 pt-2.5 pb-1.5 flex items-baseline gap-2 border-b border-white/10">
        <span className="font-semibold text-[15px] tracking-tight">{concept.term}</span>
        {concept.era && (
          <span className="text-[11px] text-white/45 whitespace-nowrap">{concept.era}</span>
        )}
        <span className="ml-auto text-[10px] uppercase tracking-widest text-(--color-gilt)/90">
          <span className="mr-1">{CATEGORY_GLYPH[concept.category]}</span>
          {CATEGORY_LABEL[concept.category]}
        </span>
      </div>
      <div className="tooltip-scroll px-4 py-2.5 space-y-2 overflow-y-auto max-h-[280px] text-[13.5px] leading-relaxed">
        {concept.body.map((para, i) => (
          <p key={i}>{renderRich(para, [...ancestors, concept.id])}</p>
        ))}
      </div>
      <div className="px-4 pb-2 pt-0.5 text-[10.5px] text-white/35 flex justify-between">
        <span>{entry.locked ? 'pinned' : 'hold still to pin'}</span>
        <span>Esc closes</span>
      </div>
    </div>
  )
}
