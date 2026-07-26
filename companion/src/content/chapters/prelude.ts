import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'prelude',
  part: 0,
  title: 'The Dreamtime',
  subtitle: 'Prelude',
  era: 'to c.600',
  blurb:
    'Before England there was legend: Britannia, Arthur, and the murky centuries between the fall of Rome and the first English kingdoms. Tombs calls this the Dreamtime — the part of the past the English have always invented most freely.',
  blocks: [
    {
      t: 'p',
      x: 'Every nation has a period before its records begin, onto which it projects its fantasies. For the English this is the half-millennium between {{roman-britain|Roman Britain}} and {{bede|Bede}}: the age of Arthur, of giants and founding myths — medieval chroniclers traced Britain to a Trojan prince named Brutus, and kings took the stories seriously enough to cite them in diplomacy. Tombs opens here to make a point that governs the whole book: where evidence is thin, story rushes in, and the stories have consequences.',
    },
    { t: 'h', x: 'What actually happened (as far as we know)' },
    {
      t: 'p',
      x: 'Rome ruled lowland Britain for nearly four centuries and then, around 410, withdrew — and the province collapsed harder and faster than almost anywhere else in the empire: towns emptied, coinage stopped, pottery kilns went cold. Into this vacuum came the {{anglo-saxon-settlement|Anglo-Saxon settlers}} from across the North Sea. Whether they arrived as conquering hordes or as warrior elites absorbing a native population is one of the liveliest debates in early medieval studies; burial archaeology and DNA point to a real migration, but a mixed population.',
    },
    {
      t: 'reading',
      title: 'The strange death of Roman Britain',
      blocks: [
        {
          t: 'p',
          x: 'Gaul and Spain kept Latin speech, Roman law, and Christian bishops through their barbarian takeovers; Britain lost all three. The English language contains only a scattering of words from Brittonic, and English place-names blanket the lowlands. Something unusual happened here — perhaps state collapse so total that Roman identity itself lost its prestige, leaving newcomers\' culture as the only game in town.',
        },
        {
          t: 'p',
          x: 'This "failed continuity" matters for the book\'s argument: English institutions do not descend from Rome. When {{anglo-saxon-england|England}} later built shires and courts and taxes, it was building fresh — which makes the achievement, in Tombs\' eyes, more remarkable, not less.',
        },
      ],
    },
    { t: 'h', x: 'Arthur: the most successful fiction in English history' },
    {
      t: 'p',
      x: 'Somewhere in the post-Roman mists there may have been a British war-leader who beat the Saxons at a place called Badon; that is nearly all sober history can say. Upon that grain of maybe, twelve centuries built the Round Table, Camelot, and the once and future king. The irony Tombs savours: Arthur — if he existed — fought *against* the English, yet became England\'s national hero, celebrated by the Plantagenet and Tudor courts as their imperial ancestor.',
    },
    {
      t: 'argument',
      x: 'The Dreamtime is a controlled experiment in national myth-making. With almost no facts to constrain them, the English filled the void with Trojans, Arthur, and ancient constitutions — and acted on the inventions: kings claimed empire from Arthur, lawyers claimed immemorial custom, radicals claimed {{norman-yoke|lost Saxon freedom}}. The rest of the book keeps finding the same mechanism at work in better-documented centuries.',
    },
    {
      t: 'timeline',
      title: 'The murky centuries',
      events: [
        { year: '43', label: 'Rome invades Britain', detail: 'Claudius adds Britannia to the empire; four centuries of villas, roads, and garrisons follow — see {{roman-britain|Roman Britain}}.' },
        { year: 'c.410', label: 'Rome lets go', detail: 'The legions are withdrawn and the emperor tells the Britons to look to their own defence. Collapse follows within a generation.' },
        { year: 'c.450–550', label: '{{anglo-saxon-settlement|The English arrive}}', detail: 'Migration and takeover across the lowlands; the native British hold the west and north.' },
        { year: 'c.500?', label: 'Badon — the Arthur moment', detail: 'A British victory checks the Saxon advance for a generation. From this seed grows the entire Arthurian legend.' },
        { year: '597', label: 'Augustine lands', detail: 'Written history resumes; the Dreamtime ends and the story of {{anglo-saxon-england|England}} begins.' },
      ],
    },
  ],
}

export default chapter
