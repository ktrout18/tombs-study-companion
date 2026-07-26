import type { MindMap } from '../../types'

// Original synthesis of this companion's ch05 content.
const map: MindMap = {
  intro:
    'c.1500–1603: a devout Catholic country is torn from Rome by royal command — and slowly remade as God\'s elect Protestant nation.',
  sections: [
    {
      title: 'The King\'s Great Matter',
      cells: [
        {
          h: 'Defender of the Faith',
          x: '{{henry-viii|Henry VIII}} writes against Luther — then Catherine of Aragon gives him no living son.',
          cue: 'The Reformation\'s motor: a king needing an heir.',
        },
        {
          h: 'Rome says no',
          x: 'The pope, in Emperor Charles V\'s power, refuses the annulment; Cromwell\'s answer — leave Rome.',
        },
        {
          h: 'Supremacy, 1534',
          x: 'The king becomes Supreme Head of the {{church-of-england|Church of England}}; Thomas More refuses the oath and dies.',
        },
        {
          h: 'Cranmer obliges',
          x: '{{thomas-cranmer|Cranmer}} annuls the marriage; Anne Boleyn is crowned — and beheaded three years later.',
        },
      ],
    },
    {
      title: 'Plunder and protest',
      cells: [
        {
          h: 'Monasteries dissolved',
          x: '1536–40: the {{dissolution-monasteries|dissolution}} closes some 800 houses; perhaps a quarter of England\'s land changes hands.',
        },
        {
          h: 'Winners with a stake',
          x: 'The Crown sells fast; gentry buyers now need the Reformation to keep their property.',
          cue: 'Land made the break irreversible.',
        },
        {
          h: 'Pilgrimage of Grace, 1536',
          x: 'The north rises under the Five Wounds — Tudor England\'s biggest rebellion. Henry promises pardons, hangs the leaders.',
        },
      ],
    },
    {
      title: 'The pendulum: three reigns',
      cells: [
        {
          h: 'Edward: real Protestantism',
          x: 'Under {{edward-vi|the boy-king}}, images smashed, altars stripped, worship rewritten in English in the {{book-of-common-prayer|Prayer Book}}.',
        },
        {
          h: 'Mary: Rome restored',
          x: '{{mary-i|Mary I}} brings back Catholicism to real relief — then burns some 280 Protestants, Cranmer among them.',
          cue: 'Five years that armed her enemies forever.',
        },
        {
          h: 'Elizabeth: the hybrid',
          x: '{{elizabeth-i|Elizabeth}}\'s settlement: Protestant doctrine in a traditional shell, worded so both camps half-recognize it.',
          cue: 'No windows into men\'s souls.',
        },
        {
          h: 'Neither side satisfied',
          x: 'Catholics squeezed into a persecuted minority; {{puritans|Puritans}} call the church half-reformed and press on.',
        },
      ],
    },
    {
      title: 'Armada and elect nation',
      cells: [
        {
          h: '1570: excommunication',
          x: 'The pope releases Elizabeth\'s subjects from obedience; Catholicism entangles with treason, and Mary Queen of Scots dies in 1587.',
        },
        {
          h: '1588: the Armada',
          x: 'Philip II\'s {{spanish-armada|130 ships}} wrecked by gunnery, fireships, and gales — read as God\'s verdict.',
          cue: 'The "Protestant wind".',
        },
        {
          h: 'Foxe beside the Bible',
          x: '{{foxes-martyrs|Foxe\'s Book of Martyrs}}, chained in churches, teaches the English they are an elect, persecuted people.',
        },
        {
          h: 'Anti-popery rules',
          x: '{{anti-popery|Fear of Rome}} becomes England\'s strongest political emotion for two hundred years.',
        },
      ],
    },
    {
      title: 'The hinge: unfinished settlement',
      cells: [
        {
          h: 'Compromise by longevity',
          x: 'Elizabeth makes her settlement stick by outliving everyone who hated it — 44 years.',
        },
        {
          h: 'Passions unresolved',
          x: 'The "Great Divide" will run from the {{gunpowder-plot|Gunpowder Plot}} to civil war to the fall of James II.',
        },
        {
          h: 'A Scottish king arrives',
          x: '1603: the crown passes to James, firm on the {{divine-right|divine right}} of kings. The storm gathers.',
          cue: 'Tudor passions + Stuart certainties = explosion.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Imposed', x: 'The {{reformation-england|Reformation}} came from above — statute, oath, and gallows, not popular demand.' },
    { h: 'Property', x: 'Monastic land sales created a class that could not afford Rome\'s return.' },
    { h: 'Pendulum', x: 'Henry, Edward, Mary, Elizabeth: four reigns, four religious directions in thirty years.' },
    { h: 'Fusion', x: 'Armada deliverance and Foxe\'s martyrs weld Protestantism to Englishness.' },
    { h: 'Tombs\' argument', x: 'Pre-Reformation faith was healthy and loved; obedience, property, and time made the new religion stick — then fear made it patriotic.' },
    { h: 'Great Divide', x: 'The deepest rupture in English history: a nation cut off from its own past, its politics religious for 150 years.' },
    { h: 'Unfinished', x: 'Elizabeth leaves both discontents alive — Puritan and Catholic — for the seventeenth century to inherit.' },
  ],
  chain:
    'No son → break with Rome → plunder → pendulum swings → Armada deliverance → Protestant identity → a divide that runs to civil war.',
}

export default map
