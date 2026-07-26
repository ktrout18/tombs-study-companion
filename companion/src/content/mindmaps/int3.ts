import type { MindMap } from '../../types'

// Original synthesis of this companion's int3 content.
const map: MindMap = {
  intro:
    'How England remembered its revolution — and how the story that won taught the country its manners.',
  sections: [
    {
      title: 'First draft: tragedy',
      cells: [
        {
          h: 'The loser writes first',
          x: 'Clarendon — {{charles-i|Charles I}}\'s adviser, {{charles-ii|Charles II}}\'s minister — drafts his *History of the Rebellion* in exile.',
        },
        {
          h: 'Folly, not forces',
          x: 'The war as tragedy: brought on by the passions of particular men, not grand historical machinery.',
        },
        {
          h: 'An English template',
          x: 'His character sketches fix a national habit — write history through persons, not systems.',
          cue: 'People first, systems later.',
        },
      ],
    },
    {
      title: 'The myth that won',
      cells: [
        {
          h: 'Liberty\'s long march',
          x: '{{whig-history|Whig history}}: Parliament\'s cause as progress, with 1688 the happy close that saved England from its neighbours\' revolutions.',
        },
        {
          h: 'Macaulay sells it',
          x: '{{macaulay|Macaulay}}\'s *History* (1848–55) reads like a novel: the {{glorious-revolution|Glorious Revolution}} as England choosing law — praised for being moderate and final.',
        },
        {
          h: 'The myth polices its makers',
          x: 'Statesmen raised on a story of gradual, peaceful reform felt bound to keep it one.',
          cue: 'A tale of moderation that manufactured moderation.',
        },
        {
          h: 'Even Cromwell comes back',
          x: 'To the {{puritans|Puritans}}\' Nonconformist heirs, {{oliver-cromwell|Cromwell}} is a hero of conscience; his statue rises at Westminster in 1899. Ireland is not consulted.',
        },
      ],
    },
    {
      title: 'Knocking the story down',
      cells: [
        {
          h: 'Butterfield names the sin',
          x: '1931: the Whig fallacy — reading the past as a march to the present, grading the dead by which way they pushed.',
        },
        {
          h: 'The Marxist rewrite',
          x: 'The {{civil-war|Civil War}} as "bourgeois revolution": a feudal order broken by rising gentry and merchants.',
        },
        {
          h: 'Revisionists strike twice',
          x: 'From the 1970s: no class split, contingent causes, religion as the real motor. Tombs writes with them.',
          cue: 'Hence his own label: last of the wars of religion.',
        },
      ],
    },
    {
      title: 'The double-edged verdict',
      cells: [
        {
          h: 'Wrong as history',
          x: 'In fact 1688: a Dutch invasion, a gamble, bloody across Scotland and Ireland, its "ancient liberties" partly improvised.',
        },
        {
          h: 'Right as myth',
          x: 'A constitution believed old and self-improving never needs tearing up: reformers ask for restoration, conservatives concede continuity.',
        },
        {
          h: 'No English 1789',
          x: 'The legend of moderate 1688 became the founding myth of moderation — one reason, Tombs suggests, England skipped its revolution.',
          cue: 'The myth did the constitution\'s work.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Contested ground', x: 'No stretch of English history was fought over harder after the fact than the 1640s and 1688.' },
    { h: 'Meaning over events', x: 'Tombs cares less what happened than what the English decided it meant.' },
    { h: 'Clarendon', x: 'The first great account: tragedy of persons — an enduringly English way to write history.' },
    { h: 'Whig triumph', x: '{{macaulay|Macaulay}} turns 1688 into a bestselling epic of law and liberty.' },
    { h: 'Double demolition', x: 'Butterfield kills the method; revisionists kill the Marxist replacement; religion stands as the cause.' },
    { h: 'Tombs\' argument', x: 'The {{whig-history|Whig}} story was bad history but effective myth — it enforced the moderation it described.' },
  ],
  chain:
    'Revolution → rival retellings → Whig myth wins → statesmen live up to the story → gradual reform → no English 1789.',
}

export default map
