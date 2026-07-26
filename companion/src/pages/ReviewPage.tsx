import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CHAPTERS } from '../content/chapters'
import { QUIZZES } from '../content/quiz'
import { renderRich } from '../engine/rich'
import { dueReviewKeys, recordReview, useAppState } from '../engine/store'

/** Spaced-repetition review of quiz questions missed on first pass. */
export function ReviewPage() {
  useAppState() // re-render on store changes
  const [session] = useState(() => dueReviewKeys())
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)

  const cards = useMemo(
    () =>
      session
        .map((key) => {
          const [chapterId, qiRaw] = key.split(':')
          const qi = Number(qiRaw)
          const q = QUIZZES[chapterId]?.[qi]
          const chapter = CHAPTERS.find((c) => c.id === chapterId)
          return q && chapter ? { key, q, chapter } : null
        })
        .filter((c): c is NonNullable<typeof c> => c !== null),
    [session],
  )

  if (cards.length === 0) {
    return (
      <div className="mx-auto max-w-[640px] px-6 py-16 text-center">
        <h1 className="font-serif text-[30px] font-bold text-(--color-oxblood-deep)">Review deck</h1>
        <p className="text-[14.5px] text-(--color-ink-soft) mt-3">
          Nothing due. Miss a quiz question and it lands here, returning on a
          spaced schedule until you have beaten it four times.
        </p>
        <Link to="/" className="inline-block mt-5 text-(--color-oxblood) underline text-[14px]">
          Back to reading
        </Link>
      </div>
    )
  }

  if (idx >= cards.length) {
    return (
      <div className="mx-auto max-w-[640px] px-6 py-16 text-center">
        <h1 className="font-serif text-[30px] font-bold text-(--color-oxblood-deep)">Deck cleared</h1>
        <p className="text-[14.5px] text-(--color-ink-soft) mt-3">
          {cards.length} question{cards.length > 1 ? 's' : ''} reviewed. Correct answers return at
          longer intervals; four in a row retires a card.
        </p>
        <Link to="/" className="inline-block mt-5 text-(--color-oxblood) underline text-[14px]">
          Back to reading
        </Link>
      </div>
    )
  }

  const { key, q, chapter } = cards[idx]

  return (
    <div className="mx-auto max-w-[640px] px-6 py-12">
      <div className="flex items-baseline justify-between mb-6">
        <h1 className="font-serif text-[26px] font-bold text-(--color-oxblood-deep)">Review deck</h1>
        <span className="text-[12px] tabular-nums text-(--color-ink-faint)">
          {idx + 1} / {cards.length}
        </span>
      </div>
      <div className="text-[11.5px] uppercase tracking-[0.14em] text-(--color-ink-faint) mb-2">
        From: <Link className="text-(--color-oxblood)" to={`/c/${chapter.id}`}>{chapter.title}</Link>
      </div>
      <div className="prose-body text-[1.05rem] mb-4">{q.q}</div>
      <div className="grid gap-2">
        {q.options.map((opt, i) => {
          const state =
            picked === null ? 'idle' : i === q.answer ? 'right' : picked === i ? 'wrong' : 'dim'
          return (
            <button
              key={i}
              type="button"
              disabled={picked !== null}
              onClick={() => {
                setPicked(i)
                recordReview(key, i === q.answer)
              }}
              className={`text-left rounded-md border px-4 py-2.5 text-[14px] transition-colors ${
                state === 'idle'
                  ? 'border-(--color-ink)/20 bg-(--color-card) hover:border-(--color-navy) cursor-pointer'
                  : state === 'right'
                    ? 'border-green-700 bg-green-700/10 font-semibold'
                    : state === 'wrong'
                      ? 'border-(--color-oxblood) bg-(--color-oxblood)/10'
                      : 'border-(--color-ink)/10 opacity-50'
              }`}
            >
              {opt}
            </button>
          )
        })}
      </div>
      {picked !== null && (
        <>
          <div className="mt-3 text-[13.5px] leading-relaxed bg-(--color-paper-deep)/80 rounded-md px-4 py-3">
            {renderRich(q.explain)}
          </div>
          <div className="mt-3 text-right">
            <button
              type="button"
              onClick={() => {
                setPicked(null)
                setIdx(idx + 1)
              }}
              className="rounded-md bg-(--color-navy) text-white px-4 py-2 text-[13px] font-semibold hover:opacity-90"
            >
              {idx + 1 >= cards.length ? 'Finish' : 'Next'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
