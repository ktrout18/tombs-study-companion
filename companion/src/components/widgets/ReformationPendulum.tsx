import { useState } from 'react'
import { renderRich } from '../../engine/rich'

/**
 * The religious pendulum, 1509–1603: where each Tudor regime sat between
 * Rome and Geneva, and what changed on the ground.
 */

interface Reign {
  id: string
  monarch: string
  years: string
  /** 0 = fully Roman Catholic, 100 = fully Reformed/Calvinist */
  dial: number
  dialLabel: string
  changes: string[]
  note: string
}

const REIGNS: Reign[] = [
  {
    id: 'h8-early',
    monarch: 'Henry VIII (to 1527)',
    years: '1509–1527',
    dial: 5,
    dialLabel: 'Rome\'s loyal son',
    changes: ['Mass in Latin; papal authority unquestioned', 'Henry writes against Luther — pope names him *Defender of the Faith*', 'Heretics burned'],
    note: 'The starting point: England as a conventionally pious Catholic kingdom. The royal title *Fidei Defensor* — earned attacking {{protestantism|Protestantism}} — is still on every British coin.',
  },
  {
    id: 'h8-late',
    monarch: 'Henry VIII (after the break)',
    years: '1534–1547',
    dial: 30,
    dialLabel: 'Catholicism without the pope',
    changes: ['Royal Supremacy: king replaces pope as head of the {{church-of-england|church}}', '{{dissolution-monasteries|Monasteries dissolved}}; shrines (including {{thomas-becket|Becket}}\'s) smashed', 'English Bible in every parish — but the Latin Mass kept', 'Both Protestant "heretics" and papal loyalists executed'],
    note: 'A revolution of jurisdiction more than doctrine: {{henry-viii|Henry}} wanted his annulment, the church\'s wealth, and obedience — not Luther. The pendulum has moved, but mostly in ownership and allegiance.',
  },
  {
    id: 'edward',
    monarch: 'Edward VI',
    years: '1547–1553',
    dial: 85,
    dialLabel: 'Full Reformation',
    changes: ['{{thomas-cranmer|Cranmer}}\'s English {{book-of-common-prayer|Prayer Book}} (1549, radicalized 1552)', 'Altars stripped, images whitewashed, chantries abolished', 'Clergy may marry; Mass becomes communion service'],
    note: 'The real doctrinal revolution, under a boy king\'s Protestant council — see {{edward-vi|Edward VI}}. Parish England is remade in six years; the 1549 Prayer Book rebellion in the West Country is crushed.',
  },
  {
    id: 'mary',
    monarch: 'Mary I',
    years: '1553–1558',
    dial: 8,
    dialLabel: 'Rome restored',
    changes: ['Papal authority and the Mass restored', '~280 Protestants burned — {{foxes-martyrs|Foxe}}\'s martyrs', 'Marriage to Philip II of Spain; Calais lost'],
    note: 'The pendulum slams back — see {{mary-i|Mary I}}. But the {{dissolution-monasteries|monastic lands}} stay sold (their buyers sit in Parliament), and the burnings hand {{protestantism|Protestantism}} its martyr-story: repression that manufactured the identity it meant to destroy.',
  },
  {
    id: 'elizabeth',
    monarch: 'Elizabeth I',
    years: '1558–1603',
    dial: 62,
    dialLabel: 'The Settlement: Protestant, but…',
    changes: ['Royal Supremacy back (as "Supreme Governor"); Prayer Book restored with edges softened', 'Bishops, cathedrals, vestments kept — to {{puritans|Puritan}} disgust', 'After 1570 excommunication: {{catholicism|Catholic}} priests executed as traitors, not heretics'],
    note: 'The pendulum stops — deliberately — between Geneva and Rome. {{elizabeth-i|Elizabeth}}\'s hybrid church satisfied neither hot Protestants nor Catholics, which is why the fight resumed under the Stuarts and helped cause the {{civil-war|Civil War}}.',
  },
]

export function ReformationPendulum() {
  const [idx, setIdx] = useState(0)
  const r = REIGNS[idx]

  return (
    <figure className="my-7 rounded-lg border border-(--color-ink)/12 bg-(--color-card) px-5 py-4">
      <figcaption className="text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-ink-soft) mb-3">
        Interactive · The religious pendulum, 1509–1603
      </figcaption>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {REIGNS.map((reign, i) => (
          <button
            key={reign.id}
            type="button"
            onClick={() => setIdx(i)}
            className={`rounded-full px-3 py-1.5 text-[12px] font-semibold transition-colors ${
              i === idx
                ? 'bg-(--color-oxblood) text-white'
                : 'bg-(--color-ink)/6 text-(--color-ink-soft) hover:bg-(--color-ink)/12'
            }`}
          >
            {reign.monarch}
          </button>
        ))}
      </div>

      {/* The dial */}
      <div className="mb-1 flex justify-between text-[11px] font-bold uppercase tracking-wider">
        <span className="text-[#8a5a2f]">Rome</span>
        <span className="text-(--color-ink-faint) normal-case font-normal italic">{r.dialLabel}</span>
        <span className="text-(--color-navy)">Geneva</span>
      </div>
      <div className="relative h-4 rounded-full bg-gradient-to-r from-[#8a5a2f] via-(--color-paper-deep) to-(--color-navy) mb-4">
        <div
          className="absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-white border-[3px] border-(--color-oxblood) shadow transition-all duration-500"
          style={{ left: `calc(${r.dial}% - 12px)` }}
        />
      </div>

      <div className="text-[13px] font-bold mb-1.5">
        {r.monarch} <span className="font-normal text-(--color-ink-faint) tabular-nums">{r.years}</span>
      </div>
      <ul className="mb-3 space-y-1">
        {r.changes.map((c, i) => (
          <li key={i} className="text-[13.5px] text-(--color-ink) flex gap-2">
            <span className="text-(--color-gilt)">▸</span>
            <span>{renderRich(c)}</span>
          </li>
        ))}
      </ul>
      <p className="prose-body text-[14.5px] leading-relaxed bg-(--color-paper-deep)/70 rounded-md px-4 py-3">
        {renderRich(r.note)}
      </p>
      <p className="mt-2 text-[11px] text-(--color-ink-faint) italic">
        The dial is an interpretive device, not a measurement.
      </p>
    </figure>
  )
}
