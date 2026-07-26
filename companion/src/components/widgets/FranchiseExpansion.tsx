import { useState } from 'react'
import { renderRich } from '../../engine/rich'

/**
 * The long road to the vote: share of adults entitled to vote in
 * parliamentary elections, before and after each reform act.
 * Figures are approximate — sources differ on definitions.
 */

interface Step {
  year: string
  act: string
  pct: number
  who: string
  note: string
}

const STEPS: Step[] = [
  {
    year: '1830', act: 'Before reform', pct: 3,
    who: 'A patchwork of ancient franchises',
    note: 'Perhaps 400,000 voters in a population past 13 million: freeholders in the counties, wildly varied rules in the boroughs. "Rotten boroughs" with a dozen voters returned two MPs while Manchester returned none.',
  },
  {
    year: '1832', act: 'Great Reform Act', pct: 5,
    who: '+ the propertied middle class',
    note: 'The {{great-reform-act|1832 Act}} redrew the map and standardized the franchise around property. A modest widening — but it proved the constitution could be rewritten under pressure, peacefully.',
  },
  {
    year: '1867', act: 'Second Reform Act', pct: 13,
    who: '+ urban working men (householders)',
    note: '{{disraeli|Disraeli}}\'s {{second-reform-act|"leap in the dark"}} roughly doubled the electorate and let in much of the urban working class. Mass party machines and, in 1870, state elementary schooling followed.',
  },
  {
    year: '1884', act: 'Third Reform Act', pct: 24,
    who: '+ rural working men',
    note: 'The countryside catches up with the towns: about two in three adult men (still no women) can now vote. The agricultural labourer becomes a political prize.',
  },
  {
    year: '1918', act: 'Representation of the People', pct: 74,
    who: '+ all men 21+, women 30+',
    note: 'After the {{first-world-war|war}}, the {{fourth-reform-act|1918 Act}} tripled the electorate at a stroke — the biggest single democratization in English history. The {{suffragettes|suffrage campaigners}}\' cause is (mostly) won.',
  },
  {
    year: '1928', act: 'Equal Franchise Act', pct: 97,
    who: '+ women 21–29 ("flapper vote")',
    note: 'Full adult suffrage on equal terms, almost a century after {{chartism|the Chartists}} demanded universal (male) suffrage and were treated as dangerous revolutionaries. Five of their six points were now law.',
  },
]

export function FranchiseExpansion() {
  const [idx, setIdx] = useState(STEPS.length - 1)
  const s = STEPS[idx]

  return (
    <figure className="my-7 rounded-lg border border-(--color-ink)/12 bg-(--color-card) px-5 py-4">
      <figcaption className="text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-ink-soft) mb-3">
        Interactive · Who could vote? (share of adults, approx.)
      </figcaption>

      <div className="flex items-end gap-2 sm:gap-3 h-44 mb-2">
        {STEPS.map((step, i) => (
          <button
            key={step.year}
            type="button"
            onClick={() => setIdx(i)}
            className="flex-1 flex flex-col items-center justify-end h-full group cursor-pointer"
          >
            <span className={`text-[11px] font-bold tabular-nums mb-1 ${i === idx ? 'text-(--color-oxblood)' : 'text-(--color-ink-faint)'}`}>
              {step.pct}%
            </span>
            <div
              className={`w-full rounded-t-md transition-all ${
                i === idx ? 'bg-(--color-oxblood)' : 'bg-(--color-navy)/45 group-hover:bg-(--color-navy)/70'
              }`}
              style={{ height: `${Math.max(step.pct, 2)}%` }}
            />
          </button>
        ))}
      </div>
      <div className="flex gap-2 sm:gap-3 mb-4">
        {STEPS.map((step, i) => (
          <div key={step.year} className={`flex-1 text-center text-[10.5px] tabular-nums leading-tight ${i === idx ? 'font-bold text-(--color-oxblood)' : 'text-(--color-ink-faint)'}`}>
            {step.year}
          </div>
        ))}
      </div>

      <div className="bg-(--color-paper-deep)/70 rounded-md px-4 py-3">
        <div className="text-[13px] font-bold mb-0.5">
          {s.year} · {s.act} <span className="font-normal text-(--color-ink-soft)">— {s.who}</span>
        </div>
        <p className="prose-body text-[14.5px] leading-relaxed">{renderRich(s.note)}</p>
      </div>
      <p className="mt-2 text-[11px] text-(--color-ink-faint) italic">
        Percentages are rough estimates of enfranchised adults (definitions and registers varied).
      </p>
    </figure>
  )
}
