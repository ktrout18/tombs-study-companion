import { useState } from 'react'
import { renderRich } from '../../engine/rich'

/**
 * The declinism test: the same century of British economic history viewed
 * two ways — relative share (the declinist chart) v. absolute prosperity
 * (Tombs' rejoinder). Toggle between them.
 */

const RELATIVE = {
  title: 'UK share of world manufacturing output (%)',
  unit: '% of world total',
  points: [
    { x: 1880, y: 23 }, { x: 1900, y: 18 }, { x: 1913, y: 14 },
    { x: 1938, y: 11 }, { x: 1953, y: 8.5 }, { x: 1973, y: 4.9 }, { x: 2000, y: 3.5 },
  ],
  note: 'The chart {{declinism|declinists}} reach for: from workshop of the world to a few percent. True — and, Tombs argues, mostly arithmetic: the US, Germany, Japan, then Asia industrialized. No policy could have kept a mid-sized island at 23% of world industry.',
}

const ABSOLUTE = {
  title: 'UK real GDP per person (index, 1880 = 100)',
  unit: 'index, 1880 = 100',
  points: [
    { x: 1880, y: 100 }, { x: 1900, y: 122 }, { x: 1913, y: 134 },
    { x: 1938, y: 165 }, { x: 1953, y: 197 }, { x: 1973, y: 316 }, { x: 2000, y: 481 },
  ],
  note: 'The same century, measured by how the English actually lived: roughly five times richer per head by 2000, with the fastest gains in the supposedly dismal postwar decades. Both charts are true; only one gets quoted. That gap is the {{declinism|declinist}} illusion.',
}

const W = 620
const H = 260
const PAD = { l: 46, r: 18, t: 16, b: 30 }

export function DeclineExplorer() {
  const [mode, setMode] = useState<'relative' | 'absolute'>('relative')
  const data = mode === 'relative' ? RELATIVE : ABSOLUTE
  const yMax = mode === 'relative' ? 25 : 500
  const xMin = 1880
  const xMax = 2000

  const sx = (x: number) => PAD.l + ((x - xMin) / (xMax - xMin)) * (W - PAD.l - PAD.r)
  const sy = (y: number) => H - PAD.b - (y / yMax) * (H - PAD.t - PAD.b)
  const d = data.points.map((p, i) => `${i === 0 ? 'M' : 'L'}${sx(p.x)},${sy(p.y)}`).join(' ')

  return (
    <figure className="my-7 rounded-lg border border-(--color-ink)/12 bg-(--color-card) px-5 py-4">
      <figcaption className="text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-ink-soft) mb-3">
        Interactive · Was there really a decline?
      </figcaption>

      <div className="flex gap-1.5 mb-3">
        <button
          type="button"
          onClick={() => setMode('relative')}
          className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors ${
            mode === 'relative' ? 'bg-(--color-oxblood) text-white' : 'bg-(--color-ink)/6 text-(--color-ink-soft) hover:bg-(--color-ink)/12'
          }`}
        >
          The declinist chart
        </button>
        <button
          type="button"
          onClick={() => setMode('absolute')}
          className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors ${
            mode === 'absolute' ? 'bg-(--color-navy) text-white' : 'bg-(--color-ink)/6 text-(--color-ink-soft) hover:bg-(--color-ink)/12'
          }`}
        >
          The other chart
        </button>
      </div>

      <div className="text-[12.5px] font-semibold text-(--color-ink-soft) mb-1">{data.title}</div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto select-none">
        {[0, 0.25, 0.5, 0.75, 1].map((f) => (
          <g key={f}>
            <line x1={PAD.l} x2={W - PAD.r} y1={sy(yMax * f)} y2={sy(yMax * f)} stroke="var(--color-ink)" strokeOpacity="0.08" />
            <text x={PAD.l - 7} y={sy(yMax * f) + 4} textAnchor="end" fontSize="10.5" fill="var(--color-ink-faint)">
              {Math.round(yMax * f)}
            </text>
          </g>
        ))}
        {data.points.map((p) => (
          <text key={p.x} x={sx(p.x)} y={H - PAD.b + 18} textAnchor="middle" fontSize="10.5" fill="var(--color-ink-faint)">
            {p.x}
          </text>
        ))}
        <path d={d} fill="none" stroke={mode === 'relative' ? 'var(--color-oxblood)' : 'var(--color-navy)'} strokeWidth="2.5" strokeLinejoin="round" />
        {data.points.map((p) => (
          <circle key={p.x} cx={sx(p.x)} cy={sy(p.y)} r="3.5" fill={mode === 'relative' ? 'var(--color-oxblood)' : 'var(--color-navy)'} />
        ))}
      </svg>

      <p className="prose-body text-[14.5px] leading-relaxed bg-(--color-paper-deep)/70 rounded-md px-4 py-3 mt-2">
        {renderRich(data.note)}
      </p>
      <p className="mt-2 text-[11px] text-(--color-ink-faint) italic">
        Indicative figures assembled from standard historical estimates (Bairoch; Maddison-style series), rounded.
      </p>
    </figure>
  )
}
