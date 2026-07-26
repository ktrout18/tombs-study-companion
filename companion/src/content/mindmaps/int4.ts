import type { MindMap } from '../../types'

// Original synthesis of this companion's int4 content.
const map: MindMap = {
  intro:
    'How the Victorians imagined "English": free-born John Bull, a providential march to liberty, Anglo-Saxon blood — and a nation of townsmen dreaming of a village.',
  sections: [
    {
      title: 'The free-born Englishman',
      cells: [
        {
          h: 'John Bull',
          x: 'Stout, beef-fed, plain-spoken — suspicious of foreigners and of his own government alike.',
        },
        {
          h: 'Saxon liberties',
          x: 'Freedom rooted in Saxon times, merely restored by {{magna-carta|Magna Carta}} — the {{norman-yoke|Norman Yoke}} in Sunday clothes.',
          cue: 'An old folk tale, freshly dressed.',
        },
        {
          h: 'Macaulay\'s bestseller',
          x: '{{whig-history|Whig history}} polished: {{macaulay|Macaulay}} sells the march from despotism to liberty, 1688 as hinge.',
        },
        {
          h: 'Story over scholarship',
          x: 'Superb storytelling, dubious history — and the Victorians cannot get enough.',
        },
      ],
    },
    {
      title: 'Liberty\'s darker twin: blood',
      cells: [
        {
          h: 'Anglo-Saxonism',
          x: 'English freedom and energy explained as inherited traits of a Germanic race.',
        },
        {
          h: 'Crossing the Atlantic',
          x: 'Americans borrow it to claim kinship with England and a manifest destiny of their own.',
        },
        {
          h: 'From quaint to poisonous',
          x: 'Antiquarian pride shades into race-thinking that later centuries will pay for.',
          cue: 'The lecture hall\'s long shadow.',
        },
      ],
    },
    {
      title: 'The urban nation\'s rural dream',
      cells: [
        {
          h: 'Most urban on earth',
          x: 'By 1900, the first society with a town-dwelling majority — the {{industrial-revolution|Industrial Revolution}}\'s doing.',
        },
        {
          h: 'Englishness goes rural',
          x: 'South Country thatch, Elgar\'s hills, garden cities, folk songs collected before they vanish.',
          cue: 'Nostalgia arrives exactly when the fields empty.',
        },
        {
          h: 'A myth built by townsmen',
          x: 'Village England shapes planning, poetry, war memorials, the green belt — an imagined home.',
        },
      ],
    },
    {
      title: 'Gentlemen, and the missing England',
      cells: [
        {
          h: 'The gentleman ideal',
          x: 'Conduct over birth: fair play, understatement, amateurism, a straight bat.',
        },
        {
          h: 'Public-school factory',
          x: 'Reformed schools turn brewers\' sons into prefects and export the type to run the {{british-raj|Raj}}.',
          cue: '{{victorian-values|Earnestness}} the spine, games the religion.',
        },
        {
          h: '"English" means "British"',
          x: 'England is the default within {{britishness|Britishness}} — needing no flag or anthem of its own.',
        },
        {
          h: 'Confidence unexamined',
          x: 'That ease will look very different once empire, then Union, come into question.',
        },
      ],
    },
  ],
  keys: [
    { h: 'John Bull', x: 'The free-born Englishman: liberty as birthright, government as suspect.' },
    { h: 'Whig march', x: '{{macaulay|Macaulay}} turns national history into a providential success story — loved, and dubious.' },
    { h: 'Blood', x: 'Anglo-Saxonism racializes liberty and travels to America.' },
    { h: 'Village dream', x: 'The world\'s most urban people locate their real nation in a countryside they left.' },
    { h: 'Tombs\' argument', x: 'The rural myth was manufactured by townsmen — and proved one of the longest-lived myths of all.' },
    { h: 'Default nation', x: '"English" stands in for "British"; England never learns to define itself apart.' },
  ],
  chain:
    'Industrial towns → longing for the village → a rural myth made by townsmen → an England imagined where the English did not live.',
}

export default map
