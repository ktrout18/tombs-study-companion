import type { MindMap } from '../../types'

// Original synthesis of this companion's intro content.
const map: MindMap = {
  intro:
    'Before the story: three master-claims — England is old, memory makes history, declinism is a myth — and one warning: England is not Britain.',
  sections: [
    {
      title: 'The puzzle Tombs starts from',
      cells: [
        {
          h: 'History-mad, history-blind',
          x: 'The English adore costume dramas, anniversaries, ruined abbeys — yet know their past poorly.',
          cue: 'Obsession without knowledge.',
        },
        {
          h: 'The reigning myths',
          x: 'The {{norman-yoke|Norman Yoke}}; liberty\'s {{whig-history|Whig}} march; the Great War as {{war-poets|futility}}; decline without end.',
        },
        {
          h: 'A double subject',
          x: 'What happened, and what the English *believed* happened — because beliefs are themselves causes of events.',
          cue: 'Two histories, one book.',
        },
      ],
    },
    {
      title: 'Claim one: England is old',
      cells: [
        {
          h: 'A thousand-year state',
          x: 'One kingdom with roughly its present borders, {{shire|shires}}, a single coinage, and national taxation — for over a millennium.',
        },
        {
          h: 'Europe of novelties',
          x: 'Beside England, most European states are recent creations.',
        },
        {
          h: 'Continuity through shocks',
          x: 'The {{norman-conquest|Conquest}}, {{reformation-england|Reformation}}, {{civil-war|Civil Wars}}, and industrialization changed England without breaking it.',
          cue: 'Rupture never wins.',
        },
      ],
    },
    {
      title: 'Claim two: memory makes history',
      cells: [
        {
          h: 'Foxe\'s elect nation',
          x: '{{foxes-martyrs|Foxe}} taught the English to see themselves as a chosen Protestant people; they acted on it for three centuries.',
        },
        {
          h: 'Macaulay\'s constitution',
          x: 'From {{macaulay|Macaulay}} they learned theirs was the constitution the world envied.',
        },
        {
          h: 'The poets\' futile war',
          x: 'The {{war-poets|war poets}} recast the nation\'s greatest collective effort as waste.',
          cue: 'Every lesson — sound or not — steered policy.',
        },
      ],
    },
    {
      title: 'Claim three: declinism is bad history',
      cells: [
        {
          h: 'The villain named',
          x: '{{declinism|Declinism}}: the belief that England\'s story since 1900, 1914, or 1945 is decline and fall.',
        },
        {
          h: 'Empirically weak',
          x: 'England remains rich, stable, law-governed, influential; the "decline" was mostly other countries catching up.',
          cue: 'Others rose; England didn\'t fall.',
        },
        {
          h: 'A myth with a history',
          x: 'Politically corrosive, and itself a story the book will trace — its recurring villain.',
        },
      ],
    },
    {
      title: 'How to read the book',
      cells: [
        {
          h: 'Story, then memory',
          x: 'Seven chronological parts; between them, interludes on how each era was remembered, rewritten, and used.',
        },
        {
          h: 'England is not Britain',
          x: 'The nation is old; the state dates from 1707 and {{britishness|sits on top}} — a distinction that returns with force.',
          cue: 'Nation beneath state.',
        },
        {
          h: 'Know your author',
          x: 'A Cambridge historian of France, sympathetic observer not celebrant, conservative in temperament — read his arguments as positions, not verdicts.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Old', x: 'England has existed as one governed nation for over a thousand years; continuity is the deep pattern.' },
    { h: 'Memory', x: 'Stories a nation tells about its past — true or false — change what it does next.' },
    { h: 'Myth', x: 'Much familiar "knowledge" — the {{norman-yoke|Yoke}}, the {{whig-history|Whig}} march, the futile war — is invention.' },
    { h: 'Declinism', x: '{{declinism|Declinism}} is the book\'s villain: weak as history, corrosive as politics.' },
    { h: 'England ≠ Britain', x: 'The nation predates the state stacked on top of it; the difference frames the whole book.' },
    { h: 'Tombs\' argument', x: 'An outsider\'s case for neither jingoism nor self-flagellation — England\'s past read straight, myths included.' },
  ],
  chain:
    'Belief about the past → action in the present → new events → new beliefs — the loop the whole book keeps tracing.',
}

export default map
