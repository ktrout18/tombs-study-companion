import type { Concept } from '../types'

/** Concepts, c.400–c.1500. All entries are original explanations written for
 *  this companion; cross-links use {{concept-id|display}} markers. */
export const EARLY_CONCEPTS: Concept[] = [
  {
    id: 'roman-britain',
    term: 'Roman Britain',
    era: 'AD 43–c.410',
    category: 'places',
    body: [
      'The province of Britannia, held by Rome for nearly four centuries after the invasion of AD 43. It had towns, villas, roads, and Christianity — and then, around 410, the legions left and the whole system collapsed with startling speed.',
      'The collapse matters for what came next: the {{anglo-saxon-settlement|Anglo-Saxon settlers}} built on the ruins of a fallen civilization, not on a living one, which is one reason so little Roman culture survived into English.',
    ],
  },
  {
    id: 'anglo-saxon-settlement',
    term: 'The Anglo-Saxon settlement',
    era: 'c.400–c.600',
    category: 'events',
    body: [
      'The migration of Germanic-speaking peoples — traditionally Angles, Saxons, and Jutes — into lowland Britain after {{roman-britain|Roman rule}} ended. Whether it was mass invasion or elite takeover of a native population is still argued over; genetics suggests a mix.',
      'Either way, their language won. English replaced both Latin and Brittonic almost completely, and from their patchwork of small kingdoms — the {{heptarchy|Heptarchy}} — a single {{anglo-saxon-england|England}} eventually formed.',
    ],
  },
  {
    id: 'anglo-saxon-england',
    term: 'Anglo-Saxon England',
    era: 'c.600–1066',
    category: 'terms',
    body: [
      "The England of the six centuries before the {{norman-conquest|Norman Conquest}} — and the core of Tombs' claim that England is old. By the tenth century it was arguably Europe's most sophisticated state: one crown, a single coinage, {{shire|shires}} for local government, and a tax system ({{danegeld|the geld}}) that could raise real money.",
      'The idea of a single English people was partly created by {{bede|Bede}}, who wrote about "the English" before any king ruled them all.',
    ],
  },
  {
    id: 'heptarchy',
    term: 'The Heptarchy',
    era: 'c.600–c.850',
    category: 'terms',
    body: [
      'The traditional name for the seven-ish Anglo-Saxon kingdoms — {{northumbria|Northumbria}}, {{mercia|Mercia}}, {{wessex|Wessex}}, East Anglia, Kent, Sussex, Essex — that competed for supremacy before England was unified.',
      'The number was never really fixed; kingdoms swallowed each other constantly. The {{viking-invasions|Viking invasions}} destroyed all of them except Wessex, which then rebuilt "England" in its own image.',
    ],
  },
  {
    id: 'northumbria',
    term: 'Northumbria',
    era: 'c.600–954',
    category: 'places',
    body: [
      "The great northern kingdom, stretching from the Humber toward Edinburgh. In the seventh and eighth centuries it was the cultural powerhouse of the {{heptarchy|Heptarchy}} — home to {{bede|Bede}}, the Lindisfarne Gospels, and Europe's finest scholarship of the day.",
      'The {{viking-invasions|Vikings}} shattered it; York became a Scandinavian city, and the north entered England half-apart, a difference that echoed for centuries.',
    ],
  },
  {
    id: 'mercia',
    term: 'Mercia',
    era: 'c.600–c.900',
    category: 'places',
    body: [
      'The midland kingdom, dominant in the eighth century under King Offa, who built the great dyke against the Welsh and traded with Charlemagne as an equal.',
      'Squeezed between the {{danelaw|Danelaw}} and a rising {{wessex|Wessex}}, it was absorbed into the new unified England in the tenth century.',
    ],
  },
  {
    id: 'wessex',
    term: 'Wessex',
    era: 'c.520–1066',
    category: 'places',
    body: [
      'The kingdom of the West Saxons, centred on Winchester. It was the last kingdom left standing against the {{viking-invasions|Vikings}}, and under {{alfred-the-great|Alfred}} and his heirs it conquered and unified the rest into a single {{anglo-saxon-england|England}}.',
      'Every English monarch since descends, by blood or claim, from the house of Wessex.',
    ],
  },
  {
    id: 'bede',
    term: 'Bede',
    era: 'c.673–735',
    category: 'people',
    body: [
      'A monk of Jarrow in {{northumbria|Northumbria}} and the greatest scholar of early medieval Europe. His *Ecclesiastical History of the English People* (731) told the story of "the English" as one Christian nation with a shared destiny — centuries before a single English kingdom existed.',
      'Tombs treats him as the first and most influential inventor of Englishness: the idea preceded the state.',
    ],
  },
  {
    id: 'synod-of-whitby',
    term: 'Synod of Whitby',
    era: '664',
    category: 'events',
    body: [
      'A church council at which {{northumbria|Northumbria}} chose to follow Roman rather than Irish Christian practice (the presenting issue was the date of Easter).',
      'It bound the English church to Rome and the continent — an orientation that lasted until the {{reformation-england|Reformation}} broke it, nearly nine hundred years later.',
    ],
  },
  {
    id: 'viking-invasions',
    term: 'The Viking invasions',
    era: '793–1066',
    category: 'events',
    body: [
      'Two centuries of Scandinavian raiding, conquest, and settlement, opening with the sack of Lindisfarne in 793. The "Great Heathen Army" of 865 destroyed every Anglo-Saxon kingdom except {{wessex-alfred|Alfred\'s Wessex}}, and Danish settlement created the {{danelaw|Danelaw}}.',
      'Paradoxically, the Vikings helped make England: unification was a reconquest, and the threat forced the building of a strong state — including the {{danegeld|geld}}, the tax invented to buy the raiders off.',
    ],
  },
  {
    id: 'danelaw',
    term: 'The Danelaw',
    era: 'c.878–954',
    category: 'places',
    body: [
      'The broad swathe of northern and eastern England — roughly everything northeast of the old road called Watling Street — where Danish law and custom ran after the {{viking-invasions|Viking conquests}}. Its legacy survives in place-names ending in *-by* and *-thorpe*, and in hundreds of everyday English words borrowed from Norse.',
      'The kings of {{wessex|Wessex}} reconquered it in the tenth century, but the north kept a distinct character long after.',
    ],
  },
  {
    id: 'alfred-the-great',
    term: 'Alfred the Great',
    era: 'r.871–899',
    category: 'people',
    body: [
      'King of {{wessex|Wessex}}, the only English king called "the Great". He stopped the {{viking-invasions|Viking}} conquest at Edington (878), fortified his kingdom with a network of *burhs* (fortified towns), and began calling himself king of the *Angelcynn* — the English kind.',
      'He also launched a program of translation and learning in English, making the written vernacular an instrument of state long before most of Europe. His children and grandchildren — culminating in {{athelstan|Æthelstan}} — turned his defensive success into a unified England.',
    ],
  },
  {
    id: 'wessex-alfred',
    term: "Alfred's Wessex",
    era: '871–899',
    category: 'terms',
    body: [
      'Shorthand for the rump English kingdom that survived the Viking onslaught of the 860s–70s. At its lowest point, {{alfred-the-great|Alfred}} was a fugitive in the Somerset marshes; from there he fought back to a negotiated peace that split England with the {{danelaw|Danelaw}}.',
    ],
  },
  {
    id: 'athelstan',
    term: 'Æthelstan',
    era: 'r.924–939',
    category: 'people',
    body: [
      "Grandson of {{alfred-the-great|Alfred}} and, by most reckonings, the first king of all England. He took York from the Danes in 927 and crushed a grand alliance of Scots, Strathclyde Britons, and Dublin Vikings at Brunanburh (937), the era's most celebrated battle.",
      'His charters styled him *rex totius Britanniae* — king of all Britain — an ambition that outran reality but set a template.',
    ],
  },
  {
    id: 'witan',
    term: 'The Witan',
    era: 'c.600–1066',
    category: 'institutions',
    body: [
      'The council of leading men — ealdormen, bishops, thegns — who advised Anglo-Saxon kings and, crucially, took part in choosing them. Succession was not strict primogeniture: the Witan could prefer a capable brother to a child heir.',
      'Victorian writers romanticized it as a proto-{{parliament|Parliament}}; it was not that, but it does show English kingship was consultative from the start — a habit that never entirely disappeared.',
    ],
  },
  {
    id: 'shire',
    term: 'Shires and hundreds',
    era: 'c.900 onward',
    category: 'institutions',
    body: [
      'The building blocks of English local government for a thousand years. The shire (county) had its own court and a royal official — the shire-reeve, or *sheriff* — answerable to the king; shires subdivided into "hundreds" with their own assemblies.',
      "This mesh of institutions meant ordinary freemen routinely took part in law and administration — a deep root, Tombs argues, of English self-government. The system was so durable that its boundaries survived nearly intact until 1974.",
    ],
  },
  {
    id: 'danegeld',
    term: 'Danegeld',
    era: 'c.991–1162',
    category: 'institutions',
    body: [
      'A national land tax first raised to buy off {{viking-invasions|Viking}} armies under King Æthelred "the Unready". England was rich and administratively precocious enough to collect it — enormous sums, tens of thousands of pounds of silver.',
      'The dark irony: an efficient tax system made England worth conquering. Both {{cnut|Cnut}} and {{william-conqueror|William}} inherited and gladly used it.',
    ],
  },
  {
    id: 'cnut',
    term: 'Cnut',
    era: 'r.1016–1035',
    category: 'people',
    body: [
      'The Danish king who conquered England in 1016 and ruled it as the jewel of a North Sea empire spanning Denmark and Norway. He kept English law, English bishops, and the English tax system — proof of how solid the {{anglo-saxon-england|Anglo-Saxon state}} was: conquerors ran it rather than replacing it.',
      'The famous story of Cnut and the tide was told to illustrate his piety (he was showing courtiers that kings cannot command the sea), not his arrogance.',
    ],
  },
  {
    id: 'edward-confessor',
    term: 'Edward the Confessor',
    era: 'r.1042–1066',
    category: 'people',
    body: [
      'The pious, childless king whose death in January 1066 triggered the succession crisis of that terrible year. Raised in exile in Normandy, he may (or may not) have promised the throne to Duke {{william-conqueror|William}} — the ambiguity launched the {{norman-conquest|Conquest}}.',
      'He built Westminster Abbey and was later made a saint, the model of holy English kingship.',
    ],
  },
  {
    id: 'norman-conquest',
    term: 'The Norman Conquest',
    era: '1066',
    category: 'events',
    body: [
      "Duke {{william-conqueror|William of Normandy}}'s seizure of England after Hastings — the most total elite replacement in English history. Within twenty years, almost the whole Anglo-Saxon aristocracy was dispossessed; land, church, and government passed to a French-speaking minority of a few thousand.",
      'It bound England to France for four centuries, layered French over English (beef/cow, pork/pig), and left a permanent scar in national memory — the {{norman-yoke|Norman Yoke}}. Yet the conquerors kept the {{shire|shires}}, the {{danegeld|geld}}, and the idea of England: the state survived its own decapitation.',
    ],
  },
  {
    id: 'william-conqueror',
    term: 'William the Conqueror',
    era: 'r.1066–1087',
    category: 'people',
    body: [
      'Illegitimate son of a Norman duke who made himself king of England by winning a single day-long battle at Hastings. He ruled with ruthless thoroughness: castles everywhere, the "Harrying of the North" (a deliberate devastation whose scars showed for a generation), and the {{domesday|Domesday Book}}.',
      'He claimed to be {{edward-confessor|Edward the Confessor}}\'s lawful heir, not a conqueror — which is why he kept English institutions intact.',
    ],
  },
  {
    id: 'domesday',
    term: 'Domesday Book',
    era: '1086',
    category: 'terms',
    body: [
      'The great survey {{william-conqueror|William}} ordered of who held what land, down to the last plough-team and pig. Nothing like it existed anywhere else in Europe — it was possible only because the {{anglo-saxon-england|Anglo-Saxon state}} already had the records and the {{shire|shire}} machinery to compile it.',
      'Contemporaries named it after the Day of Judgment: from its verdict there was no appeal.',
    ],
  },
  {
    id: 'feudalism',
    term: 'Feudalism',
    era: 'c.1066–c.1500',
    category: 'ideas',
    body: [
      'The system in which land was held from a lord in exchange for service — knights owed fighting, peasants owed labour. After the {{norman-conquest|Conquest}}, every acre of England was held, ultimately, from the king.',
      'That "ultimately" is the English peculiarity: the crown was strong enough that feudalism here meant royal power exercised through lords, not royal power dissolved among them. Historians now quarrel over whether "feudalism" is even a useful word — it was never a system anyone at the time could have named.',
    ],
  },
  {
    id: 'norman-yoke',
    term: 'The Norman Yoke',
    era: 'idea, c.1600 onward',
    category: 'ideas',
    body: [
      'The belief that free {{anglo-saxon-england|Anglo-Saxon England}} was crushed by the {{norman-conquest|Conquest}}, and that English liberty ever since has been a struggle to recover stolen ancient rights. Radicals in the {{civil-war|Civil War}}, and reformers long after, invoked it.',
      "As history it is mostly myth; as a political idea it was potent for centuries. Tombs uses it as a prime example of his theme: stories the English tell about their past change what they do in the present.",
    ],
  },
  {
    id: 'common-law',
    term: 'The common law',
    era: 'c.1150 onward',
    category: 'institutions',
    body: [
      'English case-made law, "common" because royal judges applied it uniformly across the realm — built up from precedent rather than from a Roman-law code. It grew from {{henry-ii|Henry II}}\'s legal reforms and the older {{shire|shire courts}}.',
      'Its habits — {{jury-trial|trial by jury}}, adversarial argument, judges bound by past decisions — spread wherever English rule went, and its independence from the crown became a bulwark of English liberty celebrated by {{whig-history|Whig historians}}.',
    ],
  },
  {
    id: 'jury-trial',
    term: 'Trial by jury',
    era: 'c.1166 onward',
    category: 'institutions',
    body: [
      'Deciding guilt by the verdict of twelve local laymen rather than by a judge, an ordeal, or a confession. It emerged under {{henry-ii|Henry II}} as a practical royal tool and hardened into a right.',
      'Its deeper significance, in Tombs\' telling: it kept ordinary Englishmen inside the machinery of state, and made English criminal justice depend on community consent.',
    ],
  },
  {
    id: 'henry-ii',
    term: 'Henry II',
    era: 'r.1154–1189',
    category: 'people',
    body: [
      'First Plantagenet king, ruler of an "Angevin empire" stretching from Scotland\'s border to the Pyrenees. A restless administrator, he built the {{common-law|common law}} and royal justice into permanent institutions.',
      'He is remembered above all for the murder of {{thomas-becket|Thomas Becket}} — the great medieval collision between crown and church.',
    ],
  },
  {
    id: 'thomas-becket',
    term: 'Thomas Becket',
    era: 'c.1120–1170',
    category: 'people',
    body: [
      "{{henry-ii|Henry II}}'s chancellor and friend, made Archbishop of Canterbury — whereupon he became the church's fiercest defender against the king. Four knights, taking Henry's rage literally, cut him down in his own cathedral in December 1170.",
      'Christendom was horrified; Canterbury became one of Europe\'s great pilgrimage shrines (the destination in Chaucer\'s *Canterbury Tales*), until {{henry-viii|Henry VIII}} — no friend of saints who defied kings — obliterated it.',
    ],
  },
  {
    id: 'king-john',
    term: 'King John',
    era: 'r.1199–1216',
    category: 'people',
    body: [
      'The Plantagenet who lost Normandy to France (1204), taxed England mercilessly to win it back, quarrelled with the pope, and drove his barons into the revolt that produced {{magna-carta|Magna Carta}}.',
      'Losing Normandy mattered as much as the charter: it cut the aristocracy\'s cross-Channel estates and began turning a French-speaking elite into Englishmen.',
    ],
  },
  {
    id: 'magna-carta',
    term: 'Magna Carta',
    era: '1215',
    category: 'events',
    body: [
      'The "Great Charter" that rebel barons forced {{king-john|King John}} to seal at Runnymede. Most of it dealt with feudal grievances, but two ideas proved immortal: the king is under the law, and no free man may be punished except by lawful judgment.',
      'Annulled within weeks, reissued after John\'s death, it became the founding text of English (and later American) constitutionalism — less for what it said than for what later generations, especially {{whig-history|Whig}} lawyers, chose to believe it said.',
    ],
  },
  {
    id: 'parliament',
    term: 'Parliament',
    era: 'c.1265 onward',
    category: 'institutions',
    body: [
      'England\'s national assembly, which grew in the thirteenth century out of the king\'s need for consent to taxation. What made it unusual in Europe: it included elected knights and townsmen — the future {{house-of-commons|House of Commons}} — alongside lords and bishops, and taxation genuinely required its assent.',
      'Kings summoned it as a tool; it slowly became their master. By the seventeenth century the question "king or Parliament?" would tear the country apart in {{civil-war|civil war}}.',
    ],
  },
  {
    id: 'house-of-commons',
    term: 'The House of Commons',
    era: 'c.1341 onward',
    category: 'institutions',
    body: [
      'The elected chamber of {{parliament|Parliament}} — two knights per {{shire|shire}}, two burgesses per borough — which began meeting separately from the Lords in the fourteenth century. Its early leverage was simple: money. No grant of taxes without redress of grievances.',
      'Over centuries it went from petitioner to sovereign; by the twentieth century, "Parliament" effectively meant the Commons.',
    ],
  },
  {
    id: 'hundred-years-war',
    term: "The Hundred Years' War",
    era: '1337–1453',
    category: 'events',
    body: [
      'The long, intermittent Anglo-French struggle that began when {{edward-iii|Edward III}} claimed the French crown. Spectacular English victories — Crécy, Poitiers, {{agincourt|Agincourt}} — could not hold France, and by 1453 only Calais remained.',
      'Its real legacy was at home: war taxation entrenched {{parliament|Parliament}}; the longbow armies bred a mythology of English prowess; and fighting France made the elite decisively English rather than French. Defeat abroad then helped ignite the {{wars-of-roses|Wars of the Roses}}.',
    ],
  },
  {
    id: 'edward-iii',
    term: 'Edward III',
    era: 'r.1327–1377',
    category: 'people',
    body: [
      'The warrior king who launched the {{hundred-years-war|Hundred Years\' War}} and presided over its most glorious phase — Crécy, the capture of Calais, the founding of the Order of the Garter. He made war a national, parliamentary enterprise, funded by taxes on England\'s wool trade.',
      'His fertile family was his time bomb: rival descent from his many sons supplied both sides of the {{wars-of-roses|Wars of the Roses}}.',
    ],
  },
  {
    id: 'black-death',
    term: 'The Black Death',
    era: '1348–1349',
    category: 'events',
    body: [
      'The plague that killed roughly half of England\'s people in eighteen months — the greatest catastrophe in the nation\'s history. Whole villages vanished; the labour shortage upended the social order.',
      'Survivors\' wages rose despite laws to freeze them, serfdom withered, and resentment of those laws fed the {{peasants-revolt|Peasants\' Revolt}}. Tombs stresses the paradox: mass death made the surviving English freer and richer.',
    ],
  },
  {
    id: 'peasants-revolt',
    term: "The Peasants' Revolt",
    era: '1381',
    category: 'events',
    body: [
      'The great popular rising after the {{black-death|Black Death}}, triggered by a poll tax. Rebels under Wat Tyler took London, executed the archbishop, and demanded the end of serfdom — the boy king Richard II talked them down, then broke every promise.',
      'Its slogan — "When Adam delved and Eve span, who was then the gentleman?" — is among the oldest voices of English radical egalitarianism, a tradition that resurfaces in the {{civil-war|Civil War}} and beyond.',
    ],
  },
  {
    id: 'lollards',
    term: 'The Lollards',
    era: 'c.1380–c.1520',
    category: 'ideas',
    body: [
      'Followers of the Oxford theologian John Wycliffe, who attacked church wealth, questioned transubstantiation, and sponsored the first complete English Bible. Driven underground as heretics, they survived in pockets for over a century.',
      'They gave the later {{reformation-england|English Reformation}} a native ancestry — and gave {{protestantism|Protestant}} historians a homegrown martyr tradition to celebrate.',
    ],
  },
  {
    id: 'agincourt',
    term: 'Agincourt',
    era: '1415',
    category: 'events',
    body: [
      "{{henry-v|Henry V}}'s improbable destruction of a much larger French army, won by massed longbows and French disorder in the mud. Militarily it reopened the {{hundred-years-war|Hundred Years' War}}; culturally, thanks to Shakespeare's *Henry V* ('band of brothers'), it became the permanent English shorthand for the outnumbered underdog's victory.",
    ],
  },
  {
    id: 'henry-v',
    term: 'Henry V',
    era: 'r.1413–1422',
    category: 'people',
    body: [
      'Victor of {{agincourt|Agincourt}} and, by the Treaty of Troyes (1420), recognized heir to the French throne. He died at thirty-five, two months before the French king whose crown he was to inherit, leaving a nine-month-old son.',
      'That infant inheritance — an English king of France who could not rule either — set the stage for final defeat in France and the {{wars-of-roses|Wars of the Roses}} at home.',
    ],
  },
  {
    id: 'wars-of-roses',
    term: 'The Wars of the Roses',
    era: '1455–1487',
    category: 'events',
    body: [
      'Three decades of dynastic bloodletting between the houses of Lancaster and York, both descended from {{edward-iii|Edward III}}. Kings were deposed, restored, murdered; the old warrior nobility gutted itself.',
      'It ended when Henry Tudor killed Richard III at Bosworth (1485) and married the Yorkist heiress, founding the Tudor dynasty. The "red rose v. white rose" framing is largely later packaging — Tudor spin and Shakespeare made the era a morality tale about the horrors of civil war and the blessing of strong monarchy.',
    ],
  },
]
