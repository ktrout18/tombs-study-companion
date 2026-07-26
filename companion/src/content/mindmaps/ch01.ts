import type { MindMap } from '../../types'

// Original synthesis of this companion's ch01 content.
const map: MindMap = {
  intro:
    'From Bede to Hastings, c.600–1066: seven pagan kingdoms become one precocious Christian state — England, made early and made to last.',
  sections: [
    {
      title: 'Conversion and the idea',
      cells: [
        {
          h: 'Missionaries and monks',
          x: 'From 597 Rome\'s mission works from Kent, Irish monks from the north; pagan warlords become Christian kings.',
        },
        {
          h: 'Whitby, 664',
          x: 'The {{synod-of-whitby|Synod of Whitby}} binds the English church to Rome and the continent.',
        },
        {
          h: 'Bede names the nation',
          x: '{{bede|Bede}} (731) treats Angles, Saxons, and Jutes as one chosen people — long before any king rules them all.',
          cue: 'The nation imagined before it was built.',
        },
        {
          h: 'Tools of statehood',
          x: 'Conversion brings writing, law codes, and AD dating — and a habit of self-understanding through history books.',
        },
      ],
    },
    {
      title: 'Catastrophe: the Vikings',
      cells: [
        {
          h: 'Lindisfarne, 793',
          x: 'The {{viking-invasions|Viking age}} begins at Lindisfarne — the north\'s holiest site sacked first.',
        },
        {
          h: 'Great Heathen Army, 865',
          x: 'Raiding turns to conquest: Northumbria, East Anglia, and most of Mercia fall; the {{danelaw|Danelaw}} takes the east.',
        },
        {
          h: 'One kingdom left',
          x: 'By 878 only {{wessex|Wessex}} survives — its king a refugee in the Somerset marshes.',
          cue: 'England\'s founding drama starts in a swamp.',
        },
      ],
    },
    {
      title: 'Reconquest makes England',
      cells: [
        {
          h: 'Edington and the burhs',
          x: '{{alfred-the-great|Alfred}} wins, ringing Wessex with garrison towns and rebuilding learning in English.',
        },
        {
          h: 'Edward and Æthelflæd',
          x: 'His son and the "Lady of the Mercians" retake the Danelaw fort by fort.',
        },
        {
          h: 'Brunanburh, 937',
          x: '{{athelstan|Æthelstan}} routs the allied kings — Scots, Strathclyde, Dublin — and England exists.',
          cue: 'Made by reconquest — like Spain later.',
        },
      ],
    },
    {
      title: 'The precocious state',
      cells: [
        {
          h: 'Shires and hundreds',
          x: '{{shire|Shire}} and hundred courts, staffed by ordinary freemen, cover the whole kingdom.',
        },
        {
          h: 'One coinage',
          x: 'A single controlled currency, recalled and re-struck every few years, from dozens of mints.',
        },
        {
          h: 'The geld',
          x: 'The {{danegeld|geld}}: a kingdom-wide levy, rated hide by hide across all the land.',
          cue: 'The state that could count.',
        },
        {
          h: 'Oath and counsel',
          x: 'At consecration kings swear to do justice; the {{witan|Witan}} gives counsel.',
        },
        {
          h: 'Proof it was real',
          x: 'Uniform coins, huge silver payments, and {{domesday|Domesday}}\'s speed in 1086 all imply deep machinery — no western rival could match it.',
        },
      ],
    },
    {
      title: 'The hinge: 1016 and 1066',
      cells: [
        {
          h: 'Æthelred pays, Cnut takes',
          x: 'Ever-larger gelds buy off ever-larger armies until {{cnut|Cnut}} seizes the kingdom in 1016 — and keeps everything running.',
          cue: 'Only a working state is worth stealing.',
        },
        {
          h: 'Three kings in a year',
          x: '{{edward-confessor|Edward the Confessor}} dies childless; the Witan chooses Harold; Hardrada and William both invade.',
        },
        {
          h: 'Stamford Bridge to Hastings',
          x: 'Harold destroys the Norwegians, marches the length of the country, and dies with the English nobility around him.',
        },
        {
          h: 'Christmas Day, 1066',
          x: '{{william-conqueror|William}} is crowned amid burning houses, insisting he is Edward\'s lawful heir, not a conqueror.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Idea first', x: 'Bede named "the English" a century and a half before any king ruled them all — ready for Alfred to use.' },
    { h: 'Catastrophe', x: 'The Vikings destroyed every kingdom but one; England was built back by reconquest.' },
    { h: 'Precocity', x: 'Shires, single coinage, national {{danegeld|geld}}: the most organized state in western Europe.' },
    { h: 'Solidity', x: 'Cnut conquered England and changed nothing — the machine outlasted its makers.' },
    { h: 'Not inevitable', x: 'Unification rode on catastrophe — a near thing that almost never was.' },
    { h: 'Tombs\' argument', x: 'England is one of the oldest states on earth; everyone since has governed through Anglo-Saxon machinery.' },
    { h: 'Hinge', x: '1066 changed who ruled, not what they ruled — the shires, geld, and language were already old.' },
  ],
  chain:
    'Conversion → a named people → Viking catastrophe → Alfred\'s reconquest → one precocious state → a prize worth conquering in 1066.',
}

export default map
