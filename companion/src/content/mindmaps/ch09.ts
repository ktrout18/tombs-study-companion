import type { MindMap } from '../../types'

// Original synthesis of this companion's ch09 content.
const map: MindMap = {
  intro:
    'c.1600–1783: an Atlantic nation assembled by accident, crowned in 1759, broken at Yorktown — and barely dented by the loss.',
  sections: [
    {
      title: 'An empire by accident',
      cells: [
        {
          h: 'No master plan',
          x: 'The first empire accretes: merchants, adventurers, and refugees, not statesmen, do the planting.',
          cue: 'Empire as a side effect.',
        },
        {
          h: 'Company charter, 1600',
          x: 'The {{east-india-company|East India Company}} sails for spices and drifts into cotton, tea, and Indian forts.',
        },
        {
          h: 'Virginia and New England',
          x: 'Jamestown (1607) for profit, nearly starves; {{puritans|Puritan}} New England (from 1620) for God — and multiplies.',
        },
        {
          h: 'Free-born colonists',
          x: 'By the 1760s the {{thirteen-colonies|thirteen colonies}} hold two million — well fed, literate, lightly taxed, self-governing.',
          cue: 'Englishmen overseas, and they know it.',
        },
      ],
    },
    {
      title: 'The slave-sugar heart',
      cells: [
        {
          h: 'Richest and darkest',
          x: 'Barbados and Jamaica, the wealthiest English places, run on {{atlantic-slavery|slavery}}.',
        },
        {
          h: 'Three million carried',
          x: 'British ships move more Africans than any other nation\'s in the eighteenth century; plantations consume lives.',
        },
        {
          h: 'Profits flow home',
          x: 'Sugar, tobacco, and the trade enrich Bristol and Liverpool and feed the {{fiscal-military-state|fiscal-military state}}.',
        },
        {
          h: 'The counter-movement',
          x: 'Quakers refuse, Somerset\'s case (1772) frees England\'s air, and {{abolitionism|abolitionism}} becomes a mass movement by the 1780s.',
          cue: 'The crime — and the first campaign against it — both English.',
        },
        {
          h: 'Williams debate',
          x: 'Did slave money fund {{industrial-revolution|industrialization}}? Larger than sceptics said, but no serious estimate makes it the engine.',
        },
      ],
    },
    {
      title: 'Zenith: 1759',
      cells: [
        {
          h: 'Five wars with France',
          x: '1689–1783, from Flanders to the Ohio valley to the Carnatic: empire means war.',
        },
        {
          h: 'Pitt\'s formula',
          x: 'Subsidize European allies on borrowed money; let the {{royal-navy|Navy}} strip France of empire.',
          cue: 'Credit fights; France pays.',
        },
        {
          h: 'Year of victories',
          x: '1759: Minden, Wolfe at Quebec, Lagos and Quiberon Bay — French sea power broken.',
        },
        {
          h: 'Peace of 1763',
          x: 'Britain keeps Canada; after Plassey (1757) the {{east-india-company|Company}} is a territorial power in Bengal.',
        },
      ],
    },
    {
      title: 'An English quarrel',
      cells: [
        {
          h: 'Victory\'s bill',
          x: 'War doubles the {{national-debt|national debt}}; the protected colonies pay almost none of it.',
        },
        {
          h: '1640 replayed',
          x: 'Stamp Act and tea duty meet the old cry: no taxation without representation.',
          cue: 'Both sides quote the same lawyers.',
        },
        {
          h: 'A civil war',
          x: 'The {{american-revolution|Revolution}} fought over English rights — {{magna-carta|ancestral liberties}}, the constitution of 1688 — with loyalists a fifth of colonists.',
        },
        {
          h: 'France decides it',
          x: 'After Saratoga (1777), Bourbon fleets join; Chesapeake held, Cornwallis surrenders at Yorktown (1781).',
        },
      ],
    },
    {
      title: 'The fall that barely hurt',
      cells: [
        {
          h: 'Peace of Paris, 1783',
          x: 'The United States recognized — and traded with at once.',
        },
        {
          h: 'Ruin cancelled',
          x: 'Trade with free America beats colonial levels within a decade; debt absorbed, fleet rebuilt.',
          cue: 'The prophets of doom were all wrong.',
        },
        {
          h: 'Pivot east and inward',
          x: 'Bengal becomes a second empire while the first falls; Arkwright and Watt start the {{industrial-revolution|Industrial Revolution}} at home.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Accretion', x: 'The first empire was assembled piecemeal by traders and settlers, never designed.' },
    { h: 'Slavery', x: 'Sugar and the {{atlantic-slavery|slave trade}} were the empire\'s economic heart — and its enormous crime.' },
    { h: 'Abolition begins', x: 'The same commercial society bred {{abolitionism|the first mass campaign}} to destroy the trade.' },
    { h: '1759', x: 'Pitt\'s borrowed-money global war beats France on three continents.' },
    { h: 'English v. English', x: 'The {{american-revolution|Revolution}} was a quarrel over shared rights; French sea power settled it.' },
    { h: 'Tombs\' argument', x: 'The fall proved empire contingent — the real asset was the machine of credit, navy, and taxes.' },
    { h: 'Hinge', x: 'Colonies lost, system intact: Britain enters the next French war stronger.' },
  ],
  chain:
    'Accidental empire → war debt → taxing the colonies → English rights rebellion → French intervention → Yorktown → and the machine that won it all survives untouched.',
}

export default map
