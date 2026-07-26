import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'ch02',
  part: 1,
  number: '2',
  title: "The Conqueror's Kingdom",
  era: '1066–1204',
  blurb:
    'The Norman century and a half: a French-speaking elite seizes the oldest state in the West, runs it harder than its makers ever did, and — by losing Normandy — accidentally becomes English.',
  blocks: [
    {
      t: 'p',
      x: 'The {{norman-conquest|Conquest}} was the most complete catastrophe ever to befall the English governing class. Within twenty years of Hastings, {{domesday|Domesday Book}} records barely a handful of major English landholders; land, bishoprics, and offices had passed to perhaps ten thousand incomers. French became the language of power for three centuries — which is why English still pairs humble farmyard words with elegant table words: cow and beef, sheep and mutton, pig and pork.',
    },
    { t: 'widget', id: 'hastings-diagram' },
    {
      t: 'voice',
      source: 'The Anglo-Saxon Chronicle on William I, written at his death in 1087 (19th-century translation)',
      x: 'The chronicler, who says he once lived at William\'s court, grants the king his due — "he was a very wise man, and very rich" — and then delivers the bill: he had castles built "and poor men hard oppressed", and took gold "by right and with great unright". A conquered people\'s verdict, filed for posterity in English.',
    },
    {
      t: 'p',
      x: 'Yet the machine itself survived. {{william-conqueror|William}} claimed to rule as {{edward-confessor|the Confessor}}\'s lawful heir, so he kept the {{shire|shires}}, the {{danegeld|geld}}, the coinage, and English law — indeed Domesday, the Conquest\'s most famous artefact, was only possible *because* the {{anglo-saxon-england|Anglo-Saxon state}} kept records no other kingdom had. Norman lordship was bolted onto English government: castles and {{feudalism|knight-service}} above, hundred courts and sheriffs below. When the north resisted, William\'s answer — the Harrying of the North — was devastation so thorough that Domesday still recorded "waste" twenty years on.',
    },
    {
      t: 'argument',
      x: 'Tombs\' reading of the Conquest cuts both ways. Against romantic nostalgia: the Normans did not bring civilization to a backward island — they captured Europe\'s best-run state and were changed by it. Against complacency: the trauma was real and remembered. The {{norman-yoke|Norman Yoke}} — the myth of stolen Saxon liberty — became a permanent piece of English political furniture, pulled out by radicals from the {{levellers|Levellers}} to the Victorians.',
    },
    { t: 'widget', id: 'feudal-pyramid' },
    { t: 'h', x: 'The Angevin machine' },
    {
      t: 'p',
      x: 'After a generation of civil war between rival heirs (the "Anarchy" of Stephen and Matilda, when contemporaries said Christ and his saints slept), {{henry-ii|Henry II}} restored order with a vengeance. Ruler of an empire from the Scottish border to the Pyrenees, he governed England through institutions rather than presence: itinerant royal justices, standard writs, and the {{jury-trial|jury}} — the beginnings of the {{common-law|common law}}, case-made and national, which Tombs ranks among England\'s most consequential creations and exports.',
    },
    {
      t: 'reading',
      title: 'Why the common law matters to the whole book',
      blocks: [
        {
          t: 'p',
          x: 'Two features distinguish English law from the Roman-law systems of the continent. It grew from decided cases rather than a code, making precedent — history itself — the source of authority. And it ran in royal courts open to free litigants across the realm, tying ordinary people\'s property and quarrels to national institutions rather than local lords.',
        },
        {
          t: 'p',
          x: 'Tombs returns to this repeatedly: law became part of English identity — the "free-born Englishman" with his {{jury-trial|jury}} and his rights — and later travelled with empire to a third of humanity. When {{magna-carta|Magna Carta}} made the king himself subject to law, it was building on foundations Henry\'s clerks had laid.',
        },
      ],
    },
    {
      t: 'p',
      x: 'The machine had a flaw: it needed money endlessly, for wars in France. Henry\'s quarrel with {{thomas-becket|Becket}} showed royal power could still be checked by the church — four knights, a cathedral, and Europe\'s most sensational murder made Canterbury a pilgrim city for 350 years. His sons showed the machine\'s other danger. Richard the Lionheart, the absentee crusader-king, taxed England ferociously to fund glory abroad; his brother {{king-john|John}} taxed it harder still — and lost.',
    },
    { t: 'h', x: '1204: the loss that made England' },
    {
      t: 'p',
      x: 'In 1204 King Philip of France took Normandy from {{king-john|John}}. For the barons this forced a choice of allegiance — estates in England or estates in Normandy, no longer both — and within a generation the aristocracy, whatever it spoke at dinner, had become territorially English. Tombs ends the chapter here deliberately: defeat, once again, as midwife of the nation. John\'s frantic, extortionate campaign to win Normandy back would drive his barons to Runnymede — and to {{magna-carta|Magna Carta}}, the door to Part Two.',
    },
    {
      t: 'timeline',
      title: 'The Norman and Angevin century',
      events: [
        { year: '1066', label: 'Hastings and coronation', detail: '{{william-conqueror|William}} crowned at Westminster on Christmas Day; the {{norman-conquest|Conquest}} begins in earnest.' },
        { year: '1069–70', label: 'Harrying of the North', detail: 'Systematic devastation of Yorkshire and beyond; a generation later Domesday still writes "waste".' },
        { year: '1086', label: '{{domesday|Domesday Book}}', detail: 'The Conquest audited — using the machinery of the conquered.' },
        { year: '1135–53', label: 'The Anarchy', detail: 'Stephen v. Matilda: England\'s first war over a female succession ends with a compromise heir — {{henry-ii|Henry Plantagenet}}.' },
        { year: '1170', label: '{{thomas-becket|Becket}} murdered', detail: 'Four knights take the king\'s rage literally; Canterbury becomes a shrine of European rank.' },
        { year: '1189–99', label: 'Richard the Lionheart', detail: 'Ten years king, perhaps six months in England; his ransom alone was a fiscal earthquake.' },
        { year: '1204', label: 'Normandy lost', detail: '{{king-john|John}} loses the duchy that made the dynasty — and the barons start becoming Englishmen.' },
      ],
    },
  ],
}

export default chapter
