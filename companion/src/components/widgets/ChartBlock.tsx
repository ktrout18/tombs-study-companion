import { useMemo, useState } from 'react'
import type { Block } from '../../types'
import { renderRich } from '../../engine/rich'

type ChartData = Extract<Block, { t: 'chart' }>

const PALETTE = ['var(--color-oxblood)', 'var(--color-navy)', 'var(--color-gilt)', '#3d8b5f', '#8a6ba8']

const W = 640
const H = 300
const PAD = { l: 56, r: 16, t: 14, b: 34 }

/** Data-driven SVG line/bar chart with hover readouts. */
export function ChartBlock({ block }: { block: ChartData }) {
  const [hover, setHover] = useState<{ x: number; y: number; label: string } | null>(null)

  const { xMin, xMax, yMax, xTicks, yTicks } = useMemo(() => {
    const xs = block.series.flatMap((s) => s.points.map((p) => p.x))
    const ys = block.series.flatMap((s) => s.points.map((p) => p.y))
    const xMin = Math.min(...xs)
    const xMax = Math.max(...xs)
    const yRaw = Math.max(...ys)
    const yMax = niceCeil(yRaw)
    const xTicks = ticks(xMin, xMax, 6).map(Math.round)
    const yTicks = ticks(0, yMax, 5)
    return { xMin, xMax, yMax, xTicks, yTicks }
  }, [block])

  const sx = (x: number) => PAD.l + ((x - xMin) / (xMax - xMin || 1)) * (W - PAD.l - PAD.r)
  const sy = (y: number) => H - PAD.b - (y / (yMax || 1)) * (H - PAD.t - PAD.b)

  return (
    <figure className="my-7 rounded-lg border border-(--color-ink)/12 bg-(--color-card) px-5 py-4">
      <figcaption className="text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-ink-soft) mb-1">
        {block.title}
        {block.unit && <span className="ml-2 font-normal normal-case tracking-normal">({block.unit})</span>}
      </figcaption>
      <div className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto select-none">
          {yTicks.map((t) => (
            <g key={t}>
              <line x1={PAD.l} x2={W - PAD.r} y1={sy(t)} y2={sy(t)} stroke="var(--color-ink)" strokeOpacity="0.08" />
              <text x={PAD.l - 8} y={sy(t) + 4} textAnchor="end" fontSize="11" fill="var(--color-ink-faint)">
                {fmt(t)}
              </text>
            </g>
          ))}
          {xTicks.map((t) => (
            <text key={t} x={sx(t)} y={H - PAD.b + 20} textAnchor="middle" fontSize="11" fill="var(--color-ink-faint)">
              {t}
            </text>
          ))}
          {block.series.map((s, si) => {
            const color = s.color ?? PALETTE[si % PALETTE.length]
            if (block.kind === 'bar') {
              const n = s.points.length
              const bw = Math.min(34, ((W - PAD.l - PAD.r) / Math.max(n, 1)) * 0.55)
              return (
                <g key={s.name}>
                  {s.points.map((p) => (
                    <rect
                      key={p.x}
                      x={sx(p.x) - bw / 2 + si * (bw / block.series.length) - (bw / 2) * (block.series.length - 1) / block.series.length}
                      y={sy(p.y)}
                      width={bw / block.series.length}
                      height={H - PAD.b - sy(p.y)}
                      fill={color}
                      opacity={0.85}
                      onMouseEnter={() => setHover({ x: sx(p.x), y: sy(p.y), label: `${s.name}, ${p.x}: ${fmt(p.y)}` })}
                      onMouseLeave={() => setHover(null)}
                    />
                  ))}
                </g>
              )
            }
            const d = s.points
              .map((p, i) => `${i === 0 ? 'M' : 'L'}${sx(p.x).toFixed(1)},${sy(p.y).toFixed(1)}`)
              .join(' ')
            return (
              <g key={s.name}>
                <path d={d} fill="none" stroke={color} strokeWidth="2.25" strokeLinejoin="round" />
                {s.points.map((p) => (
                  <circle
                    key={p.x}
                    cx={sx(p.x)}
                    cy={sy(p.y)}
                    r="7"
                    fill="transparent"
                    onMouseEnter={() => setHover({ x: sx(p.x), y: sy(p.y), label: `${s.name}, ${p.x}: ${fmt(p.y)}` })}
                    onMouseLeave={() => setHover(null)}
                  />
                ))}
              </g>
            )
          })}
          {hover && <circle cx={hover.x} cy={hover.y} r="4" fill="var(--color-ink)" />}
        </svg>
        {hover && (
          <div
            className="absolute pointer-events-none bg-(--color-tip) text-(--color-tip-text) text-[12px] rounded px-2 py-1 -translate-x-1/2 -translate-y-full whitespace-nowrap"
            style={{ left: `${(hover.x / W) * 100}%`, top: `${(hover.y / H) * 100 - 3}%` }}
          >
            {hover.label}
          </div>
        )}
      </div>
      {block.series.length > 1 && (
        <div className="flex flex-wrap gap-x-5 gap-y-1 mt-1">
          {block.series.map((s, si) => (
            <span key={s.name} className="flex items-center gap-1.5 text-[12px] text-(--color-ink-soft)">
              <span
                className="inline-block h-[3px] w-5 rounded"
                style={{ background: s.color ?? PALETTE[si % PALETTE.length] }}
              />
              {s.name}
            </span>
          ))}
        </div>
      )}
      {block.note && (
        <p className="mt-2 text-[12.5px] text-(--color-ink-faint) italic">{renderRich(block.note)}</p>
      )}
    </figure>
  )
}

function niceCeil(v: number): number {
  if (v <= 0) return 1
  const p = 10 ** Math.floor(Math.log10(v))
  for (const m of [1, 2, 2.5, 5, 10]) if (v <= m * p) return m * p
  return 10 * p
}

function ticks(min: number, max: number, n: number): number[] {
  const step = (max - min) / (n - 1)
  return Array.from({ length: n }, (_, i) => min + i * step)
}

function fmt(v: number): string {
  if (Math.abs(v) >= 1_000_000) return `${(v / 1_000_000).toFixed(v % 1_000_000 ? 1 : 0)}m`
  if (Math.abs(v) >= 10_000) return `${Math.round(v / 1000)}k`
  if (Math.abs(v) >= 1000) return `${(v / 1000).toFixed(1)}k`
  return `${Math.round(v * 100) / 100}`
}
