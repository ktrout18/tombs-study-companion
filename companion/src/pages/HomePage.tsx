import { Link } from 'react-router-dom'
import { CHAPTERS } from '../content/chapters'
import { PARTS } from '../content/structure'
import { renderRich } from '../engine/rich'
import { useAppState } from '../engine/store'

export function HomePage() {
  const app = useAppState()
  const resume = app.lastChapter ? CHAPTERS.find((c) => c.id === app.lastChapter) : undefined
  return (
    <div className="mx-auto max-w-[780px] px-6 sm:px-10 py-12 lg:py-16">
      <header className="text-center mb-12">
        <div className="text-[11px] uppercase tracking-[0.22em] text-(--color-ink-faint)">
          An interactive study companion to
        </div>
        <h1 className="font-serif text-[44px] sm:text-[54px] font-bold leading-none mt-3 text-(--color-oxblood-deep)">
          The English &<br />Their History
        </h1>
        <div className="font-serif italic text-[17px] text-(--color-ink-soft) mt-3">
          Robert Tombs' 1,400-year history of a nation — summarized, explained, and made explorable
        </div>
        <div className="mx-auto mt-6 h-px w-24 bg-(--color-gilt)" />
      </header>

      {resume && (
        <Link
          to={`/c/${resume.id}`}
          className="mb-8 flex items-baseline gap-3 rounded-lg border border-(--color-oxblood)/40 bg-(--color-oxblood)/6 px-5 py-3.5 hover:bg-(--color-oxblood)/12 transition-colors"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-oxblood)">
            Continue reading
          </span>
          <span className="font-serif text-[16px] font-semibold">
            {resume.number ? `${resume.number}. ` : ''}{resume.title}
          </span>
          <span className="ml-auto text-(--color-oxblood)">→</span>
        </Link>
      )}

      <section className="prose-body space-y-4 mb-10">
        <p>
          {renderRich(
            "This is not the book — it is a reading companion. Every chapter of Tombs' history gets an original summary of its story and its argument, written for a curious newcomer. The book's own prose stays where it belongs, on its pages; read the two side by side.",
          )}
        </p>
        <p>
          {renderRich(
            'Three ideas anchor the whole book. First, England is **old**: a state called England, with shires, taxes, and a single crown, has existed for over a thousand years — {{anglo-saxon-england|far longer than most European states}}. Second, the English have constantly retold and misremembered their own past, and those retellings — {{whig-history|Whig history}}, the {{norman-yoke|Norman Yoke}}, wartime myth, postwar {{declinism|declinism}} — have shaped what England did next. Third, against the fashionable story of inevitable decline, Tombs argues the English have usually muddled through rather better than they believe.',
          )}
        </p>
      </section>

      <section className="mb-12 rounded-xl border border-(--color-gilt)/50 bg-(--color-paper-deep)/70 px-6 py-5">
        <h2 className="text-[11px] font-bold uppercase tracking-[0.16em] text-(--color-gilt) mb-2.5">
          How to read this
        </h2>
        <ul className="space-y-2 text-[14.5px] leading-relaxed text-(--color-ink-soft)">
          <li>
            <strong className="text-(--color-ink)">Hover the red dotted terms</strong> — like{' '}
            {renderRich('{{danelaw|the Danelaw}}')} — to open an explanation. Hold the cursor still a
            moment and the tooltip <em>pins</em> (watch the gold bar fill): it becomes clickable, and
            terms inside it open further tooltips, up to five levels deep. On a tablet, just tap.
          </li>
          <li>
            <strong className="text-(--color-ink)">Esc</strong> or moving the mouse away closes the chain.
          </li>
          <li>
            <strong className="text-(--color-ink)">"Go deeper" panels</strong> expand for context beyond
            the summary; interactive maps, trees, and charts are scattered where they earn their place.
          </li>
        </ul>
      </section>

      <section>
        {PARTS.map((part) => {
          const chapters = CHAPTERS.filter((c) => c.part === part.n)
          if (chapters.length === 0) return null
          return (
            <div key={part.n} className="mb-8">
              <h2 className="flex items-baseline gap-3 mb-3">
                <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-(--color-oxblood)">
                  {part.n >= 1 && part.n <= 7
                    ? `Part ${['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'][part.n - 1]} · `
                    : ''}
                  {part.title}
                </span>
                {part.era && <span className="text-[11.5px] text-(--color-ink-faint) tabular-nums">{part.era}</span>}
                <span className="h-px flex-1 bg-(--color-ink)/10" />
              </h2>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {chapters.map((c) => (
                  <Link
                    key={c.id}
                    to={`/c/${c.id}`}
                    className="rounded-lg border border-(--color-ink)/12 bg-(--color-card) px-4 py-3 hover:border-(--color-oxblood)/50 hover:bg-(--color-card-strong) transition-colors"
                  >
                    <div className="font-serif text-[16px] font-semibold text-(--color-ink) leading-snug">
                      {c.number !== undefined && <span className="text-(--color-gilt) mr-1.5">{c.number}.</span>}
                      {c.title}
                    </div>
                    <div className="text-[11.5px] text-(--color-ink-faint) mt-1 tabular-nums">{c.era}</div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
