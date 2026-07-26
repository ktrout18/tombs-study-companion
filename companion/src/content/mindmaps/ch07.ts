import type { MindMap } from '../../types'

// Original synthesis of this companion's ch07 content.
const map: MindMap = {
  intro:
    'c.1660–1760: Newton, Locke, coffee, and print make England the {{enlightenment|Enlightenment}}\'s model society — comfortable, commercial, and in no mood for revolution.',
  sections: [
    {
      title: 'Reason\'s two founders',
      cells: [
        {
          h: 'Newton reads the universe',
          x: 'The *Principia* (1687): the same mathematics runs the falling apple and the orbiting moon.',
          cue: 'God said "Let Newton be" — and all was light.',
        },
        {
          h: 'The Royal Society',
          x: 'Founded 1660 under {{charles-ii|Charles II}}\'s charter: do the experiment, show the evidence, argue politely.',
        },
        {
          h: 'Locke\'s consenting state',
          x: 'Government rests on consent, exists for life, liberty, property — and forcing consciences is wicked and useless.',
        },
        {
          h: 'Faith and reason, allies',
          x: 'Neither man fought Christianity; both thought reason and faith agreed — the English movement\'s signature.',
        },
      ],
    },
    {
      title: 'Rooms for ideas',
      cells: [
        {
          h: 'Coffee-house England',
          x: 'Hundreds in {{london|London}} by 1700 — cheap, sober, open to any penny, newspapers on every table.',
          cue: 'A penny buys admission to the argument.',
        },
        {
          h: 'Censorship just lapses',
          x: '1695: {{parliament|Parliament}} declines to renew press licensing — the world\'s freest press, almost by accident.',
        },
        {
          h: 'The *Spectator*\'s school',
          x: 'Addison and Steele teach a commercial nation "politeness": easy, tolerant manners for strangers doing business.',
        },
        {
          h: 'Politeness as politics',
          x: 'The deliberate cure for zeal after civil war and {{puritans|Puritan}} rule — wit over enthusiasm, coffee-house over conventicle.',
        },
      ],
    },
    {
      title: 'A nation of shoppers',
      cells: [
        {
          h: 'The consumer revolution',
          x: 'High wages spread wealth broadly: tea, sugar, cotton prints, clocks, and china reach ordinary homes.',
        },
        {
          h: 'Defoe\'s modern hero',
          x: 'The tradesman — and Crusoe, whose island becomes a well-run enterprise.',
          cue: 'The castaway keeps accounts.',
        },
        {
          h: 'Hogarth\'s mirror',
          x: '*Gin Lane* and the *Rake* scold the age\'s greed — and sell as prints through the very market they mock.',
        },
      ],
    },
    {
      title: 'The counter-current',
      cells: [
        {
          h: 'A heart strangely warmed',
          x: '1738: Wesley\'s conversion turns a cool, sermon-heavy {{church-of-england|Church of England}} inside out.',
        },
        {
          h: 'Preaching in the fields',
          x: 'Wesley and Whitefield reach the miners and weavers the parish barely touched — crowds of thousands, weeping and organizing.',
        },
        {
          h: 'Shadow, not opposite',
          x: '{{methodism|Methodism}} as the Enlightenment\'s corrective, Tombs argues — and a seedbed of chapels, self-help, and later unions.',
          cue: 'Warm religion for a cool age.',
        },
      ],
    },
  ],
  keys: [
    { h: 'The head start', x: 'England could be calmly enlightened because its revolution had already happened — the {{glorious-revolution|Glorious Revolution}} predates the philosophers.' },
    { h: 'Improvement, not subversion', x: 'Better farming, manners, and pumps — while French writers had to attack throne and altar.' },
    { h: 'The public sphere', x: 'Coffee-houses, clubs, and an accidentally free press give ideas rooms to live in.' },
    { h: 'Politeness', x: 'Not etiquette but a political cure: manners and reputation police a society with a weak state.' },
    { h: 'Commerce underneath', x: 'The consumer revolution pays for the talk; even satire sells.' },
    { h: 'Tombs\' argument', x: 'The {{enlightenment|Enlightenment}}\'s model society felt no need to be revolutionary — the {{restoration|post-1660}} order absorbed its own critics.' },
    { h: 'The hinge', x: 'Europe\'s paradox — most modern, most stable. But how free, and for whom? Next chapter\'s question.' },
  ],
  chain:
    'Revolution already done → reason allied with faith → free press + coffee-houses → politeness replaces zeal → commerce enriches → Methodism warms the gaps → stability that fascinates Europe.',
}

export default map
