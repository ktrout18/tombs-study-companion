import type { QuizQ } from '../../types'

export const QUIZ_A: Record<string, QuizQ[]> = {
  intro: [
    {
      q: 'Why does Tombs say his subject is "double" — covering not only events but also beliefs about them?',
      options: [
        'Because he writes about both England and Britain in every chapter',
        'Because the book alternates between political and economic history',
        'Because what the English have believed about their past has itself shaped what they did next',
        'Because he compares English history with French history throughout',
      ],
      answer: 2,
      explain: 'For Tombs, myths like the {{norman-yoke|Norman Yoke}} and perpetual {{declinism|decline}} are not just errors — beliefs about the past are causes of later events.',
    },
    {
      q: 'Which features does Tombs cite as evidence that a kingdom of the English has existed for over a thousand years?',
      options: [
        'Fixed borders, shires, a single coinage, and national taxation',
        'A written constitution, a standing army, and a supreme court',
        'A national church, universities, and a capital city',
        'Colonies overseas, a navy, and a parliament of two houses',
      ],
      answer: 0,
      explain: 'Claim one of the book is that England is old: {{shire|shires}}, one coinage, and national taxes mark a durable state most European countries cannot match for age.',
    },
    {
      q: 'According to the introduction, what lesson did Foxe teach the English, and with what result?',
      options: [
        'That their constitution was the envy of the world, prompting complacency',
        'That their greatest war had been futile, prompting withdrawal from Europe',
        'That the Normans had stolen their liberty, prompting revolution',
        'That they were an elect Protestant nation, and they acted on that belief for three centuries',
      ],
      answer: 3,
      explain: 'The introduction uses {{foxes-martyrs|Foxe}} as a prime case of memory steering policy: the self-image of a chosen Protestant nation guided English action for centuries.',
    },
    {
      q: 'How does Tombs explain the "decline" of England since around 1900?',
      options: [
        'As a real collapse caused by losing the empire',
        'As mostly an illusion created by other countries catching up',
        'As the direct result of two world wars',
        'As a consequence of the union with Scotland',
      ],
      answer: 1,
      explain: 'Claim three holds that {{declinism|declinism}} is bad history: England stayed rich, stable, and influential, and its relative slippage reflects others closing the gap.',
    },
  ],

  prelude: [
    {
      q: 'Around which year did Rome withdraw from Britain, telling the Britons to see to their own defence?',
      options: ['43', '410', '597', '664'],
      answer: 1,
      explain: 'The legions left around 410, and {{roman-britain|Roman Britain}} collapsed within a generation — harder and faster than almost anywhere else in the empire.',
    },
    {
      q: 'Why, on the explanation the chapter offers, did Britain lose Latin, Roman law, and its bishops when Gaul and Spain kept theirs?',
      options: [
        'The Anglo-Saxons deliberately destroyed every Roman institution they found',
        'Britain had never been fully Romanized in the first place',
        'The church withdrew its clergy along with the legions',
        'State collapse was so total that Roman identity lost its prestige, leaving the newcomers\' culture dominant',
      ],
      answer: 3,
      explain: 'This "failed continuity" matters to the book: when {{anglo-saxon-england|England}} later built shires and courts, it was building fresh, not inheriting Rome.',
    },
    {
      q: 'What irony does Tombs highlight about Arthur as a national hero?',
      options: [
        'If he existed, he fought against the English — yet England adopted him as its own',
        'He was invented entirely by the Tudors for propaganda purposes',
        'He was actually a Roman general, not a Briton',
        'His legend was unknown in England until the Victorians revived it',
      ],
      answer: 0,
      explain: 'The historical kernel is at most a British war-leader who beat the Saxons at Badon; Plantagenet and Tudor courts still claimed him as their imperial ancestor.',
    },
    {
      q: 'Why does Tombs call the Dreamtime a "controlled experiment" in national myth-making?',
      options: [
        'Because archaeologists can now test each legend against DNA evidence',
        'Because monks recorded the era\'s myths under strict rules',
        'Because with almost no facts to constrain them, the English filled the void with inventions and then acted on them',
        'Because every European nation invented exactly the same legends',
      ],
      answer: 2,
      explain: 'Kings claimed empire from Arthur, lawyers claimed immemorial custom, and radicals claimed {{norman-yoke|lost Saxon freedom}} — the same mechanism the book keeps finding in better-documented centuries.',
    },
  ],

  ch01: [
    {
      q: 'What did the Synod of Whitby in 664 decide?',
      options: [
        'That the English kingdoms would unite under one king',
        'That pagan worship would be tolerated alongside Christianity',
        'That the English church would follow Roman rather than Irish practice',
        'That church services would be held in English',
      ],
      answer: 2,
      explain: 'The {{synod-of-whitby|Synod of Whitby}} bound the English church to Rome and the continent, a century before any king ruled all the English.',
    },
    {
      q: 'What, for Tombs, was the most consequential effect of Bede\'s Ecclesiastical History?',
      options: [
        'It treated the scattered kingdoms as one people, "the English", before any king ruled them all',
        'It provided the first accurate maps of the island',
        'It converted the last pagan kingdoms to Christianity',
        'It established York as the seat of the English church',
      ],
      answer: 0,
      explain: 'The nation was imagined before it was built: when {{alfred-the-great|Alfred}} later needed to rally more than his West Saxons, {{bede|Bede}}\'s idea of the *Angelcynn* was already on the shelf.',
    },
    {
      q: 'What does Tombs take from the fact that Cnut, after conquering England in 1016, changed almost nothing?',
      options: [
        'That the Danes had already adopted English customs before invading',
        'That Cnut was too weak a ruler to impose his own system',
        'That England was too poor to be worth reorganizing',
        'That the English state worked so well it was worth stealing intact',
      ],
      answer: 3,
      explain: '{{cnut|Cnut}} kept the laws, church, {{shire|shires}}, and taxes, running England as the richest province of a North Sea empire — proof of the system\'s solidity.',
    },
    {
      q: 'In which year did Æthelstan defeat the combined kings of Scots, Strathclyde, and Dublin at Brunanburh?',
      options: ['878', '937', '865', '1016'],
      answer: 1,
      explain: '{{athelstan|Æthelstan}}, Alfred\'s grandson and the first king of all England, won Brunanburh in 937; the poets remembered it as the greatest of battles.',
    },
  ],

  ch02: [
    {
      q: 'Why does English pair words like cow with beef and sheep with mutton?',
      options: [
        'Because Latin remained the language of cooking after the Conquest',
        'Because French was the language of power for three centuries, splitting farmyard words from table words',
        'Because Danish settlers in the Danelaw introduced separate food terms',
        'Because Tudor printers standardized two vocabularies side by side',
      ],
      answer: 1,
      explain: 'After the {{norman-conquest|Conquest}}, a French-speaking elite ruled English-speaking farmers — the humble animal kept its English name, the elegant dish took a French one.',
    },
    {
      q: 'According to the chapter, what made Domesday Book possible?',
      options: [
        'A new census system the Normans imported from France',
        'The personal supervision of William across every county',
        'Record-keeping borrowed from the church\'s parish registers',
        'The records and machinery of the Anglo-Saxon state the Normans had captured',
      ],
      answer: 3,
      explain: 'The Conquest\'s most famous artefact was only possible because the {{anglo-saxon-england|Anglo-Saxon state}} kept records no other kingdom had; {{domesday|Domesday}} audited England with English machinery.',
    },
    {
      q: 'Tombs says his reading of the Conquest "cuts both ways". Against what two views is it aimed?',
      options: [
        'Against the idea that the Normans civilized a backward island, and against downplaying the real, remembered trauma',
        'Against Norman propaganda and against Saxon propaganda in equal measure',
        'Against French historians and against English historians',
        'Against the church\'s account and against the crown\'s account',
      ],
      answer: 0,
      explain: 'The Normans captured Europe\'s best-run state and were changed by it — yet the trauma was real, and the {{norman-yoke|Norman Yoke}} myth became permanent political furniture.',
    },
    {
      q: 'What was the long-term effect of King John losing Normandy in 1204?',
      options: [
        'England immediately invaded France to recover it',
        'The crown abandoned its claims to any land in France',
        'Barons had to choose estates on one side of the Channel, and within a generation the aristocracy became territorially English',
        'The barons deposed John and elected a French prince',
      ],
      answer: 2,
      explain: 'Tombs ends the chapter on defeat as midwife of the nation: {{king-john|John}}\'s extortionate bid to win Normandy back then drove his barons to {{magna-carta|Magna Carta}}.',
    },
  ],

  int1: [
    {
      q: 'Where was the Anglo-Saxon Chronicle kept going in English until 1154?',
      options: ['Canterbury', 'Jarrow', 'Peterborough', 'Winchester'],
      answer: 2,
      explain: 'Monks at Peterborough continued the Chronicle in English after the {{norman-conquest|Conquest}}, helping {{bede|Bede}}\'s invention — a people who understood themselves through history books — survive defeat.',
    },
    {
      q: 'What recurring English habit does Tombs say the Norman Yoke myth exemplifies?',
      options: [
        'Blaming foreigners for every domestic failure',
        'Presenting reform as restoration — changing things by claiming to change them back',
        'Preferring legend to any documented history',
        'Treating military defeat as moral victory',
      ],
      answer: 1,
      explain: 'From {{magna-carta|Magna Carta}} to the {{civil-war|Civil War}}, the English cast new demands as old liberties reclaimed; the {{norman-yoke|Norman Yoke}} is the master example.',
    },
    {
      q: 'Why did Archbishop Matthew Parker collect Anglo-Saxon manuscripts?',
      options: [
        'To prove a plain, English-minded church predated Rome\'s grip, making Henry VIII\'s church a return rather than a rupture',
        'To preserve them from destruction in the monastic libraries',
        'To trace the royal family\'s descent from Alfred',
        'To compile the first dictionary of Old English',
      ],
      answer: 0,
      explain: 'Tudor antiquarianism was ammunition, not scholarship: Parker\'s manuscripts argued that {{church-of-england|Henry VIII\'s church}} restored something ancient, while lawyers like Coke made the same move for the {{common-law|common law}}.',
    },
    {
      q: 'What did the 1939 excavation at Sutton Hoo do to the reputation of the early Anglo-Saxon period?',
      options: [
        'It confirmed the Victorian racial theories about the Saxons',
        'It proved the burial was Viking rather than English',
        'It showed the Anglo-Saxons had preserved Roman institutions after all',
        'Its treasures made the "Dark Ages" label absurd, showing a rich, skilled, well-connected society',
      ],
      answer: 3,
      explain: 'The ship burial\'s gold, garnet, and Byzantine silver showed seventh-century {{anglo-saxon-england|England}} plugged into trade reaching the eastern Mediterranean; one dig overturned a century-old caricature.',
    },
  ],

  ch03: [
    {
      q: 'What was new about the parliament Simon de Montfort summoned in January 1265?',
      options: [
        'It included burgesses from the towns alongside knights of the shires for the first time',
        'It met without the king\'s permission for the first time',
        'It was the first assembly to grant a national tax',
        'It was the first to meet at Westminster',
      ],
      answer: 0,
      explain: 'Needing support beyond the barons, de Montfort brought ordinary townsmen into a national assembly; he died at Evesham within the year, but kings kept the machine because a {{parliament|parliament}} with commoners raised taxes best.',
    },
    {
      q: 'Why did Magna Carta survive rather than becoming a footnote after John repudiated it?',
      options: [
        'The pope enforced it against the English crown',
        'The barons held London until the king submitted',
        'Every later king swore to it at his coronation',
        'It was reissued after John\'s death, and in 1225 granted in exchange for a tax — fixing the bargain of money for law kept',
      ],
      answer: 3,
      explain: 'The 1225 reissue turned {{magna-carta|Magna Carta}} from a failed peace treaty into something like fundamental law, and the principle of consent to taxation would need {{parliament|Parliament}} to do the consenting.',
    },
    {
      q: 'What happened to England\'s Jewish community in 1290?',
      options: [
        'It was placed under direct royal protection',
        'It was confined to designated towns',
        'Edward I expelled every Jew from England — the first national expulsion in Europe',
        'It was forcibly converted to Christianity',
      ],
      answer: 2,
      explain: 'Having taxed the community without consent and banned its lending, Edward ordered the expulsion; readmission came only after more than 350 years. Tombs notes the bleak logic: a state strong enough to protect rights could strip them from those it excluded.',
    },
    {
      q: 'How does Tombs explain why medieval England became so litigious?',
      options: [
        'The church required disputes to be settled in writing',
        'Ordinary free men eagerly bought royal writs to pull disputes into the king\'s courts, and their appetite for law made the state grow',
        'Lords forced their tenants into court to collect fines',
        'The crown made lawsuits compulsory to raise revenue',
      ],
      answer: 1,
      explain: 'Law was not imposed from above: for a small fee a writ moved a quarrel from the lord\'s court to the king\'s, where a {{jury-trial|jury}} decided the facts — so the English sued rather than feuded, and the {{common-law|common law}} grew.',
    },
  ],

  ch04: [
    {
      q: 'Why did serfdom in England disappear between 1350 and 1500?',
      options: [
        'Parliament formally abolished it after the Peasants\' Revolt',
        'The church declared servile tenure sinful',
        'With labour scarce after the plague, serfs could walk to better offers and lords competing for tenants dropped servile dues',
        'The crown bought out the lords\' rights over their villeins',
      ],
      answer: 2,
      explain: '{{feudalism|Serfdom}} was never abolished — it evaporated. The Statute of Labourers tried to freeze wages at pre-plague rates and failed against so strong a market.',
    },
    {
      q: 'What triggered the Peasants\' Revolt of 1381?',
      options: [
        'A third poll tax in four years, flat-rate and so heaviest on the poor',
        'A new law binding labourers to their home villages',
        'The confiscation of common land by the monasteries',
        'A failed harvest and famine across the south-east',
      ],
      answer: 0,
      explain: 'The men of Kent and Essex took {{london|London}} and beheaded the archbishop; the rising was crushed, but the poll tax was dropped and serfdom went on dissolving — they lost the week and won the century.',
    },
    {
      q: 'What is Tombs\' central claim about the Black Death\'s effect on English society?',
      options: [
        'It destroyed the constitutional progress of the previous century',
        'It changed religious life but left the economy untouched',
        'It set England back behind its European rivals for two centuries',
        'It was an accelerant: trends already under way — wage labour, English replacing French, Commons bargaining — all sped up',
      ],
      answer: 3,
      explain: 'The disaster that killed perhaps half the English made the survivors richer, freer, and harder to rule; the {{black-death|Black Death}} hastened changes rather than inventing them.',
    },
    {
      q: 'What did William Caxton do in 1476?',
      options: [
        'Completed the first full English translation of the Bible',
        'Set up England\'s first printing press, at Westminster',
        'Opened Parliament in English for the first time',
        'Standardized "Chancery English" for the crown\'s clerks',
      ],
      answer: 1,
      explain: 'Caxton\'s press fixed the language in type and sold it by the shelf-load — the capstone of a century in which English took back the country\'s public life.',
    },
  ],

  int2: [
    {
      q: 'How did Tudor chroniclers like Hall and Holinshed shape the story of the fifteenth century?',
      options: [
        'As a golden age of chivalry ended by Tudor tyranny',
        'As a morality tale: Richard II\'s deposition was a sin, the wars were God\'s punishment, and the Tudors were providence\'s rescue',
        'As a neutral chronicle compiled from royal records',
        'As proof that England should never again fight France',
      ],
      answer: 1,
      explain: 'The new dynasty needed the old century to look terrible; the tidy tale wildly exaggerated how much the {{wars-of-roses|Wars of the Roses}} had disrupted English life.',
    },
    {
      q: 'Why does Tombs call Shakespeare "the most influential English historian who ever lived"?',
      options: [
        'Because he worked directly from medieval documents',
        'Because his plays were the first histories written in English',
        'Because academic historians adopted his interpretations',
        'Because his versions of the medieval past displaced the facts, and four centuries of correction have not driven them off the stage',
      ],
      answer: 3,
      explain: 'For most English people the medieval past *is* his production — Richard III the crookback villain, {{henry-v|Henry V}}\'s band of brothers at {{agincourt|Agincourt}} — built from sources made to flatter his queen\'s grandfather.',
    },
    {
      q: 'How did the Victorians change the figure of Robin Hood?',
      options: [
        'They turned a yeoman with a grievance into a dispossessed Saxon gentleman robbing the rich for the poor',
        'They invented him outright, with no medieval source at all',
        'They recast him as a Norman knight loyal to the crown',
        'They moved his story from Sherwood to the Scottish borders',
      ],
      answer: 0,
      explain: 'Scott\'s *Ivanhoe* carried the {{norman-yoke|Norman Yoke}} myth to a mass audience and folded Robin Hood into it — class and conquest retold as greenwood romance.',
    },
    {
      q: 'What happened in 2012 that showed the argument over Richard III is still alive?',
      options: [
        'Shakespeare\'s play was banned from the school curriculum',
        'A lost Tudor chronicle exonerating him was discovered',
        'His skeleton was dug from under a Leicester car park and later reburied in the cathedral before a global audience',
        'Parliament formally pardoned him for the princes\' deaths',
      ],
      answer: 2,
      explain: 'Five centuries on, the debate is still with Shakespeare\'s villain, on ground the playwright chose — which is exactly Tombs\' point about drama capturing the medieval past.',
    },
  ],
}
