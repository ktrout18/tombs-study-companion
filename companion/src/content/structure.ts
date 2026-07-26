import type { PartInfo } from '../types'

/** The companion mirrors the organization of Tombs' book:
 *  seven parts, framed by an introduction/prelude and a conclusion,
 *  with his five historiographical interludes kept in place. */
export const PARTS: PartInfo[] = [
  { n: 0, title: 'Beginnings' },
  { n: 1, title: 'The Birth of a Nation', era: 'c.600–1204' },
  { n: 2, title: 'The English Unleashed', era: '1204–c.1500' },
  { n: 3, title: 'The Great Divide', era: 'c.1500–c.1700' },
  { n: 4, title: 'Making a New World', era: 'c.1660–c.1815' },
  { n: 5, title: 'The English Century', era: 'c.1815–1918' },
  { n: 6, title: 'The New Dark Age', era: '1914–1945' },
  { n: 7, title: 'An Age of Decline?', era: '1945–c.2014' },
  { n: 8, title: 'Looking Back' },
]
