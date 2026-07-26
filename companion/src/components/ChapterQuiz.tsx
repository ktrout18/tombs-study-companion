import { useState } from 'react'
import { QUIZZES } from '../content/quiz'
import { renderRich } from '../engine/rich'
import { recordAnswer, useAppState } from '../engine/store'

/** End-of-chapter self-test: one question at a time, instant feedback,
 *  missed questions join the review deck. */
export function ChapterQuiz({ chapterId }: { chapterId: string }) {
  const questions = QUIZZES[chapterId]
  const app = useAppState()
  const [open, setOpen] = useState(false)
  const [qi, setQi] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  if (!questions || questions.length === 0) return null

  const doneBefore = (app.quizDone[chapterId] ?? []).length
  const q = questions[qi]

  const reset = () => {
    setQi(0)
    setPicked(null)
    setScore(0)
    setFinished(false)
  }

  if (!open) {
    return (
      <div className="mt-12 rounded-lg border border-(--color-navy)/35 bg-(--color-navy)/6 px-5 py-4 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-navy)">
            Test yourself
          </div>
          <div className="text-[13.5px] text-(--color-ink-soft) mt-0.5">
            {questions.length} questions on this chapter
            {doneBefore > 0 && ` · ${doneBefore}/${questions.length} mastered`}
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            reset()
            setOpen(true)
          }}
          className="rounded-md bg-(--color-navy) text-white px-4 py-2 text-[13px] font-semibold hover:opacity-90"
        >
          Start
        </button>
      </div>
    )
  }

  if (finished) {
    return (
      <div className="mt-12 rounded-lg border border-(--color-navy)/35 bg-(--color-navy)/6 px-5 py-5 text-center">
        <div className="font-serif text-[22px] font-bold">
          {score}/{questions.length}
        </div>
        <div className="text-[13.5px] text-(--color-ink-soft) mt-1">
          {score === questions.length
            ? 'Full marks — the examiner is satisfied.'
            : 'Missed questions have joined your review deck.'}
        </div>
        <div className="mt-3 flex justify-center gap-2">
          <button
            type="button"
            onClick={reset}
            className="rounded-md border border-(--color-navy)/40 px-4 py-2 text-[13px] font-semibold text-(--color-navy) hover:bg-(--color-navy)/10"
          >
            Retry
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-md bg-(--color-navy) text-white px-4 py-2 text-[13px] font-semibold hover:opacity-90"
          >
            Done
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-12 rounded-lg border border-(--color-navy)/35 bg-(--color-navy)/6 px-5 py-5">
      <div className="flex justify-between text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-navy) mb-3">
        <span>Test yourself</span>
        <span className="tabular-nums">
          {qi + 1} / {questions.length}
        </span>
      </div>
      <div className="prose-body text-[1rem] mb-4">{q.q}</div>
      <div className="grid gap-2">
        {q.options.map((opt, i) => {
          const isPicked = picked === i
          const isRight = i === q.answer
          const state =
            picked === null
              ? 'idle'
              : isRight
                ? 'right'
                : isPicked
                  ? 'wrong'
                  : 'dim'
          return (
            <button
              key={i}
              type="button"
              disabled={picked !== null}
              onClick={() => {
                setPicked(i)
                const correct = i === q.answer
                if (correct) setScore((s) => s + 1)
                recordAnswer(chapterId, qi, correct)
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
        <div className="mt-3 text-[13.5px] leading-relaxed bg-(--color-paper-deep)/80 rounded-md px-4 py-3">
          {renderRich(q.explain)}
        </div>
      )}
      {picked !== null && (
        <div className="mt-3 text-right">
          <button
            type="button"
            onClick={() => {
              if (qi + 1 >= questions.length) setFinished(true)
              else {
                setQi(qi + 1)
                setPicked(null)
              }
            }}
            className="rounded-md bg-(--color-navy) text-white px-4 py-2 text-[13px] font-semibold hover:opacity-90"
          >
            {qi + 1 >= questions.length ? 'Finish' : 'Next'}
          </button>
        </div>
      )}
    </div>
  )
}
