import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'ch11',
  part: 4,
  number: '11',
  title: "Wars of Dreams",
  era: "1789–1815",
  blurb:
    'For twenty-two years, with one short truce, England fought revolutionary and Napoleonic France — a war Tombs calls a war of dreams, because it was fought over what the world should be. Out of it came Nelson, {{wellington|Wellington}}, the income tax, and a national identity built on standing against utopia.',
  blocks: [
    {
      t: 'p',
      x: 'When the Bastille fell in 1789, many in England cheered. The French, it seemed, were catching up — getting themselves a constitution, curbing an absolute king, doing in a summer what England had done in 1688. Charles James Fox called it the greatest and best event in history. Within four years England and France were at war, and stayed at war, with one brief pause, until 1815. It became the longest and costliest conflict England had fought since the {{hundred-years-war|Hundred Years\' War}} — and, Tombs argues, the most ideological. Both sides believed they were fighting for the future of mankind.',
    },
    { t: 'h', x: 'Burke against Paine' },
    {
      t: 'p',
      x: 'Before the armies moved, the pamphlets did. Edmund Burke\'s *Reflections on the Revolution in France* (1790) predicted, while the Revolution was still moderate, that it would end in confiscation, terror, and a military dictator — because it tried to rebuild society from abstract first principles instead of inherited experience. Tom Paine\'s *Rights of Man* (1791) answered that the dead have no authority over the living, and that hereditary government was as absurd as a hereditary mathematician. Paine outsold Burke many times over; Burke turned out to be right about the Terror and the general. Between them they framed a debate — cautious inheritance against rational blueprint — that has organized English conservatism and English radicalism ever since.',
    },
    {
      t: 'reading',
      title: 'The repression of the 1790s',
      blocks: [
        {
          t: 'p',
          x: 'Pitt\'s government took the threat of home-grown revolution seriously — too seriously, most historians think. Habeas corpus was suspended, "seditious meetings" banned, radical societies infiltrated by spies, and the Combination Acts of 1799–1800 outlawed workers\' associations. Yet the crackdown was harsher in ambition than in result. The great treason trials of 1794 collapsed when London juries acquitted the radicals Thomas Hardy and John Horne Tooke — English juries would not hang men for holding meetings. Tombs notes the contrast with the guillotine across the Channel: England\'s counter-revolution was real, but it worked through courts it did not fully control, and it mostly failed to convict.',
        },
      ],
    },
    { t: 'h', x: 'The nation in arms' },
    {
      t: 'p',
      x: 'From 1798 and again in 1803–5, Napoleon massed an army at Boulogne and England expected invasion. The response astonished the government: hundreds of thousands of men — perhaps one in five of military age — volunteered for home defence, drilling on village greens with pikes and fowling pieces. Loyalist songs, caricatures of "Boney", and the cult of the {{royal-navy|Navy}} made this the first war of mass popular patriotism. It was not simple deference. Many volunteers despised their own government; they simply had no wish to be liberated by France.',
    },
    {
      t: 'p',
      x: 'The invasion never sailed, because the sea was closed. At {{trafalgar|Trafalgar}} in October 1805 Nelson destroyed the combined French and Spanish fleets and died doing it, giving England a naval supremacy that lasted a century. Napoleon answered with economic war — the Continental System, an attempt to bankrupt the "nation of shopkeepers" by closing Europe\'s ports to its trade. It hurt, but it hurt Europe more, and smuggling made a mockery of it. Meanwhile {{wellington|Wellington}} ground down French armies in Portugal and Spain, proof that the Empire could bleed. After Napoleon destroyed his own army in Russia, the allies closed in; the end came at {{waterloo|Waterloo}} in June 1815, a battle Wellington called the nearest-run thing he ever saw.',
    },
    {
      t: 'voice',
      source: 'Nelson\'s flagship signal before Trafalgar, 21 October 1805 — and his last recorded words',
      x: '"England expects that every man will do his duty." Dying below decks that afternoon, shot through the spine with the battle won, he returned to the word: "Thank God I have done my duty." The sentence and the man became the pattern of English heroism for a century.',
    },
    {
      t: 'timeline',
      title: 'The long war',
      events: [
        { year: '1789', label: 'The Bastille falls', detail: 'English opinion splits: liberation to some, warning to others.' },
        { year: '1790–91', label: 'Burke v. Paine', detail: '*Reflections* against *Rights of Man*: the argument that outlived the war.' },
        { year: '1793', label: 'War with France', detail: 'Revolutionary France, having executed its king, declares war on Britain.' },
        { year: '1798', label: 'Income tax invented', detail: 'Pitt taxes incomes directly to fund the war — a temporary measure, naturally.' },
        { year: '1805', label: '{{trafalgar|Trafalgar}}', detail: 'Nelson annihilates the Franco-Spanish fleet; invasion becomes impossible.' },
        { year: '1808', label: 'The Peninsular War begins', detail: '{{wellington|Wellington}} opens the "Spanish ulcer" that drains Napoleon for six years.' },
        { year: '1812', label: 'Napoleon invades Russia', detail: 'The Grande Armée freezes; the tide turns for good.' },
        { year: '1815', label: '{{waterloo|Waterloo}}', detail: 'Wellington and Blücher end the adventure; Napoleon goes to St Helena.' },
      ],
    },
    { t: 'h', x: 'Paying for it' },
    {
      t: 'p',
      x: 'England won partly because it could outspend everyone. The {{fiscal-military-state|fiscal-military state}} built after 1688 now showed its full power: the {{national-debt|national debt}} swelled to over twice national income, yet the {{bank-of-england|Bank of England}} kept lending and investors kept buying, because Parliament\'s promises were believed. In 1798 Pitt added something new — the first income tax, ten per cent on large incomes, sold as a temporary wartime expedient. It paid for subsidies that kept allied armies in the field: England hired much of Europe to fight. Napoleon controlled more land; London controlled more credit. Credit won.',
    },
    {
      t: 'argument',
      x: 'Tombs calls these the "wars of dreams": both sides fought for a vision, not a province. France offered Europe a rational new order at bayonet-point; England stood for the unglamorous alternative — inherited law, parliaments, commerce, and muddling through. Victory fixed that self-image in place. The English came out of 1815 convinced that they were the pragmatic, free, counter-revolutionary nation, providentially exempt from continental follies — and with the {{royal-navy|Navy}} unchallenged, a century of {{pax-britannica|Pax Britannica}} lay ahead in which nobody could tell them otherwise.',
    },
    {
      t: 'p',
      x: 'But the fireworks of 1815 lit up a hungry country. Demobilized soldiers, collapsing wartime prices, and a Parliament of landlords protecting the price of bread: the peace opened with distress, and distress opened the age the next chapter calls Dickensian.',
    },
  ],
}

export default chapter
