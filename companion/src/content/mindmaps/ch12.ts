import type { MindMap } from '../../types'

// Original synthesis of this companion's ch12 content.
const map: MindMap = {
  intro:
    'c.1815–c.1850: the England of workhouses and cholera — and, in the same years, the England that invented modern reform.',
  sections: [
    {
      title: 'A hungry peace',
      cells: [
        {
          h: 'Bread made dear',
          x: 'After {{waterloo|Waterloo}}, a landowners\' Parliament passes the {{corn-laws|Corn Laws}} (1815) to keep grain and rents high.',
          cue: 'Cheap bread outlawed by the lawmakers it fed.',
        },
        {
          h: 'Peterloo, 1819',
          x: 'Yeomanry sabre 60,000 peaceful reformers in Manchester; about fifteen die — radicalism gains its founding memory.',
        },
        {
          h: 'Captain Swing, 1830',
          x: 'Southern farm labourers smash threshing machines; hangings and transportation follow, grievances stay.',
        },
      ],
    },
    {
      title: 'The Reform crisis',
      cells: [
        {
          h: 'Indefensible map',
          x: 'Manchester has no MP; rotten boroughs of nobody return two.',
        },
        {
          h: 'Near-revolution, 1831–32',
          x: 'Bristol burns three days, unions drill, banks run — the closest modern England came.',
        },
        {
          h: 'The Act passes',
          x: 'The {{great-reform-act|Great Reform Act}} (1832) needs a royal threat to swamp the Lords with new peers.',
        },
        {
          h: 'Modest but decisive',
          x: 'One man in five gets the vote; the precedent — peaceful change under pressure — is everything.',
          cue: 'The safety valve that spared the barricade.',
        },
      ],
    },
    {
      title: 'Two Englands, one decade',
      cells: [
        {
          h: 'The horrors',
          x: 'Cholera from 1831, slum life expectancy in the twenties, children on twelve-hour shifts: {{dickensian-england|Dickensian England}}, uninvented.',
        },
        {
          h: 'Workhouse by design',
          x: 'The New Poor Law (1834) makes relief deliberately grimmer than the meanest labour outside.',
          cue: '*Oliver Twist* made it immortal.',
        },
        {
          h: 'The Blue Books',
          x: 'Royal commissions publish sworn evidence; Chadwick\'s 1842 report shames Parliament toward public health.',
        },
        {
          h: 'Paid inspectors',
          x: 'The Factory Act (1833) limits children\'s hours — and, the real novelty, hires men to enforce it.',
        },
        {
          h: 'Self-auditing society',
          x: 'Statisticians count, journalists publicize, congregations organize: failures exposed and fixed faster than ever before.',
        },
      ],
    },
    {
      title: 'Chartism: wanting in',
      cells: [
        {
          h: 'Six demands, 1838',
          x: 'The People\'s Charter, headed by a vote for every man; {{chartism|Chartism}} is the world\'s first mass working-class movement.',
        },
        {
          h: 'Three petitions rejected',
          x: '1839, 1842, 1848: Parliament says no; Kennington Common fizzles and the movement fades.',
        },
        {
          h: 'Failure the wrong word',
          x: 'Five of six demands eventually became law; a generation of organizers was trained.',
          cue: 'Defeated now, enacted later.',
        },
        {
          h: 'Constitutional to the core',
          x: 'Petitioning Parliament, not plotting against it — English radicals wanted in, not over.',
        },
      ],
    },
    {
      title: 'Bread, trade, famine',
      cells: [
        {
          h: 'The League',
          x: 'Anti-Corn Law campaigners make cheap bread a moral crusade against aristocratic privilege.',
        },
        {
          h: 'Peel\'s sacrifice, 1846',
          x: 'Repeal of the {{corn-laws|Corn Laws}} splits the Tories for a generation; {{free-trade|free trade}} becomes a Victorian creed.',
        },
        {
          h: 'The Irish catastrophe',
          x: 'The {{irish-famine|famine}} kills around a million inside the United Kingdom; relief comes too little, too dogma-laced.',
          cue: 'The era\'s darkest stain — repeal barely touched it.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Distress first', x: 'Peace brings collapse, dear bread, and thirty-five turbulent years.' },
    { h: '1832', x: 'The {{great-reform-act|Reform Act}} proves the constitution bends under pressure — peacefully.' },
    { h: 'Real horrors', x: 'Cholera, slums, and the workhouse were fact before Dickens made them fiction.' },
    { h: 'The repair machine', x: 'Commissions, inspectors, and Blue Books: a society auditing its own failures.' },
    { h: 'Chartism', x: '{{chartism|The Charter}} fails in its day and wins in the long run — by petition, not plot.' },
    { h: 'Free trade', x: '{{free-trade|Cheap bread}} triumphs in 1846; the {{irish-famine|Irish famine}} it could not stop stains the era.' },
    { h: 'Tombs\' argument', x: 'The misery was old and newly visible; the response — inspect, publish, legislate — was the true novelty we forgot.' },
  ],
  chain:
    'Dear bread → protest → near-revolution → the Reform precedent → count the horrors → publish → legislate → we keep Dickens\' caricatures and forget the inspectors.',
}

export default map
