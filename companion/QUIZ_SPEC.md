# Quiz spec — question banks for the Tombs study companion

You are writing multiple-choice questions for chapters of the study companion
in this repo. Read this spec, then `src/types.ts` (the `QuizQ` interface), then
each assigned chapter file under `src/content/chapters/`, then write your one
output file.

## Rules

- **Answerable from the chapter file alone.** Every question must be settled
  by prose that is actually in that chapter (including its timeline, argument
  boxes, and reading panels). No outside trivia.
- **4 questions per chapter unit**, in chapter order of topic.
- **Original wording.** Do not copy sentences from the chapter; rephrase.
- Exactly **4 options** each; one correct (`answer` = its index, vary the
  position); distractors plausible, same category as the answer (a date gets
  dates, a person gets people), never joke options.
- Mix types across each set: a date/sequence question, a cause/consequence
  question, an interpretation question ("what does Tombs argue…"), a
  detail/definition question.
- `explain`: 1–2 sentences, may use `{{concept-id|text}}` markers — but ONLY
  concept ids that appear in that chapter's own text.
- Plain TypeScript, single-quoted strings with escaped apostrophes, valid
  against `QuizQ` in src/types.ts.

## Output format (one file per agent)

```ts
import type { QuizQ } from '../../types'

export const QUIZ_X: Record<string, QuizQ[]> = {
  ch05: [
    {
      q: 'Which monarch made England doctrinally Protestant?',
      options: ['Henry VIII', 'Edward VI', 'Mary I', 'Elizabeth I'],
      answer: 1,
      explain: 'Henry broke with Rome but kept traditional doctrine; the Protestant turn came under {{edward-vi|Edward VI}}.',
    },
    // …4 per chapter
  ],
  // …one entry per assigned chapter id
}
```

Replace X and the export name as your assignment states. Verify with
`npx tsc --noEmit -p tsconfig.app.json` from the `companion` directory
(ignore errors outside your file).
