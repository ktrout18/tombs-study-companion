import type { QuizQ } from '../../types'
import { QUIZ_A } from './quiz-a'
import { QUIZ_B } from './quiz-b'
import { QUIZ_C } from './quiz-c'
import { QUIZ_D } from './quiz-d'

/** All question banks, keyed by chapter id. */
export const QUIZZES: Record<string, QuizQ[]> = {
  ...QUIZ_A,
  ...QUIZ_B,
  ...QUIZ_C,
  ...QUIZ_D,
}
