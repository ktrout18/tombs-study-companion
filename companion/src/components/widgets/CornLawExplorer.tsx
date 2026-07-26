import { useState } from 'react'
import { renderRich } from '../../engine/rich'

/** The price of bread as politics: wheat prices under and after the Corn
 *  Laws, with the story told point by point. Figures approximate. */

interface Point {
  year: number
  price: number // shillings per quarter of wheat, rough annual average
  note?: string
}

const POINTS: Point[] = [
  { year: 1815, price: 66, note: 'The Corn Law passes: no imports until wheat hits 80s. Landlords protected, bread dear, riots outside Parliament.' },
  { year: 1817, price: 97, note: 'Post-war dearth: prices near famine level. The law\'s cruelty is now arithmetic on every table.' },
  { year: 1822, price: 45 },
  { year: 1829, price: 66 },
  { year: 1835, price: 39, note: 'Good harvests, cheap bread, quiet politics — protection\'s defenders relax.' },
  { year: 1839, price: 70, note: 'Bad harvests return; the Anti-Corn Law League founds its case on hunger and {{free-trade|free trade}}.' },
  { year: 1846, price: 54, note: 'Repeal, under the shadow of the {{irish-famine|Irish Famine}}. Peel splits his party to pass it.' },
  { year: 1850, price: 40, note: 'After repeal: cheaper, steadier bread. {{free-trade|Free trade}} becomes the Victorian creed.' },
  { year: 1860, price: 53 },
  { year: 1870, price: 47 },
  { year: 1880, price: 44, note: 'American prairie wheat floods in; English arable farming begins its long decline — the price paid for cheap loaves.' },
]

const W = 620
const H = 250
const PAD = { l: 44, r: 16, t: 18, b: 30 }
const Y_MAX = 100

export function CornLawExplorer() {
  const [sel, setSel] = useState(0)
  const stops = POINTS.map((p, i) => ({ ...p, i })).filter((p) => p.note)
  const active = POINTS[sel]

  const sx = (x: number) => PAD.l + ((x - 1815) / (1880 - 1815)) * (W - PAD.l - PAD.r)
  const sy = (y: number) => H - PAD.b - (y / Y_MAX) * (H - PAD.t - PAD.b)
  const d = POINTS.map((p, i) => `${i === 0 ? 'M' : 'L'}${sx(p.year)},${sy(p.price)}`).join(' ')

  return (
    <figure className="my-7 rounded-lg border border-(--color-ink)/12 bg-(--color-card) px-5 py-4">
      <figcaption className="text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-ink-soft) mb-2">
        Interactive · The price of a loaf: wheat under and after the Corn Laws
      </figcaption>
      <div className="text-[11.5px] text-(--color-ink-faint) mb-2">
        Shillings per quarter of wheat (annual averages, approximate). Click a marked year.
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto select-none">
        {[0, 25, 50, 75, 100].map((v) => (
          <g key={v}>
            <line x1={PAD.l} x2={W - PAD.r} y1={sy(v)} y2={sy(v)} stroke="var(--color-ink)" strokeOpacity="0.08" />
            <text x={PAD.l - 7} y={sy(v) + 4} textAnchor="end" fontSize="10.5" fill="var(--color-ink-faint)">
              {v}s
            </text>
          </g>
        ))}
        {/* repeal divider */}
        <line x1={sx(1846)} x2={sx(1846)} y1={PAD.t} y2={H - PAD.b} stroke="var(--color-gilt)" strokeWidth="1.5" strokeDasharray="5 4" />
        <text x={sx(1846) + 5} y={PAD.t + 10} fontSize="10" fill="var(--color-gilt)" fontWeight="700">
          REPEAL 1846
        </text>
        <path d={d} fill="none" stroke="var(--color-oxblood)" strokeWidth="2.5" strokeLinejoin="round" />
        {POINTS.map((p, i) => (
          <g key={p.year}>
            <circle
              cx={sx(p.year)} cy={sy(p.price)} r={p.note ? 6 : 3}
              fill={i === sel ? 'var(--color-gilt)' : 'var(--color-oxblood)'}
              stroke={p.note ? 'var(--color-paper)' : 'none'}
              strokeWidth="1.5"
              className={p.note ? 'cursor-pointer' : ''}
              onClick={() => p.note && setSel(i)}
            />
            <text x={sx(p.year)} y={H - PAD.b + 18} textAnchor="middle" fontSize="10" fill="var(--color-ink-faint)">
              {p.year}
            </text>
          </g>
        ))}
      </svg>

      <div className="bg-(--color-paper-deep)/70 rounded-md px-4 py-3 mt-1">
        <div className="text-[13px] font-bold mb-0.5 tabular-nums">
          {active.year} — about {active.price}s a quarter
        </div>
        {active.note && (
          <p className="prose-body text-[14.5px] leading-relaxed">{renderRich(active.note)}</p>
        )}
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {stops.map((s) => (
          <button
            key={s.year}
            type="button"
            onClick={() => setSel(s.i)}
            className={`rounded-full px-2.5 py-1 text-[11.5px] font-semibold tabular-nums transition-colors cursor-pointer ${
              s.i === sel
                ? 'bg-(--color-oxblood) text-white'
                : 'bg-(--color-ink)/6 text-(--color-ink-soft) hover:bg-(--color-ink)/12'
            }`}
          >
            {s.year}
          </button>
        ))}
      </div>
      <p className="mt-2 text-[11px] text-(--color-ink-faint) italic">
        A "quarter" is 480 lb of wheat; prices rounded from standard historical series.
      </p>
    </figure>
  )
}
