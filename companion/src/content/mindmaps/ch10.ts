import type { MindMap } from '../../types'

// Original synthesis of this companion's ch10 content.
const map: MindMap = {
  intro:
    'c.1760–1850: England slips the ancient limit of muscle, wood, and wind — unplanned, unpredicted, and first.',
  sections: [
    {
      title: 'Four materials of escape',
      cells: [
        {
          h: 'Cotton leads',
          x: 'Jenny, water frame, mule: one spinner\'s output multiplied hundreds of times; Lancashire clothes the world.',
        },
        {
          h: 'Coal replaces forest',
          x: 'By 1850 England digs more coal than the rest of the world combined.',
          cue: 'Buried sunlight instead of trees.',
        },
        {
          h: 'Iron with coke',
          x: 'Charcoal abandoned; bridges, rails, and machines follow.',
        },
        {
          h: 'Steam moves it',
          x: 'Watt\'s engine (1770s) turns coal into motion — factories leave the river, mines stop drowning.',
        },
        {
          h: 'Tinkerers, not theorists',
          x: 'Chains of small fixes by millwrights, clockmakers, and ironmasters — no single genius stroke.',
          cue: 'Workshop, not university.',
        },
      ],
    },
    {
      title: 'Canals, then railways',
      cells: [
        {
          h: 'Hand-dug web',
          x: 'Private canals halve the price of coal wherever they reach.',
        },
        {
          h: 'Rainhill, 1829',
          x: 'Stephenson\'s *Rocket* wins the trials; the Liverpool–Manchester line follows in 1830 — first all-steam passenger railway.',
        },
        {
          h: 'Railway mania',
          x: '1840s speculation ruins investors and equips the nation anyway.',
          cue: 'The bubble that built something.',
        },
        {
          h: 'England compressed',
          x: 'Fresh food, cheap travel, morning newspapers, and one national "railway time" from 1847.',
        },
      ],
    },
    {
      title: 'Why England first?',
      cells: [
        {
          h: 'Prices',
          x: 'High wages plus cheap coal: machines pay in Lancashire, not Languedoc.',
        },
        {
          h: 'Institutions',
          x: 'Secure property, patents, a {{parliament|Parliament}} of investors, no internal customs.',
        },
        {
          h: 'Culture',
          x: 'Dissenting academies, provincial societies, workshop tinkering.',
        },
        {
          h: 'Empire and Navy',
          x: '{{british-empire|Empire}} and the {{royal-navy|Navy}} hold open the markets that make mass production worthwhile.',
        },
        {
          h: 'Honest answer',
          x: 'Every factor at once, knotted together on a single island.',
          cue: 'No single key — a lock of many tumblers.',
        },
      ],
    },
    {
      title: 'The people multiply',
      cells: [
        {
          h: 'Population explodes',
          x: 'Earlier weddings, more jobs for the young, better diet: numbers double without famine.',
        },
        {
          h: 'Urban majority, 1851',
          x: 'The census shows most people in towns — a first for any nation anywhere.',
          cue: 'The first census anywhere to show an urban majority.',
        },
        {
          h: 'Instant giants',
          x: 'Manchester, Leeds, Birmingham swell from market towns within living memory; {{london|London}} is the world\'s largest city.',
        },
        {
          h: 'Crystal Palace',
          x: '1851: six million come, many by excursion train, to view the workshop of the world.',
        },
      ],
    },
    {
      title: 'Costs and afterglow',
      cells: [
        {
          h: 'Standard-of-living fight',
          x: 'Pessimists cite slums, child labour, ruined weavers; optimists cite rising wages after 1840.',
        },
        {
          h: 'The truce',
          x: 'First generations gained little, lost clean air and their own time; grandchildren gained enormously.',
        },
        {
          h: 'A freak century',
          x: 'Supremacy no nation ever held — mistaken by the English for the natural order.',
          cue: 'Luck read as destiny.',
        },
      ],
    },
  ],
  keys: [
    { h: 'The escape', x: 'The {{industrial-revolution|Industrial Revolution}} breaks the ancient limit of land and muscle — first, here.' },
    { h: 'Tinkering', x: 'Gradual, homegrown, unplanned: practical men, not statesmen or systems.' },
    { h: 'Coal + cotton + steam', x: 'Cheap fuel plus dear labour makes machines pay in England before anywhere.' },
    { h: 'Compression', x: 'Canals then railways shrink the island and wire it into one market.' },
    { h: 'Urban nation', x: 'By 1851 most English live in towns — the first such society in history.' },
    { h: 'Contested gains', x: 'Two generations pay in smoke and lost time before wages clearly rise.' },
    { h: 'Tombs\' argument', x: 'The deepest legacy was mental: supremacy read as normal, so normality later felt like failure — {{declinism|declinism}} born.' },
  ],
  chain:
    'Cheap coal + dear labour → machines pay → factories and railways → urban majority → a freak supremacy → others catch up → decline felt where none was.',
}

export default map
