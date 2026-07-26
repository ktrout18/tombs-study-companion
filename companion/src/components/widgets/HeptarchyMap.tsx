import { useState } from 'react'
import { renderRich } from '../../engine/rich'

/**
 * Schematic map of England, c.600 → c.1066. Three political snapshots on a
 * stylized (not survey-accurate) outline; a slider moves through time.
 */

interface Region {
  id: string
  name: string
  path: string
  labelXY: [number, number]
}

// Stylized region blobs on a 400x480 canvas (schematic geography).
const REGIONS: Region[] = [
  { id: 'northumbria', name: 'Northumbria', path: 'M150,40 L250,30 L280,80 L268,150 L190,170 L140,140 L135,80 Z', labelXY: [205, 100] },
  { id: 'mercia', name: 'Mercia', path: 'M140,170 L250,162 L268,240 L235,290 L150,295 L120,230 Z', labelXY: [193, 230] },
  { id: 'east-anglia', name: 'East Anglia', path: 'M268,180 L330,185 L345,235 L300,265 L262,240 Z', labelXY: [303, 222] },
  { id: 'essex', name: 'Essex', path: 'M262,265 L320,268 L325,300 L268,305 Z', labelXY: [293, 286] },
  { id: 'kent', name: 'Kent', path: 'M280,310 L345,308 L340,345 L285,342 Z', labelXY: [313, 328] },
  { id: 'sussex', name: 'Sussex', path: 'M215,330 L278,332 L275,362 L218,360 Z', labelXY: [246, 348] },
  { id: 'wessex', name: 'Wessex', path: 'M90,300 L212,298 L215,362 L150,395 L75,360 Z', labelXY: [148, 340] },
]

const STAGES = [
  {
    year: 'c.600',
    title: 'The Heptarchy',
    colors: {
      northumbria: '#8a5a2f', mercia: '#5a7d4f', 'east-anglia': '#7c5d8a',
      essex: '#a08a3f', kent: '#a06a4f', sussex: '#6a8a8a', wessex: '#7c2d2d',
    } as Record<string, string>,
    note: 'Seven-ish competing kingdoms — see {{heptarchy|the Heptarchy}}. Borders shifted constantly; this is a schematic snapshot.',
  },
  {
    year: 'c.886',
    title: 'Alfred and the Danelaw',
    colors: {
      northumbria: '#3d4a6b', mercia: '#3d4a6b', 'east-anglia': '#3d4a6b',
      essex: '#3d4a6b', kent: '#7c2d2d', sussex: '#7c2d2d', wessex: '#7c2d2d',
    } as Record<string, string>,
    split: { mercia: true },
    note: 'After the Great Heathen Army: Danish rule — {{danelaw|the Danelaw}} — northeast of Watling Street (blue); {{alfred-the-great|Alfred}}\'s realm (red) survives in the south. Mercia was split between them.',
  },
  {
    year: 'c.960',
    title: 'One England',
    colors: {
      northumbria: '#7c2d2d', mercia: '#7c2d2d', 'east-anglia': '#7c2d2d',
      essex: '#7c2d2d', kent: '#7c2d2d', sussex: '#7c2d2d', wessex: '#7c2d2d',
    } as Record<string, string>,
    note: 'The house of {{wessex|Wessex}} reconquers the Danelaw; {{athelstan|Æthelstan}} and his successors rule a single kingdom of England with {{shire|shires}}, one coinage, and the {{danegeld|geld}}.',
  },
]

export function HeptarchyMap() {
  const [stage, setStage] = useState(0)
  const [hovered, setHovered] = useState<string | null>(null)
  const s = STAGES[stage]

  return (
    <figure className="my-7 rounded-lg border border-(--color-ink)/12 bg-(--color-card) px-5 py-4">
      <figcaption className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-ink-soft)">
          Interactive · The making of England
        </span>
        <span className="text-[12px] font-bold text-(--color-oxblood) tabular-nums">
          {s.year} — {s.title}
        </span>
      </figcaption>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <svg viewBox="0 0 400 480" className="w-full max-w-[300px] h-auto shrink-0">
          {/* sea */}
          <rect x="0" y="0" width="400" height="480" rx="10" fill="var(--color-sea)" />
          {/* Wales / Scotland hints */}
          <path d="M60,180 L120,175 L125,290 L85,295 L55,240 Z" fill="var(--color-land)" />
          <path d="M130,10 L260,5 L255,28 L145,38 Z" fill="var(--color-land)" />
          <text x="88" y="240" fontSize="11" fill="var(--color-ink-faint)" textAnchor="middle" transform="rotate(-70 88 240)">WALES</text>
          <text x="196" y="22" fontSize="11" fill="var(--color-ink-faint)" textAnchor="middle">SCOTLAND (Alba)</text>

          {REGIONS.map((r) => {
            const fill = s.colors[r.id]
            const isHover = hovered === r.id
            return (
              <g key={r.id}>
                <path
                  d={r.path}
                  fill={fill}
                  opacity={isHover ? 1 : 0.82}
                  stroke="var(--color-paper)"
                  strokeWidth="2.5"
                  className="cursor-pointer transition-opacity"
                  onMouseEnter={() => setHovered(r.id)}
                  onMouseLeave={() => setHovered(null)}
                />
                <text
                  x={r.labelXY[0]}
                  y={r.labelXY[1]}
                  textAnchor="middle"
                  fontSize="11.5"
                  fontWeight="700"
                  fill="#ffffff"
                  pointerEvents="none"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
                >
                  {r.name}
                </text>
              </g>
            )
          })}
          {/* Watling Street on the Danelaw stage */}
          {stage === 1 && (
            <g>
              <line x1="285" y1="300" x2="128" y2="185" stroke="var(--color-paper)" strokeWidth="3" strokeDasharray="7 5" />
              <text x="175" y="255" fontSize="10.5" fill="var(--color-ink)" transform="rotate(-36 175 255)" fontWeight="600">
                Watling Street
              </text>
            </g>
          )}
        </svg>

        <div className="flex-1 min-w-0 w-full">
          <input
            type="range"
            min={0}
            max={STAGES.length - 1}
            step={1}
            value={stage}
            onChange={(e) => setStage(Number(e.target.value))}
            className="w-full accent-(--color-oxblood)"
            aria-label="Time period"
          />
          <div className="flex justify-between text-[11px] text-(--color-ink-faint) tabular-nums mb-3">
            {STAGES.map((st, i) => (
              <button
                key={st.year}
                type="button"
                onClick={() => setStage(i)}
                className={`hover:text-(--color-oxblood) ${i === stage ? 'font-bold text-(--color-oxblood)' : ''}`}
              >
                {st.year}
              </button>
            ))}
          </div>
          <p className="prose-body text-[14.5px] leading-relaxed">{renderRich(s.note)}</p>
          {hovered && (
            <p className="mt-2 text-[12.5px] text-(--color-ink-faint)">
              Hovering: <strong>{REGIONS.find((r) => r.id === hovered)?.name}</strong>
            </p>
          )}
          <p className="mt-3 text-[11px] text-(--color-ink-faint) italic">
            Schematic map — boundaries simplified and shifting in reality.
          </p>
        </div>
      </div>
    </figure>
  )
}
