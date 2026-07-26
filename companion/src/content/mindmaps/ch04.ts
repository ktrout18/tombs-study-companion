import type { MindMap } from '../../types'

// Original synthesis of this companion's ch04 content.
const map: MindMap = {
  intro:
    '1348–c.1500: plague kills perhaps half of England — and leaves the survivors better paid, less bound, and speaking English.',
  sections: [
    {
      title: 'The Great Mortality',
      cells: [
        {
          h: 'Half of England dies',
          x: 'The {{black-death|plague}} lands in Dorset, 1348, and returns for three centuries; numbers not restored until the 1600s.',
          cue: 'Land suddenly cheap, people suddenly precious.',
        },
        {
          h: 'Wages defy statute',
          x: '{{parliament|Parliament}}\'s Statute of Labourers (1351) tries to freeze pay at pre-plague rates. The market ignores it.',
        },
        {
          h: 'Serfdom evaporates',
          x: 'Villeins walk to better offers; lords competing for tenants drop dues. {{feudalism|Serfdom}} is never abolished — it dissolves.',
        },
        {
          h: 'Labourer\'s golden age',
          x: 'Mid-1400s real wages higher than any time until the Victorians: more meat, more ale, wills full of goods.',
          cue: 'Fewer mouths, cheaper bread, dearer hands.',
        },
      ],
    },
    {
      title: 'Revolt and heresy',
      cells: [
        {
          h: 'The rising of 1381',
          x: 'A third flat poll tax ignites the {{peasants-revolt|Peasants\' Revolt}}: Kent and Essex take {{london|London}} and behead the archbishop.',
        },
        {
          h: 'Lost week, won century',
          x: 'Richard II breaks his promises and hangs the leaders — but the poll tax dies and serfdom keeps dissolving.',
          cue: '"When Adam delved and Eve span…"',
        },
        {
          h: 'Wyclif and the Lollards',
          x: 'English Bibles and scepticism about priests; the {{lollards|Lollards}} are driven underground, but the ground stays loosened for {{reformation-england|reformers}}.',
        },
      ],
    },
    {
      title: 'France won and lost',
      cells: [
        {
          h: 'Agincourt, 1415',
          x: '{{henry-v|Henry V}}\'s sick, outnumbered army destroys the French nobility in a few hours of mud and arrows.',
        },
        {
          h: 'Heir of France — briefly',
          x: 'Troyes (1420) promises him the French crown; he dies at thirty-five, leaving a baby.',
        },
        {
          h: 'Castillon ends it, 1453',
          x: 'Joan of Arc turns the tide; the {{hundred-years-war|war}} {{edward-iii|Edward III}} began ends with only Calais kept.',
          cue: 'Three centuries of kings in France — over.',
        },
      ],
    },
    {
      title: 'Cousins at war',
      cells: [
        {
          h: 'The Roses, 1455–85',
          x: 'Defeat abroad breaks peace at home: {{wars-of-roses|Lancaster against York}}, Towton the bloodiest field, the princes vanish in the Tower.',
        },
        {
          h: 'Bosworth, 1485',
          x: 'Near-unknown Henry Tudor kills Richard III and marries Elizabeth of York — the wars married shut.',
        },
        {
          h: 'Life barely interrupted',
          x: 'Tombs\' deflating footnote: brief, localized fighting; ploughing, trading, and suing carried on.',
          cue: 'Noble blood, ordinary business.',
        },
      ],
    },
    {
      title: 'An English-speaking nation',
      cells: [
        {
          h: 'English takes the state',
          x: 'Parliament opened in English (1362); {{henry-v|Henry V}} writes home in it; Chancery clerks fix a written standard.',
        },
        {
          h: 'Chaucer proves the tongue',
          x: 'The Canterbury Tales show English can do anything French can.',
        },
        {
          h: 'Caxton\'s press, 1476',
          x: 'England\'s first printing press, at Westminster, sets the language in type for a public that can read.',
          cue: 'The ruled\'s language becomes the rulers\'.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Catastrophe', x: 'The {{black-death|Black Death}} is the worst demographic disaster in English history — and its great liberator.' },
    { h: 'Freedom', x: 'Labour scarcity did what no rebellion could: serfdom quietly evaporated.' },
    { h: 'Revolt', x: '1381 was crushed in days, yet its causes won over the century.' },
    { h: 'Loss', x: 'Agincourt\'s triumph rots to Castillon\'s defeat; the French inheritance shrinks to Calais.' },
    { h: 'Dynasty', x: 'The Roses bleed the nobility but barely touch daily life; Bosworth opens the Tudor age.' },
    { h: 'Language', x: 'England ends the century monoglot English from plough to throne.' },
    { h: 'Tombs\' argument', x: 'The plague was an accelerant, not just a horror: wage labour, English, and the {{house-of-commons|Commons}}\' bargaining all sped up.' },
    { h: 'Hinge', x: 'The next overthrow comes not from plague or war but from {{henry-viii|Henry VIII}}\'s conscience — the break with Rome.' },
  ],
  chain:
    'Plague → scarce labour → rising wages → serfdom dissolves → richer, freer, English-speaking survivors → a nation ready for the Tudors.',
}

export default map
