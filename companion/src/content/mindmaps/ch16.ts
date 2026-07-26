import type { MindMap } from '../../types'

// Original synthesis of this companion's ch16 content.
const map: MindMap = {
  intro:
    'Between the wars, 1918–1939: Ireland leaves, Labour arrives, two Englands diverge — and a traumatized democracy tries appeasement before facing Hitler.',
  sections: [
    {
      title: 'Aftershocks of the Great War',
      cells: [
        {
          h: 'Four million come home',
          x: '"Homes fit for heroes" promised, then broken by budgets; influenza kills more than the fighting had.',
        },
        {
          h: 'Ireland walks out',
          x: '1916 rising, guerrilla war, then the 1921–22 treaty: twenty-six counties leave the Union.',
          cue: 'The ending {{irish-home-rule|Home Rule}} tried to avoid.',
        },
        {
          h: 'England shrugs',
          x: 'The Union of 1801 dissolves with barely an English tear — striking indifference, not grief.',
        },
      ],
    },
    {
      title: 'New politics, old temper',
      cells: [
        {
          h: 'Labour replaces Liberals',
          x: 'The {{fourth-reform-act|mass electorate}} remakes the parties; {{labour-party|Labour}}, born of the {{trade-unions|unions}}, governs under MacDonald in 1924 and 1929.',
          cue: 'Revolution arrives wearing a respectable suit.',
        },
        {
          h: 'Nine quiet days',
          x: 'The 1926 {{general-strike|General Strike}} ends peacefully — volunteers drive buses; neither side wanted revolution.',
        },
        {
          h: 'Baldwin, calm made flesh',
          x: 'Three-time premier: pipe, emollience, deliberate dullness — the era\'s presiding temperament.',
        },
        {
          h: 'Abdication managed',
          x: '1936: Baldwin eases Edward VIII off the throne in a fortnight, no constitutional crisis.',
        },
      ],
    },
    {
      title: 'Two Englands',
      cells: [
        {
          h: 'The North rusts',
          x: 'Coal, ships, cotton collapse; unemployment tops 2.5 million c.1932; Jarrow marches on London.',
        },
        {
          h: 'The South builds',
          x: 'Cheap money raises four million houses; Morris and Austin put cars in middle-class garages.',
          cue: 'Semis, wireless, cinema — consumer England is born.',
        },
        {
          h: 'Geography splits the verdict',
          x: 'Which England you saw depended on where you stood; the divide never fully closed.',
        },
        {
          h: '"Wasted years"? Half-wrong',
          x: 'Cruel for the industrial unemployed — but most families gained more in living standards than ever before.',
        },
      ],
    },
    {
      title: 'The slide to war',
      cells: [
        {
          h: 'Hitler, 1933',
          x: 'Britain answers with a double policy: rearm slowly, negotiate hopefully.',
        },
        {
          h: 'Why appeasement made sense',
          x: 'Memory of the {{first-world-war|trenches}}, stretched empire, fragile recovery, no allies, pacifist voters.',
          cue: 'Not cowardice — constraint.',
        },
        {
          h: 'Rearmament starts early',
          x: 'Radar and new RAF fighters from the mid-1930s — earlier than legend allows.',
        },
        {
          h: '{{munich|Munich}}, 1938',
          x: 'Chamberlain cedes the Sudetenland, promises "peace for our time"; {{churchill|Churchill}} calls it total defeat.',
        },
        {
          h: 'Prague settles it',
          x: 'March 1939: Hitler revealed as appetite, not grievance. Poland guaranteed; on 3 September, {{second-world-war|war}}.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Ireland', x: 'Most of Ireland leaves the UK — and England barely looks up.' },
    { h: 'Labour rises', x: 'The {{labour-party|Labour party}} reaches office without revolution; the {{general-strike|General Strike}} fizzles peacefully.' },
    { h: 'Two Englands', x: 'Depression ruins the industrial North while the suburban South booms — one country, two stories.' },
    { h: 'Tombs\' argument', x: 'The "wasted years" label is half-wrong: for most families, the biggest rise in living standards yet.' },
    { h: '{{appeasement|Appeasement}}', x: 'Less a policy of cowards than the policy the situation seemed to dictate.' },
    { h: 'The hinge', x: '{{munich|Munich}} cheered, Prague taken — hope ends, and Britain guarantees Poland.' },
  ],
  chain:
    'Trench memory + no allies + fragile recovery → appease and rearm slowly → Munich → Prague → guarantee to Poland → war, 3 September 1939.',
}

export default map
