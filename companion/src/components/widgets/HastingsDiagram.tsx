import { useState } from 'react'
import { renderRich } from '../../engine/rich'

/** Schematic phase-by-phase diagram of the Battle of Hastings, 14 Oct 1066. */

interface Phase {
  label: string
  note: string
  /** English shield-wall integrity, 0–1, drawn as gaps in the line */
  wall: number
  arrows: boolean
  cavalryUp: boolean
  chase: boolean
}

const PHASES: Phase[] = [
  {
    label: '1 · Morning — the wall holds',
    note: 'Harold\'s army — housecarls with axes, shire levies — stands shield-to-shield on Senlac ridge. Norman archers, infantry, then cavalry attack uphill and fail. On this formation, {{norman-conquest|the Conquest}} nearly died at birth.',
    wall: 1, arrows: false, cavalryUp: true, chase: false,
  },
  {
    label: '2 · The feigned retreats',
    note: 'Part of {{william-conqueror|William}}\'s line breaks — real panic at first, then repeated as theatre. Levies stream downhill after the "fleeing" knights, who wheel and destroy them in the open. The wall thins with each rush.',
    wall: 0.7, arrows: false, cavalryUp: false, chase: true,
  },
  {
    label: '3 · Dusk — arrows, then the break',
    note: 'High-arcing volleys fall behind the shields; cavalry and infantry strike the gaps together. Harold falls — by arrow, by blades, or both, the sources differ — and the wall dissolves in the dark. England has a new future by nightfall.',
    wall: 0.3, arrows: true, cavalryUp: true, chase: false,
  },
]

export function HastingsDiagram() {
  const [pi, setPi] = useState(0)
  const p = PHASES[pi]

  const wallSegments = 11
  const gone = Math.round((1 - p.wall) * wallSegments)

  return (
    <figure className="my-7 rounded-lg border border-(--color-ink)/12 bg-(--color-card) px-5 py-4">
      <figcaption className="text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-ink-soft) mb-3">
        Interactive · Hastings, 14 October 1066 — one day, three phases
      </figcaption>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {PHASES.map((ph, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setPi(i)}
            className={`rounded-full px-3 py-1.5 text-[12px] font-semibold transition-colors cursor-pointer ${
              i === pi
                ? 'bg-(--color-oxblood) text-white'
                : 'bg-(--color-ink)/6 text-(--color-ink-soft) hover:bg-(--color-ink)/12'
            }`}
          >
            {ph.label}
          </button>
        ))}
      </div>

      <svg viewBox="0 0 620 250" className="w-full h-auto select-none">
        {/* the ridge */}
        <path d="M20,95 Q310,55 600,95 L600,110 Q310,70 20,110 Z" fill="var(--color-ink)" opacity="0.09" />
        <text x="310" y="46" textAnchor="middle" fontSize="11" fill="var(--color-ink-faint)">
          Senlac ridge — English shield wall
        </text>

        {/* shield wall segments */}
        {Array.from({ length: wallSegments }, (_, i) => {
          const missing = p.wall < 1 && (i % 2 === 1 ? i / 2 < gone : false) // thin from odd slots
          const x = 60 + i * 47
          const y = 78 - Math.sin((i / (wallSegments - 1)) * Math.PI) * 16
          return missing ? null : (
            <rect key={i} x={x - 14} y={y} width="28" height="15" rx="3"
              fill="var(--color-oxblood)" opacity="0.92" />
          )
        })}
        {/* Harold marker */}
        {pi < 2 ? (
          <text x="310" y="72" textAnchor="middle" fontSize="13" fill="var(--color-ink)">⚑</text>
        ) : (
          <text x="310" y="72" textAnchor="middle" fontSize="12" fill="var(--color-oxblood-deep)">✕</text>
        )}

        {/* arrows */}
        {p.arrows &&
          [150, 250, 350, 450].map((x) => (
            <path key={x} d={`M${x},200 Q${x + 40},90 ${x + 55},92`} fill="none"
              stroke="var(--color-gilt)" strokeWidth="1.75" strokeDasharray="5 4" markerEnd="none" />
          ))}

        {/* Norman lines */}
        <text x="310" y="238" textAnchor="middle" fontSize="11" fill="var(--color-ink-faint)">
          Norman army — archers · infantry · cavalry
        </text>
        {Array.from({ length: 9 }, (_, i) => {
          const x = 90 + i * 55
          const y = p.cavalryUp ? 150 : 185
          return (
            <g key={i}>
              <circle cx={x} cy={y + 30} r="7" fill="var(--color-navy)" opacity="0.85" />
              {p.cavalryUp && (
                <path d={`M${x},${y + 20} L${x + (i % 2 ? 8 : -8)},${y - 22}`} stroke="var(--color-navy)"
                  strokeWidth="2" markerEnd="none" opacity="0.6" />
              )}
            </g>
          )
        })}

        {/* feigned retreat chase */}
        {p.chase && (
          <g>
            <path d="M180,95 C160,140 140,165 110,190" fill="none" stroke="var(--color-oxblood)" strokeWidth="2.25" strokeDasharray="6 4" />
            <path d="M440,95 C465,140 490,165 520,190" fill="none" stroke="var(--color-oxblood)" strokeWidth="2.25" strokeDasharray="6 4" />
            <text x="310" y="165" textAnchor="middle" fontSize="10.5" fill="var(--color-oxblood)">
              levies chase the "fleeing" knights downhill — and die there
            </text>
          </g>
        )}
      </svg>

      <p className="prose-body text-[14.5px] leading-relaxed bg-(--color-paper-deep)/70 rounded-md px-4 py-3 mt-1">
        {renderRich(p.note)}
      </p>
      <p className="mt-2 text-[11px] text-(--color-ink-faint) italic">
        Schematic — positions and numbers are illustrative, as the sources allow no more.
      </p>
    </figure>
  )
}
