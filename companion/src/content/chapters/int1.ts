import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'int1',
  part: 1,
  title: "Five Centuries After Bede",
  subtitle: "Interlude",
  era: "looking back",
  blurb:
    'The Anglo-Saxon centuries left fewer records than any later age — which is exactly why every later age felt free to rewrite them. An interlude on how the English have used their oldest past.',
  blocks: [
    {
      t: 'p',
      x: "Here Tombs pauses the narrative for the first of his backward glances. The question is not what happened between {{bede|Bede}} and Hastings, but what later generations did with it. The answer: almost anything they liked. No stretch of English history has been remembered, forgotten, and reinvented so often.",
    },
    { t: 'h', x: 'Keeping the story alive' },
    {
      t: 'p',
      x: "The {{norman-conquest|Conquest}} could have buried English history along with the English nobility. It did not, because monks refused to let it. Within two generations, historians of mixed Norman and English blood — William of Malmesbury, Henry of Huntingdon — wrote Latin chronicles that stitched the old English kings into the new order, and at Peterborough monks kept the Anglo-Saxon Chronicle going in English until 1154. Bede's great invention, a people who understood themselves through history books, survived the people's defeat.",
    },
    { t: 'h', x: 'The free Saxons and the Norman Yoke' },
    {
      t: 'p',
      x: 'Out of that survival grew a myth with a long life: that before 1066 the English were free, governed by their own laws and assemblies, and that the Normans imposed a foreign tyranny — the {{norman-yoke|Norman Yoke}} — which the nation had been shaking off ever since. In the 1640s the {{levellers|Levellers}} used it to demand the vote as a stolen birthright. It was bad history; the Conquest did not destroy English law, and pre-Conquest England was no democracy. But it fixed a lasting habit of mind: English radicals would claim to be restoring old liberties, not inventing new ones.',
    },
    {
      t: 'argument',
      x: 'Tombs treats the {{norman-yoke|Norman Yoke}} as the master example of a recurring English trope: reform presented as restoration. From {{magna-carta|Magna Carta}} to the {{civil-war|Civil War}} to the Victorians, the English changed things by insisting they were changing them back.',
    },
    { t: 'h', x: 'Antiquarians with an agenda' },
    {
      t: 'p',
      x: 'The Tudor {{reformation-england|Reformation}} sent scholars hunting through the wreckage of the monastic libraries for useful ancestors. Archbishop Matthew Parker collected Anglo-Saxon manuscripts to prove that a plain, English-minded church had existed long before Rome tightened its grip — so {{church-of-england|Henry VIII\'s church}} was a return, not a rupture. Lawyers did the same for the {{common-law|common law}}: Sir Edward Coke argued it was immemorial custom, older than any conqueror. Anglo-Saxon studies began not as scholarship but as ammunition.',
    },
    { t: 'h', x: 'Race, empire, and the reaction' },
    {
      t: 'p',
      x: "The Victorians turned the free Saxons into a race. Historians such as E. A. Freeman and William Stubbs found the seed of {{parliament|Parliament}} in the {{witan|Witan}} and traced English liberty to the forests of ancient Germany; this \"Anglo-Saxonism\" crossed the Atlantic, where it flattered Americans as the freedom-carrying branch of a superior stock and helped justify expansion. It fitted the confident {{whig-history|Whig story}} of inevitable liberty — and it curdled into racial theory that the twentieth century would discredit for good.",
    },
    {
      t: 'p',
      x: "The modern rescue came from unexpected quarters. In 1939 the ship burial at Sutton Hoo yielded gold, garnet, and craftsmanship that made the phrase \"Dark Ages\" absurd. Three years earlier J. R. R. Tolkien, a professional Anglo-Saxonist, had told scholars to read *Beowulf* as a great poem rather than a quarry of ethnographic scraps — and his own fiction carried a loving image of the early English to millions. Archaeology and philology replaced race as the way into the period.",
    },
    {
      t: 'reading',
      title: 'Sutton Hoo: the argument in a burial mound',
      blocks: [
        {
          t: 'p',
          x: "The Suffolk ship burial, probably for King Rædwald of East Anglia (died around 625), was excavated on the eve of the Second World War. Its treasures — a helmet, a great gold buckle, silver from Byzantium, coins from Gaul — showed that seventh-century {{anglo-saxon-england|England}} was rich, skilled, and plugged into trade routes reaching the eastern Mediterranean.",
        },
        {
          t: 'p',
          x: "For Tombs the find matters as historiography as much as history: a single dig did more to overturn the caricature of a barbarous age than a century of pleading by scholars. Physical evidence is now doing for the Anglo-Saxons what written sources are too thin to do.",
        },
      ],
    },
    {
      t: 'p',
      x: "Tombs' closing point is a warning that hangs over the rest of the book. Precisely because this era left the fewest sources, it has been the most freely rewritten: monks made it edifying, radicals made it free, Protestants made it Protestant, Victorians made it racial, and moderns made it material. Every age of English history has found what it went looking for in the age before the Conquest.",
    },
  ],
}

export default chapter
