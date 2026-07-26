import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'ch20',
  part: 7,
  number: '20',
  title: "Storm and Stress",
  era: "1979–1997",
  blurb:
    'England in 1979 believed itself finished. The woman who took office that May believed the cure was to force it to compete. Tombs treats these two decades as the hinge of the modern story: {{declinism|declinism}} met its remedy, and the remedy divided the country along the map of who paid and who gained.',
  blocks: [
    {
      t: 'p',
      x: 'The 1970s ended with England telling itself the darkest story since the war — and this time with no finest hour attached. Inflation had touched 25 per cent. In 1976 a Labour government had to ask the IMF for the largest loan it had ever granted. Then, in the {{winter-of-discontent|winter of 1978–79}}, public-sector strikes left rubbish piled in the streets and, notoriously, the dead unburied in Liverpool. Foreign commentators called Britain "the sick man of Europe", and the British agreed. The {{postwar-consensus|postwar settlement}} — full employment, strong {{trade-unions|unions}}, a managed economy — seemed to be devouring itself.',
    },
    { t: 'h', x: 'Peak declinism' },
    {
      t: 'p',
      x: "Tombs has argued throughout the later chapters that {{declinism|declinism}} — the conviction that England is a failure in progress — is a recurring national mood, usually far gloomier than the facts. In the late 1970s the mood became orthodoxy. Politicians of both parties took decline as the given; the only argument was over the cure. And this time the mood had something real to feed on: Britain was not shrinking, but its neighbours were overtaking it. West Germans and the French, poorer in 1950, were now visibly richer.",
    },
    { t: 'widget', id: 'decline-explorer' },
    { t: 'h', x: 'The experiment' },
    {
      t: 'p',
      x: 'Margaret {{thatcher|Thatcher}} won the May 1979 election promising to break with everything the consensus held sacred. Her government squeezed inflation with high interest rates and tight budgets — monetarism — and let the consequences fall where they fell. They fell hardest on industry. Factories closed across the Midlands and the north; unemployment passed three million by 1982; riots burned in Brixton and Toxteth in 1981. Her poll ratings sank to the lowest ever recorded for a prime minister.',
    },
    {
      t: 'p',
      x: "Then, in April 1982, Argentina's junta seized the Falkland Islands. Thatcher sent a task force 8,000 miles down the Atlantic; within ten weeks the {{falklands-war|Falklands War}} was won. The victory transformed her, and — with the {{labour-party|Labour Party}} split by the breakaway SDP — she took a landslide in 1983. The experiment would run its full course.",
    },
    { t: 'h', x: 'Battles won, and paid for' },
    {
      t: 'p',
      x: "The decisive domestic battle came in 1984–85, when Arthur Scargill led the miners out against pit closures. The {{miners-strike|strike}} lasted a year and failed utterly. Union power — the force that had broken governments in 1974 and 1979 — was broken in turn, and never recovered. Nor did the coalfield villages, whose reason for existing left with the pits. Meanwhile the government sold what the state had owned: gas, telephones, airways, and more than a million council houses, sold to their tenants at a discount. In 1986 the 'Big Bang' deregulated the {{city-of-london|City of London}} overnight, and London roared back as a world financial capital while the old industrial England shrank. A late-eighties boom turned to bust, and inflation and recession returned by 1990.",
    },
    {
      t: 'reading',
      title: 'Why the miners lost',
      blocks: [
        {
          t: 'p',
          x: 'The strikes of 1972 and 1974 had won because coal stocks were low, the union was united, and governments blinked. In 1984 every condition was reversed. The government had spent years quietly piling up coal at the power stations. The strike began in spring, when demand was falling. And Scargill refused a national ballot, which split his own union: the Nottinghamshire miners kept working, and a rival breakaway union was born. After that the outcome was a matter of time — a year of hardship and picket-line violence, then a return to work with nothing won.',
        },
        {
          t: 'p',
          x: "Tombs presents the strike as the last battle of an old war, not the first of a new one: the final test of whether organized labour could veto elected government. It could not, and no one has tried since.",
        },
      ],
    },
    { t: 'h', x: 'The fall, and the grey aftermath' },
    {
      t: 'p',
      x: "What finished {{thatcher|Thatcher}} was not the opposition but her own party. The poll tax — a flat charge on every adult, replacing the property rates — provoked mass refusal and a riot in Trafalgar Square in March 1990. At the same time her hostility to deeper European integration ('No. No. No.', she told the Commons) drove out her most senior colleagues. In November 1990 her own MPs removed her; she left Downing Street in tears. Her successor, John Major, won an unexpected fourth Conservative victory in 1992 — then lost his reputation in a single afternoon that September, 'Black Wednesday', when the markets forced the pound out of the European exchange-rate mechanism. The economy recovered strongly; the government's standing never did, and the {{european-union|European question}} split the Tories in public for the rest of the decade.",
    },
    {
      t: 'p',
      x: "Under all of it ran Northern Ireland's Troubles, which killed more than 3,000 people across three decades. The IRA bombed Thatcher's hotel in Brighton in 1984 and mortared Major's cabinet in 1991. Yet secret contacts continued through the worst of it, and under Major they surfaced: the Downing Street Declaration of 1993, then an IRA ceasefire in 1994. When Major left office in May 1997, swept away by a Labour landslide, the road to a settlement lay open — the next chapter's story.",
    },
    {
      t: 'timeline',
      title: 'From sick man of Europe to the eve of New Labour',
      events: [
        { year: '1976', label: 'The IMF loan', detail: 'A Labour chancellor asks the IMF for its largest-ever loan. {{declinism|Declinism}} reaches its zenith.' },
        { year: '1978–79', label: '{{winter-of-discontent|Winter of Discontent}}', detail: 'Public-sector strikes bury the government that could not bury the dead.' },
        { year: '1979', label: '{{thatcher|Thatcher}} takes office', detail: 'The first woman prime minister, elected to end the {{postwar-consensus|consensus}}.' },
        { year: '1982', label: '{{falklands-war|Falklands War}}', detail: 'A ten-week war 8,000 miles away rescues a failing government.' },
        { year: '1984–85', label: 'The {{miners-strike|miners’ strike}}', detail: 'A year-long struggle ends union power — and the coalfield world with it.' },
        { year: '1986', label: 'Big Bang in the {{city-of-london|City}}', detail: 'Deregulation restores London as a global financial capital.' },
        { year: '1990', label: 'Poll tax riot; Thatcher falls', detail: 'Her own MPs remove her in November, after eleven years.' },
        { year: '1992', label: 'Black Wednesday', detail: 'The pound crashes out of the European exchange-rate mechanism; Tory economic credibility goes with it.' },
        { year: '1994', label: 'IRA ceasefire', detail: 'After the Downing Street Declaration, the peace process begins in earnest.' },
      ],
    },
    {
      t: 'argument',
      x: "Thatcherism, for Tombs, was {{declinism|declinism}}'s cure — administered at savage social cost. Economically it worked: by the mid-1990s Britain had stopped falling behind France and Germany and begun catching up, and no later government undid the core changes. Culturally it wounded: it hollowed out industrial England and taught a generation there that government was their enemy. The verdict on the era still divides the English, and the dividing line runs along the map of who paid and who gained — roughly, the old coalfields and mill towns against the south and the suburbs.",
    },
    {
      t: 'reading',
      title: 'Was there really a decline to cure?',
      blocks: [
        {
          t: 'p',
          x: "Historians distinguish absolute decline (getting poorer) from relative decline (growing more slowly than your neighbours). Britain never suffered the first: the postwar decades were the fastest growth in its history. It plainly suffered the second, roughly from the 1950s to the 1980s — though some of the gap was simply war-flattened economies catching up. Tombs' point is that the declinist *story* mattered more than the statistics: it justified Thatcher's radicalism, and its harshness, to millions who would otherwise never have accepted either. A milder diagnosis might have produced a milder cure.",
        },
      ],
    },
  ],
}

export default chapter
