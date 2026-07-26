import type { MindMap } from '../../types'

// Original synthesis of this companion's ch18 content.
const map: MindMap = {
  intro:
    '1945–c.1960: New Jerusalem on ration books, an empire let go, Suez, then affluence — and Tombs\' contrarian verdict on "decline".',
  sections: [
    {
      title: '1945: memory votes',
      cells: [
        {
          h: 'Churchill dismissed',
          x: 'Weeks after victory, the most admired man in the country loses; {{attlee|Attlee}}\'s {{labour-party|Labour}} wins its first majority.',
          cue: 'Not ingratitude — memory.',
        },
        {
          h: 'The 1930s on the ballot',
          x: 'Voters remember dole queues and have read their Beveridge.',
        },
        {
          h: 'Wartime state, peacetime job',
          x: 'The machine that organized victory is told to organize the peace.',
        },
      ],
    },
    {
      title: 'New Jerusalem in the cold',
      cells: [
        {
          h: 'Built at speed',
          x: 'Cradle-to-grave insurance, family allowances, council housing; coal, rail, steel, and the Bank nationalized.',
        },
        {
          h: '{{nhs|NHS}}, July 1948',
          x: 'Free at the point of use, won against fierce doctors\' resistance — care stops depending on money.',
          cue: '"The closest thing the English have to a religion."',
        },
        {
          h: 'Austerity is the price',
          x: 'A bankrupt country on an American loan: bread rationed in 1946, never in the war.',
        },
        {
          h: 'The winter of 1947',
          x: 'The {{welfare-state|welfare state}} is built in the cold, by candlelight.',
        },
      ],
    },
    {
      title: 'Letting go, holding on',
      cells: [
        {
          h: 'India, August 1947',
          x: 'The {{british-raj|Raj}} ends; partition kills at terrible human cost; Burma and Ceylon follow — {{decolonization|decolonization}} begins.',
        },
        {
          h: 'Great-power habits',
          x: 'NATO founder, atomic bomb ordered in secret, soldiers in Korea, bases east of Suez.',
          cue: 'Letting go with one hand, gripping with the other.',
        },
        {
          h: '*Windrush*, June 1948',
          x: 'Several hundred Caribbean migrants dock at Tilbury — the {{windrush|Windrush}} generation, a multi-ethnic England begins.',
        },
      ],
    },
    {
      title: 'Affluence — and Suez',
      cells: [
        {
          h: 'Tories keep the build',
          x: 'Back in 1951, the Conservatives preserve the {{postwar-consensus|postwar consensus}}: full employment, welfare, strong {{trade-unions|unions}}, mixed economy.',
        },
        {
          h: 'Rationing to televisions',
          x: 'Rationing ends 1954; wages outrun prices; families buy TVs, washing machines, first cars.',
        },
        {
          h: '"Never had it so good"',
          x: 'Macmillan\'s 1957 boast — and a plain statement of fact.',
        },
        {
          h: '{{suez-crisis|Suez}}, 1956',
          x: 'Eden, armed with the {{munich|Munich}} lesson, colludes to seize the canal — stopped in days by American money.',
          cue: 'The curtain twitches; everyone sees the machinery.',
        },
      ],
    },
    {
      title: 'The declinist chorus',
      cells: [
        {
          h: 'A new genre',
          x: 'The "what\'s wrong with Britain?" book: varied diagnoses — elites, unions, public schools — constant gloom.',
        },
        {
          h: 'Relative arithmetic',
          x: 'Germany, France, Japan grow faster — war-shattered economies rebuilding from rubble naturally would.',
        },
        {
          h: 'Stung by 1940',
          x: '{{declinism|Declinism}}\'s force comes from wartime glory: saviours of the world shouldn\'t be third in growth tables.',
        },
        {
          h: 'Restless by 1960',
          x: 'Richer, healthier, more secure than ever — while affluence dissolves deference, thrift, chapel, Sunday best.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Memory elects', x: '1945 was a vote about the 1930s: the wartime state hired to build the peace.' },
    { h: 'New Jerusalem', x: '{{welfare-state|Welfare state}} and {{nhs|NHS}} built at speed, in bankruptcy, under rationing.' },
    { h: 'Empire ebbs', x: 'India goes in 1947; decolonization starts while great-power habits persist.' },
    { h: 'Consensus', x: 'The Conservatives keep Labour\'s settlement — the postwar consensus spans both parties.' },
    { h: '{{suez-crisis|Suez}}', x: '1956 proves it: without Washington\'s consent, Britain is no longer a first-rank power.' },
    { h: 'Tombs\' argument', x: '"Decline" meant others catching up, not England falling — and ordinary life had never been better.' },
    { h: 'The hinge', x: 'Affluence dissolves the old order\'s habits; the next revolution happens in bedrooms, courtrooms, and pews.' },
  ],
  chain:
    'War memory → Attlee\'s New Jerusalem → consensus and affluence → Suez shatters the imperial illusion → declinism talks a thriving country into failure.',
}

export default map
