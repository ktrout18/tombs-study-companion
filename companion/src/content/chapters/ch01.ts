import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'ch01',
  part: 1,
  number: '1',
  title: 'This Earth, This Realm',
  era: 'c.600–1066',
  blurb:
    'How a patchwork of small pagan kingdoms became, in four and a half centuries, the most organized state in western Europe — and why Tombs opens his case here: England was made early, and made to last.',
  blocks: [
    {
      t: 'p',
      x: 'This chapter covers the least familiar and, Tombs insists, most important stretch of the whole story. Between the age of {{bede|Bede}} and the death of {{edward-confessor|Edward the Confessor}}, the English went from a scatter of competing kingdoms — the {{heptarchy|Heptarchy}} — to a single realm with one crown, one coinage, one church, and a name: *Englaland*. Nothing about this was inevitable. It happened through catastrophe, and it very nearly did not happen at all.',
    },
    {
      t: 'argument',
      x: 'England is not a young country with an old landscape; it is one of the oldest continuously existing states on earth. The {{shire|shires}}, the parish network, the institution of a national tax, even the idea of "the English" as one people — all predate the {{norman-conquest|Conquest}}. Whoever has governed England since has governed through machinery the Anglo-Saxons built.',
    },
    { t: 'h', x: 'Christianity and the idea of England' },
    {
      t: 'p',
      x: 'The story begins with conversion. From 597, Roman missionaries in Kent and Irish monks in the north turned pagan warlords into Christian kings; the {{synod-of-whitby|Synod of Whitby}} (664) settled that the English church would look to Rome. Conversion brought writing, law codes, and — through {{bede|Bede}}, a monk on the Tyne — something stranger: a book that treated Angles, Saxons, and Jutes as a single chosen people, "the English", long before any king ruled them all. The nation was imagined before it was built.',
    },
    {
      t: 'voice',
      source: 'A counsellor urges King Edwin to hear the missionaries — Bede, Ecclesiastical History (731), in a Victorian translation',
      x: 'Man\'s life, the counsellor says, is like a sparrow flying out of the winter night into a bright feasting hall and out again into the dark: "whilst he is within, he is safe from the wintry storm; but... he immediately vanishes out of your sight". If the new teaching says anything more certain of what came before and what follows after, "it seems justly to deserve to be followed".',
    },
    {
      t: 'reading',
      title: 'Why Bede matters more than any battle',
      blocks: [
        {
          t: 'p',
          x: "Bede's *Ecclesiastical History* (731) did three things with immense consequences. It gave the scattered kingdoms a collective name and a shared story — God's new chosen people on an island at the world's edge. It popularized dating years from the birth of Christ, the AD system we still use. And it created a template the English never abandoned: understanding themselves through history books. Tombs' own book is, self-consciously, the latest entry in a line that starts at Jarrow.",
        },
        {
          t: 'p',
          x: 'The practical effect showed a century and a half later: when {{alfred-the-great|Alfred}} needed to rally more than his own West Saxons against the Danes, the idea of *Angelcynn* — the English kind — was already on the shelf, waiting to be used.',
        },
      ],
    },
    { t: 'h', x: 'Catastrophe: the Vikings' },
    {
      t: 'p',
      x: 'In 793 the {{viking-invasions|Vikings}} sacked Lindisfarne, and within a lifetime raiding turned to conquest. The "Great Heathen Army" of 865 destroyed {{northumbria|Northumbria}}, East Anglia, and most of {{mercia|Mercia}}; Danish settlers took the whole eastern half of the country — the {{danelaw|Danelaw}}. By 878 only {{wessex|Wessex}} remained, and its king, {{alfred-the-great|Alfred}}, was a refugee in the Somerset marshes.',
    },
    {
      t: 'p',
      x: 'What followed is the founding drama of the English state. Alfred won at Edington, fortified Wessex with a network of *burhs* (garrison towns within a day\'s march of everywhere), rebuilt learning in English, and struck a treaty that partitioned the island. His son and daughter — Edward and the formidable Æthelflæd, "Lady of the Mercians" — reconquered the Danelaw fort by fort. His grandson {{athelstan|Æthelstan}} took York and, at Brunanburh in 937, smashed the combined kings of Scots, Strathclyde, and Dublin. England now existed — created, as Tombs notes, by a reconquest, the way Spain would later be.',
    },
    { t: 'widget', id: 'heptarchy-map' },
    {
      t: 'timeline',
      title: 'From seven kingdoms to one',
      events: [
        { year: '597', label: 'Augustine lands in Kent; conversion begins', detail: 'Pope Gregory sends a nervous missionary to the pagan English. Within a century every English kingdom is Christian — and literate.' },
        { year: '664', label: '{{synod-of-whitby|Synod of Whitby}}', detail: 'Northumbria opts for Roman over Irish practice, binding the English church to the continent.' },
        { year: '731', label: '{{bede|Bede}} finishes his History', detail: '"The English" get their name and their story.' },
        { year: '793', label: 'Lindisfarne sacked', detail: 'The {{viking-invasions|Viking age}} opens with an attack on the holiest site in the north.' },
        { year: '865', label: 'The Great Heathen Army lands', detail: 'Conquest, not raiding: within fifteen years every kingdom but {{wessex|Wessex}} has fallen.' },
        { year: '878', label: 'Alfred wins at Edington', detail: 'From a marsh hideout to victory; the {{danelaw|Danelaw}} treaty splits England.' },
        { year: '937', label: '{{athelstan|Æthelstan}} wins Brunanburh', detail: 'The first king of all England defeats a grand coalition; the poets remember it as the greatest of battles.' },
        { year: '1016', label: '{{cnut|Cnut}} conquers England', detail: 'The Danish king keeps the whole English system running — proof of its solidity.' },
        { year: '1066', label: 'The year of three kings', detail: '{{edward-confessor|Edward the Confessor}} dies childless; Harold, Hardrada, and William contend for his crown.' },
      ],
    },
    { t: 'h', x: 'The precocious state' },
    {
      t: 'p',
      x: 'The tenth-century kingdom the house of {{wessex|Wessex}} built is the heart of Tombs\' argument. It divided the land into {{shire|shires and hundreds}}, with courts in which ordinary freemen served; it minted a single controlled coinage, recalled and re-struck every few years; it could raise a national tax — the {{danegeld|geld}} — assessed on every hide of land in the kingdom. Kings were consecrated with a coronation oath to do justice, and took counsel in the {{witan|Witan}}. No other kingdom in Latin Europe could do all of this.',
    },
    {
      t: 'reading',
      title: 'How do we know the Anglo-Saxon state was strong?',
      blocks: [
        {
          t: 'p',
          x: 'Three kinds of evidence converge. Coins: tens of thousands survive, uniform in weight and design, from dozens of mints — impossible without central control. {{domesday|Domesday Book}}: compiled in months in 1086, it could only be built on existing English records and the {{shire|shire}} machinery. And the {{danegeld|geld}} itself: the sums paid to the Danes (tens of thousands of pounds of silver) imply a tax system of astonishing reach for the age.',
        },
        {
          t: 'p',
          x: "Historians call this the 'maximum state' view, associated with James Campbell — the argument that late Anglo-Saxon England was the most intensively governed polity in the West. Tombs adopts it, because it grounds his larger claim: English institutional continuity starts here, not in 1066 or 1215.",
        },
      ],
    },
    {
      t: 'p',
      x: 'Strength attracted predators. Æthelred "the Unready" (the nickname is a pun: *Æthelred Unræd*, roughly "Noble-counsel No-counsel") paid ever-larger gelds to ever-larger Danish armies, and in 1016 the Danish prince {{cnut|Cnut}} took the whole kingdom. The revealing part is what he did with it: nothing. He kept the laws, the church, the shires, and the taxes, ruling England as the richest province of a North Sea empire. A state worth stealing is a state that works.',
    },
    { t: 'h', x: '1066: the ruin of the English' },
    {
      t: 'p',
      x: 'When {{edward-confessor|Edward the Confessor}} died childless in January 1066, the {{witan|Witan}} chose Harold Godwinson, the greatest earl in England. Within the year he had destroyed a Norwegian invasion at Stamford Bridge, marched the length of the country, and died at Hastings with the flower of the English nobility around him. Duke {{william-conqueror|William of Normandy}} was crowned on Christmas Day amid burning houses, insisting he was no conqueror but {{edward-confessor|Edward}}\'s lawful heir. What his coronation actually began — the amputation of an entire ruling class — is the next chapter\'s story.',
    },
    {
      t: 'argument',
      title: 'The stakes of the chapter',
      x: 'Tombs wants the reader to feel the wrongness of the familiar assumption that English history "really" starts in 1066. By then England had existed for a century and a half as a unified state and for over three centuries as an idea. The Conquest changed who ruled; what they ruled — the shires, the geld, the parishes, the English language stubbornly surviving beneath French — was already old.',
    },
  ],
}

export default chapter
