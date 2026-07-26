import { useMemo, useState } from 'react'
import type { TimelineEvent } from '../../types'
import { renderRich } from '../../engine/rich'

/** Vertical timeline with expandable events, plus an ordering game:
 *  shuffle the events, reorder them, check against history. */
export function TimelineBlock({ title, events }: { title?: string; events: TimelineEvent[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [mode, setMode] = useState<'read' | 'game'>('read')

  return (
    <figure className="my-7 rounded-lg border border-(--color-ink)/12 bg-(--color-card) px-5 py-4">
      <figcaption className="flex items-baseline justify-between gap-3 mb-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-ink-soft)">
          {title ?? 'Timeline'}
        </span>
        {events.length >= 4 && (
          <button
            type="button"
            onClick={() => setMode(mode === 'read' ? 'game' : 'read')}
            className="text-[11.5px] font-semibold text-(--color-navy) hover:underline cursor-pointer"
          >
            {mode === 'read' ? 'Shuffle & test yourself' : '← Back to timeline'}
          </button>
        )}
      </figcaption>

      {mode === 'read' ? (
        <ol className="relative ml-1 border-l-2 border-(--color-oxblood)/25">
          {events.map((ev, i) => {
            const open = openIdx === i
            const expandable = !!ev.detail
            return (
              <li key={i} className="relative pl-5 pb-3 last:pb-0">
                <span className="absolute -left-[5.5px] top-[7px] h-2 w-2 rounded-full bg-(--color-oxblood)" />
                <button
                  type="button"
                  className={`text-left w-full group ${expandable ? 'cursor-pointer' : 'cursor-default'}`}
                  onClick={() => expandable && setOpenIdx(open ? null : i)}
                >
                  <span className="font-sans text-[12.5px] font-bold text-(--color-oxblood) tabular-nums mr-2.5">
                    {ev.year}
                  </span>
                  <span className="prose-body text-[15.5px]">{renderRich(ev.label)}</span>
                  {expandable && (
                    <span
                      className={`ml-2 inline-block text-[10px] text-(--color-ink-faint) transition-transform ${open ? 'rotate-90' : ''}`}
                    >
                      ▸
                    </span>
                  )}
                </button>
                {open && ev.detail && (
                  <p className="prose-body text-[14.5px] mt-1.5 mb-1 text-(--color-ink-soft) bg-(--color-paper-deep)/70 rounded-md px-3.5 py-2.5">
                    {renderRich(ev.detail)}
                  </p>
                )}
              </li>
            )
          })}
        </ol>
      ) : (
        <OrderGame events={events} />
      )}
    </figure>
  )
}

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function OrderGame({ events }: { events: TimelineEvent[] }) {
  // Work with indices into the original (correct) order.
  const [order, setOrder] = useState<number[]>(() => {
    let s = shuffled(events.map((_, i) => i))
    // Ensure the shuffle actually shuffled
    while (s.every((v, i) => v === i) && events.length > 1) s = shuffled(s)
    return s
  })
  const [checked, setChecked] = useState(false)

  // Grade by year, not index — events sharing a year accept either order.
  const correctAt = (pos: number) => events[order[pos]].year === events[pos].year
  const correctCount = useMemo(
    () => order.filter((_, i) => events[order[i]].year === events[i].year).length,
    [order, events],
  )

  const move = (pos: number, dir: -1 | 1) => {
    const next = [...order]
    const swap = pos + dir
    if (swap < 0 || swap >= next.length) return
    ;[next[pos], next[swap]] = [next[swap], next[pos]]
    setOrder(next)
    setChecked(false)
  }

  return (
    <div>
      <p className="text-[12.5px] text-(--color-ink-soft) mb-3">
        Put the events in order — earliest first. Years are hidden until you check.
      </p>
      <ol className="space-y-1.5">
        {order.map((evIdx, pos) => {
          const ev = events[evIdx]
          const right = checked && correctAt(pos)
          const wrong = checked && !correctAt(pos)
          return (
            <li
              key={evIdx}
              className={`flex items-center gap-2 rounded-md border px-3 py-2 ${
                right
                  ? 'border-green-700 bg-green-700/10'
                  : wrong
                    ? 'border-(--color-oxblood) bg-(--color-oxblood)/8'
                    : 'border-(--color-ink)/15 bg-(--color-paper-deep)/50'
              }`}
            >
              <div className="flex flex-col gap-0.5">
                <button
                  type="button"
                  onClick={() => move(pos, -1)}
                  disabled={pos === 0}
                  className="text-[11px] leading-none px-1 py-0.5 rounded hover:bg-(--color-ink)/10 disabled:opacity-25 cursor-pointer"
                  aria-label="Move up"
                >
                  ▲
                </button>
                <button
                  type="button"
                  onClick={() => move(pos, 1)}
                  disabled={pos === order.length - 1}
                  className="text-[11px] leading-none px-1 py-0.5 rounded hover:bg-(--color-ink)/10 disabled:opacity-25 cursor-pointer"
                  aria-label="Move down"
                >
                  ▼
                </button>
              </div>
              <span className="prose-body text-[14.5px] flex-1">{renderRich(ev.label)}</span>
              {checked && (
                <span className="font-sans text-[12px] font-bold tabular-nums text-(--color-oxblood)">
                  {right ? ev.year : ''}
                </span>
              )}
            </li>
          )
        })}
      </ol>
      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setChecked(true)}
          className="rounded-md bg-(--color-navy) text-white px-4 py-2 text-[13px] font-semibold hover:opacity-90 cursor-pointer"
        >
          Check order
        </button>
        {checked && (
          <span className="text-[13px] text-(--color-ink-soft) tabular-nums">
            {correctCount}/{order.length} in place
            {correctCount === order.length ? ' — perfect.' : ''}
          </span>
        )}
      </div>
    </div>
  )
}
