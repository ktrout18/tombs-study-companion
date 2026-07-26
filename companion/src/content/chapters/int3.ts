import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'int3',
  part: 3,
  title: "The Civil War and Whig History",
  subtitle: "Interlude",
  era: "looking back",
  blurb:
    'What England did with the memory of its revolution. The seventeenth-century crisis was retold as tragedy, as progress, as class struggle — and the winning version, {{whig-history|Whig history}}, became the country\'s founding myth of moderation.',
  blocks: [
    {
      t: 'p',
      x: 'No stretch of English history has been fought over so hard after the fact. The {{civil-war|Civil War}} and 1688 generated rival histories almost before the smoke cleared, and Tombs\' interest in this interlude is less in what happened than in what the English decided it meant — because the meaning, he argues, shaped how they governed themselves for two centuries.',
    },
    { t: 'h', x: 'First drafts: tragedy and providence' },
    {
      t: 'p',
      x: 'The first great account came from the losing side. Edward Hyde, Earl of Clarendon, {{charles-i|Charles I}}\'s adviser and later {{charles-ii|Charles II}}\'s chief minister, wrote his *History of the Rebellion* in exile: the war as tragedy, brought on not by grand historical forces but by the follies and passions of particular men. His unforgettable character sketches set a very English template — history as the study of persons, not systems.',
    },
    { t: 'h', x: 'The Whig ascendancy' },
    {
      t: 'p',
      x: 'The version that won was {{whig-history|Whig history}}: English history as the unfolding of constitutional liberty, with Parliament\'s cause as progress and 1688 as the happy ending that spared England the revolutions of its neighbours. Its supreme salesman was {{macaulay|Macaulay}}, whose *History of England* (1848–55) sold like a novel and told the {{glorious-revolution|Glorious Revolution}} as the moment England chose law over despotism — a revolution praised, precisely, for being moderate, sensible, and final. Tombs\' point is that the myth was not idle: generations of statesmen who believed English history was a story of gradual, peaceful reform felt obliged to keep it one. The story of moderation manufactured moderation. It is a rare case of a national myth enforcing good behaviour.',
    },
    {
      t: 'p',
      x: 'The Victorians even rehabilitated the regicide. To Nonconformists — the heirs of the {{puritans|Puritans}}, still excluded from full civic life within living memory — {{oliver-cromwell|Cromwell}} was a hero of conscience against persecution, and Carlyle\'s edition of his letters recast him as a rugged man of destiny. In 1899, over royal objections, his statue went up outside Parliament itself: the man who abolished the monarchy, guarding Westminster. Ireland, which remembered Drogheda, was not consulted.',
    },
    { t: 'h', x: 'Knocking the story down' },
    {
      t: 'p',
      x: 'The twentieth century demolished the Whig narrative twice. Herbert Butterfield named the fallacy in *The Whig Interpretation of History* (1931): the sin of reading the past as a march toward the present, sorting the dead into those who pushed history forward and those who blocked it. Then came the Marxists, for whom the Civil War was England\'s "bourgeois revolution" — rising gentry and merchants breaking a feudal order. From the 1970s, revisionist historians took that apart in turn: the sides did not divide by class, the war\'s causes looked contingent rather than inevitable, and what moved men most was religion. Tombs writes with the revisionists — which is why his own chapter calls the conflict the last of the wars of religion.',
    },
    {
      t: 'reading',
      title: 'Why the myth mattered more than the facts',
      blocks: [
        {
          t: 'p',
          x: 'Tombs\' conclusion is double-edged. As history, the Whig story was wrong: 1688 was a Dutch invasion and a gamble, bloody in Scotland and Ireland, and its "ancient liberties" were partly invented on the spot. As myth, it worked. A country convinced that its constitution was old, proven, and self-improving did not need to tear it up; reformers could demand change as restoration rather than revolution, and conservatives could concede it as continuity. The {{whig-history|Whig}} legend of 1688 became England\'s founding myth of moderation — and, Tombs suggests, one reason England never had a 1789.',
        },
      ],
    },
  ],
}

export default chapter
