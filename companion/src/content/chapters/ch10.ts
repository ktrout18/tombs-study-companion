import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'ch10',
  part: 4,
  number: '10',
  title: "The First Industrial Nation",
  era: "c.1760–c.1850",
  blurb:
    'Somewhere around 1780, in the sheds and valleys of the English north, the oldest constraint on human life — muscle power — began to give way. The {{industrial-revolution|Industrial Revolution}} happened first in England, and Tombs asks the awkward questions: why here, who paid the price, and what did a freak century of supremacy do to the English mind?',
  blocks: [
    {
      t: 'p',
      x: 'No government planned it. No philosopher predicted it. Yet between roughly 1760 and 1850 England became the first society in history to escape the trap that had bound every civilization before it: the limit set by land, wood, wind, and muscle. The {{industrial-revolution|Industrial Revolution}} is the hinge of Tombs\' whole book — the moment a middling offshore kingdom acquired, almost absent-mindedly, powers no state had ever held. Contemporaries barely noticed at first. The word "industrial revolution" itself came later, from the French, who watched it the way people watch a neighbour\'s house catch fire.',
    },
    { t: 'h', x: 'Cotton, coal, iron, steam' },
    {
      t: 'p',
      x: 'The change ran on four things. Cotton came first: spinning machines — Hargreaves\' jenny, Arkwright\'s water frame, Crompton\'s mule — multiplied one worker\'s output hundreds of times, and Lancashire mills clothed the world in cheap cloth. Coal freed England from the forest; by 1850 it dug more than the rest of the world combined. Iron, smelted with coke instead of charcoal, gave bridges, rails, and machines. And steam — Watt\'s improved engine from the 1770s — turned coal into motion, so that a factory no longer needed a river and a mine no longer drowned. None of these was a single stroke of genius. Each was a chain of small fixes by practical men: millwrights, clockmakers, instrument makers, ironmasters. Tinkering, not theory.',
    },
    { t: 'h', x: 'Canals, then railways' },
    {
      t: 'p',
      x: 'Heavy goods move badly on mud roads, so England first webbed itself with canals — hand-dug, privately financed, halving the price of coal wherever they reached. Then came the leap. In 1829 Stephenson\'s *Rocket* won the Rainhill trials, and the next year the Liverpool and Manchester line opened: the first passenger railway worked entirely by steam. The 1840s brought railway mania — thousands of miles authorized in a speculative frenzy that ruined many investors and equipped the nation anyway. Railways compressed England: fresh food in the cities, cheap travel for millions, national newspapers by morning, and, from 1847, a single "railway time" in place of the old local noons.',
    },
    {
      t: 'timeline',
      title: 'The take-off',
      events: [
        { year: '1769', label: 'Watt patents his steam engine', detail: 'A separate condenser makes steam power efficient enough to leave the mineshaft.' },
        { year: '1771', label: 'Arkwright opens Cromford mill', detail: 'Water-powered spinning under one roof: the factory system in embryo.' },
        { year: '1779', label: 'The Iron Bridge rises', detail: 'The world\'s first iron bridge, at Coalbrookdale — a boast in metal.' },
        { year: '1829', label: 'The *Rocket* wins at Rainhill', detail: 'Stephenson\'s locomotive proves steam can haul people fast and reliably.' },
        { year: '1830', label: 'Liverpool–Manchester railway opens', detail: 'The modern railway is born; a cabinet minister is run over on opening day.' },
        { year: '1840s', label: 'Railway mania', detail: 'A speculative bubble lays thousands of miles of track and wires the nation together.' },
        { year: '1851', label: 'The Great Exhibition', detail: 'Six million visitors — many arriving on cheap excursion trains — see the workshop of the world on display in the Crystal Palace.' },
      ],
    },
    { t: 'h', x: 'Why England first?' },
    {
      t: 'p',
      x: 'The oldest question in economic history has no settled answer, and Tombs lays out the contenders rather than crowning one. One school points to prices: English wages were high and English coal was cheap, so machines that swapped fuel for labour paid for themselves in Lancashire when they would not in Languedoc. Another points to institutions: secure property, patent law, a {{parliament|Parliament}} of investors, no internal customs barriers. A third points to culture — that artisan world of dissenting academies, provincial societies, and workshop tinkering. And a fourth points outward: {{british-empire|empire}} and the {{royal-navy|Navy}} held open the markets, from American cotton fields to Indian customers, that made mass production worth attempting. Probably the honest answer is: all of these, tangled together, on one island.',
    },
    {
      t: 'reading',
      title: 'The standard-of-living debate',
      blocks: [
        {
          t: 'p',
          x: 'Did industrialization make ordinary people better off? This is the longest-running fight in English economic history. Pessimists — from contemporary radicals to later historians like E. P. Thompson — point to slum housing, foul air, child labour, and the misery of handloom weavers whose trade the machines destroyed. Optimists reply with the numbers: real wages, roughly flat before 1820, clearly rising after about 1840, and a population that doubled without famine — something pre-industrial England could never have done.',
        },
        {
          t: 'p',
          x: 'The truce most historians now accept: the first two generations gained little and lost much that was hard to measure — clean air, open space, control of their own time — while their grandchildren gained enormously. Tombs leans mildly optimist, but insists the question stay open: both sides are describing things that really happened, often in the same town.',
        },
      ],
    },
    { t: 'h', x: 'The people multiply' },
    {
      t: 'p',
      x: 'Alongside the machines ran a quieter revolution: people. England\'s population had crawled for centuries; now it exploded — earlier marriage, more work for the young, better food. And the new people went to the towns. The census of 1851 recorded something no census anywhere had ever shown: a majority of the population living in towns and cities. Manchester, Leeds, and Birmingham had grown from market towns into smoke-hung giants within living memory, and {{london|London}} was the largest city on earth. The same year, the Great Exhibition put the results under glass: machines, manufactures, and six million visitors filing through a palace of iron and glass in Hyde Park.',
    },
    {
      t: 'chart',
      kind: 'line',
      title: 'Population of England',
      unit: 'millions',
      xLabel: 'year',
      series: [
        {
          name: 'England',
          points: [
            { x: 1751, y: 5.9 },
            { x: 1801, y: 8.3 },
            { x: 1851, y: 16.9 },
            { x: 1901, y: 30.5 },
          ],
        },
      ],
      note: 'Figures are approximate; the 1751 estimate predates the first census (1801).',
    },
    {
      t: 'argument',
      x: 'Tombs argues the take-off was gradual, homegrown, and unplanned — the work of obscure practical men, not statesmen or systems. Its deepest legacy was mental. For about a century England enjoyed a supremacy no nation had ever held, a freak of timing that the English came to mistake for the natural order of things. When other nations inevitably caught up, the return to normality felt like failure — and {{declinism|declinism}}, the conviction that something had gone deeply wrong with England, was born from a misreading of what the good years had been.',
    },
    {
      t: 'p',
      x: 'But the machines did not run in a quiet world. The same decades that built the mills saw England locked in the longest war in its modern history, against an idea as much as an army. That war is the next chapter.',
    },
  ],
}

export default chapter
