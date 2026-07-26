import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'ch03',
  part: 2,
  number: '3',
  title: "A Well Good Land",
  era: "c.1200–1348",
  blurb:
    'High-medieval England: crowded, commercial, litigious, and increasingly governed by consent. In these five generations {{parliament|Parliament}} and the {{common-law|common law}} stop being experiments and start bearing weight — while the island quietly fills up with more people than it can feed.',
  blocks: [
    {
      t: 'p',
      x: 'A medieval writer called England "a well good land" — fertile, temperate, full of towns and churches — and for once the boast was roughly true. Between 1200 and 1348 England was one of the busiest corners of Europe. Tombs uses these years to demolish a caricature: this is not a "Dark Age" of mud and ignorance but a society of markets, documents, and lawsuits, where a villager might sue his neighbour, sell his wool into a European trade, and send his son to a school.',
    },
    { t: 'h', x: 'A crowded, trading island' },
    {
      t: 'p',
      x: "The population roughly tripled between {{domesday|Domesday}} and 1300, from perhaps two million to five million or more. Every usable acre came under the plough; marsh was drained, forest cleared, and holdings shrank as families divided them. The engine of the economy was wool: millions of fleeces went every year to the weavers of Flanders, and the profits built churches, bridges, and fortunes. Towns multiplied — hundreds of new chartered boroughs and markets — and {{london|London}}, with maybe 80,000 people, became one of the great cities of Christendom.",
    },
    {
      t: 'chart',
      kind: 'line',
      title: 'Population of England, 1086–1348',
      unit: 'millions',
      xLabel: 'year',
      series: [
        {
          name: 'Estimated population',
          points: [
            { x: 1086, y: 2.0 },
            { x: 1150, y: 3.0 },
            { x: 1200, y: 3.7 },
            { x: 1250, y: 4.5 },
            { x: 1300, y: 5.5 },
            { x: 1348, y: 5.0 },
          ],
        },
      ],
      note: 'Figures are rough estimates; historians\' guesses for 1300 range from about 4 to 6 million. The dip after 1300 reflects the great famine of 1315–17.',
    },
    { t: 'h', x: 'The charter that would not die' },
    {
      t: 'p',
      x: "{{magna-carta|Magna Carta}} should have been a footnote: {{king-john|John}} repudiated it within weeks and died the next year. Instead his son's regents reissued it in 1216 and 1217, and in 1225 Henry III reissued it again in exchange for a tax — fixing the bargain at the heart of English politics: money for the crown in return for law kept. Reconfirmed dozens of times over the century, the Charter turned from a failed peace treaty into something like fundamental law, and the principle it fed — no taxation without consent — needed a body to do the consenting.",
    },
    {
      t: 'voice',
      source: 'Magna Carta, clause 39 (1215), in the customary English rendering',
      x: '"No free man shall be seized or imprisoned... except by the lawful judgment of his equals or by the law of the land." Written to protect barons; read, for eight centuries afterwards, as protecting everyone.',
    },
    {
      t: 'p',
      x: "That body emerged from a rebellion. Henry III's expensive incompetence drove the barons, led by Simon de Montfort, to impose conciliar rule on him in 1258; when the deal collapsed, de Montfort beat and captured the king at Lewes in 1264. Needing support beyond the barons, he summoned a {{parliament|parliament}} in January 1265 that included not only knights of the shires but burgesses from the towns — the first time ordinary townsmen sat in a national assembly. De Montfort was killed and dismembered at Evesham within the year, but the experiment outlived him: kings discovered that a parliament with commoners in it was the easiest machine ever invented for raising taxes.",
    },
    { t: 'h', x: 'Edward I: hammer and lawgiver' },
    {
      t: 'p',
      x: "Edward I (1272–1307) made war on Britain and law in England. He conquered Wales in campaigns of 1277 and 1282–83, ringing the north with castles — Caernarfon, Conwy, Harlech — and naming his heir Prince of Wales. From 1296 he tried the same in Scotland and failed, starting a border war that would sputter for centuries. War on this scale devoured money, and money meant consent: his so-called Model Parliament of 1295 summoned lords, clergy, knights, and burgesses together, and by his death taxation-by-consent through {{parliament|Parliament}} was settled practice. His statutes overhauled land law and policing so thoroughly that lawyers still cite them.",
    },
    {
      t: 'p',
      x: "The same king committed the era's great crime. England's small Jewish community — perhaps two or three thousand people — had been the crown's milch-cow for a century, taxed without consent precisely because Jews stood outside the protections everyone else was accumulating, and battered by massacres and blood libels. Having squeezed them dry and banned their lending, Edward expelled every Jew from England in 1290, the first such national expulsion in Europe. They were not readmitted for over 350 years. Tombs notes the bleak logic: a state strong enough to protect rights was strong enough to strip them from those it excluded.",
    },
    {
      t: 'argument',
      x: "Thirteenth-century England was already what it would long remain: a much-governed, law-soaked, market-minded society. {{parliament|Parliament}} and the {{common-law|common law}} were no longer novelties but load-bearing walls — the crown could not tax, and increasingly could not act, without them. The 'Dark Ages' caricature obscures the fact that the constitutional machinery of modern England was built by people in the thirteenth century.",
    },
    { t: 'h', x: 'Parish, cathedral, school' },
    {
      t: 'p',
      x: "Religion was local and universal at once. The parish — England had about 9,000 — was the frame of ordinary life: baptism, marriage, burial, feast and fast, all within earshot of one bell. Above the parishes rose the age's most astonishing buildings: Salisbury cathedral went up in a single generation, Lincoln's spire reached higher than anything yet built by man. And learning found permanent homes: scholars clustered at Oxford from the twelfth century and, after a violent town-and-gown quarrel in 1209, some fled to found Cambridge. England now trained its own lawyers, clerks, and bishops.",
    },
    {
      t: 'reading',
      title: 'Why was medieval England so litigious?',
      blocks: [
        {
          t: 'p',
          x: "The {{common-law|common law}} that {{henry-ii|Henry II}} had systematized worked on a simple, brilliant mechanism: standard royal writs. For a small fee, a free man could buy a writ that pulled his dispute — over land, debt, inheritance — out of his lord's court and into the king's, where a {{jury-trial|jury}} of local men decided the facts. Royal justices rode circuits to bring the court to the counties.",
        },
        {
          t: 'p',
          x: "The result was a society that sued rather than feuded, and a paper trail historians still mine: millions of entries survive in the plea rolls. Tombs' point is that law was not imposed on the English from above; they consumed it eagerly, and their appetite for it made the king's courts — and so the king's state — grow.",
        },
      ],
    },
    {
      t: 'timeline',
      title: 'From charter to catastrophe',
      events: [
        { year: '1215', label: '{{magna-carta|Magna Carta}} sealed at Runnymede', detail: 'Annulled within weeks — then reissued after {{king-john|John}}\'s death, and reconfirmed for a century.' },
        { year: '1225', label: 'The definitive reissue', detail: 'Henry III grants the Charter in exchange for a tax: law kept for money paid, the deal that makes {{parliament|Parliament}}.' },
        { year: '1258', label: 'Provisions of Oxford', detail: 'Barons led by Simon de Montfort put the king under conciliar rule.' },
        { year: '1265', label: "De Montfort's parliament", detail: 'Knights *and burgesses* summoned for the first time; de Montfort dies at Evesham months later, but the precedent holds.' },
        { year: '1277–83', label: 'Edward I conquers Wales', detail: 'Two campaigns, a ring of great castles, and the end of Welsh independence.' },
        { year: '1290', label: 'The Jews expelled', detail: 'Every Jew ordered out of England — the first national expulsion in Europe. Readmission comes only in the 1650s.' },
        { year: '1295', label: 'The Model Parliament', detail: 'Lords, clergy, knights, and burgesses together; taxation-by-consent becomes settled practice.' },
        { year: '1315–17', label: 'The Great Famine', detail: 'Harvests fail across northern Europe; an overstretched population starves in the hundreds of thousands.' },
        { year: '1348', label: 'The plague lands', detail: 'Ships bring the {{black-death|Black Death}} to Dorset in high summer.' },
      ],
    },
    { t: 'h', x: 'The hinge: too many people, and a ship from the south' },
    {
      t: 'p',
      x: "By 1300 the well good land was full. Holdings had shrunk below what a family could live on, real wages had sagged, and when the rains ruined the harvests of 1315–17 people starved in a country that a century earlier had fed itself with ease. England entered the 1340s crowded, hungry at the margins, and at war with France. In the summer of 1348 a ship put in at Melcombe Regis on the Dorset coast carrying, along with its cargo, the {{black-death|Black Death}}. What it did to this brimming island is the next chapter.",
    },
  ],
}

export default chapter
