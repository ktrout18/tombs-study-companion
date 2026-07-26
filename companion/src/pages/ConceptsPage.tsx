import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CONCEPTS } from '../content/concepts'
import { renderRich } from '../engine/rich'
import { useAppState } from '../engine/store'
import type { ConceptCategory } from '../types'

const CATS: { id: ConceptCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'people', label: 'People' },
  { id: 'events', label: 'Events' },
  { id: 'institutions', label: 'Institutions' },
  { id: 'ideas', label: 'Ideas' },
  { id: 'places', label: 'Places' },
  { id: 'terms', label: 'Terms' },
]

/** Browsable index of every tooltip concept — the knowledge graph laid flat. */
export function ConceptsPage() {
  const loc = useLocation()
  const app = useAppState()
  const [q, setQ] = useState<string>((loc.state as { q?: string } | null)?.q ?? '')
  const [cat, setCat] = useState<ConceptCategory | 'all'>('all')
  const discovered = new Set(app.discovered)

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return Object.values(CONCEPTS)
      .filter((c) => cat === 'all' || c.category === cat)
      .filter((c) => !needle || c.term.toLowerCase().includes(needle) || c.body.join(' ').toLowerCase().includes(needle))
      .sort((a, b) => a.term.localeCompare(b.term))
  }, [q, cat])

  return (
    <div className="mx-auto max-w-[880px] px-6 sm:px-10 py-10 lg:py-14">
      <h1 className="font-serif text-[34px] font-bold text-(--color-oxblood-deep)">Concept Library</h1>
      <p className="text-[14.5px] text-(--color-ink-soft) mt-1.5 mb-2">
        Every idea the companion explains in tooltips — {Object.keys(CONCEPTS).length} of them, cross-linked.
        Hover any red term inside a card to follow the graph.
      </p>
      <p className="text-[12.5px] text-(--color-gilt) font-semibold mb-6 tabular-nums">
        ✦ {discovered.size} of {Object.keys(CONCEPTS).length} discovered — open a concept's tooltip anywhere in the book to collect it.
      </p>

      <div className="flex flex-wrap items-center gap-2 mb-7">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search…"
          className="rounded-md border border-(--color-ink)/20 bg-(--color-card-strong) px-3.5 py-2 text-[14px] w-56 outline-none focus:border-(--color-oxblood)"
        />
        {CATS.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCat(c.id)}
            className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors ${
              cat === c.id
                ? 'bg-(--color-oxblood) text-white'
                : 'bg-(--color-ink)/6 text-(--color-ink-soft) hover:bg-(--color-ink)/12'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="columns-1 md:columns-2 gap-5">
        {list.map((c) => (
          <div
            key={c.id}
            className="break-inside-avoid mb-5 rounded-lg border border-(--color-ink)/12 bg-(--color-card) px-5 py-4"
          >
            <div className="flex items-baseline gap-2 mb-1.5">
              {discovered.has(c.id) && (
                <span title="Discovered" className="text-(--color-gilt) text-[12px]">✦</span>
              )}
              <span className="font-serif font-bold text-[17px]">{c.term}</span>
              {c.era && <span className="text-[11px] text-(--color-ink-faint)">{c.era}</span>}
              <span className="ml-auto text-[9.5px] uppercase tracking-[0.14em] text-(--color-gilt)">
                {c.category}
              </span>
            </div>
            <div className="space-y-2 text-[14px] leading-relaxed text-(--color-ink)">
              {c.body.map((p, i) => (
                <p key={i}>{renderRich(p, [c.id], 0)}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      {list.length === 0 && (
        <div className="text-center text-(--color-ink-faint) py-16">Nothing matches that search.</div>
      )}
    </div>
  )
}
