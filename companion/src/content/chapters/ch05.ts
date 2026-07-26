import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'ch05',
  part: 3,
  number: '5',
  title: "Reformation",
  era: "c.1500–1603",
  blurb:
    'A king\'s marriage problem tore England from a thousand years of Catholic Christendom. Tombs argues the {{reformation-england|Reformation}} was forced on a devout country from above — and that the wound it opened, the "Great Divide" between Protestant and Catholic, organized English identity and politics for the next century and a half.',
  blocks: [
    {
      t: 'p',
      x: 'In 1500 England was among the most pious countries in Europe. Its parish churches were freshly rebuilt, its guilds and shrines flourished, and its people gave money and labour to the old religion with no sign of fatigue. Within two generations that world was smashed — not by popular demand, but by the state. Tombs makes the point bluntly: the English {{reformation-england|Reformation}} began not as a movement of the people but as an act of power, and its motor was a king who needed a son.',
    },
    { t: 'h', x: 'The King\'s Great Matter' },
    {
      t: 'p',
      x: '{{henry-viii|Henry VIII}} had defended the pope against Luther and been rewarded with the title "Defender of the Faith". But by the late 1520s his marriage to Catherine of Aragon had produced no living son, and the pope — effectively a prisoner of Catherine\'s nephew, the Emperor Charles V — would not grant an annulment. Henry\'s answer, worked out by Thomas Cromwell, was breathtaking: if Rome would not oblige, England would leave Rome. The Act of Supremacy (1534) declared the king Supreme Head of the {{church-of-england|Church of England}}. Those who refused the oath, including Thomas More, went to the block. Archbishop {{thomas-cranmer|Thomas Cranmer}} annulled the marriage; Anne Boleyn was crowned, and then, three years later, beheaded.',
    },
    {
      t: 'p',
      x: 'The break brought plunder. Between 1536 and 1540 the {{dissolution-monasteries|dissolution of the monasteries}} closed roughly 800 religious houses and transferred perhaps a quarter of the land of England to the Crown — which promptly sold most of it to gentry and speculators, creating a propertied class with a permanent stake in the Reformation. The north rose in protest: the Pilgrimage of Grace (1536), the largest rebellion in Tudor England, put tens of thousands of men under the banner of the Five Wounds of Christ. Henry promised pardons, then hanged the leaders. It was a warning of how unwillingly much of the country followed its king.',
    },
    {
      t: 'argument',
      x: 'Tombs sides with the revisionist historians: pre-Reformation Catholicism was healthy, popular, and loved, and the Reformation was imposed on a largely reluctant nation by royal command, statute, and the gallows. What made it stick was not conviction at first but obedience, property, and time — and, eventually, a new Protestant patriotism forged in fear of Catholic Europe.',
    },
    { t: 'h', x: 'The pendulum: Edward, Mary, Elizabeth' },
    {
      t: 'p',
      x: 'Henry died in 1547 still thinking himself a good Catholic, minus the pope. His son changed that. Under the boy-king {{edward-vi|Edward VI}}, real {{protestantism|Protestantism}} arrived: images smashed, altars replaced with plain tables, chantries closed, and worship rewritten in English by Cranmer in the {{book-of-common-prayer|Book of Common Prayer}} (1549, radicalized 1552). The 1549 prayer book helped ignite risings in Devon and Cornwall, put down with slaughter, while Kett\'s rebels in Norfolk rose over land grievances the same summer. Then Edward died at fifteen, and the pendulum swung back.',
    },
    {
      t: 'p',
      x: '{{mary-i|Mary I}}, Catherine of Aragon\'s daughter, restored {{catholicism|Catholicism}} and reunion with Rome — to genuine relief in much of the country. But her burning of some 280 Protestants, Cranmer among them, and her marriage to Philip of Spain handed her enemies an imperishable weapon. When she died childless in 1558 after just five years, her half-sister reversed course once more.',
    },
    { t: 'widget', id: 'reformation-pendulum' },
    {
      t: 'p',
      x: '{{elizabeth-i|Elizabeth I}} built a deliberate hybrid: Protestant doctrine inside a traditional shell of bishops, cathedrals, and ceremony, with a prayer book worded so that both camps could half-recognize their beliefs in it. She called herself Supreme Governor, not Head, and famously declined to make windows into men\'s souls. The settlement satisfied neither Catholics, who were slowly squeezed into a persecuted minority, nor the hotter sort of Protestants — the {{puritans|Puritans}} — who thought the church only half-reformed and wanted the job finished. Both discontents would shape the next century.',
    },
    { t: 'h', x: 'Armada and the birth of Protestant England' },
    {
      t: 'p',
      x: 'From 1570, when the pope excommunicated Elizabeth and released her subjects from obedience, English Catholicism became entangled — fairly or not — with treason. Plots swirled around the captive Mary Queen of Scots until Elizabeth reluctantly had her executed in 1587. The next year Philip II sent the {{spanish-armada|Armada}}: 130 ships to escort an invasion army from Flanders. English gunnery, fireships, and Atlantic gales wrecked the enterprise, and Protestant England read its deliverance as the verdict of God — the "Protestant wind".',
    },
    {
      t: 'p',
      x: 'The mental world this created is Tombs\' real subject. {{foxes-martyrs|Foxe\'s Book of Martyrs}} (1563), with its harrowing accounts of the Marian burnings, sat chained in churches beside the Bible and taught the English to see themselves as an elect nation persecuted by Rome. {{anti-popery|Anti-popery}} — the reflex fear of Catholic power, foreign and domestic — became the strongest political emotion in England, capable of moving crowds and toppling ministries for two hundred years. Protestantism and Englishness fused.',
    },
    {
      t: 'reading',
      title: 'The Great Divide',
      blocks: [
        {
          t: 'p',
          x: 'Tombs calls the Reformation the opening of the "Great Divide": the deepest rupture in English history, cutting the country off from its own past — its saints, shrines, and ancestors\' religion — and splitting Christendom into armed camps. For roughly 150 years, the central question of English politics was religious: was the Reformation safe? Every crisis of the seventeenth century, from the {{gunpowder-plot|Gunpowder Plot}} to civil war to the fall of James II, ran along this fault line.',
        },
        {
          t: 'p',
          x: 'Historians once told the story the other way round: a corrupt medieval church swept away by a popular reform whose time had come. Since the 1980s, scholars such as Eamon Duffy have documented the vitality of traditional religion and the coercion needed to end it. Tombs builds on this newer picture — which makes the eventual triumph of Protestant identity more remarkable, not less.',
        },
      ],
    },
    {
      t: 'timeline',
      title: 'The Tudor Reformation',
      events: [
        { year: '1534', label: 'Act of Supremacy', detail: '{{henry-viii|Henry VIII}} becomes Supreme Head of the Church of England; the break with Rome is law.' },
        { year: '1536–40', label: '{{dissolution-monasteries|Dissolution of the monasteries}}', detail: 'Roughly 800 religious houses closed; a vast transfer of land creates winners committed to the new order.' },
        { year: '1536', label: 'Pilgrimage of Grace', detail: 'The north rises for the old religion — the biggest Tudor rebellion. Henry breaks his promises and hangs the leaders.' },
        { year: '1549', label: 'First {{book-of-common-prayer|Book of Common Prayer}}', detail: 'Worship in English; the West Country rebels against the "Christmas game" and is crushed.' },
        { year: '1553', label: '{{mary-i|Mary I}} restores Catholicism', detail: 'Reunion with Rome — and some 280 Protestants burned, a toll {{foxes-martyrs|Foxe}} would never let England forget.' },
        { year: '1559', label: 'Elizabethan Settlement', detail: '{{elizabeth-i|Elizabeth}}\'s hybrid church: Protestant doctrine, traditional forms, deliberate ambiguity.' },
        { year: '1570', label: 'Pope excommunicates Elizabeth', detail: 'English Catholics are caught between queen and pope; loyalty becomes suspect.' },
        { year: '1588', label: '{{spanish-armada|Spanish Armada}} defeated', detail: 'Guns, fireships, and gales scatter the invasion fleet; Protestant England sees the hand of God.' },
      ],
    },
    { t: 'h', x: 'The unfinished settlement' },
    {
      t: 'p',
      x: 'Elizabeth died in 1603 after 44 years, having made her compromise stick by outliving everyone who hated it. But she left it unfinished. The {{puritans|Puritans}} still pressed for a purer church; Catholics still hoped and plotted; and the crown of England now passed to a Scottish king with firm ideas about the {{divine-right|divine right}} of kings. The religious passions the Tudors had raised and never resolved would, within two generations, blow the whole polity apart.',
    },
  ],
}

export default chapter
