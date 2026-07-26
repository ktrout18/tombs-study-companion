import type { MindMap } from '../../types'

// Original synthesis of this companion's ch02 content.
const map: MindMap = {
  intro:
    '1066–1204: a French-speaking elite captures Europe\'s best-run state, drives it harder than its makers did — then loses Normandy and turns English.',
  sections: [
    {
      title: 'Catastrophe for a ruling class',
      cells: [
        {
          h: 'An elite amputated',
          x: 'Twenty years after Hastings, {{domesday|Domesday Book}} finds barely a handful of major English landholders left.',
          cue: 'Ten thousand incomers hold everything.',
        },
        {
          h: 'French on top',
          x: 'The language of power for three centuries — hence cow and beef, sheep and mutton, pig and pork.',
        },
        {
          h: 'Harrying of the North',
          x: 'Resistance answered with devastation so thorough that Domesday still records "waste" twenty years on.',
        },
        {
          h: 'The Chronicle\'s bill',
          x: 'An English chronicler grants William wisdom and wealth — then indicts his castles, oppression, and gold-taking, in English.',
          cue: 'The conquered file their verdict for posterity.',
        },
      ],
    },
    {
      title: 'The machine survives',
      cells: [
        {
          h: 'Heir, not conqueror',
          x: '{{william-conqueror|William}} claims {{edward-confessor|the Confessor}}\'s crown by right — so keeps {{shire|shires}}, {{danegeld|geld}}, coinage, and English law.',
        },
        {
          h: 'Domesday\'s secret',
          x: 'The great audit was possible only because the {{anglo-saxon-england|Anglo-Saxon state}} kept records no other kingdom had.',
          cue: 'Conquered machinery, conquerors\' audit.',
        },
        {
          h: 'Lordship bolted on',
          x: 'Castles and {{feudalism|knight-service}} above; sheriffs and hundred courts below.',
        },
        {
          h: 'The Yoke is born',
          x: 'The {{norman-yoke|myth of stolen Saxon liberty}} enters English politics for good, from the {{levellers|Levellers}} to the Victorians.',
        },
      ],
    },
    {
      title: 'The Angevin machine',
      cells: [
        {
          h: 'After the Anarchy',
          x: 'Stephen v. Matilda — when Christ and his saints slept — ends with {{henry-ii|Henry II}} restoring order with a vengeance.',
        },
        {
          h: 'Common law begins',
          x: 'Itinerant justices, standard writs, and the {{jury-trial|jury}} build the {{common-law|common law}} — case-made, national, open to free litigants.',
          cue: 'Precedent — history itself — becomes authority.',
        },
        {
          h: 'Becket, 1170',
          x: 'Four knights, a cathedral, Europe\'s most sensational murder: {{thomas-becket|Becket}}\'s death shows the church can still check kings.',
        },
        {
          h: 'The flaw: money',
          x: 'Endless French wars demand endless taxes; absentee Richard funds glory abroad, {{king-john|John}} taxes harder still — and loses.',
        },
      ],
    },
    {
      title: 'The hinge: 1204',
      cells: [
        {
          h: 'Normandy falls',
          x: 'Philip of France takes the duchy; barons must choose their estates — England or Normandy, no longer both.',
        },
        {
          h: 'Accidentally English',
          x: 'Within a generation the aristocracy, whatever it speaks at dinner, is territorially English.',
          cue: 'Defeat as midwife of the nation.',
        },
        {
          h: 'Road to Runnymede',
          x: 'John\'s frantic, extortionate bid to win Normandy back drives his barons toward {{magna-carta|Magna Carta}}.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Capture, not civilizing', x: 'The Normans did not lift a backward island; they seized its best-run state and were changed by it.' },
    { h: 'Continuity beneath', x: 'Shires, geld, coinage, and the English language survived under the new French-speaking elite.' },
    { h: 'Trauma remembered', x: 'The Norman Yoke became permanent political furniture, reached for by radicals across centuries.' },
    { h: 'Law', x: 'Henry II\'s common law and jury tied ordinary people to national institutions — among England\'s greatest exports.' },
    { h: 'Money the flaw', x: 'Wars in France made the machine insatiable; taxation strained loyalty to breaking point.' },
    { h: 'Tombs\' argument', x: 'The Conquest cuts both ways: no romantic nostalgia, no complacency — real trauma atop real continuity.' },
    { h: 'Hinge', x: 'Losing Normandy in 1204 made the rulers English — and set the road to Runnymede.' },
  ],
  chain:
    'Conquest → English machinery kept running → Angevin law and taxes → strain and extortion → Normandy lost 1204 → an English aristocracy → Magna Carta next.',
}

export default map
