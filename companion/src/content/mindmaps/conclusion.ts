import type { MindMap } from '../../types'

// Original synthesis of this companion's conclusion content.
const map: MindMap = {
  intro:
    'The long view: fifteen centuries gathered into three answers — the English are old, lucky, and gloomier about themselves than the record allows.',
  sections: [
    {
      title: 'Three answers',
      cells: [
        {
          h: 'Old',
          x: 'A millennium of unbroken statehood from {{alfred-the-great|Alfred}}\'s heirs onward — surviving every conqueror, usurper, and parliament.',
          cue: 'One state, never dissolved.',
        },
        {
          h: 'Lucky',
          x: 'A sea for a wall, unity early; invasion last succeeded in {{norman-conquest|1066}}, revolution in {{glorious-revolution|1688}}.',
        },
        {
          h: 'Gloomy',
          x: 'A national self-image far darker than anything the record supports.',
        },
      ],
    },
    {
      title: 'Against declinism, one last time',
      cells: [
        {
          h: 'A success story',
          x: 'By any long yardstick: continuously rich, law-governed, free; language, law, and institutions copied worldwide.',
        },
        {
          h: 'The freak windfall',
          x: 'Being the {{industrial-revolution|first industrial nation}} was abnormal supremacy — its end was normality, not failure.',
          cue: 'Losing a head start is not decline.',
        },
        {
          h: 'Bad history, bad politics',
          x: 'A country convinced of its own failure acts desperately — {{declinism|declinism}}\'s real danger.',
        },
      ],
    },
    {
      title: 'Memory as inheritance and burden',
      cells: [
        {
          h: 'The governing myths',
          x: 'The {{whig-history|Whig}} epic gave constitutional confidence; {{foxes-martyrs|Foxe}} gave providential exceptionalism.',
        },
        {
          h: 'Irony and the hour',
          x: 'The {{war-poets|trenches-as-futility}} story taught irony; the {{second-world-war|finest hour}} set a standard no decade could meet.',
          cue: 'Decline was the finest hour\'s hangover.',
        },
        {
          h: 'Readings, not facts',
          x: 'Each myth was a contestable reading of events — and each governed behaviour for generations.',
        },
        {
          h: 'No escape from myth',
          x: 'No nation gets to be myth-free; the only choice is whether to examine its myths.',
        },
      ],
    },
    {
      title: 'The English question',
      cells: [
        {
          h: 'The voiceless nation',
          x: '{{devolution|Devolution}} gave Scotland and Wales institutions; England is governed as if it were simply Britain.',
        },
        {
          h: 'Britishness without empire',
          x: '{{britishness|Britishness}} was built for an imperial project; the {{british-empire|empire}}\'s end removed its point.',
        },
        {
          h: 'Englishness returns',
          x: 'After the 2014 referendum exposed the Union\'s mortality: surveys, flags, resentments — the book leaves the outcome open.',
        },
        {
          h: 'Bede\'s moral',
          x: 'Know the history to escape its worst myths: a nation still made by what it writes about itself.',
          cue: 'The moral Bede would have recognized.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Old', x: 'From {{athelstan|Æthelstan}}\'s realm of 937, one continuous state — the spine of the whole book.' },
    { h: 'Lucky', x: 'The moat, 1066 survived, 1688 the last revolution.' },
    { h: 'Gloomy', x: 'Declinism mistook the end of a freak supremacy for national failure.' },
    { h: 'Myths govern', x: 'Whig epic, Foxe, trenches, finest hour: each reading of the past ruled the generations after it.' },
    { h: 'Tombs\' argument', x: 'Bad history makes bad politics; the gravest modern error would be believing the declinist story.' },
    { h: 'The English question', x: 'The only Union nation without a parliament or settled identity — and Englishness is coming back.' },
    { h: 'The closing register', x: 'Neither triumph nor elegy: appreciation for a long, well-documented habit of muddling through.' },
  ],
  chain:
    'Bede imagines the English → {{magna-carta|law above the king}} → {{reformation-england|the Great Divide}} → 1688 settlement → first industrial nation → finest hour → declinist hangover → the English question.',
}

export default map
