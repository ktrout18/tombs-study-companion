import type { MindMap } from '../../types'

// Original synthesis of this companion's ch15 content.
const map: MindMap = {
  intro:
    'The {{first-world-war|Great War}}, 1914–18: a war contemporaries thought necessary and won — before later memory rewrote it as futility.',
  sections: [
    {
      title: 'Why Britain fought',
      cells: [
        {
          h: 'Belgium the trigger',
          x: 'Germany invades on its way to France; Britain has guaranteed Belgian neutrality since 1839.',
        },
        {
          h: 'The oldest rule',
          x: 'No single power may dominate the continent and its Channel coast.',
          cue: 'Policy older than the quarrel.',
        },
        {
          h: 'A tragic necessity',
          x: 'Tombs: standing aside hands Europe to militarist Germany, isolating Britain for a worse war later.',
          cue: '"Pointless compared to what?"',
        },
      ],
    },
    {
      title: 'Kitchener\'s millions',
      cells: [
        {
          h: 'The volunteer flood',
          x: 'Some 2.5 million enlist freely before 1916 conscription — whole towns in "Pals" battalions.',
        },
        {
          h: 'Gallipoli, 1915',
          x: '{{churchill|Churchill}}\'s scheme to knock out Turkey ends in a doomed beachhead at {{gallipoli|Gallipoli}} and evacuation.',
        },
        {
          h: 'The Somme',
          x: '1 July 1916: 57,000 casualties at the {{somme|Somme}}, the army\'s worst day — then four more months of grinding.',
          cue: 'The centre of all later memory.',
        },
        {
          h: 'Attrition, not despair',
          x: 'Trench deadlock makes wearing-down the only path; contemporaries grieve and conclude it must be won.',
        },
      ],
    },
    {
      title: 'The home front holds',
      cells: [
        {
          h: 'DORA\'s state',
          x: 'Powers over industry, drink, and daylight; rationing arrives in 1918 after the U-boats bite.',
        },
        {
          h: 'Women into war work',
          x: 'Around a million enter munitions, offices, transport — shifting the vote argument the {{suffragettes|suffragettes}} forced.',
        },
        {
          h: 'Unions bargained with',
          x: 'The {{trade-unions|unions}} are negotiated with, not broken.',
        },
        {
          h: '1917: the strain year',
          x: 'U-boat crisis, Passchendaele\'s mud, Russia\'s revolution — but England, unlike half of Europe, does not crack.',
          cue: 'Everyone bends; England does not break.',
        },
      ],
    },
    {
      title: '1918: near-defeat, then victory',
      cells: [
        {
          h: 'March crisis',
          x: 'Germany\'s last offensive tears the front open; the army fights with its back to the wall.',
        },
        {
          h: 'The Hundred Days',
          x: 'From August the best-equipped army — tanks, aircraft, precise artillery — breaks Germany and forces the armistice.',
          cue: 'The greatest victories, the least remembered.',
        },
        {
          h: 'The bill',
          x: 'Roughly 720,000 United Kingdom dead; nearly every parish raises a memorial.',
        },
        {
          h: 'Votes for a people\'s war',
          x: 'The {{fourth-reform-act|Fourth Reform Act}} triples the electorate — all men, most women over thirty — opening the door to {{labour-party|Labour}}.',
        },
      ],
    },
    {
      title: 'How futility won the memory',
      cells: [
        {
          h: 'Memoir boom, 1928–33',
          x: 'Graves, Sassoon, Remarque recast the war as senseless slaughter a decade after victory.',
        },
        {
          h: 'Poets enter the classroom',
          x: 'The {{war-poets|war poets}}, barely read in wartime, become the voice through which later generations hear it.',
          cue: 'Owen\'s sonnets outlast the dispatches.',
        },
        {
          h: 'The 1960s fix the picture',
          x: '*Oh! What a Lovely War*, "lions led by donkeys", later *Blackadder* — brave men wasted by fools.',
        },
        {
          h: 'Why the myth stuck',
          x: 'It answered the grief of the bereaved; after 1939, the "war to end war" had ended nothing.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Necessity', x: 'Belgium was the trigger; the balance of Europe was the reason.' },
    { h: 'Volunteers', x: 'History\'s greatest voluntary mobilization — 2.5 million before conscription.' },
    { h: 'Attrition', x: '{{gallipoli|Gallipoli}} and the {{somme|Somme}}: the terrible tuition of a new mass army.' },
    { h: 'Endurance', x: 'Total war reorganizes home life; 1917 strains but does not break England.' },
    { h: 'Victory forgotten', x: 'The Hundred Days of 1918 — Britain\'s largest victories, erased by later memory.' },
    { h: 'Tombs\' argument', x: 'A necessary war, competently won by 1918; the futility verdict is a later construction.' },
    { h: 'Myth\'s power', x: 'A myth that consoles grief does not yield to footnotes — and critics still contest the revision.' },
  ],
  chain:
    'Grief → disillusioned memoirs → poets in the anthologies → donkeys on television → a won war remembered as a waste.',
}

export default map
