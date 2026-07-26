import type { MindMap } from '../../types'

// Original synthesis of this companion's int1 content.
const map: MindMap = {
  intro:
    'The least-documented centuries of English history became the most rewritten: every later age found the Anglo-Saxons it went looking for.',
  sections: [
    {
      title: 'The story survives 1066',
      cells: [
        {
          h: 'Monks refuse to forget',
          x: 'William of Malmesbury and Henry of Huntingdon stitch the old English kings into the new Norman order.',
          cue: 'Mixed-blood historians, one story.',
        },
        {
          h: 'Chronicle kept in English',
          x: 'At Peterborough the Anglo-Saxon Chronicle runs on in English until 1154.',
        },
        {
          h: 'Bede\'s invention endures',
          x: '{{bede|Bede}}\'s idea — a people who know themselves through history books — outlives the {{norman-conquest|Conquest}} that defeated them.',
        },
      ],
    },
    {
      title: 'The Norman Yoke myth',
      cells: [
        {
          h: 'Free Saxons, foreign tyranny',
          x: 'The myth: before 1066 the English ruled themselves; the {{norman-yoke|Norman Yoke}} stole that freedom.',
        },
        {
          h: 'Levellers claim a birthright',
          x: '1640s: the {{levellers|Levellers}} demand the vote as an ancient liberty stolen, not a novelty.',
          cue: 'Radicals asking for their past back.',
        },
        {
          h: 'Bad history, lasting habit',
          x: 'The Conquest did not destroy English law — but the myth fixed a national reflex anyway.',
        },
      ],
    },
    {
      title: 'Ancestors for hire',
      cells: [
        {
          h: 'Parker\'s Protestant Saxons',
          x: 'Tudor {{reformation-england|Reformation}} scholars mine monastic wreckage to prove {{church-of-england|Henry\'s church}} a return, not a rupture.',
        },
        {
          h: 'Coke\'s immemorial law',
          x: 'Lawyers cast the {{common-law|common law}} as custom older than any conqueror.',
        },
        {
          h: 'Scholarship as ammunition',
          x: 'Anglo-Saxon studies begin not as inquiry but as argument.',
          cue: 'Dig for ancestors, find weapons.',
        },
      ],
    },
    {
      title: 'Race, empire, reaction',
      cells: [
        {
          h: 'Victorians racialize freedom',
          x: 'Freeman and Stubbs trace {{parliament|Parliament}} to the {{witan|Witan}} and liberty to German forests — the {{whig-history|Whig story}} in racial dress.',
        },
        {
          h: 'Anglo-Saxonism crosses over',
          x: 'America adopts the superior freedom-carrying stock; the twentieth century discredits it for good.',
        },
        {
          h: 'Sutton Hoo, 1939',
          x: 'Rædwald\'s ship burial — gold, garnet, Byzantine silver — makes "Dark Ages" absurd; {{anglo-saxon-england|early England}} was rich and connected.',
          cue: 'One dig beats a century of pleading.',
        },
        {
          h: 'Tolkien reads Beowulf',
          x: '1936: read it as a poem, not a quarry; his fiction carries the early English to millions.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Survival', x: 'Monk historians carried English history past the English defeat.' },
    { h: 'Restoration reflex', x: 'English radicals claim to restore old liberties, never to invent new ones.' },
    { h: 'Useful ancestors', x: 'Protestants, lawyers, and Victorians each mined the Saxons for legitimacy — {{magna-carta|Magna Carta}} to the {{civil-war|Civil War}}.' },
    { h: 'Race and fall', x: 'Anglo-Saxonism flattered empire on both sides of the Atlantic, then curdled and collapsed.' },
    { h: 'Evidence takes over', x: 'Archaeology and philology now speak where written sources are too thin.' },
    { h: 'Tombs\' argument', x: 'The {{norman-yoke|Norman Yoke}} is the master case of reform presented as restoration — the recurring English trope.' },
    { h: 'Warning', x: 'The emptiest archive invites the freest rewriting; every age found what it sought.' },
  ],
  chain:
    'Few sources → free rewriting: monks make it edifying → radicals make it free → Protestants make it Protestant → Victorians make it racial → moderns make it material.',
}

export default map
