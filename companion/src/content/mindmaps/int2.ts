import type { MindMap } from '../../types'

// Original synthesis of this companion's int2 content.
const map: MindMap = {
  intro:
    'How the Middle Ages entered English memory: as a Tudor morality tale, a Shakespeare production, and a Victorian refuge — a period taken over by its own dramatization.',
  sections: [
    {
      title: 'The Tudor myth',
      cells: [
        {
          h: 'The wars as punishment',
          x: 'Hall and Holinshed script it: Richard II\'s deposition a sin, the {{wars-of-roses|Wars of the Roses}} God\'s penalty, the Tudors the rescue.',
        },
        {
          h: 'Tidy, useful, exaggerated',
          x: 'The fifteenth century is made anarchic so Bosworth can look providential.',
          cue: 'The new dynasty needed the old century terrible.',
        },
      ],
    },
    {
      title: 'Shakespeare\'s Middle Ages',
      cells: [
        {
          h: 'Eight plays fix history',
          x: 'The whole arc from Richard II to Bosworth is staged — and the staging displaces the facts.',
        },
        {
          h: 'The unforgettable versions',
          x: 'Crookback Richard III; Hal maturing into {{henry-v|Henry V}}; the band of brothers at {{agincourt|Agincourt}}; the sceptred isle.',
          cue: 'The most quoted history in the language.',
        },
        {
          h: 'A century\'s distance',
          x: 'Written long after the events, from chronicles built to flatter the queen\'s grandfather.',
        },
      ],
    },
    {
      title: 'Gothic dreams',
      cells: [
        {
          h: 'Arches against factories',
          x: 'The Gothic revival dresses churches, town halls, and the rebuilt Houses of {{parliament|Parliament}} in medieval stone.',
        },
        {
          h: 'Ivanhoe\'s Saxons',
          x: 'Scott (1819) carries the {{norman-yoke|Norman Yoke}} myth — noble Saxons, arrogant Normans — to a mass audience.',
        },
        {
          h: 'Robin Hood promoted',
          x: 'The ballads\' aggrieved yeoman is upgraded: a Saxon gentleman, robbed of his lands, taxing the rich for the poor.',
          cue: 'Class and conquest retold as greenwood romance.',
        },
      ],
    },
    {
      title: 'The revisionists',
      cells: [
        {
          h: 'Prosperity, not anarchy',
          x: 'A century of scholarship recasts the 1400s as prosperous decades punctuated by short, small campaigns.',
        },
        {
          h: 'Richard III on trial',
          x: 'Defenders argue Tudor spin framed a competent king; 2012 delivers his skeleton from a Leicester car park.',
        },
        {
          h: 'Still Shakespeare\'s ground',
          x: 'Five centuries on, the argument is with his villain, on ground the playwright chose.',
          cue: 'Correcting the script never closes the show.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Theatre', x: 'No other era of the English past is so wholly owned by its dramatization.' },
    { h: 'Propaganda', x: 'Tudor chroniclers built the fifteenth century into providence\'s morality tale.' },
    { h: 'Tombs\' argument', x: 'No English historian has matched Shakespeare\'s influence; scholarship has never driven his script off the stage.' },
    { h: 'Romance', x: 'The Victorians remade the Middle Ages as a refuge from the industrial present.' },
    { h: 'The record', x: 'What sources actually show: a {{black-death|plague}}-scarred, {{common-law|litigious}}, English-speaking society — not a stage set.' },
    { h: 'Pattern', x: 'Each remade Middle Ages says more about its makers than the medieval English — the first interlude\'s lesson repeats.' },
  ],
  chain:
    'Tudors make it a warning → Shakespeare makes it a drama → Victorians make it a refuge → historians make corrections — and the show still runs.',
}

export default map
