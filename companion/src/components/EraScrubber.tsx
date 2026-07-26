import { useNavigate } from 'react-router-dom'
import { CHAPTERS } from '../content/chapters'
import { PARTS } from '../content/structure'
import type { Chapter } from '../types'

/** Thin clickable timeline (600–2014) showing where the current chapter sits.
 *  Click a segment to jump to that part's first chapter. */

const SPAN: [number, number] = [600, 2014]

// Contiguous display bounds per part (the book's parts overlap slightly).
const PART_BOUNDS: Record<number, [number, number]> = {
  1: [600, 1204],
  2: [1204, 1500],
  3: [1500, 1700],
  4: [1700, 1815],
  5: [1815, 1918],
  6: [1918, 1945],
  7: [1945, 2014],
}

function pct(year: number): number {
  return ((year - SPAN[0]) / (SPAN[1] - SPAN[0])) * 100
}

/** First plausible year in an era string, e.g. "c.1200–1348" → 1200. */
function eraStart(chapter: Chapter): number | null {
  if (chapter.part === 0 || chapter.part === 8) return null
  const m = chapter.era.match(/\d{3,4}/)
  return m ? Number(m[0]) : null
}

export function EraScrubber({ chapter }: { chapter: Chapter }) {
  const nav = useNavigate()
  const marker = eraStart(chapter)

  // Front and back matter sit outside the timeline; no orphaned bar there.
  if (chapter.part === 0 || chapter.part === 8) return null

  return (
    <div className="hidden sm:block mb-8 select-none">
      <div className="relative h-[26px]">
        {/* the spine */}
        <div className="absolute left-0 right-0 top-[11px] h-[3px] rounded bg-(--color-ink)/12" />
        {Object.entries(PART_BOUNDS).map(([n, [a, b]]) => {
          const part = PARTS.find((p) => p.n === Number(n))!
          const first = CHAPTERS.find((c) => c.part === Number(n))
          const active = chapter.part === Number(n)
          return (
            <button
              key={n}
              type="button"
              aria-label={`Jump to ${part.title}`}
              title={`${part.title} (${part.era ?? ''})`}
              onClick={() => first && nav(`/c/${first.id}`)}
              className={`absolute top-[9px] h-[7px] rounded-sm transition-colors cursor-pointer ${
                active ? 'bg-(--color-oxblood)' : 'bg-(--color-ink)/18 hover:bg-(--color-oxblood)/55'
              }`}
              style={{ left: `${pct(a)}%`, width: `${pct(b) - pct(a)}%` }}
            />
          )
        })}
        {marker !== null && (
          <div
            className="absolute top-[2px] w-[2px] h-[21px] bg-(--color-gilt) rounded"
            style={{ left: `calc(${pct(Math.max(SPAN[0], Math.min(SPAN[1], marker)))}% - 1px)` }}
          />
        )}
      </div>
      <div className="relative h-[13px] text-[9.5px] tabular-nums text-(--color-ink-faint) tracking-wide">
        {[600, 1066, 1500, 1815, 2014].map((y) => (
          <span
            key={y}
            className="absolute"
            style={{
              left: `${pct(y)}%`,
              transform: y === 600 ? 'none' : y === 2014 ? 'translateX(-100%)' : 'translateX(-50%)',
            }}
          >
            {y}
          </span>
        ))}
      </div>
    </div>
  )
}
