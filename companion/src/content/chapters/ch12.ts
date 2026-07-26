import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'ch12',
  part: 5,
  number: '12',
  title: "Dickensian England",
  era: "c.1815–c.1850",
  blurb:
    'Workhouses, slums, factory children, cholera — the England of Dickens\' novels was real. So, Tombs insists, was the other England of the same years: inspectors, reformers, statisticians, and self-organizing citizens fixing abuses faster than any society before them. This chapter asks why we remember the horror and forget the repair.',
  blocks: [
    {
      t: 'p',
      x: 'Peace brought no plenty. After {{waterloo|Waterloo}}, wartime demand collapsed, soldiers came home to no work, and Parliament — a house of landowners — passed the {{corn-laws|Corn Laws}} of 1815 to keep grain prices, and therefore rents, high. Cheap bread was made illegal to protect the men who made the law. The next thirty-five years were the most turbulent of modern English history: mass meetings, riots, near-revolution in 1831, and the largest working-class movement the world had yet seen. They were also, and this is Tombs\' point, the years in which England invented modern reform.',
    },
    { t: 'h', x: 'Distress and protest' },
    {
      t: 'p',
      x: 'In August 1819, some 60,000 people gathered peacefully on St Peter\'s Field in Manchester to demand the vote. Local yeomanry charged the crowd with sabres; around fifteen died and hundreds were injured. The radicals\' bitter joke — "Peterloo" — stuck, and the massacre became a founding memory of English radicalism. A decade later distress moved to the countryside: in 1830 the "Captain Swing" riots swept the southern counties, farm labourers smashing the threshing machines that took their winter work. The government hanged a few and transported hundreds. The grievances remained.',
    },
    { t: 'h', x: 'The Reform crisis' },
    {
      t: 'p',
      x: 'The old electoral map was indefensible: Manchester had no MP while abandoned hamlets — "rotten boroughs" — returned two. In 1831–32 the Lords\' refusal to pass reform brought the country as close to revolution as it has come in modern times: Bristol burned for three days, political unions drilled, and there was a run on the banks. The {{great-reform-act|Great Reform Act}} of 1832 passed only when the king agreed, if needed, to create enough new peers to swamp the Lords. The Act itself was modest — it enfranchised the propertied middle class, about one adult man in five — but the precedent was everything: the constitution could be changed under pressure, peacefully, by Parliament itself. The safety valve worked, and England never needed a barricade.',
    },
    { t: 'h', x: 'The two Englands of the Blue Books' },
    {
      t: 'p',
      x: 'The industrial city horrified those who looked closely. Cholera arrived in 1831 and kept returning through the water supply; in the worst slum districts of Manchester and Liverpool, life expectancy fell into the twenties; small children tended machines twelve hours a day. This is {{dickensian-england|Dickensian England}}, and Dickens did not have to invent it. The New Poor Law of 1834 added a cruelty of design: relief only inside the workhouse, and the workhouse made deliberately grim — "less eligible" than the meanest labour outside — to deter the poor from asking. *Oliver Twist* made the workhouse immortal.',
    },
    {
      t: 'p',
      x: 'But the same society that produced the abuses produced the machinery that exposed and corrected them. Royal commissions filled the parliamentary "Blue Books" with sworn evidence; the Factory Act of 1833 limited children\'s hours and — the real novelty — appointed paid inspectors to enforce it; Chadwick\'s sanitary report of 1842 shamed Parliament into the first Public Health Act in 1848. Statistical societies counted, journalists publicized, Nonconformist congregations and municipal reformers organized. No previous society had ever audited its own failures so relentlessly, or fixed them so fast.',
    },
    {
      t: 'reading',
      title: 'Chartism: the vote as cure-all',
      blocks: [
        {
          t: 'p',
          x: 'For those left out in 1832, the answer was the People\'s Charter of 1838: six demands, headed by a vote for every man and salaried MPs, so that workers could sit in Parliament. {{chartism|Chartism}} became the first mass working-class political movement anywhere — millions signed its petitions, and its great meetings frightened respectable England badly. Parliament rejected the petitions of 1839, 1842, and 1848, and after the damp squib of the last great rally on Kennington Common, the movement faded.',
        },
        {
          t: 'p',
          x: 'Failure, though, is the wrong word. Chartism trained a generation of working-class organizers, and five of its six demands eventually became law. Tombs stresses its character: overwhelmingly constitutional, petitioning Parliament rather than plotting against it — an insurrectionary fringe notwithstanding. Even at their angriest, English radicals wanted in, not over.',
        },
      ],
    },
    { t: 'h', x: 'Free trade and famine' },
    {
      t: 'p',
      x: 'The symbolic battle of the age was over bread. The Anti-Corn Law League — middle-class, Nonconformist, superbly organized — made cheap bread a moral crusade against aristocratic privilege. In 1846 the Tory prime minister Robert Peel, persuaded and pressed by the catastrophe then unfolding in Ireland, repealed the {{corn-laws|Corn Laws}} and split his party for a generation. {{free-trade|Free trade}} became more than a policy: for the Victorians it was a creed — cheap food, peace through commerce, and government that took sides with the consumer. The {{irish-famine|Irish famine}} itself, which killed around a million people within the United Kingdom while relief came too little and too laced with dogma, remained the darkest stain on the era — and repeal did almost nothing to stop it.',
    },
    { t: 'widget', id: 'corn-law-explorer' },
    {
      t: 'timeline',
      title: 'Protest and repair',
      events: [
        { year: '1815', label: '{{corn-laws|Corn Laws}} passed', detail: 'Parliament protects grain prices; bread stays dear.' },
        { year: '1819', label: 'Peterloo', detail: 'Yeomanry sabre a peaceful reform meeting in Manchester; radicalism gains its martyrs.' },
        { year: '1830', label: 'Captain Swing', detail: 'Farm labourers smash threshing machines across the south.' },
        { year: '1832', label: '{{great-reform-act|Great Reform Act}}', detail: 'Rotten boroughs abolished; the middle class enters the constitution.' },
        { year: '1834', label: 'New Poor Law', detail: 'The workhouse system: relief made deliberately harsher than work.' },
        { year: '1838', label: 'The People\'s Charter', detail: '{{chartism|Chartism}} demands the vote for every man.' },
        { year: '1842', label: 'Chadwick\'s sanitary report', detail: 'The Blue Book that mapped filth and death, street by street.' },
        { year: '1846', label: '{{corn-laws|Corn Law}} repeal', detail: 'Peel chooses cheap bread over his party; {{free-trade|free trade}} triumphs.' },
        { year: '1848', label: 'Chartism\'s last rally; Public Health Act', detail: 'The revolution that never came, and the reform that quietly did.' },
      ],
    },
    {
      t: 'argument',
      x: 'Tombs argues that "Dickensian England" is half the truth, and the half we chose to keep. The horrors were real, but they were medieval horrors — hunger, filth, child labour — made suddenly visible by concentration in cities and by a society that had begun counting them. What was new was not the misery but the response: inspection, publication, agitation, legislation, repeal. Dickens\' caricatures became the permanent memory of the age; the Blue Books\' patient improvements did not. We remember Oliver Twist\'s workhouse and forget the inspectors who closed its worst abuses within a generation.',
    },
    {
      t: 'p',
      x: 'By 1851, with the Crystal Palace glittering in Hyde Park and railway excursions bringing the millions to see it, the storms seemed over. The next chapter enters the long Victorian afternoon — calmer, richer, and quietly certain of itself.',
    },
  ],
}

export default chapter
