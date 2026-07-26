import type { MindMap } from '../../types'

// Original synthesis of this companion's ch20 content.
const map: MindMap = {
  intro:
    '1979–1997: {{declinism|declinism}} meets its remedy — and the cure divides England along the map of who paid and who gained.',
  sections: [
    {
      title: 'The sick man of Europe',
      cells: [
        {
          h: 'Peak gloom',
          x: 'Inflation touches 25 per cent; in 1976 Labour must ask the IMF for its largest-ever loan.',
        },
        {
          h: 'Winter of Discontent',
          x: 'Strikes in {{winter-of-discontent|1978–79}}: rubbish in the streets, the dead unburied in Liverpool.',
          cue: 'The government that could not bury the dead.',
        },
        {
          h: 'Real, but relative',
          x: 'Britain never got poorer — its neighbours got richer faster. West Germany and France visibly overtake.',
          cue: 'Relative decline, absolute gloom.',
        },
        {
          h: 'Consensus exhausted',
          x: 'The {{postwar-consensus|postwar settlement}} — full employment, strong {{trade-unions|unions}}, managed economy — seems to devour itself.',
        },
      ],
    },
    {
      title: 'The experiment',
      cells: [
        {
          h: 'Thatcher, May 1979',
          x: '{{thatcher|Thatcher}} wins promising to break everything the consensus held sacred.',
        },
        {
          h: 'Monetarism bites',
          x: 'High rates and tight budgets squeeze inflation; factories close, unemployment passes three million, riots burn in 1981.',
        },
        {
          h: 'Falklands rescue, 1982',
          x: 'A task force sails 8,000 miles; the {{falklands-war|Falklands War}} is won in ten weeks and transforms her.',
          cue: 'The war saves the experiment.',
        },
        {
          h: 'Landslide, 1983',
          x: 'With the {{labour-party|Labour Party}} split by the SDP, she wins big — the experiment runs its course.',
        },
      ],
    },
    {
      title: 'Battles won, and paid for',
      cells: [
        {
          h: 'Miners broken, 1984–85',
          x: 'The {{miners-strike|strike}} fails: coal stockpiled, spring start, no national ballot, Nottinghamshire keeps working.',
          cue: 'Every 1974 condition reversed.',
        },
        {
          h: 'Union veto ends',
          x: 'The force that broke governments in 1974 and 1979 never recovers; nor do the coalfield villages.',
        },
        {
          h: 'Selling the state',
          x: 'Gas, telephones, airways privatized; over a million council houses sold to their tenants.',
        },
        {
          h: 'Big Bang, 1986',
          x: 'Overnight deregulation revives the {{city-of-london|City}} as world financial capital while industrial England shrinks.',
        },
        {
          h: 'Boom to bust',
          x: 'The late-eighties boom collapses; inflation and recession return by 1990.',
        },
      ],
    },
    {
      title: 'The fall, and the grey aftermath',
      cells: [
        {
          h: 'Poll tax and Europe',
          x: 'A flat tax provokes riot; "No. No. No." to integration drives out her senior colleagues.',
        },
        {
          h: 'Removed by her own',
          x: 'November 1990: Conservative MPs depose her after eleven years; she leaves in tears.',
          cue: 'Not the opposition — her own party.',
        },
        {
          h: 'Black Wednesday, 1992',
          x: 'Markets force the pound from the exchange-rate mechanism; Major\'s credibility dies in an afternoon, the {{european-union|European}} split goes public.',
        },
        {
          h: 'Troubles, and talks',
          x: 'The IRA bombs Brighton (1984), mortars the cabinet (1991) — yet secret contacts yield a 1994 ceasefire.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Declinism as orthodoxy', x: 'By the late 1970s both parties assume failure; only the cure is argued over.' },
    { h: 'The cure', x: 'Monetarism and market discipline end the {{postwar-consensus|consensus}} — at savage cost to industrial England.' },
    { h: 'Falklands', x: 'A ten-week war rescues the government and lets the experiment run.' },
    { h: 'Labour\'s last stand', x: 'The {{miners-strike|miners\' strike}} was the final test of whether unions could veto elected government.' },
    { h: 'Two Englands', x: 'The {{city-of-london|City}} and the south gain; coalfields and mill towns pay.' },
    { h: 'Tombs\' argument', x: 'Thatcherism worked economically — Britain stopped falling behind — but taught industrial England that government was its enemy.' },
    { h: 'The story mattered', x: 'The declinist tale, gloomier than the statistics, justified the radicalism and its harshness.' },
  ],
  chain:
    'Strikes bury a government → Thatcher\'s experiment → slump, riots, Falklands rescue → miners broken → City unleashed → poll tax and Europe → her fall → Black Wednesday → 1997 landslide.',
}

export default map
