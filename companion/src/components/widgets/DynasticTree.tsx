import { useState } from 'react'
import { renderRich } from '../../engine/rich'

/**
 * The Wars of the Roses in one tree: Edward III's sons and the rival lines
 * of Lancaster and York, converging on Tudor. Click a person.
 */

interface Node {
  id: string
  name: string
  dates: string
  house: 'root' | 'lancaster' | 'york' | 'tudor'
  x: number
  y: number
  text: string
}

const NODES: Node[] = [
  {
    id: 'edward3', name: 'Edward III', dates: 'r.1327–77', house: 'root', x: 300, y: 40,
    text: 'The fertile root of the trouble: {{edward-iii|Edward III}} had five adult sons. Rival lines of descent from them supplied both sides of the {{wars-of-roses|Wars of the Roses}}.',
  },
  {
    id: 'blackprince', name: 'Edward, the Black Prince', dates: '1330–76', house: 'root', x: 95, y: 130,
    text: 'Eldest son and victor of Poitiers; died before his father, so the crown passed to his ten-year-old son Richard II — a child king, and the dynasty\'s first crack.',
  },
  {
    id: 'gaunt', name: 'John of Gaunt, Duke of Lancaster', dates: '1340–99', house: 'lancaster', x: 300, y: 130,
    text: 'Third surviving son; richest nobleman in England. His son seized the throne, founding the house of Lancaster (red rose).',
  },
  {
    id: 'york-duke', name: 'Edmund, Duke of York', dates: '1341–1402', house: 'york', x: 505, y: 130,
    text: 'Fourth surviving son. His grandson combined York descent with a claim through the *second* son\'s line (Lionel of Clarence) — genealogically senior to Lancaster, which became the Yorkist case for the throne.',
  },
  {
    id: 'richard2', name: 'Richard II', dates: 'r.1377–99', house: 'root', x: 95, y: 225,
    text: 'The Black Prince\'s son: autocratic, childless, deposed in 1399 by his cousin Bolingbroke and dead in prison months later. Deposition set the fatal precedent — kings could be unmade.',
  },
  {
    id: 'henry4', name: 'Henry IV', dates: 'r.1399–1413', house: 'lancaster', x: 300, y: 225,
    text: 'Gaunt\'s son Bolingbroke, the usurper of 1399. His seizure of the crown from Richard II is where Shakespeare\'s history cycle — and the legitimacy problem — begins.',
  },
  {
    id: 'henry5', name: 'Henry V', dates: 'r.1413–22', house: 'lancaster', x: 300, y: 305,
    text: 'Usurpation redeemed by glory: {{agincourt|Agincourt}} and the conquest of northern France. Then he died at 35, leaving a nine-month-old heir — see {{henry-v|Henry V}}.',
  },
  {
    id: 'richard-york', name: 'Richard, Duke of York', dates: '1411–60', house: 'york', x: 505, y: 305,
    text: 'Heir of both the York and Clarence lines. Excluded from power by Henry VI\'s court, he claimed first the protectorship, then the throne itself; killed at Wakefield in 1460 — his head displayed in a paper crown.',
  },
  {
    id: 'henry6', name: 'Henry VI', dates: 'r.1422–61, 1470–71', house: 'lancaster', x: 300, y: 385,
    text: 'Crowned in infancy, gentle, pious, and periodically catatonic. Under him France was lost and the court factions turned to arms. Deposed, restored, deposed again, and murdered in the Tower in 1471.',
  },
  {
    id: 'edward4', name: 'Edward IV', dates: 'r.1461–70, 1471–83', house: 'york', x: 505, y: 385,
    text: 'Richard of York\'s son: huge, capable, and lethal in battle (Towton, 1461 — perhaps the bloodiest day on English soil). His secret marriage split his own party; he died in his bed, which his sons did not.',
  },
  {
    id: 'edward5', name: 'Edward V', dates: '1483', house: 'york', x: 430, y: 465,
    text: 'One of the "Princes in the Tower": twelve years old, king for eleven weeks, declared illegitimate by his uncle Richard, and never seen again after summer 1483.',
  },
  {
    id: 'richard3', name: 'Richard III', dates: 'r.1483–85', house: 'york', x: 580, y: 465,
    text: 'Edward IV\'s loyal brother — until he took his nephew\'s crown. Killed at Bosworth in 1485, the last English king to die in battle; found under a Leicester car park in 2012. Tudor writers and Shakespeare made him the archetypal villain-king.',
  },
  {
    id: 'margaret-beaufort', name: 'Margaret Beaufort', dates: '1443–1509', house: 'lancaster', x: 170, y: 465,
    text: 'Great-granddaughter of Gaunt by his mistress-later-wife — a legitimized line barred (supposedly) from the throne. Married at twelve, mother at thirteen, and the unbending strategist of her son\'s improbable rise.',
  },
  {
    id: 'henry7', name: 'Henry VII', dates: 'r.1485–1509', house: 'tudor', x: 300, y: 545,
    text: 'Margaret\'s son Henry Tudor: an exile with a wisp of a claim who won at Bosworth, married Elizabeth of York, and fused the roses into the Tudor brand. Grandfather of {{elizabeth-i|Elizabeth I}}; father of {{henry-viii|Henry VIII}}.',
  },
  {
    id: 'elizabeth-york', name: 'Elizabeth of York', dates: '1466–1503', house: 'york', x: 505, y: 545,
    text: 'Edward IV\'s daughter. Her marriage to Henry VII in 1486 merged the rival claims — the union the Tudor rose (red outside, white inside) was designed to advertise.',
  },
]

