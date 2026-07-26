import type { MindMap } from '../../types'

// Original synthesis of this companion's ch13 content.
const map: MindMap = {
  intro:
    'High Victorian England, c.1850–1901: a chapel-and-club society that ran itself — while the industrial lead quietly slipped away under the bunting.',
  sections: [
    {
      title: 'The age of equipoise',
      cells: [
        {
          h: 'Calm after the storms',
          x: 'Wages rise, {{free-trade|free trade}} cheapens bread, {{chartism|Chartism}} melts into friendly societies and savings banks.',
          cue: 'The 1840s\' fury banks its wages.',
        },
        {
          h: 'Self-help gospel',
          x: 'Smiles\' 1859 bestseller preaches {{victorian-values|thrift and respectability}} — to artisans as much as the middle class.',
        },
        {
          h: 'Chapel builds the nation',
          x: 'Church and chapel run schools, missions, and charities on a scale no state matches.',
        },
        {
          h: 'Loud faith, gnawing doubt',
          x: 'Darwin and biblical criticism unsettle believers; the 1851 census shows barely half attend worship.',
          cue: 'Victorian faith shouts because it worries.',
        },
      ],
    },
    {
      title: 'Gladstone against Disraeli',
      cells: [
        {
          h: 'The moral volcano',
          x: '{{gladstone|Gladstone}} treats budgets as sermons; Midlothian, 1879–80, invents modern electioneering.',
        },
        {
          h: 'The ironic showman',
          x: '{{disraeli|Disraeli}} offers Tory democracy and imperial romance, crowning {{victoria|Victoria}} Empress of India, 1876.',
        },
        {
          h: 'Combat inside the rules',
          x: 'Genuine loathing, fought entirely within the constitution — the habit that awes foreign observers.',
          cue: 'Deadly duels, no blood.',
        },
      ],
    },
    {
      title: 'Democracy by instalments',
      cells: [
        {
          h: 'Leap in the dark',
          x: '1867: Disraeli\'s {{second-reform-act|Second Reform Act}} enfranchises urban working men, roughly doubling the electorate.',
        },
        {
          h: 'Counties follow, 1884',
          x: 'Gladstone extends the household franchise; working men become the majority of voters.',
        },
        {
          h: 'Reform\'s luggage',
          x: 'Secret ballot 1872, board schools 1870, legal {{trade-unions|trade unions}} in the 1870s.',
        },
        {
          h: 'No plan, no shot',
          x: 'The constitution democratizes itself piecemeal — unwritten, unforced, unfinished.',
          cue: 'Revolution by committee stages.',
        },
      ],
    },
    {
      title: 'Government by volunteers',
      cells: [
        {
          h: 'Whitehall stays small',
          x: 'Hospitals, orphanages, and burial clubs run on subscription and volunteered time.',
        },
        {
          h: 'Civic gospel',
          x: 'Chamberlain\'s Birmingham buys the gas and water, clears slums, builds parks and libraries.',
          cue: 'Municipal energy as religion.',
        },
        {
          h: 'The widow reinvented',
          x: '{{victoria|Victoria}}, unpopular in seclusion after 1861, returns via jubilees as the empire\'s grandmother.',
        },
      ],
    },
    {
      title: 'The hinge: decline discovered',
      cells: [
        {
          h: 'The numbers turn',
          x: 'Germany and America out-produce England in steel; the new industries — chemicals, electricity — are theirs.',
        },
        {
          h: '"Made in Germany"',
          x: 'The 1896 scare-phrase: rivals\' goods on English shelves, panic in the London press.',
        },
        {
          h: 'Arithmetic read as failure',
          x: 'A small island\'s freak supremacy ends; the English hunt culprits instead of accepting normality.',
          cue: 'Losing a lead that was always on loan.',
        },
        {
          h: 'Declinism is born',
          x: '{{declinism|Declinism}}, minted in the 1890s, becomes a permanent habit of national self-doubt.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Equipoise', x: 'The 1850s–60s calm: prosperity and {{free-trade|cheap food}} dissolve the anger of the 1840s.' },
    { h: 'Self-help', x: '{{victorian-values|Respectability, thrift, improvement}} — a morality shared across classes, powered by religion.' },
    { h: 'The duel', x: '{{gladstone|Gladstone}} and {{disraeli|Disraeli}} school the new electorate in fighting by the rules.' },
    { h: 'Reform', x: '1867 and 1884 make working men the voting majority — piecemeal, peaceful, unplanned.' },
    { h: 'Voluntary state', x: 'Chapel, charity, and town hall do what bureaucracies do elsewhere.' },
    { h: 'Tombs\' argument', x: 'So orderly a society needed so small a state because moral consensus governed it.' },
    { h: 'Decline misread', x: 'Rivals catching up was arithmetic; the English called it failure — {{declinism|declinism}} stuck.' },
  ],
  chain:
    'Freak industrial lead → rivals industrialize → relative share falls → normality misread as failure → declinism becomes a national habit.',
}

export default map
