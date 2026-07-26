import { MINDMAPS } from '../content/mindmaps'
import { renderRich } from '../engine/rich'

/** Rotating band colors for section headers — solid grounds with white text,
 *  legible on both themes. */
const BANDS = ['#7c2d2d', '#2c3e5d', '#3d6b4f', '#6b4a7c', '#8a5a2f', '#4a5568']

/**
 * "The chapter at a glance" — a one-board native mind map: numbered section
 * bands of tooltip-linked cells, a "links to remember" rail, and a closing
 * memory chain. Rendered from data in src/content/mindmaps/.
 */
export function MindMapBoard({ chapterId }: { chapterId: string }) {
  const map = MINDMAPS[chapterId]
  if (!map) return null

  return (
    <section className="mt-12 rounded-xl border-2 border-(--color-gilt)/50 bg-(--color-card) overflow-hidden">
      <header className="px-5 sm:px-6 pt-5 pb-4 text-center border-b border-(--color-gilt)/30 bg-(--color-gilt)/8">
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-(--color-gilt)">
          ❧ The chapter at a glance
        </div>
        <p className="prose-body text-[14.5px] text-(--color-ink-soft) mt-1.5 max-w-[560px] mx-auto">
          {renderRich(map.intro)}
        </p>
      </header>

      <div className="lg:grid lg:grid-cols-[1fr_236px]">
        {/* Section bands */}
        <div className="px-4 sm:px-5 py-4 space-y-5 min-w-0">
          {map.sections.map((sec, si) => {
            const band = BANDS[si % BANDS.length]
            return (
              <div key={si}>
                <div
                  className="flex items-center gap-2.5 rounded-md px-3 py-1.5 mb-2"
                  style={{ background: band }}
                >
                  <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white/20 text-white text-[11px] font-bold tabular-nums shrink-0">
                    {si + 1}
                  </span>
                  <span className="text-[11.5px] font-bold uppercase tracking-[0.13em] text-white">
                    {sec.title}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-2">
                  {sec.cells.map((cell, ci) => (
                    <div
                      key={ci}
                      className="rounded-md border border-(--color-ink)/12 bg-(--color-paper-deep)/50 px-3 py-2.5"
                      style={{ borderTop: `2.5px solid ${band}` }}
                    >
                      <div className="text-[12px] font-bold mb-0.5">{cell.h}</div>
                      <div className="text-[12.5px] leading-snug text-(--color-ink-soft)">
                        {renderRich(cell.x)}
                      </div>
                      {cell.cue && (
                        <div className="mt-1.5 text-[11.5px] italic text-(--color-gilt-ink)">
                          Cue: {renderRich(cell.cue)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Links to remember rail */}
        <aside className="border-t lg:border-t-0 lg:border-l border-(--color-gilt)/30 bg-(--color-gilt)/6 px-4 py-4">
          <div className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-(--color-gilt-ink) mb-3">
            The links to remember
          </div>
          <ol className="space-y-2.5">
            {map.keys.map((k, i) => (
              <li key={i} className="flex gap-2.5">
                <span className="mt-[1px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-(--color-gilt) text-white text-[11px] font-bold tabular-nums shrink-0">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <div className="text-[12.5px] font-bold leading-tight">{k.h}</div>
                  <div className="text-[12px] leading-snug text-(--color-ink-soft)">
                    {renderRich(k.x)}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      {map.chain && (
        <footer className="px-5 py-3 border-t border-(--color-gilt)/30 bg-(--color-gilt)/8 text-center">
          <span className="font-serif italic text-[14px] text-(--color-ink)">
            {renderRich(map.chain)}
          </span>
        </footer>
      )}
    </section>
  )
}
