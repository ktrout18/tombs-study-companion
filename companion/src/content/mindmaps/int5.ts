import type { MindMap } from '../../types'

// Original synthesis of this companion's int5 content.
const map: MindMap = {
  intro:
    'The book\'s methodological heart: 1914–1945 remade as memory — curated, moralized, politically live — and why memory must never be mistaken for history.',
  sections: [
    {
      title: 'The claim',
      cells: [
        {
          h: 'Memory is not history',
          x: 'History takes the past as it was; memory raids it for lessons, comfort, blame.',
          cue: 'Tombs shows his hand here.',
        },
        {
          h: 'Wars people "remember"',
          x: 'The world wars feel remembered even by the unborn — but the memory is a curated selection.',
        },
        {
          h: 'Built for a purpose',
          x: 'The selection was assembled at particular moments, for particular political uses.',
        },
      ],
    },
    {
      title: 'How the Great War became futile',
      cells: [
        {
          h: 'First verdict: necessary',
          x: 'For decades after 1918, most English saw the {{first-world-war|war}} as tragic but justified.',
        },
        {
          h: 'The 1960s rebuild',
          x: 'The {{somme|Somme}} fiftieth anniversary and *Oh! What a Lovely War* fix the mud-and-donkeys version.',
          cue: 'Futility is younger than the war.',
        },
        {
          h: 'Poets as witnesses',
          x: 'A school canon makes the {{war-poets|war poets}} official spokesmen — unrepresentative even of poets.',
        },
        {
          h: 'Ritual keeps it warm',
          x: 'Silence, poppy, Cenotaph: mourning shifts from specific men to war itself.',
        },
      ],
    },
    {
      title: 'The usable Second War',
      cells: [
        {
          h: 'Vindication, not futility',
          x: 'The {{second-world-war|Second World War}} deposits reusable templates instead of grief.',
        },
        {
          h: 'Two spirits on call',
          x: '{{dunkirk|Dunkirk}} (improvised escape) and the {{blitz|Blitz}} (cheerful endurance) — invoked from fuel crises to pandemics.',
        },
        {
          h: 'The {{munich|Munich}} lesson',
          x: '"Never appease" armed Eden at {{suez-crisis|Suez}}, then Falklands, Kosovo, Iraq.',
          cue: 'One analogy, many wars.',
        },
        {
          h: '"Standing alone"',
          x: '1940 becomes a standing argument — loudest in {{european-union|European Union}} debates — that England doesn\'t need the continent.',
        },
      ],
    },
    {
      title: 'Historians against memory',
      cells: [
        {
          h: 'The revisionists',
          x: 'Sheffield: the 1918 army was a formidable learning institution; Clark complicates the blameless-entry story of 1914.',
        },
        {
          h: 'The futility school',
          x: 'For critics of revision, the poets told the essential truth of the trenches.',
        },
        {
          h: 'The fight proves the point',
          x: 'The battle over the trenches was never only about the trenches — it\'s about what England thinks it is.',
          cue: 'Identity wearing a poppy.',
        },
      ],
    },
  ],
  keys: [
    { h: 'The distinction', x: 'Memory is selective, moralized, and politically active; history is not memory\'s servant.' },
    { h: 'Futility was built', x: 'The mud-and-donkeys {{first-world-war|Great War}} is largely a 1960s construction, not a 1918 verdict.' },
    { h: 'Templates', x: '{{dunkirk|Dunkirk}} spirit, {{blitz|Blitz}} spirit, {{munich|Munich}} lesson — WWII memory became a toolkit for every crisis.' },
    { h: 'Alone, again', x: '"Standing alone" in 1940 fed the argument that England neither needed nor belonged to Europe.' },
    { h: 'Tombs\' argument', x: 'The memories of 1914–1945 became postwar England\'s strongest political forces — stronger than any ideology.' },
    { h: 'The warning', x: 'A nation that mistakes memory for history misreads both its past and its options.' },
  ],
  chain:
    'Event → curated memory → national reflex → political weapon → a country arguing about the trenches because it is arguing about itself.',
}

export default map
