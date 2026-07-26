import type { MindMap } from '../../types'

// Original synthesis of this companion's ch03 content.
const map: MindMap = {
  intro:
    'High-medieval England, c.1200–1348: a crowded, governed, market-soaked society — until the land ran out of slack.',
  sections: [
    {
      title: 'A crowded, trading island',
      cells: [
        {
          h: 'Population triples',
          x: 'From perhaps 2 million to 5–6 million by 1300; every usable acre under the plough.',
          cue: 'Full island, full fields.',
        },
        {
          h: 'Wool pays for everything',
          x: 'Fleeces to Flanders make England rich — and give kings something to tax.',
          cue: 'England rides on the sheep\'s back.',
        },
        {
          h: 'Towns and markets',
          x: 'Chartered boroughs, fairs, and {{london|London}} — big, rich, and self-governing.',
        },
        {
          h: 'Village and manor',
          x: 'Most people live as peasants under lords — free tenants and unfree villeins under {{feudalism|lordship}}.',
        },
      ],
    },
    {
      title: 'The charter that would not die',
      cells: [
        {
          h: '1215 fails, 1225 sticks',
          x: '{{magna-carta|Magna Carta}} is reissued for taxes — law kept in exchange for money granted.',
          cue: 'The Charter is a bargain, not a gift.',
        },
        {
          h: 'De Montfort\'s parliament',
          x: '1265: rebel baron summons knights *and* burgesses — the {{house-of-commons|Commons}} in embryo.',
        },
        {
          h: 'Consent hardens',
          x: 'By Edward I\'s reign, big taxation needs {{parliament|Parliament}} — the lasting English deal.',
        },
        {
          h: 'Law becomes routine',
          x: '{{common-law|Common-law}} courts, writs, and {{jury-trial|juries}} knit the realm together.',
        },
      ],
    },
    {
      title: 'Edward I: hammer and lawgiver',
      cells: [
        {
          h: 'Wales conquered',
          x: 'Castles ring Gwynedd; his son becomes the first English Prince of Wales (1301).',
        },
        {
          h: 'Scotland resists',
          x: 'Intervention becomes war; the Scots hold out — a 250-year quarrel opens.',
        },
        {
          h: 'Statutes pour out',
          x: 'Land law, policing, trade — royal law reaches deeper than anywhere in Europe.',
        },
        {
          h: 'The expulsion, 1290',
          x: 'England\'s Jews — long taxed dry and persecuted — are expelled wholesale; none return until the 1650s.',
          cue: 'The dark side of the strong state.',
        },
      ],
    },
    {
      title: 'Parish, cathedral, school',
      cells: [
        {
          h: '9,000 parishes',
          x: 'The {{church-of-england|church}}\'s predecessor frames every life: baptism, feast, confession, burial.',
        },
        {
          h: 'Friars and orders',
          x: 'New preaching orders bring religion to the towns; abbeys dominate the countryside.',
        },
        {
          h: 'Oxford and Cambridge',
          x: 'Universities emerge; English scholars argue logic, optics, and theology for all Europe.',
        },
        {
          h: 'Cathedral England',
          x: 'The great Gothic rebuilding — the most visible legacy of the age.',
        },
      ],
    },
    {
      title: 'The hinge: a system at its limits',
      cells: [
        {
          h: 'Too many people',
          x: 'Smallholdings shrink; wages fall; harvest failure means hunger.',
        },
        {
          h: 'Great Famine, 1315–22',
          x: 'Years of rain and dearth kill perhaps one in ten — the warning tremor.',
        },
        {
          h: 'A ship from the south',
          x: '1348: plague lands on the Dorset coast. The {{black-death|Black Death}} is the next chapter.',
          cue: 'Full land + bad weather + plague = transformation.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Growth', x: 'England c.1300 is rich, crowded, and commercial — not a "Dark Age".' },
    { h: 'Consent', x: 'Money for law: {{magna-carta|the Charter}} and {{parliament|Parliament}} fix the bargain.' },
    { h: 'Law', x: '{{common-law|Common law}} and {{jury-trial|juries}} make royal justice a national habit.' },
    { h: 'Church', x: 'The parish is the frame of everyday life; universities are its brain.' },
    { h: 'Conquest & exclusion', x: 'Edward I hammers Wales and Scotland — and expels the Jews (1290).' },
    { h: 'Tombs\' argument', x: 'A governed, cooperative society — order came from custom and community, not just kings.' },
    { h: 'Crisis', x: 'Population outruns land; famine, then plague, end the long expansion.' },
  ],
  chain:
    'More people → smaller holdings → less resilience → bad weather → famine → plague → a changed England.',
}

export default map
