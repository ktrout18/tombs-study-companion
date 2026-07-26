import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'conclusion',
  part: 8,
  title: 'The English and Their History',
  subtitle: 'Conclusion',
  era: 'the long view',
  blurb:
    "Tombs closes by gathering the threads: what fifteen centuries add up to, why the gloomy national self-image is wrong, and what the English question — who speaks for England inside Britain? — now demands.",
  blocks: [
    {
      t: 'p',
      x: 'The conclusion returns to the question of the introduction — who do the English think they are? — with the whole story now behind it. Three answers organize it. The English are **old**: the state built by {{alfred-the-great|Alfred}}\'s heirs has run continuously, under conquerors, usurpers, and parliaments, for over a thousand years. They are **lucky**, in ways they rarely notice: an island moat, early unity, no successful invasion since {{norman-conquest|1066}}, no revolution since {{glorious-revolution|1688}}. And they are **gloomy about themselves** to a degree the record does not support.',
    },
    {
      t: 'argument',
      title: 'Against declinism, one last time',
      x: 'Set against any long yardstick, England\'s modern history is a success story: continuously rich, law-governed, and free by world standards; victorious (at ruinous cost) in both world wars; its language, law, and institutions copied worldwide. {{declinism|Declinism}} mistook the end of an abnormal supremacy — the freak windfall of being the {{industrial-revolution|first industrial nation}} — for failure. Bad history, Tombs repeats, makes bad politics: nations that believe they are failing do desperate things.',
    },
    { t: 'h', x: 'Memory as inheritance and burden' },
    {
      t: 'p',
      x: 'The book\'s second thread also knots here: the English live inside their history whether they know it or not. The {{whig-history|Whig}} epic gave them constitutional self-confidence; {{foxes-martyrs|Foxe}} gave them providential exceptionalism; the {{war-poets|trenches-as-futility}} story gave them irony about power; the {{second-world-war|finest hour}} gave them a standard no later decade could meet — and {{declinism|decline}} was the hangover. Each was a *reading* of events, contestable and contested; each governed behaviour for generations. A people cannot choose to have no myths, only to examine the ones they have.',
    },
    {
      t: 'reading',
      title: 'The English question',
      blocks: [
        {
          t: 'p',
          x: 'Tombs finishes on the constitutional oddity of his subject. England is the only nation of the United Kingdom without its own parliament or political identity: {{devolution|devolution}} gave Scotland and Wales institutions, while England was governed as if it were simply Britain. With the {{british-empire|empire}} gone — the project that made {{britishness|Britishness}} worth the candle — and the 2014 Scottish referendum exposing the Union\'s mortality, Englishness has been coming quietly back: in surveys, in flags, in resentments. What it will become, the book — ending in 2014 — leaves open, with a characteristic preference for calm adaptation over panic.',
        },
      ],
    },
    {
      t: 'p',
      x: 'His final register is neither triumphal nor elegiac but appreciative: a nation with an unusually long, unusually well-documented habit of muddling through, whose gravest modern error would be to believe its own declinist story. The English, he suggests, could do worse than know their history better — not to worship it, but to stop being ruled by the myths that grow where knowledge is missing. It is, deliberately, the moral {{bede|Bede}} would have recognized: the English remain a people constituted by the books they write about themselves.',
    },
    {
      t: 'timeline',
      title: 'The whole story on one spine',
      events: [
        { year: 'c.600', label: 'Kingdoms and conversion', detail: 'The {{heptarchy|Heptarchy}}; {{bede|Bede}} imagines "the English".' },
        { year: '937', label: 'One England', detail: '{{athelstan|Æthelstan}}\'s realm — the state that never since dissolved.' },
        { year: '1066', label: 'Conquest', detail: 'The elite replaced; the state endures — see {{norman-conquest|the Conquest}}.' },
        { year: '1215', label: 'Law above the king', detail: '{{magna-carta|Magna Carta}} plants the constitutional seed.' },
        { year: '1534', label: 'The Great Divide opens', detail: '{{reformation-england|Reformation}}: religion becomes the axis of politics for 150 years.' },
        { year: '1688', label: 'The last revolution', detail: '{{glorious-revolution|1688}} settles king-in-parliament; the {{fiscal-military-state|fiscal-military state}} follows.' },
        { year: 'c.1780', label: 'The great acceleration', detail: 'The {{industrial-revolution|first industrial nation}} — the abnormal supremacy begins.' },
        { year: '1940', label: 'The finest hour', detail: '{{second-world-war|Standing alone}} — the myth every later decade is measured against.' },
        { year: '2014', label: 'The English question', detail: 'The Scottish referendum ends the book: England, old nation, uncertain state.' },
      ],
    },
  ],
}

export default chapter