const EDGES: [string, string][] = [
  ['edward3', 'blackprince'], ['edward3', 'gaunt'], ['edward3', 'york-duke'],
  ['blackprince', 'richard2'],
  ['gaunt', 'henry4'], ['henry4', 'henry5'], ['henry5', 'henry6'],
  ['gaunt', 'margaret-beaufort'],
  ['york-duke', 'richard-york'], ['richard-york', 'edward4'], ['richard-york', 'richard3'],
  ['edward4', 'edward5'], ['edward4', 'elizabeth-york'],
  ['margaret-beaufort', 'henry7'],
  ['henry7', 'elizabeth-york'],
]

const HOUSE_COLOR: Record<Node['house'], string> = {
  root: '#5c554a',
  lancaster: '#a03040',
  york: '#e8e4da',
  tudor: '#3d6b4f',
}

export function DynasticTree() {
  const [sel, setSel] = useState<string>('edward3')
  const active = NODES.find((n) => n.id === sel)!

  return (
    <figure className="my-7 rounded-lg border border-(--color-ink)/12 bg-(--color-card) px-5 py-4">
      <figcaption className="text-[11px] font-bold uppercase tracking-[0.14em] text-(--color-ink-soft) mb-1">
        Interactive · The Wars of the Roses family tree
      </figcaption>
      <p className="text-[12px] text-(--color-ink-faint) mb-2">
        Click a name. <span className="inline-block h-2.5 w-2.5 rounded-full align-middle mr-1" style={{ background: HOUSE_COLOR.lancaster }} />Lancaster
        <span className="inline-block h-2.5 w-2.5 rounded-full align-middle mx-1 ml-3 border border-black/20" style={{ background: HOUSE_COLOR.york }} />York
        <span className="inline-block h-2.5 w-2.5 rounded-full align-middle mx-1 ml-3" style={{ background: HOUSE_COLOR.tudor }} />Tudor
      </p>
      <div className="overflow-x-auto">
        <svg viewBox="0 0 680 600" className="w-full min-w-[560px] h-auto select-none">
          {EDGES.map(([a, b]) => {
            const na = NODES.find((n) => n.id === a)!
            const nb = NODES.find((n) => n.id === b)!
            return (
              <path
                key={`${a}-${b}`}
                d={`M${na.x},${na.y + 18} C${na.x},${(na.y + nb.y) / 2} ${nb.x},${(na.y + nb.y) / 2} ${nb.x},${nb.y - 18}`}
                fill="none"
                stroke="var(--color-ink)"
                strokeOpacity={sel === a || sel === b ? 0.55 : 0.18}
                strokeWidth={sel === a || sel === b ? 2 : 1.25}
              />
            )
          })}
          {NODES.map((n) => {
            const light = n.house === 'york'
            return (
              <g key={n.id} className="cursor-pointer" onClick={() => setSel(n.id)}>
                <rect
                  x={n.x - 88} y={n.y - 18} width={176} height={36} rx={7}
                  fill={HOUSE_COLOR[n.house]}
                  stroke={sel === n.id ? '#a97e2f' : 'rgba(0,0,0,0.25)'}
                  strokeWidth={sel === n.id ? 3 : 1}
                />
                <text x={n.x} y={n.y - 2} textAnchor="middle" fontSize="11.5" fontWeight={700}
                  fill={light ? '#2b2620' : '#fff'}>
                  {n.name.length > 30 ? `${n.name.slice(0, 29)}…` : n.name}
                </text>
                <text x={n.x} y={n.y + 12} textAnchor="middle" fontSize="9.5"
                  fill={light ? '#5c554a' : 'rgba(255,255,255,0.75)'}>
                  {n.dates}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
      <div className="mt-3 bg-(--color-paper-deep)/70 rounded-md px-4 py-3">
        <div className="text-[13px] font-bold mb-1">{active.name} <span className="font-normal text-(--color-ink-faint)">{active.dates}</span></div>
        <p className="prose-body text-[14.5px] leading-relaxed">{renderRich(active.text)}</p>
      </div>
      <p className="mt-2 text-[11px] text-(--color-ink-faint) italic">
        Simplified — several siblings and the whole Clarence line are omitted for clarity.
      </p>
    </figure>
  )
}
