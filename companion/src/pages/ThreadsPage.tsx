import { Link } from 'react-router-dom'
import { CHAPTERS } from '../content/chapters'
import { renderRich } from '../engine/rich'

/** Tombs' three master claims, traced across the book. Original editorial
 *  content written for this companion. */

interface ThreadStop {
  chapterId: string
  note: string
}

interface Thread {
  id: string
  title: string
  color: string
  claim: string
  stops: ThreadStop[]
}

const THREADS: Thread[] = [
  {
    id: 'old',
    title: 'England is old',
    color: '#7c2d2d',
    claim:
      'A single English state — shires, taxes, one crown, one law — has run continuously for over a thousand years. Rupture is the exception; the machine survives its conquerors.',
    stops: [
      { chapterId: 'ch01', note: 'The claim is founded here: {{shire|shires}}, {{danegeld|geld}}, and coinage before 1066 — Europe\'s most organized state.' },
      { chapterId: 'ch02', note: 'The test case: the {{norman-conquest|Conquest}} decapitates the elite, yet runs England through English machinery ({{domesday|Domesday}}).' },
      { chapterId: 'ch03', note: '{{parliament|Parliament}} and {{common-law|common law}} grow out of, not against, the old structures.' },
      { chapterId: 'ch05', note: 'Even the {{reformation-england|Reformation}} is a state act — the crown redirects an ancient church rather than the church breaking the state.' },
      { chapterId: 'ch06', note: 'The exception that proves it: revolution comes once, from religion — and the {{restoration|Restoration}} restores the old forms within eleven years.' },
      { chapterId: 'ch08', note: 'Hanoverian liberty is defended as an ancestral inheritance ({{magna-carta|Magna Carta}} mythology), not invented rights.' },
      { chapterId: 'ch21', note: 'The modern question — {{devolution|devolution}} and the Union\'s wobble — is the old nation resurfacing under the newer British state.' },
      { chapterId: 'conclusion', note: 'The summing-up: continuity as England\'s defining trait, and its quiet advantage.' },
    ],
  },
  {
    id: 'memory',
    title: 'Memory makes history',
    color: '#2c3e5d',
    claim:
      'What the English believe about their past — accurate or not — steers what they do next. Myths are causes, not decorations.',
    stops: [
      { chapterId: 'prelude', note: 'The laboratory case: Arthur and the Dreamtime — maximum myth on minimum evidence, with real political uses.' },
      { chapterId: 'int1', note: 'The {{norman-yoke|Norman Yoke}}: a legend of stolen Saxon freedom armed radicals for centuries.' },
      { chapterId: 'int2', note: 'Shakespeare\'s history plays become the nation\'s memory of the Middle Ages — a theatre production outlasting the archives.' },
      { chapterId: 'ch05', note: '{{foxes-martyrs|Foxe\'s martyrs}} manufacture the elect Protestant nation that then acts like one.' },
      { chapterId: 'int3', note: '{{whig-history|Whig history}} canonizes {{glorious-revolution|1688}}; the myth of moderation enforces actual moderation.' },
      { chapterId: 'ch15', note: 'The {{war-poets|futility}} version of 1914–18 displaces what contemporaries believed — and reshapes foreign policy after.' },
      { chapterId: 'int5', note: 'The centerpiece: {{munich|Munich}}, {{dunkirk|Dunkirk}}, the {{blitz|Blitz spirit}} — memory as the strongest political force in postwar England.' },
      { chapterId: 'conclusion', note: 'A people cannot have no myths; they can only examine the ones they have.' },
    ],
  },
  {
    id: 'decline',
    title: 'Declinism is bad history',
    color: '#a97e2f',
    claim:
      'The conviction that England is finished recurs every generation, mistakes arithmetic for failure, and does real damage. The record shows resilience.',
    stops: [
      { chapterId: 'ch10', note: 'The setup: the {{industrial-revolution|first industrial nation}} wins a freak, unrepeatable supremacy — later mistaken for the natural order.' },
      { chapterId: 'ch13', note: 'The 1890s birth of {{declinism|declinism}}: rivals industrialize, and catching-up is read as English failure.' },
      { chapterId: 'ch16', note: 'The "wasted" interwar years — in which most English families\' living standards substantially rose.' },
      { chapterId: 'ch18', note: 'Postwar "decline": the era declinists mocked was the best time yet to be alive in England.' },
      { chapterId: 'ch20', note: 'Declinism\'s zenith (IMF, {{winter-of-discontent|Winter of Discontent}}) — then {{thatcher|Thatcherism}} as its savage cure.' },
      { chapterId: 'ch21', note: 'The 2014 verdict: richer, healthier, more open than ever — the deficit is constitutional confidence, not capability.' },
      { chapterId: 'conclusion', note: 'The closing argument: nations that believe they are failing do desperate things; bad history makes bad politics.' },
    ],
  },
]

export function ThreadsPage() {
  return (
    <div className="mx-auto max-w-[760px] px-6 sm:px-10 py-10 lg:py-14">
      <h1 className="font-serif text-[34px] font-bold text-(--color-oxblood-deep)">The Three Threads</h1>
      <p className="text-[14.5px] text-(--color-ink-soft) mt-1.5 mb-8 max-w-[560px]">
        Tombs makes one argument in three strands, over 1,400 years. Follow each
        strand through the chapters where it does its work.
      </p>
      {THREADS.map((t) => (
        <section key={t.id} className="mb-10">
          <h2 className="flex items-center gap-2.5 mb-1">
            <span className="h-3 w-3 rounded-full shrink-0" style={{ background: t.color }} />
            <span className="font-serif text-[22px] font-bold">{t.title}</span>
          </h2>
          <p className="prose-body text-[15px] text-(--color-ink-soft) mb-4 ml-[22px]">{t.claim}</p>
          <ol className="ml-[27px] border-l-2 pl-5 space-y-3" style={{ borderColor: `${t.color}44` }}>
            {t.stops.map((s) => {
              const ch = CHAPTERS.find((c) => c.id === s.chapterId)
              if (!ch) return null
              return (
                <li key={s.chapterId} className="relative">
                  <span
                    className="absolute -left-[27px] top-[6px] h-2.5 w-2.5 rounded-full"
                    style={{ background: t.color }}
                  />
                  <Link
                    to={`/c/${ch.id}`}
                    className="font-sans text-[13px] font-bold text-(--color-oxblood) hover:underline"
                  >
                    {ch.number ? `${ch.number}. ` : ''}{ch.title}
                  </Link>
                  <div className="prose-body text-[14.5px] leading-relaxed">{renderRich(s.note)}</div>
                </li>
              )
            })}
          </ol>
        </section>
      ))}
    </div>
  )
}
