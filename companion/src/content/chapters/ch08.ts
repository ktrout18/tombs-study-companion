import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'ch08',
  part: 4,
  number: '8',
  title: "A Free Country?",
  era: "c.1689–c.1815",
  blurb:
    'Hanoverian England called itself the freest nation on earth, and much of Europe agreed. This chapter weighs the boast: real liberties under law against rotten boroughs, religious exclusion, and a penal code with some two hundred hanging offences. The question mark is the point.',
  blocks: [
    {
      t: 'p',
      x: 'Eighteenth-century Englishmen of every rank believed one thing about themselves: they were free, and foreigners were not. "Britons never will be slaves", ran the new song of 1740. Tombs takes the boast seriously enough to test it. What follows is a double portrait — a country genuinely governed by law and argument, which was also an oligarchy that hanged pickpockets, barred Catholics and Dissenters from office, and let a few dozen landowners choose half the {{house-of-commons|House of Commons}}.',
    },
    { t: 'h', x: 'The free side of the ledger' },
    {
      t: 'p',
      x: 'Start with what was real. After the {{glorious-revolution|Glorious Revolution}}, the crown governed under law: no taxes and no standing army without {{parliament|Parliament}}, which now met every year because the money ran out if it did not. The {{common-law|common law}} courts were open, habeas corpus made secret imprisonment illegal, and {{jury-trial|juries}} of ordinary men stood between the state and the accused — and used the power, as we shall see. The press, unlicensed since 1695, said nearly anything. Politics was a public brawl between {{whigs-tories|Whigs and Tories}}, fought in print, in coffee-houses, and at rowdy elections. Nothing like this combination existed anywhere else in Europe.',
    },
    {
      t: 'p',
      x: 'This liberty was not confined to the polite. Crowds rioted — against gin laws, turnpikes, Catholics, and press gangs — and magistrates mostly negotiated rather than shot. In the 1760s John Wilkes, a cross-eyed, scandalous journalist prosecuted for insulting the king, turned his own case into a national cause: general warrants were struck down in court, and "Wilkes and Liberty!" became the cry of London crowds who could not vote but knew their rights. And in 1772 the courts touched the century’s deepest wrong: in Somerset’s case, Lord Mansfield ruled that a master could not seize an enslaved man in England and ship him to the plantations. The judgment was narrow, but the meaning people took from it was vast — {{atlantic-slavery|slavery}} had no home in English air.',
    },
    {
      t: 'reading',
      title: 'The Bloody Code and the merciful jury',
      blocks: [
        {
          t: 'p',
          x: 'Here is the paradox in one institution. Parliament multiplied capital statutes until roughly two hundred offences carried death, most of them crimes against property — shoplifting above a shilling, cutting down an orchard tree. Yet executions did not multiply to match. Juries routinely valued stolen goods at just under the fatal threshold ("pious perjury"), prosecutors charged low, and judges reprieved; a large share of the condemned were pardoned or transported instead.',
        },
        {
          t: 'p',
          x: 'Historians have argued for fifty years about what this meant. Douglas Hay read it as theatre of class power: terror in the statute book, mercy at the ruling class’s discretion, both teaching deference. Critics answered that discretion mostly lay with ordinary jurors and victims, who used it against the code’s severity. Tombs leans to the second view — the {{jury-trial|jury}} as a working, everyday check on the state — while conceding the gallows at Tyburn were real enough.',
        },
      ],
    },
    { t: 'h', x: 'The unfree side' },
    {
      t: 'p',
      x: 'Now the other column. The vote belonged to a minority of adult men, distributed by ancient accident: great new towns had no members, while "rotten boroughs" — a green mound at Old Sarum, a ruin at Dunwich — returned two each, in the gift of a patron. The Test Acts kept Catholics and Protestant Dissenters out of office and the universities. The {{fiscal-military-state|fiscal-military state}} built after 1689 taxed the English more heavily than the supposedly groaning French, and the {{royal-navy|Navy}} manned its ships by press gang — legalized street kidnapping of seafaring men. And the regime had enemies it treated as such: the {{jacobites|Jacobite}} risings of 1715 and 1745 for the exiled Stuarts ended, after Culloden, in executions, banned tartans, and a brutally pacified Scottish Highlands.',
    },
    {
      t: 'p',
      x: 'Presiding over it all from 1721 to 1742 was Robert {{walpole|Walpole}}, in effect the first prime minister, who ran the system frankly on patronage: places, pensions, and peerages bought a docile {{parliament|Parliament}}. His critics called it corruption; he called it stability, and after a century of upheaval, stability sold. Tombs notes the trade-off without sneering at it — {{walpole|Walpole}}’s England was cynical, cheap to run, and at peace.',
    },
    {
      t: 'timeline',
      title: 'Liberty and its limits',
      events: [
        { year: '1689', label: 'Bill of Rights', detail: 'The {{glorious-revolution|Revolution}} settlement: law above the crown, {{parliament|Parliament}} in permanent session.' },
        { year: '1695', label: 'Censorship ends', detail: 'Press licensing lapses; England gets Europe’s loudest newspapers.' },
        { year: '1715', label: 'The Fifteen', detail: 'First great {{jacobites|Jacobite}} rising for the exiled Stuarts fails.' },
        { year: '1721', label: '{{walpole|Walpole}} takes charge', detail: 'Twenty-one years of oligarchic calm, lubricated by patronage.' },
        { year: '1745', label: 'The Forty-five', detail: 'Bonnie Prince Charlie reaches Derby; London panics; Culloden and repression follow.' },
        { year: '1763', label: 'Wilkes and Liberty', detail: 'A scandalous journalist beats the government in court over general warrants.' },
        { year: '1772', label: 'Somerset’s case', detail: 'Mansfield rules an enslaved man cannot be forcibly removed from England.' },
        { year: '1780', label: 'Gordon Riots', detail: 'A week of anti-Catholic violence in London — popular liberty’s ugliest face.' },
      ],
    },
    {
      t: 'argument',
      x: 'Tombs’ answer to the chapter’s question: yes, a free country — but freedom of a particular, untidy kind. English liberty was not an abstract right deduced from principle; it was a bundle of inherited possessions — {{jury-trial|jury trial}}, habeas corpus, the free press, the right to riot within custom — defended as ancestral property, with {{magna-carta|Magna Carta}} as the title deed (whatever the document actually said). It was real, rowdy, and lived daily; it was also liberty under oligarchy, compatible with the Bloody Code, the Test Acts, and the slave ships clearing Liverpool. When the French later proclaimed the Rights of Man, the English answer was, in effect: we prefer the rights of Englishmen — we have had them longer, and they work.',
    },
    {
      t: 'p',
      x: 'The system’s severest test came not from Paris but from across the Atlantic, where colonists raised on the same rights of Englishmen concluded that {{parliament|Parliament}} itself had turned tyrant. That quarrel — a civil war within the English world — is the next chapter.',
    },
  ],
}

export default chapter
