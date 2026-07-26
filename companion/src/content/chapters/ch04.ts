import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'ch04',
  part: 2,
  number: '4',
  title: "The World Is Changed and Overthrown",
  era: "1348–c.1500",
  blurb:
    'The {{black-death|Black Death}} kills perhaps half of England — and the survivors inherit higher wages, looser bonds, and a language of their own. A century and a half of plague, revolt, lost wars, and dynastic bloodletting that ends with the English freer, richer, and speaking English.',
  blocks: [
    {
      t: 'p',
      x: 'A chronicler wrote after the plague that the world was "changed and overthrown", and Tombs takes him at his word. This chapter runs from the worst demographic disaster in English history to the battle of Bosworth, and its through-line is a hard paradox: catastrophe did not wreck the society the last chapter described — it accelerated it. Death freed the living, and out of the wreckage came an English-speaking nation.',
    },
    { t: 'h', x: 'The Great Mortality' },
    {
      t: 'p',
      x: "The {{black-death|plague}} came ashore in Dorset in the summer of 1348 and burned across the country within a year. The dead cannot be counted exactly, but modern estimates run to around half the population — and the plague came back, in 1361 and repeatedly for three centuries, mowing down each new generation. Whole villages emptied and never refilled; England did not regain its pre-plague population until the 1600s. Contemporaries read it as the wrath of God. Its economic meaning was simpler: land was suddenly cheap, and people suddenly precious.",
    },
    {
      t: 'p',
      x: "Landlords understood at once. With labourers scarce, wages jumped, and {{parliament|Parliament}} tried to freeze them at pre-plague rates with the Statute of Labourers (1351). It failed, as price controls against a market that strong usually do. Serfs — villeins bound to the lord's land and courts — found they could simply walk to a better offer, and lords competing for tenants quietly dropped servile dues. {{feudalism|Serfdom}} in England was never abolished; between 1350 and 1500 it evaporated.",
    },
    { t: 'h', x: 'The rising and the heresy' },
    {
      t: 'p',
      x: "Attempts to hold the old line produced the explosion of 1381. A third poll tax in four years — flat-rate, so heaviest on the poor — lit the {{peasants-revolt|Peasants' Revolt}}: the men of Kent and Essex marched on {{london|London}}, burned the Savoy Palace, and beheaded the archbishop of Canterbury and the treasurer. The preacher John Ball asked the question that outlived the revolt: \"When Adam delved and Eve span, who was then the gentleman?\" The fourteen-year-old Richard II talked the rebels home with promises he then broke, and the leaders were hanged. Yet the rebels lost the week and won the century: the poll tax was dropped and serfdom went on dissolving.",
    },
    {
      t: 'p',
      x: "Rebellion in the church matched rebellion in the fields. The Oxford theologian John Wyclif attacked the wealth of the clergy and the pope's authority, and his followers — the {{lollards|Lollards}} — spread English translations of the Bible and a stubborn, home-grown scepticism about priests, pilgrimages, and the mass. The establishment answered with a statute for burning heretics (1401), and Lollardy was driven underground. It never quite died; a century later, {{reformation-england|reformers}} would find the ground already loosened.",
    },
    {
      t: 'argument',
      x: "Tombs' claim is that the {{black-death|Black Death}} was an accelerant, not just a horror. Trends already visible — wage labour, peasant land-buying, English ousting French, the {{house-of-commons|Commons}} bargaining over taxes — all sped up when labour became scarce and government became needy. The disaster that killed half the English made the survivors richer, freer, and harder to rule.",
    },
    { t: 'h', x: 'France won and lost' },
    {
      t: 'p',
      x: "The {{hundred-years-war|war with France}} that {{edward-iii|Edward III}} had begun flared back to life under {{henry-v|Henry V}}, the most formidable of medieval English kings. At {{agincourt|Agincourt}} in 1415 his sick, outnumbered army destroyed the French nobility in a few hours of mud and arrows; by the Treaty of Troyes (1420) he was heir to the French crown. Then he died at thirty-five, leaving a baby. Joan of Arc turned the tide at Orléans in 1429, and the English position rotted for a generation until, in 1453, the last field army was smashed at Castillon. Of the whole continental inheritance, only Calais remained. Three centuries of English kings holding lands in France were over.",
    },
    { t: 'h', x: 'Cousins at war' },
    {
      t: 'p',
      x: "Defeat abroad broke the peace at home. Henry VI, pious and periodically insane, presided over bankruptcy and humiliation, and the royal cousins fought for the wheel: the {{wars-of-roses|Wars of the Roses}}, Lancaster against York, ran on and off from 1455 to 1485. Towton (1461) was perhaps the bloodiest battle ever fought on English soil; Edward IV won the crown, lost it, and won it back; his brother Richard III took the throne past his young nephews, who vanished in the Tower. In 1485 the near-unknown Henry Tudor killed Richard at Bosworth and married the wars shut, uniting Lancaster and York. Tombs adds the deflating footnote: for all the noble blood spilled, the fighting was brief and localized, and most English life — ploughing, trading, suing — went on barely interrupted.",
    },
    { t: 'widget', id: 'dynastic-tree' },
    { t: 'h', x: 'An English-speaking nation' },
    {
      t: 'p',
      x: "Beneath the dynastic noise, the century's quietest change was the biggest. English — for three hundred years the language of the ruled, not the rulers — took back the country's public life. Parliament was opened in English in 1362; {{henry-v|Henry V}} pointedly wrote his letters home in it; the crown's clerks standardized \"Chancery English\", the ancestor of the written standard. Chaucer chose English for the *Canterbury Tales* and proved it could do anything French could. And in 1476 William Caxton set up England's first printing press at Westminster, fixing the language in type and selling it by the shelf-load to a public that could increasingly read.",
    },
    {
      t: 'reading',
      title: 'The golden age of the English labourer',
      blocks: [
        {
          t: 'p',
          x: "Historians of wages find something startling in the 1400s: by mid-century a building labourer's real earnings stood higher than they would be again until the Victorian era. Fewer mouths meant cheaper bread and dearer hands; ordinary people ate more meat, drank more ale, wore better wool, and left wills disposing of goods their great-grandparents never owned.",
        },
        {
          t: 'p',
          x: "The land market tells the same story. Servile tenures decayed into copyhold — effectively secure, heritable tenancies — and a rising class of yeomen farmed consolidated holdings for the market. Tombs stresses the point because it grounds the whole chapter: 'the world overthrown' was, for the survivors and their children, a better world than the crowded, hungry island of 1348.",
        },
      ],
    },
    {
      t: 'timeline',
      title: 'Catastrophe and consequence',
      events: [
        { year: '1348–49', label: 'The {{black-death|Black Death}}', detail: 'Perhaps half of England dies within eighteen months; the plague returns for generations.' },
        { year: '1351', label: 'Statute of Labourers', detail: '{{parliament|Parliament}} tries to freeze wages at pre-plague levels. The market ignores it.' },
        { year: '1381', label: "The {{peasants-revolt|Peasants' Revolt}}", detail: 'Poll-tax rebels take {{london|London}} and behead the archbishop; crushed, but the poll tax dies with them.' },
        { year: '1415', label: '{{agincourt|Agincourt}}', detail: "{{henry-v|Henry V}}'s outnumbered army destroys the French nobility." },
        { year: '1453', label: 'France lost', detail: 'Defeat at Castillon ends the {{hundred-years-war|Hundred Years\' War}}; only Calais remains.' },
        { year: '1455–85', label: 'The {{wars-of-roses|Wars of the Roses}}', detail: 'Lancaster and York fight for a bankrupt crown; three kings die violently.' },
        { year: '1476', label: 'Caxton\'s press', detail: 'The first English printing press, at Westminster, fixes the language in type.' },
        { year: '1485', label: 'Bosworth', detail: 'Henry Tudor kills Richard III and marries Elizabeth of York; the Tudor age begins.' },
      ],
    },
    { t: 'h', x: 'The hinge: a new dynasty, an old church' },
    {
      t: 'p',
      x: "By 1500 England was thinly peopled, well fed, precociously governed, and — a new thing in its history — monoglot English from plough to throne. The Tudors set about making the crown solvent and the nobility tame. What nobody foresaw was that the next great overthrow would come not from plague or dynastic war but from the king's conscience, or his lack of one: within a generation {{henry-viii|Henry VIII}} would tear the English church away from Rome, and the {{reformation-england|Reformation}} would divide the English against each other for centuries. That storm is the next part's story.",
    },
  ],
}

export default chapter
