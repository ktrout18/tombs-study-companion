import type { MindMap } from '../../types'

// Original synthesis of this companion's ch21 content.
const map: MindMap = {
  intro:
    '1997–c.2014: New Labour\'s good years, Iraq, crash, and referendum — ending with a prosperous England that has no voice of its own.',
  sections: [
    {
      title: 'The festival of 1997',
      cells: [
        {
          h: 'Blair\'s landslide',
          x: '{{blair|Blair}}, forty-three, youngest prime minister since 1812, ends eighteen Conservative years in near-festival mood.',
        },
        {
          h: 'Cool Britannia',
          x: 'The country rebranded young; the campaign anthem promises things can only get better.',
        },
        {
          h: 'Diana\'s flowers',
          x: 'August 1997: public mourning on a scale the reserved English were not supposed to possess.',
          cue: 'The stiff upper lip trembles.',
        },
      ],
    },
    {
      title: 'A quiet constitutional revolution',
      cells: [
        {
          h: 'Biggest since 1911',
          x: 'Bank of England independence in a week; Human Rights Act; most hereditary peers leave the Lords.',
        },
        {
          h: 'Devolution, 1997–99',
          x: 'Referendums approve {{devolution|devolution}}: Scotland gets a parliament, Wales an assembly.',
        },
        {
          h: 'Good Friday, 1998',
          x: 'Northern Ireland\'s thirty-year war ends; former enemies eventually share power.',
        },
        {
          h: 'The unplanned anomaly',
          x: 'Every Union nation gains a voice except the largest: England governed as if it did not exist.',
          cue: 'The original nation, left off the map.',
        },
      ],
    },
    {
      title: 'The good years',
      cells: [
        {
          h: 'The longest boom',
          x: 'Fifteen unbroken years of growth; {{nhs|NHS}} spending doubles, waiting lists shrink, a minimum wage arrives.',
        },
        {
          h: 'A cosmopolitan England',
          x: 'Immigration surges after 2004 {{european-union|EU}} enlargement; {{windrush|Windrush}} grandchildren are simply English; London leads the world.',
        },
        {
          h: '7/7, 2005',
          x: 'British-born bombers kill 52 in London, opening an unfinished argument over integration and {{britishness|Britishness}}.',
          cue: 'The bombers were born here.',
        },
      ],
    },
    {
      title: 'Iraq, and the fall of trust',
      cells: [
        {
          h: 'A million march',
          x: 'February 2003: the largest demonstration in British history opposes the coming war.',
        },
        {
          h: 'The missing weapons',
          x: 'Blair invades anyway; the intelligence proves wrong; won in weeks, lost over years of insurgency.',
        },
        {
          h: 'Trust broken',
          x: 'The assumption that British governments do not mislead their people into war dies — no inquiry repairs it.',
          cue: 'The wound of the era.',
        },
      ],
    },
    {
      title: 'Crash, austerity, referendum',
      cells: [
        {
          h: '2008: banks fail',
          x: 'Britain, most dependent on the {{city-of-london|City}}, falls hard; the state rescues the banks at colossal cost.',
        },
        {
          h: 'Coalition and austerity',
          x: '2010 brings the first coalition since the war, governing on cuts.',
        },
        {
          h: 'UKIP forces the question',
          x: 'Feeding on immigration and EU resentment, UKIP pushes Cameron to promise an in-or-out vote (2013).',
        },
        {
          h: 'Scotland votes, 2014',
          x: 'The Union survives 55–45; the morning after, Cameron finally raises the question of England.',
          cue: 'Tombs stops writing here.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Quiet revolution', x: 'The biggest constitutional changes since 1911 pass almost without debate.' },
    { h: 'The anomaly', x: '{{devolution|Devolution}} gives every nation a voice except England — 85 per cent of the population.' },
    { h: 'Prosperity', x: 'The longest modern boom funds the {{nhs|NHS}} and a more tolerant, cosmopolitan country.' },
    { h: 'Iraq', x: 'The missing weapons break public trust in government for a generation.' },
    { h: 'Crash', x: '2008 ends the boom; austerity and UKIP reshape politics.' },
    { h: 'Tombs\' argument', x: '2014 England fails the {{declinism|declinist}} test completely; its real deficit is constitutional and psychological.' },
    { h: 'The English question', x: 'West Lothian made real: an old nation in good condition that has mislaid its own voice.' },
  ],
  chain:
    'Voices for everyone but England → boom, then Iraq breaks trust → crash and austerity → UKIP and a promised referendum → Scotland votes No → the English question at last.',
}

export default map
