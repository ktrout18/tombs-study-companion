import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'ch15',
  part: 6,
  number: '15',
  title: "The War to End War",
  era: "1914–1918",
  blurb:
    'The {{first-world-war|Great War}}: why Britain fought, what it cost, and how it was won — and Tombs\' most provocative case, that the "futility" everyone now remembers is a myth built long after the guns stopped.',
  blocks: [
    {
      t: 'p',
      x: 'No stretch of English history is buried under thicker memory than 1914–18: mud, wire, doomed boys, donkey generals. This chapter is where Tombs\' revisionism works hardest. He tells the story of the {{first-world-war|First World War}} as contemporaries lived it — a terrible war they believed necessary and finally won — and then asks how that story got replaced by the one we inherited from the {{war-poets|war poets}}.',
    },
    { t: 'h', x: 'Why Britain went in' },
    {
      t: 'p',
      x: 'Britain entered the war on 4 August 1914, when Germany invaded Belgium on its way to France. Belgium supplied the legal trigger — Britain had guaranteed its neutrality since 1839 — but the deeper reason was the oldest rule of English policy: no single power must dominate the continent and its Channel coast. A victorious Germany astride Europe, facing Britain alone, was a future no government thought it could accept.',
    },
    {
      t: 'argument',
      title: 'A tragic necessity',
      x: 'Tombs defends the decision to fight. Standing aside, he argues, would not have bought peace; it would have delivered Europe to a militarist Germany and left Britain isolated against it, with the war postponed to worse terms. The choice of 1914 was not folly or sleepwalking but the least-bad option facing men who understood roughly what it might cost. Reasonable historians dissent — but the "pointless war" verdict, he insists, needs an answer to the question: pointless compared to what?',
    },
    { t: 'h', x: 'Kitchener\'s millions' },
    {
      t: 'p',
      x: 'Britain began with a tiny professional army and improvised a mass one. Kitchener, almost alone in predicting a long war, called for volunteers; roughly two and a half million men enlisted freely before conscription came in 1916 — the greatest voluntary mobilization in history, whole towns joining up together in "Pals" battalions. The learning was paid for in blood. In 1915 the attempt to knock out Turkey at {{gallipoli|Gallipoli}} — {{churchill|Churchill}}\'s scheme — collapsed into a doomed beachhead and evacuation.',
    },
    {
      t: 'p',
      x: 'Then the {{somme|Somme}}. On 1 July 1916 the new volunteer army attacked and suffered some 57,000 casualties, about 19,000 of them dead — the worst day in British military history, and the centre of all later memory. Yet the battle ground on for four more months, wearing down the German army in a war that had become one of attrition because neither side could break the trench deadlock. Contemporaries grieved; most did not conclude the war was futile. They concluded it had to be won.',
    },
    { t: 'h', x: 'The home front' },
    {
      t: 'p',
      x: 'Total war reorganized England. The Defence of the Realm Act (DORA) gave the state powers over industry, drink, and daylight itself; food rationing came in 1918 after the U-boats bit; around a million women went into munitions works, offices, and transport, shifting arguments about the vote that the {{suffragettes|suffragettes}} had forced before the war. The {{trade-unions|unions}} were bargained with, not broken. 1917 was the year of strain — U-boat crisis, Passchendaele\'s mud, war-weariness, revolution in Russia — but England, unlike half of Europe, did not crack.',
    },
    { t: 'h', x: '1918: near-defeat, then victory' },
    {
      t: 'p',
      x: 'In March 1918 Germany\'s last great offensive tore the front open and nearly won the war. It failed; and from August the British army — now the best-equipped and arguably the most effective on the field, integrating tanks, aircraft, and precise artillery — led the "Hundred Days" advance that broke the German army and forced the armistice of 11 November. Victory cost the United Kingdom roughly 720,000 dead. The same year, the {{fourth-reform-act|Fourth Reform Act}} tripled the electorate, giving the vote to all adult men and — with a household qualification attached — to most women over thirty: the political payment for a people\'s war, and a door through which the {{labour-party|Labour party}} would soon walk.',
    },
    {
      t: 'voice',
      source: 'Wilfred Owen, "Anthem for Doomed Youth" (1917) — killed in action one week before the Armistice',
      x: '"What passing-bells for these who die as cattle? / — Only the monstrous anger of the guns." Owen\'s sonnet, barely read in his lifetime, became the voice through which later generations heard the entire war.',
    },
    {
      t: 'reading',
      title: 'How the futility myth won',
      blocks: [
        {
          t: 'p',
          x: 'In 1918 most Britons believed they had won a necessary war. The memory changed later. A boom of disillusioned memoirs and novels around 1928–33 (Graves, Sassoon, Remarque) recast the war as senseless slaughter; the {{war-poets|war poets}}, little read in wartime, entered the school anthologies; the 1960s — *Oh! What a Lovely War*, then the "lions led by donkeys" popular histories, later *Blackadder* — fixed the picture of brave men wasted by fools.',
        },
        {
          t: 'p',
          x: 'Tombs sides with the military historians who call this bad history: generals learned fast by 1918, the army\'s morale largely held, and no one has shown a cheap way to have beaten Germany. But he also explains why the myth won — it answered the grief of the bereaved, and after 1939 proved the "war to end war" had ended nothing. A myth that useful does not yield to footnotes. The reader should know both the case and its critics: some historians still find the revisionists too forgiving of the generals.',
        },
      ],
    },
    {
      t: 'timeline',
      title: 'Britain\'s Great War',
      events: [
        { year: '1914', label: 'Britain declares war, 4 August', detail: 'Germany invades Belgium; Britain honours its guarantee and its balance-of-power instincts. Kitchener calls for volunteers.' },
        { year: '1915', label: '{{gallipoli|Gallipoli}}', detail: 'The attempt to force the Dardanelles and knock out Turkey fails at terrible cost; {{churchill|Churchill}} falls from office.' },
        { year: '1916', label: 'First day of the {{somme|Somme}}', detail: '1 July: some 57,000 British casualties — the worst day in the army\'s history. Conscription has begun the same year.' },
        { year: '1917', label: 'The year of strain', detail: 'U-boats nearly starve Britain, Passchendaele drowns in mud, Russia collapses into revolution — but the home front holds.' },
        { year: '1918', label: 'German spring offensive', detail: 'March: the front breaks and the war nearly ends in defeat. In April, as the next blow falls in Flanders, Haig orders the army to fight "with our backs to the wall".' },
        { year: '1918', label: 'The Hundred Days', detail: 'From August, British-led offensives break the German army — the largest victories in British military history, and the least remembered.' },
        { year: '1918', label: 'Armistice and the {{fourth-reform-act|Fourth Reform Act}}', detail: '11 November: the guns stop. Roughly 720,000 UK dead. All adult men and most women over thirty get the vote.' },
      ],
    },
    {
      t: 'p',
      x: 'England came out of the war a victor that felt like a mourner. Nearly every parish raised a memorial cross; the two-minute silence stopped the country each November. What victory was for — and whether the peace could be kept without ever doing this again — became the governing question of the next twenty years.',
    },
  ],
}

export default chapter
