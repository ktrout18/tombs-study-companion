import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'ch18',
  part: 7,
  number: '18',
  title: "Postwar",
  era: "1945–c.1960",
  blurb:
    'New Jerusalem on ration books: {{attlee|Attlee}}\'s {{welfare-state|welfare state}} and {{nhs|NHS}}, the end of the {{british-raj|Raj}}, {{suez-crisis|Suez}}, and then affluence. Tombs\' contrarian verdict: the decades the {{declinism|declinists}} mocked were the best time yet to be an ordinary English person.',
  blocks: [
    {
      t: 'p',
      x: 'In July 1945, weeks after victory in Europe, the English electorate dismissed {{churchill|Churchill}} — the most admired man in the country — and gave {{attlee|Clement Attlee}}\'s {{labour-party|Labour Party}} its first majority. It was not ingratitude; it was memory. Voters remembered the 1930s and had read their Beveridge. They wanted the wartime state, which had organized victory, to organize the peace. This chapter follows what it built, what it cost, and how the story of these years got told backwards.',
    },
    { t: 'h', x: 'New Jerusalem on an empty bank account' },
    {
      t: 'p',
      x: 'The Attlee governments of 1945–51 built at speed: national insurance from cradle to grave, family allowances, a huge council-housing drive, and — against the doctors\' fierce resistance — the {{nhs|National Health Service}}, launched in 1948, free at the point of use. Coal, railways, steel, and the Bank of England were nationalized. All of it was done in a bankrupt country living on an American loan. Austerity was the price: bread was rationed in 1946 (it never had been in the war), and rationing dragged on into the 1950s, longer and in some ways tighter than wartime. The New Jerusalem was built in the cold, by candlelight, in the brutal winter of 1947.',
    },
    {
      t: 'reading',
      title: 'Why the NHS became sacred',
      blocks: [
        {
          t: 'p',
          x: 'Other countries built health systems after the war, many of them (Tombs notes dryly) better funded and, by most measures, eventually better performing. But the {{nhs|NHS}} alone became part of national identity — "the closest thing the English have to a religion", in a former Chancellor\'s much-quoted line. Part of the reason is the founding drama: a single day in July 1948 when care stopped depending on money. Part is that it descended from the {{second-world-war|People\'s War}} — fair shares, all in it together — so that defending the NHS came to feel like defending the memory of 1940–45 itself.',
        },
      ],
    },
    { t: 'h', x: 'Letting go, holding on' },
    {
      t: 'p',
      x: 'The empire began to go almost at once. India — drained of British power and patience, and convulsed by communal violence — became independent in August 1947, partitioned into India and Pakistan at terrible human cost; Burma and Ceylon followed within a year. {{decolonization|Decolonization}} had begun, though few yet admitted where it would end. At the same time Britain held on to great-power habits: a founding role in NATO in 1949, a secretly ordered atomic bomb, troops in Korea, garrisons east of Suez. And the traffic ran both ways: in June 1948 the *Empire Windrush* docked at Tilbury with several hundred Caribbean migrants, the symbolic start of the {{windrush|Windrush}} generation and of England\'s transformation into a multi-ethnic society.',
    },
    { t: 'h', x: 'Affluence — and Suez' },
    {
      t: 'p',
      x: 'The Conservatives returned in 1951 and kept nearly everything Labour had built — the {{postwar-consensus|postwar consensus}}: full employment, the {{welfare-state|welfare state}}, strong {{trade-unions|trade unions}}, a mixed economy. What changed was the weather. Rationing ended in 1954, wages ran ahead of prices, and ordinary families bought televisions, washing machines, and their first cars. Harold Macmillan told a 1957 audience that most of the people had "never had it so good" — a boast, but also a plain statement of fact. The one great shock came abroad: at {{suez-crisis|Suez}} in 1956, Eden — armed with the {{munich|Munich}} lesson — colluded with France and Israel to seize back the nationalized canal, and was stopped in days by American financial pressure. The curtain twitched, and everyone saw the machinery: Britain could no longer act as a first-rank power against Washington\'s wishes.',
    },
    {
      t: 'timeline',
      title: 'From austerity to affluence',
      events: [
        { year: '1945', label: '{{attlee|Attlee}}\'s landslide', detail: 'Labour wins its first majority; the wartime state is turned to building the {{welfare-state|welfare state}}.' },
        { year: '1947', label: 'Indian independence', detail: 'The {{british-raj|Raj}} ends; partition kills hundreds of thousands; {{decolonization|decolonization}} begins.' },
        { year: '1948', label: '{{nhs|NHS}} founded; *Windrush* docks', detail: 'Free health care begins; the {{windrush|Windrush}} generation starts arriving from the Caribbean.' },
        { year: '1949', label: 'NATO founded', detail: 'Britain anchors the Atlantic alliance and secretly builds its own bomb.' },
        { year: '1951', label: 'Churchill returns', detail: 'The Conservatives accept the {{postwar-consensus|consensus}} and preside over the boom.' },
        { year: '1954', label: 'Rationing finally ends', detail: 'Fourteen years after it began — meat is the last item freed.' },
        { year: '1956', label: '{{suez-crisis|Suez}}', detail: 'The Anglo-French invasion of Egypt collapses under American pressure; the imperial illusion goes with it.' },
        { year: '1957', label: '"Never had it so good"', detail: 'Macmillan names the affluent society; the {{declinism|declinist}} literature starts up almost simultaneously.' },
      ],
    },
    { t: 'h', x: 'The declinist chorus' },
    {
      t: 'p',
      x: 'Even as life improved, a new genre appeared: the "what\'s wrong with Britain?" book. Journalists and academics totted up growth rates and found Germany, France, and Japan rising faster; they blamed amateurish elites, ancient institutions, unions, public schools — the diagnosis varied, the gloom was constant. {{declinism|Declinism}} became the reflex of the age, and it drew its sting, Tombs suggests, from the memory of 1940: a country that had just saved the world felt it should not be third in the growth tables.',
    },
    {
      t: 'argument',
      x: 'Tombs argues that "decline" was relative arithmetic mistaken for absolute failure. Of course war-shattered economies rebuilding from rubble grew faster than one already rich. Meanwhile, for ordinary English people, these were the best years anyone had ever lived: full employment, rising real wages, free health care, secure pensions, longer lives. The tragedy of the postwar decades is not that England declined but that the English, coached by {{declinism|declinists}} and haunted by wartime glory, talked themselves into believing it had.',
    },
    {
      t: 'p',
      x: 'By 1960 the English were richer, healthier, and more secure than ever — and restless. Affluence was dissolving the habits that had made the old order work: deference, thrift, chapel, the Sunday best. The revolution of the next chapter was not political. It happened in bedrooms, courtrooms, record shops, and pews.',
    },
  ],
}

export default chapter
