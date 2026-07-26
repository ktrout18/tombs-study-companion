import type { QuizQ } from '../../types'

export const QUIZ_C: Record<string, QuizQ[]> = {
  ch10: [
    {
      q: 'In which year did Stephenson\'s locomotive win the Rainhill trials?',
      options: ['1815', '1829', '1840', '1851'],
      answer: 1,
      explain: 'The *Rocket* triumphed at Rainhill in 1829, and the Liverpool and Manchester line — the first all-steam passenger railway — opened the following year.',
    },
    {
      q: 'What development freed factories from having to sit beside a river?',
      options: [
        'The spread of hand-dug canals',
        'Smelting iron with coke instead of charcoal',
        'Watt\'s improved steam engine',
        'Arkwright\'s water frame',
      ],
      answer: 2,
      explain: 'Watt\'s engine, improved from the 1770s, turned coal into motion — so a mill no longer needed water power and a mine no longer drowned.',
    },
    {
      q: 'How does Tombs characterize the origins of the {{industrial-revolution|Industrial Revolution}} in England?',
      options: [
        'Gradual, homegrown, and unplanned — driven by obscure practical men',
        'A deliberate program directed by statesmen and Parliament',
        'The application of new scientific theory by university men',
        'A sudden leap sparked by one or two strokes of genius',
      ],
      answer: 0,
      explain: 'Tombs stresses tinkering over theory: chains of small fixes by millwrights, clockmakers, and ironmasters, with no government plan behind them.',
    },
    {
      q: 'What did the census of 1851 record that no census anywhere had shown before?',
      options: [
        'A population that had doubled within fifty years',
        'More people employed in factories than on farms',
        'A majority of adults able to read and write',
        'A majority of the population living in towns and cities',
      ],
      answer: 3,
      explain: 'England became the first society counted as majority-urban, the same year the Great Exhibition displayed the workshop of the world in Hyde Park.',
    },
  ],
  ch11: [
    {
      q: 'Why does Tombs call the conflicts of 1793–1815 "wars of dreams"?',
      options: [
        'Because invasion scares gave England recurring national nightmares',
        'Because both sides fought far beyond their real resources',
        'Because both sides fought for a vision of what the world should be, not for a province',
        'Because the war aims changed with every new coalition',
      ],
      answer: 2,
      explain: 'France offered Europe a rational new order at bayonet-point; England stood for inherited law, parliaments, and commerce — each fighting for the future of mankind.',
    },
    {
      q: 'What did Burke\'s *Reflections* predict about the French Revolution while it was still moderate?',
      options: [
        'That it would end in confiscation, terror, and a military dictator',
        'That it would spread peacefully across the rest of Europe',
        'That England would be forced to adopt a written constitution',
        'That France would restore its king within a decade',
      ],
      answer: 0,
      explain: 'Burke argued that rebuilding society from abstract first principles must end badly — and events proved him right about the Terror and the general, even though Paine\'s *Rights of Man* outsold him many times over.',
    },
    {
      q: 'When was the income tax first introduced, and by whom?',
      options: ['1789, by Fox', '1798, by Pitt', '1805, by Nelson\'s government', '1815, after Waterloo'],
      answer: 1,
      explain: 'Pitt taxed large incomes at ten per cent in 1798, sold as a temporary wartime expedient — part of the {{fiscal-military-state|fiscal-military state}}\'s power to outspend Napoleon.',
    },
    {
      q: 'What was the lasting consequence of Nelson\'s victory at {{trafalgar|Trafalgar}} in 1805?',
      options: [
        'Napoleon abandoned the Continental System',
        'France sued for an immediate peace',
        'Spain switched sides to join Britain',
        'Invasion became impossible and England held naval supremacy for a century',
      ],
      answer: 3,
      explain: 'Destroying the combined French and Spanish fleets closed the sea to invasion and opened the era of unchallenged British sea power that led to the {{pax-britannica|Pax Britannica}}.',
    },
  ],
  ch12: [
    {
      q: 'What were the {{corn-laws|Corn Laws}} of 1815 designed to do?',
      options: [
        'Guarantee cheap bread for demobilized soldiers',
        'Encourage grain imports to feed the growing cities',
        'Keep grain prices, and therefore landowners\' rents, high',
        'Stockpile grain against a renewed French war',
      ],
      answer: 2,
      explain: 'A Parliament of landowners made cheap bread effectively illegal to protect its own rents — the symbolic grievance of the age until repeal in 1846.',
    },
    {
      q: 'In which year did yeomanry charge the peaceful reform meeting remembered as Peterloo?',
      options: ['1815', '1819', '1830', '1832'],
      answer: 1,
      explain: 'Around fifteen died on St Peter\'s Field, Manchester, in August 1819; the bitter nickname stuck and gave English radicalism its founding martyrs.',
    },
    {
      q: 'How did the {{great-reform-act|Great Reform Act}} finally pass in 1832?',
      options: [
        'The king agreed, if necessary, to create enough new peers to swamp the Lords',
        'The Lords backed down after Bristol burned',
        'A general election returned an unstoppable reform majority',
        'The Commons threatened to withhold all taxation',
      ],
      answer: 0,
      explain: 'The royal promise broke the Lords\' resistance after a crisis that brought England as near revolution as it has come in modern times; the Act itself enfranchised only about one adult man in five.',
    },
    {
      q: 'What does Tombs argue is missing from the familiar picture of {{dickensian-england|Dickensian England}}?',
      options: [
        'Evidence that the horrors of the slums were exaggerated by novelists',
        'Recognition that conditions were worse in the countryside than the towns',
        'The role of the state in planning industrial growth',
        'The unprecedented machinery of inspection, publication, and reform that fixed the abuses',
      ],
      answer: 3,
      explain: 'The misery was old — hunger, filth, child labour made newly visible — but the response was new: Blue Books, paid factory inspectors, and public health acts. We kept Dickens\' caricatures and forgot the repair.',
    },
  ],
  ch13: [
    {
      q: 'Which two books, published in the same year, embodied the era\'s twin currents of doubt and self-improvement?',
      options: [
        'Burke\'s *Reflections* and Paine\'s *Rights of Man*',
        'Chadwick\'s sanitary report and *Oliver Twist*',
        'Darwin\'s *On the Origin of Species* and Smiles\' *Self-Help*',
        'Macaulay\'s *History of England* and the People\'s Charter',
      ],
      answer: 2,
      explain: 'Both appeared in 1859: Darwin unsettled educated believers while Smiles preached thrift and self-improvement to a congregation as much working-class as middle-class.',
    },
    {
      q: 'Who carried the {{second-reform-act|Second Reform Act}} of 1867, and what did it do?',
      options: [
        '{{disraeli|Disraeli}} — it enfranchised urban working men and roughly doubled the electorate',
        '{{gladstone|Gladstone}} — it introduced the secret ballot',
        'Peel — it abolished the remaining rotten boroughs',
        'Chamberlain — it gave the vote to county householders',
      ],
      answer: 0,
      explain: 'Disraeli outbid the Liberals for the credit of the "leap in the dark"; Gladstone\'s act of 1884 later extended the same household franchise to the counties.',
    },
    {
      q: 'What development gave birth to {{declinism|declinism}} in the 1890s?',
      options: [
        'The collapse of the railway companies',
        'Germany and the United States overtaking England in steel and the new industries',
        'The failure of the 1884 franchise reform',
        'A sharp fall in Victorian church attendance',
      ],
      answer: 1,
      explain: 'The change was arithmetic normality — a small island could not out-produce continents forever — but the English read it as failure and went hunting for culprits, a habit of mind that stuck.',
    },
    {
      q: 'How, in Tombs\' account, was Victorian England chiefly governed?',
      options: [
        'By a rapidly expanding Whitehall bureaucracy',
        'By the monarchy\'s direct intervention in politics',
        'By the police and the standing army',
        'By voluntary institutions and moral consensus more than by the state',
      ],
      answer: 3,
      explain: 'Chapel and church, unions and friendly societies, town halls and charities did work that elsewhere fell to bureaucracies — which is why so small a state could preside over so orderly a society.',
    },
  ],
  ch14: [
    {
      q: 'What is Tombs\' contested claim about the {{british-empire|empire}}\'s place in English life?',
      options: [
        'That it was the main engine of England\'s industrial wealth',
        'That it loomed smaller in ordinary English life than nostalgists and critics assume',
        'That the English cared about it more deeply than any other nation cared for its colonies',
        'That it was planned and directed from London from the start',
      ],
      answer: 1,
      explain: 'Tombs argues the empire was acquired piecemeal, run cheaply by a few thousand officials, and regarded with chronic doubt at home — though many historians think he understates its influence.',
    },
    {
      q: 'What changed in the government of India after the {{indian-rebellion|Indian Rebellion}} of 1857?',
      options: [
        'India received self-government on the settler-colony model',
        'The Indian Army was disbanded',
        'The Crown took over direct rule from the {{east-india-company|East India Company}}',
        'British taxpayers assumed the cost of Indian administration',
      ],
      answer: 2,
      explain: 'The rebellion ended Company rule; the {{british-raj|Raj}} that followed rested on a few thousand British officials governing some 300 million people, largely through Indian intermediaries.',
    },
    {
      q: 'What domestic panic followed the Boer War of 1899–1902?',
      options: [
        'A "national efficiency" scare, after recruiters found many city volunteers too stunted and sickly to serve',
        'A run on the banks caused by the war\'s cost',
        'A movement to abandon the African colonies entirely',
        'A mutiny among troops returning from the camps',
      ],
      answer: 0,
      explain: 'The fear that the imperial race was rotting at its urban core fed social reform, compulsory school meals, and much anxious talk of decline.',
    },
    {
      q: 'According to the chapter, who paid for the Indian Army?',
      options: [
        'The British Treasury, through the defence budget',
        'The {{city-of-london|City of London}}, through special loans',
        'The settler dominions, through imperial contributions',
        'Indian taxpayers',
      ],
      answer: 3,
      explain: 'Empire defence was startlingly cheap for Britain — the Navy took a small share of national income and India funded its own army — which is why whether the average English family gained from empire is genuinely doubtful.',
    },
  ],
  int4: [
    {
      q: 'How did {{macaulay|Macaulay}}\'s *History of England* present the English past?',
      options: [
        'As a tragic decline from Saxon liberty under the {{norman-yoke|Norman Yoke}}',
        'As a chaotic story with no discernible direction',
        'As a steady, providential march from despotism to liberty, with 1688 as the hinge',
        'As a warning that English freedoms could be lost within a generation',
      ],
      answer: 2,
      explain: 'This was {{whig-history|Whig history}} at its most seductive — superb storytelling and dubious history, and the Victorians could not get enough of it.',
    },
    {
      q: 'What does Tombs argue about the "village England" of thatch, hedgerow, and church spire?',
      options: [
        'It was a myth manufactured by townsmen, with a long and consequential afterlife',
        'It accurately described how most English people still lived',
        'It was invented by foreign admirers of England',
        'It faded quickly once the garden cities were built',
      ],
      answer: 0,
      explain: 'The rural myth shaped town planning, poetry, war memorials, and the green belt — teaching an industrial people to feel their real nation lay somewhere they did not live.',
    },
    {
      q: 'What is paradoxical about the moment Englishness "went rural" around 1900?',
      options: [
        'Farming had just become England\'s most profitable industry',
        'England was then the most urbanized society on earth',
        'The countryside was emptying because of famine',
        'The government was actively demolishing villages',
      ],
      answer: 1,
      explain: 'The {{industrial-revolution|Industrial Revolution}} had made England the first majority-urban nation two generations earlier — yet precisely then the countryside became England\'s idea of itself.',
    },
    {
      q: 'What habit of speech does the interlude note about "English" at the empire\'s height?',
      options: [
        'It was reserved strictly for people born in England',
        'It was avoided in favour of regional labels like Yorkshireman',
        'It was used mainly by foreigners, rarely by the English themselves',
        'It simply stood for "British", with England as the unexamined default',
      ],
      answer: 3,
      explain: 'Scots, Welsh, and Irish careers were made under the wider label of {{britishness|Britishness}}, while England needed no flag or anthem of its own — a confidence that would look very different once the Union came into question.',
    },
  ],
}
