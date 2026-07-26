import { useState } from 'react'
import { renderRich } from '../../engine/rich'

/** Interactive diagram of landholding after the Conquest. Click a tier. */

const TIERS = [
  {
    id: 'king',
    label: 'The King',
    count: '1',
    width: 'w-[38%]',
    color: 'bg-(--color-oxblood)',
    text: 'After 1066 every acre of England was held, directly or indirectly, from the crown — a claim no French or German king could make. This is why English {{feudalism|feudalism}} strengthened royal power instead of dissolving it: {{william-conqueror|William}} was lord of lords, not first among equals.',
  },
  {
    id: 'tenants',
    label: 'Tenants-in-chief',
    count: '~180 barons · ~30 bishops & abbots',
    width: 'w-[58%]',
    color: 'bg-(--color-navy)',
    text: 'Great lords holding land directly from the king in return for quotas of knights (and counsel, and cash). {{domesday|Domesday}} shows how few they were and how much they held — a conquering minority. Their descendants\' quarrels with kings produced {{magna-carta|Magna Carta}} and the first {{parliament|Parliaments}}.',
  },
  {
    id: 'knights',
    label: 'Knights & lesser lords',
    count: 'a few thousand',
    width: 'w-[78%]',
    color: 'bg-(--color-gilt)',
    text: 'Fighting men granted manors by the great lords in return for military service. Over time their swords mattered less than their local weight: as jurors, sheriffs, and (from the 13th century) elected knights of the {{shire|shire}} in the {{house-of-commons|Commons}} — the gentry in embryo.',
  },
  {
    id: 'peasants',
    label: 'Peasants — free & villein',
    count: '~90% of everyone',
    width: 'w-[97%]',
    color: 'bg-(--color-ink-soft)',
    text: 'Most English people: some free smallholders (numerous in the old {{danelaw|Danelaw}}), many villeins — unfree tenants owing labour on the lord\'s land, bound to the manor. Serfdom here was economic, not slavery; it withered after the {{black-death|Black Death}} made labour scarce and dear.',
  },
]

export function FeudalPyramid() {
  const [sel, setSel] = useState<string>('king')
  const active = TIERS.find((t) => t.id === sel)!

  return (
    <figure className="my-7 rounded-lg border border-(--color-ink)/12 bg-(--color-card) px-5 py-4">
      <figcaption className="text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-ink-soft) mb-3">
        Interactive · Who held England after 1066?
      </figcaption>
      <div className="flex flex-col items-center gap-1.5 mb-4">
        {TIERS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setSel(t.id)}
            className={`${t.width} ${t.color} rounded-md px-3 py-2 text-white text-center transition-all cursor-pointer
              ${sel === t.id ? 'ring-2 ring-offset-2 ring-(--color-oxblood) opacity-100' : 'opacity-75 hover:opacity-95'}`}
          >
            <span className="block text-[13px] font-bold leading-tight">{t.label}</span>
            <span className="block text-[10.5px] opacity-85">{t.count}</span>
          </button>
        ))}
      </div>
      <p className="prose-body text-[14.5px] leading-relaxed bg-(--color-paper-deep)/70 rounded-md px-4 py-3">
        {renderRich(active.text)}
      </p>
      <p className="mt-2 text-[11px] text-(--color-ink-faint) italic">
        Numbers are rough orders of magnitude from Domesday-era evidence.
      </p>
    </figure>
  )
}
