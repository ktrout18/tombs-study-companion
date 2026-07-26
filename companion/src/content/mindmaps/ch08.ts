import type { MindMap } from '../../types'

// Original synthesis of this companion's ch08 content.
const map: MindMap = {
  intro:
    'Hanoverian England, c.1689–1815: the self-proclaimed freest nation on earth — real liberty under law, run by an oligarchy with two hundred hanging offences.',
  sections: [
    {
      title: 'The free column',
      cells: [
        {
          h: 'Law above the crown',
          x: 'After the {{glorious-revolution|Glorious Revolution}}: no tax, no standing army without {{parliament|Parliament}} — which meets yearly because the money runs out.',
        },
        {
          h: 'Courts anyone can use',
          x: 'Open {{common-law|common-law}} courts, habeas corpus against secret prison, {{jury-trial|juries}} of ordinary men between state and accused.',
        },
        {
          h: 'Europe\'s loudest press',
          x: 'Unlicensed since 1695; politics a public brawl of {{whigs-tories|Whigs and Tories}} in print and at rowdy elections.',
        },
        {
          h: 'The crowd knows its rights',
          x: 'Riots get negotiated, not shot; Wilkes beats general warrants in court and becomes London\'s cry.',
          cue: '"Wilkes and Liberty!" — from people who could not vote.',
        },
        {
          h: 'Somerset\'s case, 1772',
          x: 'Mansfield: no master may ship an enslaved man from England. Narrow ruling, vast meaning — {{atlantic-slavery|slavery}} cannot breathe English air.',
        },
      ],
    },
    {
      title: 'The Bloody Code paradox',
      cells: [
        {
          h: 'Two hundred ways to hang',
          x: 'Capital statutes multiply, mostly for property — a shilling\'s shoplifting, an orchard tree.',
        },
        {
          h: 'The merciful jury',
          x: '{{jury-trial|Juries}} value stolen goods just under the fatal line; judges reprieve; many condemned are pardoned or transported.',
          cue: 'Terror in the statute book, mercy in the jury box.',
        },
        {
          h: 'The fifty-year argument',
          x: 'Hay saw class theatre teaching deference; critics saw jurors checking the state. Tombs sides with the jurors; Tyburn stays real.',
        },
      ],
    },
    {
      title: 'The unfree column',
      cells: [
        {
          h: 'Rotten boroughs',
          x: 'A minority of men vote; Old Sarum\'s mound returns two members of the {{house-of-commons|Commons}} while great new towns return none.',
          cue: 'A green hill outvotes Manchester.',
        },
        {
          h: 'The Test Acts',
          x: 'Catholics and Dissenters barred from office and the universities.',
        },
        {
          h: 'Taxes and the press gang',
          x: 'The {{fiscal-military-state|fiscal-military state}} taxes England harder than "groaning" France; the {{royal-navy|Navy}} mans its ships by legalized kidnap.',
        },
        {
          h: 'Jacobites crushed',
          x: 'The {{jacobites|risings}} of 1715 and 1745 end at Culloden: executions, banned tartans, a pacified Highlands.',
        },
        {
          h: 'Walpole\'s machine',
          x: '{{walpole|Walpole}} (1721–42), first prime minister, buys a docile Parliament with places and pensions — corruption to critics, cheap stability to him.',
        },
      ],
    },
    {
      title: 'The verdict',
      cells: [
        {
          h: 'Liberty as property',
          x: 'Not abstract rights but inherited possessions — jury, habeas corpus, free press, customary riot — with {{magna-carta|Magna Carta}} as title deed.',
        },
        {
          h: 'Answer to the Rights of Man',
          x: 'The English preferred the rights of Englishmen: older, tested, and — they said — working.',
          cue: 'Ancestral goods, not deduced principles.',
        },
        {
          h: 'The Atlantic test',
          x: 'Colonists raised on the same rights conclude {{parliament|Parliament}} itself has turned tyrant — the next chapter\'s civil war.',
        },
      ],
    },
  ],
  keys: [
    { h: 'The boast', x: '"Freest nation on earth" — Europe largely concurred; Tombs tests rather than mocks the claim.' },
    { h: 'Real freedoms', x: 'Annual Parliament, open courts, habeas corpus, {{jury-trial|juries}}, and an unmuzzled press — unique in Europe.' },
    { h: 'The paradox', x: 'A savage penal code softened daily by merciful juries — check and terror in one institution.' },
    { h: 'The other ledger', x: 'Rotten boroughs, Test Acts, press gangs, Culloden — liberty under oligarchy.' },
    { h: 'Walpole\'s bargain', x: 'Patronage buys calm; after a century of upheaval, stability sells.' },
    { h: 'Tombs\' argument', x: 'English liberty was ancestral property, not principle — real and rowdy, yet compatible with the Bloody Code and the slave ships.' },
    { h: 'The hinge', x: 'The system\'s hardest test comes from Americans claiming the very rights of Englishmen.' },
  ],
  chain:
    'Inherited liberties → defended as property → held under oligarchy → colonists inherit them too → Parliament looks like the tyrant → the English world\'s civil war.',
}

export default map
