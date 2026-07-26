import type { MindMap } from '../../types'

// Original synthesis of this companion's ch17 content.
const map: MindMap = {
  intro:
    '1939–1945: England\'s closest brush with conquest since 1066 — and the rare national myth Tombs judges substantially true.',
  sections: [
    {
      title: 'Phoney war to catastrophe',
      cells: [
        {
          h: 'Eight months of waiting',
          x: 'Blackouts, gas masks, a million children {{blitz|evacuated}} — then Germany destroys France in six weeks.',
        },
        {
          h: '{{churchill|Churchill}} takes office',
          x: 'Aged sixty-five, widely distrusted as a romantic adventurer — appointed the day the offensive begins.',
          cue: 'The right man arrives on the worst day.',
        },
        {
          h: '{{dunkirk|Dunkirk}}',
          x: 'Some 338,000 men lifted off the beaches by navy and small boats — minus their equipment.',
        },
        {
          h: 'Five days in Cabinet',
          x: 'Halifax wants to ask the price of peace; Churchill argues negotiation means slavery — and wins.',
          cue: 'The century turned on a committee meeting.',
        },
      ],
    },
    {
      title: '1940: the hinge',
      cells: [
        {
          h: '{{battle-of-britain|Battle of Britain}}',
          x: 'A few thousand pilots, radar, home ground, German mistakes — the RAF holds; invasion is shelved.',
        },
        {
          h: 'The {{blitz|Blitz}}',
          x: 'Roughly 43,000 civilians dead; London bombed fifty-seven nights running. Morale bends, does not break.',
          cue: '"London can take it" — aimed at American ears.',
        },
        {
          h: '"Alone" — with company',
          x: 'For a year England fights without allies — alongside Canadians, Indians, Poles, Czechs, and the largest navy afloat.',
        },
      ],
    },
    {
      title: 'The long grind',
      cells: [
        {
          h: 'The Atlantic',
          x: 'The U-boat war — the only thing, Churchill admitted, that ever really frightened him.',
        },
        {
          h: 'Defeats and victories',
          x: 'Singapore falls, a deep imperial humiliation; El Alamein turns the desert war, late 1942.',
        },
        {
          h: 'Junior partner',
          x: 'Barbarossa and Pearl Harbor, 1941: Russia and America enter — and England never leads again.',
        },
        {
          h: 'Bombing Germany',
          x: 'Cities flattened, hundreds of thousands killed, 55,000 aircrew lost — a moral debate Tombs leaves genuinely hard.',
        },
      ],
    },
    {
      title: 'The People\'s War',
      cells: [
        {
          h: 'The state takes charge',
          x: 'Rationing, direction of labour, conscription of women — a world first — and unheard-of taxes.',
        },
        {
          h: 'Beveridge, 1942',
          x: 'A bestselling blueprint to slay five giants — the {{welfare-state|welfare state}} planned mid-war.',
          cue: 'Queues outside bookshops for a government report.',
        },
        {
          h: 'Radicalism from shared queues',
          x: 'If the state could organize total war, why not health care? {{labour-party|Labour}}\'s 1945 landslide gestates here.',
        },
      ],
    },
    {
      title: 'Victory, at a price',
      cells: [
        {
          h: 'D-Day to VE Day',
          x: 'The greatest seaborne invasion, mounted from English ports, June 1944; Germany surrenders May 1945.',
        },
        {
          h: 'Intact — and broke',
          x: 'The only European combatant neither conquered nor totalitarian; a quarter of national wealth gone.',
        },
        {
          h: 'Lend-Lease stops',
          x: 'Days after Japan surrenders, America cuts off aid; the victors must beg a loan.',
          cue: 'Vindicated and beggared in the same stroke.',
        },
      ],
    },
  ],
  keys: [
    { h: 'The decision', x: 'In May 1940 a tired War Cabinet chose to fight on — and it could have gone the other way.' },
    { h: 'The hinge held', x: '{{battle-of-britain|The Battle of Britain}} and the {{blitz|Blitz}} deny Hitler both invasion and surrender.' },
    { h: 'Tombs\' argument', x: 'The finest-hour myth passes the historian\'s test: real danger, real defiance, world-historical consequences.' },
    { h: 'Junior partner', x: 'From 1941 the {{second-world-war|war}} belongs to Russia and America; England supplies grit, not command.' },
    { h: 'People\'s War', x: 'Total mobilization plus Beveridge makes the {{welfare-state|welfare state}} — and the 1945 landslide — thinkable.' },
    { h: 'The price', x: 'Victory costs a quarter of national wealth; institutions survive, solvency does not.' },
    { h: 'The misuse', x: 'A true story becomes a false measuring-rod — every later decade fails the 1940 comparison.' },
  ],
  chain:
    'Refusing terms in 1940 → the war stays open → Russia and America drawn in → victory → bankruptcy → a true myth the postwar mind misused.',
}

export default map
