import type { Concept } from '../types'

/** Concepts, c.1500–c.1815. Original explanations written for this companion. */
export const MIDDLE_CONCEPTS: Concept[] = [
  {
    id: 'reformation-england',
    term: 'The English Reformation',
    era: 'c.1527–1559',
    category: 'events',
    body: [
      "England's break with the Roman church — begun not by theology but by {{henry-viii|Henry VIII}}'s need for an annulment, then radicalized under his son, reversed under {{mary-i|Mary}}, and finally settled under {{elizabeth-i|Elizabeth}}.",
      'Tombs calls the resulting divide — {{protestantism|Protestant}} versus {{catholicism|Catholic}}, and later Anglican versus {{puritans|Puritan}} — "the Great Divide": for a century and a half it was the fault line of English politics, war, and identity.',
    ],
  },
  {
    id: 'henry-viii',
    term: 'Henry VIII',
    era: 'r.1509–1547',
    category: 'people',
    body: [
      'The king who made himself Supreme Head of the {{church-of-england|Church of England}} so he could annul his marriage to Katherine of Aragon and marry Anne Boleyn. Six wives, two of them beheaded; the {{dissolution-monasteries|monasteries dissolved}}; ancient shrines smashed.',
      'He remained doctrinally conservative — he burned Protestants as readily as he hanged Catholic loyalists. The real Protestant turn came under his son {{edward-vi|Edward VI}}.',
    ],
  },
  {
    id: 'edward-vi',
    term: 'Edward VI',
    era: 'r.1547–1553',
    category: 'people',
    body: [
      'Henry\'s son, king at nine, dead at fifteen — but the reign in which England became doctrinally Protestant: altars stripped, images whitewashed, and {{thomas-cranmer|Cranmer}}\'s English {{book-of-common-prayer|Prayer Book}} imposed on every parish.',
    ],
  },
  {
    id: 'mary-i',
    term: 'Mary I',
    era: 'r.1553–1558',
    category: 'people',
    body: [
      'Katherine of Aragon\'s daughter, who restored {{catholicism|Catholicism}} and burned some 280 Protestants — earning, via {{foxes-martyrs|Foxe\'s Book of Martyrs}}, the name "Bloody Mary" and giving English {{protestantism|Protestantism}} its martyrology.',
      'Her marriage to Philip II of Spain and the loss of Calais fused Catholicism with foreign domination in the English imagination — a fusion that shaped {{anti-popery|anti-popery}} for three centuries.',
    ],
  },
  {
    id: 'thomas-cranmer',
    term: 'Thomas Cranmer',
    era: '1489–1556',
    category: 'people',
    body: [
      'Archbishop of Canterbury under {{henry-viii|Henry VIII}} and {{edward-vi|Edward VI}}, author of the {{book-of-common-prayer|Book of Common Prayer}} — the cadences that shaped English speech for four centuries ("till death us do part").',
      'Under {{mary-i|Mary}} he recanted his Protestantism, then dramatically recanted the recantation at the stake, thrusting the hand that had signed into the fire first.',
    ],
  },
  {
    id: 'book-of-common-prayer',
    term: 'The Book of Common Prayer',
    era: '1549/1552/1662',
    category: 'institutions',
    body: [
      'The {{church-of-england|Church of England}}\'s liturgy in English, largely {{thomas-cranmer|Cranmer}}\'s work. For centuries nearly every English person was baptized, married, and buried in its words; with the King James Bible it is one of the two great shapers of the language.',
      'Imposing it caused rebellions (Devon and Cornwall rose against the "Christmas game" of 1549), and imposing it on Scotland in 1637 helped trigger the {{civil-war|Civil War}}.',
    ],
  },
  {
    id: 'dissolution-monasteries',
    term: 'Dissolution of the Monasteries',
    era: '1536–1540',
    category: 'events',
    body: [
      'The suppression of England\'s 800-odd religious houses and confiscation of their lands — perhaps a quarter of the country — by {{henry-viii|Henry VIII}}. It was the largest transfer of land since the {{norman-conquest|Norman Conquest}}.',
      'The crown sold most of it, creating a gentry class with a hard financial stake in the {{reformation-england|Reformation}} never being reversed. The ruined abbeys became England\'s most romantic scenery and a standing reproach in Catholic memory.',
    ],
  },
  {
    id: 'church-of-england',
    term: 'The Church of England',
    era: '1534 onward',
    category: 'institutions',
    body: [
      'The national church created when {{henry-viii|Henry VIII}} replaced the pope with the crown as its Supreme Head. Under {{elizabeth-i|Elizabeth}} it settled into a deliberate hybrid — Protestant doctrine, traditional structure of bishops and cathedrals — satisfying neither {{catholicism|Catholics}} nor hotter {{puritans|Puritans}}.',
      'Established by law, entwined with monarchy, parish, and university, it was for centuries the default frame of English life — and every fight about it was also a fight about the state.',
    ],
  },
  {
    id: 'protestantism',
    term: 'Protestantism',
    era: '16th c. onward',
    category: 'ideas',
    body: [
      'The reform movement begun by Luther in 1517: salvation by faith, scripture over church tradition, worship in the vernacular. In England it arrived through smuggled books and Tyndale\'s New Testament before kings took it up.',
      'By 1600 Protestant identity — defined heavily against {{catholicism|Rome}}, {{foxes-martyrs|martyr-stories}}, and Spain — had fused with Englishness itself: to be English was to be free-born and Protestant. That fusion drove politics until the nineteenth century.',
    ],
  },
  {
    id: 'catholicism',
    term: 'Catholicism in England',
    era: '16th c. onward',
    category: 'ideas',
    body: [
      'After the {{reformation-england|Reformation}}, the old faith became a persecuted minority religion of recusant gentry families and hunted priests. To the Protestant state it looked like treason — allegiance to a foreign power that had excommunicated the queen.',
      'The {{gunpowder-plot|Gunpowder Plot}} seared that suspicion into national ritual. Full civil rights returned only with Catholic Emancipation in 1829.',
    ],
  },
  {
    id: 'anti-popery',
    term: 'Anti-popery',
    era: 'c.1560–c.1850',
    category: 'ideas',
    body: [
      'The visceral English conviction that "popery" meant tyranny, foreign domination, and burning Protestants — sustained by {{foxes-martyrs|Foxe}}, the {{spanish-armada|Armada}}, and the {{gunpowder-plot|Fifth of November}}.',
      'It was arguably the strongest mass political emotion in England for three hundred years: it helped depose {{james-ii|James II}}, and its embers glowed into the Victorian age.',
    ],
  },
  {
    id: 'foxes-martyrs',
    term: "Foxe's Book of Martyrs",
    era: '1563',
    category: 'terms',
    body: [
      'John Foxe\'s massive, vividly illustrated history of Protestants burned under {{mary-i|Mary}}. Chained next to the Bible in many parish churches, it taught generations that England was an elect Protestant nation tested by fire.',
      'It is a textbook case of Tombs\' theme: a history book — partisan, gripping, half-propaganda — manufacturing national identity.',
    ],
  },
  {
    id: 'elizabeth-i',
    term: 'Elizabeth I',
    era: 'r.1558–1603',
    category: 'people',
    body: [
      'Anne Boleyn\'s daughter, who settled the {{church-of-england|church}} as moderately Protestant, survived plots and excommunication, and beat the {{spanish-armada|Armada}}. She turned her own image — Gloriana, the Virgin Queen — into an instrument of rule.',
      'Her reign was later gilded as a golden age of Shakespeare and sea-dogs; the reality was war, inflation, and famine in the 1590s. Both the gilding and the reality matter in the book\'s telling.',
    ],
  },
  {
    id: 'spanish-armada',
    term: 'The Spanish Armada',
    era: '1588',
    category: 'events',
    body: [
      'Philip II\'s great invasion fleet, defeated by English gunnery, fireships, and Atlantic gales. "God blew and they were scattered", said the victory medal — confirmation, to the English, that Providence was Protestant.',
      'Strategically the war dragged on inconclusively; mythologically, 1588 joined {{agincourt|Agincourt}} in the national scrapbook of David-and-Goliath deliverances, to be reused in 1805 and 1940.',
    ],
  },
  {
    id: 'puritans',
    term: 'The Puritans',
    era: 'c.1560–c.1690',
    category: 'ideas',
    body: [
      'The "hotter sort" of Protestants who thought the {{elizabeth-i|Elizabethan}} settlement half-reformed — too many bishops, vestments, and ceremonies. Intense, literate, organized around sermon and scripture, they were a culture as much as a theology.',
      'Blocked in the church, they turned to {{parliament|Parliament}} and, some, to New England. Their collision with {{charles-i|Charles I}}\'s ceremonialist church was a main driver of the {{civil-war|Civil War}}.',
    ],
  },
  {
    id: 'gunpowder-plot',
    term: 'The Gunpowder Plot',
    era: '1605',
    category: 'events',
    body: [
      'A conspiracy by Catholic gentlemen to blow up king and {{parliament|Parliament}} at the state opening; Guy Fawkes was caught with the powder. Its providential discovery became a compulsory annual celebration — Bonfire Night — that kept {{anti-popery|anti-popery}} alive for centuries.',
    ],
  },
  {
    id: 'divine-right',
    term: 'Divine right of kings',
    era: 'c.1600–1688',
    category: 'ideas',
    body: [
      'The doctrine that kings derive authority from God alone and answer to no earthly power. James I wrote treatises on it; {{charles-i|Charles I}} tried to govern by it, and it died with the {{glorious-revolution|Glorious Revolution}}.',
      'In England it always collided with an older rival idea: that the king rules under law — {{magna-carta|Magna Carta}}\'s legacy, sharpened by {{common-law|common lawyers}} like Edward Coke.',
    ],
  },
  {
    id: 'charles-i',
    term: 'Charles I',
    era: 'r.1625–1649',
    category: 'people',
    body: [
      'The shy, stubborn king whose eleven years of rule without {{parliament|Parliament}}, ceremonialist religious policy, and disastrous attempt to impose a prayer book on Scotland brought on the {{civil-war|Civil War}}.',
      'Defeated, he intrigued rather than settled, was tried by a purged Parliament, and was beheaded outside his own Banqueting House in January 1649 — dying with a dignity that made him a royal martyr and helped his son\'s {{restoration|Restoration}}.',
    ],
  },
  {
    id: 'civil-war',
    term: 'The Civil Wars',
    era: '1642–1651',
    category: 'events',
    body: [
      'The wars between {{charles-i|Charles I}} and {{parliament|Parliament}} — in Tombs\' framing, wars of religion above all, pitting {{puritans|Puritan}} parliamentarians against a church-and-king coalition. Proportionally, they killed a larger share of the English than the {{first-world-war|First World War}}.',
      'They produced a regicide, {{oliver-cromwell|Cromwell}}\'s {{commonwealth|republic}}, an explosion of radical ideas ({{levellers|Levellers}}, Diggers), and a lasting English horror of standing armies and zealotry. How to name and interpret them — Great Rebellion? Puritan Revolution? — has been fought over ever since, notably by {{whig-history|Whig historians}}.',
    ],
  },
  {
    id: 'levellers',
    term: 'The Levellers',
    era: '1645–1649',
    category: 'ideas',
    body: [
      'Radicals in the New Model Army and London who demanded a written constitution, near-universal male suffrage, and religious toleration. At the Putney Debates (1647), Colonel Rainsborough argued that the poorest Englishman has a life to live as much as the greatest.',
      '{{oliver-cromwell|Cromwell}} crushed them, but they left a template of democratic argument that reformers rediscovered repeatedly — and an example of the {{norman-yoke|Norman Yoke}} myth in radical action.',
    ],
  },
  {
    id: 'oliver-cromwell',
    term: 'Oliver Cromwell',
    era: '1599–1658',
    category: 'people',
    body: [
      'The Huntingdonshire gentleman who became the {{civil-war|Civil War}}\'s greatest general and, as Lord Protector, the only non-royal ruler of England. A {{puritans|Puritan}} certain of Providence, he backed regicide, conquered Ireland with a brutality still remembered there, and tolerated more religious variety at home than any predecessor.',
      'To some a liberator, to others a military dictator: his statue outside {{parliament|Parliament}} and his severed head\'s odyssey both testify to England\'s unresolved verdict.',
    ],
  },
  {
    id: 'commonwealth',
    term: 'The Commonwealth and Protectorate',
    era: '1649–1660',
    category: 'terms',
    body: [
      'England\'s republican interlude after the execution of {{charles-i|Charles I}} — first rule by the Rump Parliament, then by {{oliver-cromwell|Cromwell}} as Lord Protector. Militarily formidable abroad, it never solved its legitimacy problem at home.',
      'Within two years of Cromwell\'s death it collapsed into the {{restoration|Restoration}} — leaving the English permanently suspicious of republics, armies in politics, and rule by the godly.',
    ],
  },
  {
    id: 'restoration',
    term: 'The Restoration',
    era: '1660',
    category: 'events',
    body: [
      'The return of {{charles-ii|Charles II}} to the throne, greeted with maypoles, theatres reopening, and bonfires — a deliberate cultural reversal of {{puritans|Puritan}} rule.',
      'The settlement restored king, {{church-of-england|church}}, and {{parliament|Parliament}} but solved nothing fundamental: the same questions of religion and royal power returned within a generation in the {{glorious-revolution|Glorious Revolution}}.',
    ],
  },
  {
    id: 'charles-ii',
    term: 'Charles II',
    era: 'r.1660–1685',
    category: 'people',
    body: [
      'The "Merry Monarch" — witty, cynical, and determined (as he put it) not to go on his travels again. His reign brought the plague of 1665, the {{great-fire|Great Fire}}, war with the Dutch, and the birth of {{whigs-tories|Whig and Tory}} parties in the crisis over his Catholic brother\'s succession.',
      'He founded the Royal Society and dodged every constitutional showdown his father would have forced — dying, secretly, a Catholic.',
    ],
  },
  {
    id: 'great-fire',
    term: 'The Great Fire of London',
    era: '1666',
    category: 'events',
    body: [
      'Four days of fire that destroyed most of the medieval City of {{london|London}} — 13,000 houses and old St Paul\'s — a year after plague had killed perhaps 100,000 Londoners. Rebuilt in brick, crowned by Wren\'s new cathedral, the City rose fast: a favourite English parable of catastrophe shrugged off.',
    ],
  },
  {
    id: 'james-ii',
    term: 'James II',
    era: 'r.1685–1688',
    category: 'people',
    body: [
      'Charles II\'s openly Catholic brother, whose campaign to win toleration for {{catholicism|Catholics}} — by suspending laws, packing offices, and prosecuting seven bishops — united almost the whole political nation against him. The birth of a Catholic heir in 1688 triggered the invitation to {{william-iii|William of Orange}}.',
      'He fled without a battle, throwing the Great Seal into the Thames — allowing his opponents to claim, conveniently, that he had "abdicated".',
    ],
  },
  {
    id: 'glorious-revolution',
    term: 'The Glorious Revolution',
    era: '1688–1689',
    category: 'events',
    body: [
      'The overthrow of {{james-ii|James II}} by a Dutch invasion that met almost no resistance, and the installation of {{william-iii|William III}} and Mary II on terms: the Bill of Rights, regular {{parliament|Parliaments}}, no royal power to suspend law, a Protestant-only crown.',
      '{{whig-history|Whig historians}} made it the founding miracle of English liberty — bloodless, moderate, sensible. Tombs complicates the halo: it was a foreign conquest of a sort, bloody indeed in Scotland and Ireland, and it bought liberty at the price of joining William\'s long European war against France.',
    ],
  },
  {
    id: 'william-iii',
    term: 'William III',
    era: 'r.1689–1702',
    category: 'people',
    body: [
      'Dutch stadtholder, nephew and son-in-law of {{james-ii|James II}}, and Europe\'s chief organizer of resistance to Louis XIV. He took the English crown chiefly to bring England\'s weight into that struggle.',
      'His wars created the {{fiscal-military-state|fiscal-military state}} — the {{bank-of-england|Bank of England}}, the {{national-debt|national debt}} — that made Britain a great power.',
    ],
  },
  {
    id: 'whigs-tories',
    term: 'Whigs and Tories',
    era: 'c.1679 onward',
    category: 'institutions',
    body: [
      'England\'s original party division, born in the crisis over excluding the Catholic {{james-ii|James}} from the throne. Whigs: parliamentary supremacy, Protestant succession, toleration of Dissent, later commerce and reform. Tories: church and king, squire and parson.',
      'Both names began as insults (Scottish rebel; Irish bandit). Mutating over centuries, the division runs in recognizable descent to today\'s parties — and gave {{whig-history|Whig history}} its name.',
    ],
  },
  {
    id: 'bank-of-england',
    term: 'The Bank of England',
    era: '1694',
    category: 'institutions',
    body: [
      'Founded to lend to {{william-iii|William III}}\'s war government, it became the pivot of English public finance: managing the {{national-debt|national debt}}, issuing trusted paper, and anchoring {{london|London}}\'s rise as the world\'s money market.',
      'Cheap, credible borrowing was England\'s secret weapon — it let a middling country repeatedly outspend the far larger France.',
    ],
  },
  {
    id: 'national-debt',
    term: 'The national debt',
    era: '1690s onward',
    category: 'institutions',
    body: [
      'Permanent state borrowing, guaranteed by {{parliament|Parliament}} rather than by a king\'s promise — which is precisely why lenders trusted it. With the {{bank-of-england|Bank}} and an efficient excise, it formed the {{fiscal-military-state|fiscal-military state}}.',
      'Contemporaries were terrified of it; in fact it financed victory in every major war from 1690 to 1815, by which time the debt exceeded double the national income — and Britain was the world\'s leading power.',
    ],
  },
  {
    id: 'fiscal-military-state',
    term: 'The fiscal-military state',
    era: 'c.1690–1815',
    category: 'terms',
    body: [
      'Historians\' name for the machine Britain built after 1688: heavy taxation (mostly indirect), the {{national-debt|funded debt}}, a professional {{royal-navy|navy}}, and a small army — all voted, audited, and legitimized by {{parliament|Parliament}}.',
      'The paradox Tombs relishes: the "land of liberty" was, per head, one of Europe\'s most heavily taxed and effectively governed states. Consent made extraction efficient.',
    ],
  },
  {
    id: 'act-of-union-1707',
    term: 'The Union with Scotland',
    era: '1707',
    category: 'events',
    body: [
      'The treaty merging the English and Scottish parliaments into a single Parliament of Great Britain — driven by England\'s need to secure the Protestant succession and Scotland\'s need for access to English trade after the Darien disaster.',
      'It created the state, and over time the identity, of "Britain" — layered on top of Englishness, never quite replacing it. Tombs\' book is pointedly about the English, not the British; the distinction does real work, and {{devolution|devolution}} has lately sharpened it again.',
    ],
  },
  {
    id: 'jacobites',
    term: 'The Jacobites',
    era: '1689–1746',
    category: 'terms',
    body: [
      'Supporters of the exiled {{james-ii|Stuart}} line, strongest in Highland Scotland and among some English Tories. Their risings — especially 1715 and 1745, when Bonnie Prince Charlie reached Derby before turning back — were the last armed challenges to the {{glorious-revolution|Revolution settlement}}.',
      'Culloden (1746) ended the cause militarily; romantic memory then made rebels into legends, another case of history rewritten as myth.',
    ],
  },
  {
    id: 'walpole',
    term: 'Robert Walpole',
    era: '1676–1745',
    category: 'people',
    body: [
      'The Norfolk squire who dominated politics for two decades after 1721 and is counted the first "prime minister" — a title coined as an insult. His system: low taxes, peace, patronage, and management of {{parliament|Parliament}} for the {{whigs-tories|Whig}} oligarchy.',
      'He perfected cabinet government under a crown that reigned but no longer ruled — the practical working-out of the {{glorious-revolution|Revolution}}.',
    ],
  },
  {
    id: 'enlightenment',
    term: 'The English Enlightenment',
    era: 'c.1660–c.1800',
    category: 'ideas',
    body: [
      'England\'s version of the age of reason — empirical, sociable, commercial, and comparatively pious. Its heroes were Newton and Locke; its venues coffee-houses, clubs, and journals rather than salons plotting against the state.',
      'Tombs\' point: because England had already had its revolution, its Enlightenment was establishment-friendly — improving rather than subverting. Continental philosophers looked to England as the model of a free, modern society.',
    ],
  },
  {
    id: 'methodism',
    term: 'Methodism',
    era: '1730s onward',
    category: 'ideas',
    body: [
      'The revival movement of John Wesley — open-air preaching, disciplined small societies, hymns, and a message of salvation open to all. It reached miners and mill-workers the {{church-of-england|established church}} missed, eventually becoming a separate denomination.',
      'Its legacy runs through English popular culture: self-improvement, teetotalism, chapel respectability, and much of the early labour movement\'s leadership and moral style.',
    ],
  },
  {
    id: 'royal-navy',
    term: 'The Royal Navy',
    era: '17th c.–20th c.',
    category: 'institutions',
    body: [
      'England\'s chosen weapon: a wooden (later iron) wall that made invasion nearly impossible, protected trade, and let the country fight great-power wars without a great-power army. By 1805 and {{trafalgar|Trafalgar}} it commanded every ocean.',
      'It shaped politics too — navies, unlike standing armies, cannot coerce their own countrymen, which is partly why the English tolerated theirs.',
    ],
  },
  {
    id: 'east-india-company',
    term: 'The East India Company',
    era: '1600–1858',
    category: 'institutions',
    body: [
      'A joint-stock trading company that became, bizarrely, the ruler of India. From trading posts at Madras, Bombay, and Calcutta, it acquired armies, revenues, and after 1757 whole provinces.',
      'Parliament progressively tamed it; after the 1857 {{indian-rebellion|Rebellion}} the crown took over as the {{british-raj|Raj}}. Its career poses the empire question at its sharpest: conquest by a business, half-intended, hugely consequential.',
    ],
  },
  {
    id: 'thirteen-colonies',
    term: 'The American colonies',
    era: '1607–1783',
    category: 'places',
    body: [
      'England\'s settler colonies on the Atlantic seaboard — founded by {{puritans|Puritans}}, proprietors, and profit-seekers, populated by the largest English emigration anywhere. They ran themselves through assemblies modelled on {{parliament|Parliament}} and thought of their rights as English rights.',
      'Which is why taxing them without representation, after 1763, read to them as tyranny: the {{american-revolution|Revolution}} was in part an English civil war over English principles, fought abroad.',
    ],
  },
  {
    id: 'american-revolution',
    term: 'The American Revolution',
    era: '1775–1783',
    category: 'events',
    body: [
      'The revolt of the {{thirteen-colonies|thirteen colonies}}, triggered by post-war taxation and ending — after France, Spain, and the Dutch piled in — with British defeat at Yorktown and recognition of the United States.',
      'Tombs frames it as the fall of the first, Atlantic version of {{british-empire|empire}}: a shattering defeat that Britain, thanks to trade with its ex-colonies and the {{fiscal-military-state|fiscal-military state}}, absorbed with surprising speed. The "second" empire that followed faced east.',
    ],
  },
  {
    id: 'atlantic-slavery',
    term: 'The slave trade and slavery',
    era: 'c.1660–1833/1838',
    category: 'events',
    body: [
      'British ships carried around three million enslaved Africans across the Atlantic; sugar islands worked by enslaved labour were the empire\'s richest possessions. {{london|London}}, Bristol, and Liverpool grew fat on the traffic.',
      'The trade was abolished in 1807 and slavery itself in the 1830s, after the {{abolitionism|abolitionist}} campaign — the sequence of deep complicity followed by pioneering, costly abolition is, for Tombs, a defining moral knot in English history: neither half of it should be used to cancel the other.',
    ],
  },
  {
    id: 'abolitionism',
    term: 'Abolitionism',
    era: '1787–1838',
    category: 'ideas',
    body: [
      'The first modern mass moral campaign: petitions signed by hundreds of thousands, sugar boycotts, Wedgwood\'s kneeling-slave medallion, Wilberforce in {{parliament|Parliament}}, and Evangelical and {{methodism|Methodist}} energy behind it all.',
      'It abolished the {{atlantic-slavery|slave trade}} in 1807, then slavery in the empire — with the {{royal-navy|Royal Navy}} spending decades suppressing the trade at sea. It invented the repertoire of modern pressure-group politics.',
    ],
  },
  {
    id: 'industrial-revolution',
    term: 'The Industrial Revolution',
    era: 'c.1760–c.1850',
    category: 'events',
    body: [
      'The transformation that made England the "first industrial nation": coal, steam, cotton mills, iron, canals, then railways. Growth was slower than the word "revolution" suggests, but the cumulative change was total — by 1851 most English people lived in towns, a world first.',
      'Why England first? Tombs weighs high wages and cheap coal (making machines profitable), secure property and patents, a tinkering craft culture, and a state that let it happen. Its human costs — {{dickensian-england|the Dickensian city}} — became the age\'s great political question.',
    ],
  },
  {
    id: 'french-revolution',
    term: 'The French Revolution',
    era: '1789–1799',
    category: 'events',
    body: [
      'France\'s revolution electrified and then divided England: radicals like Tom Paine saw the dawn; Edmund Burke predicted terror and dictatorship and built modern conservatism on the prediction coming true.',
      'From 1793 it meant war — twenty-two years of it, ending at {{waterloo|Waterloo}} — and at home a panicky repression of English radicalism that postponed {{great-reform-act|parliamentary reform}} for a generation.',
    ],
  },
  {
    id: 'napoleonic-wars',
    term: 'The Napoleonic Wars',
    era: '1803–1815',
    category: 'events',
    body: [
      'The climax of the long duel with France. Britain\'s formula: {{royal-navy|sea power}} ({{trafalgar|Trafalgar}}), subsidies to continental allies funded by the {{national-debt|debt}}, economic blockade, {{wellington|Wellington}}\'s Peninsular army — and outlasting Napoleon to {{waterloo|Waterloo}}.',
      'Victory left Britain the world\'s banker, carrier, and naval hegemon for a century — the platform for the {{pax-britannica|Pax Britannica}}.',
    ],
  },
  {
    id: 'trafalgar',
    term: 'Trafalgar',
    era: '1805',
    category: 'events',
    body: [
      'Nelson\'s annihilating victory over the combined French and Spanish fleets off Cadiz, at the cost of his own life. It ended any prospect of invasion and fixed British naval supremacy for a hundred years.',
      'Nelson dead became the supreme national icon — column, square, and signal ("England expects…") folded into the myth-kitty alongside {{spanish-armada|1588}} and {{agincourt|Agincourt}}.',
    ],
  },
  {
    id: 'wellington',
    term: 'The Duke of Wellington',
    era: '1769–1852',
    category: 'people',
    body: [
      'Victor of the Peninsular War and {{waterloo|Waterloo}}, later a deeply reluctant prime minister who nevertheless carried Catholic Emancipation (1829) because the alternative was civil war in Ireland.',
      'The pattern — arch-conservative delivering reform to avert worse — recurs throughout English politics, and Tombs enjoys pointing it out.',
    ],
  },
  {
    id: 'waterloo',
    term: 'Waterloo',
    era: '1815',
    category: 'events',
    body: [
      'The final defeat of Napoleon by {{wellington|Wellington}}\'s Anglo-allied army and Blücher\'s Prussians, south of Brussels — "the nearest-run thing you ever saw in your life", in the Duke\'s words.',
      'It closed twenty-two years of war and opened a near-century in which Britain fought no general European war — the {{pax-britannica|Pax Britannica}}.',
    ],
  },
  {
    id: 'london',
    term: 'London',
    era: 'always',
    category: 'places',
    body: [
      'England\'s head, and often its whole nervous system: by 1700 the largest city in western Europe, by 1900 the largest the world had ever seen. Capital, port, money market ({{city-of-london|the City}}), press, and stage in one.',
      'Its gravitational pull — economic, cultural, political — is a constant of English history, and a constant complaint of everywhere else in England.',
    ],
  },
]
