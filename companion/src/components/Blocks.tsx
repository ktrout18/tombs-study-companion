import type { Block } from '../types'
import { renderRich } from '../engine/rich'
import { TimelineBlock } from './widgets/TimelineBlock'
import { ChartBlock } from './widgets/ChartBlock'
import { WIDGETS } from './widgets/registry'

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <BlockView key={i} b={b} />
      ))}
    </>
  )
}

function BlockView({ b }: { b: Block }) {
  switch (b.t) {
    case 'p':
      return <p className="prose-body mb-5">{renderRich(b.x)}</p>

    case 'h':
      return (
        <h2 className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-(--color-oxblood) mt-10 mb-4 flex items-center gap-3">
          <span>{b.x}</span>
          <span className="h-px flex-1 bg-(--color-oxblood)/20" />
        </h2>
      )

    case 'argument':
      return (
        <aside className="my-6 border-l-[3px] border-(--color-navy) bg-(--color-navy)/[0.06] rounded-r-lg px-5 py-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-navy) mb-1.5">
            {b.title ?? "Tombs' argument"}
          </div>
          <p className="prose-body text-[1rem] leading-relaxed">{renderRich(b.x)}</p>
        </aside>
      )

    case 'voice':
      return (
        <aside className="my-6 rounded-lg border border-(--color-gilt)/45 bg-(--color-gilt)/8 px-5 py-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-(--color-gilt) mb-1.5">
            ❧ A voice from the time
          </div>
          <p className="font-serif italic text-[16.5px] leading-relaxed">{renderRich(b.x)}</p>
          <div className="mt-2 text-[12px] text-(--color-ink-soft)">— {b.source}</div>
        </aside>
      )

    case 'reading':
      return (
        <details className="reading group my-6 rounded-lg border border-(--color-gilt)/40 bg-(--color-paper-deep)/60 overflow-hidden">
          <summary className="cursor-pointer select-none px-5 py-3.5 flex items-center gap-3 hover:bg-(--color-gilt)/10 transition-colors">
            <span className="text-(--color-gilt) transition-transform duration-200 group-open:rotate-90">▸</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-gilt)">
              Go deeper
            </span>
            <span className="font-serif italic text-[15px] text-(--color-ink-soft)">{b.title}</span>
          </summary>
          <div className="px-5 pb-4 pt-1 border-t border-(--color-gilt)/20">
            <Blocks blocks={b.blocks} />
          </div>
        </details>
      )

    case 'timeline':
      return <TimelineBlock title={b.title} events={b.events} />

    case 'chart':
      return <ChartBlock block={b} />

    case 'widget': {
      const W = WIDGETS[b.id]
      if (!W) {
        if (import.meta.env.DEV) console.warn(`Unknown widget: ${b.id}`)
        return null
      }
      return <W />
    }
  }
}
