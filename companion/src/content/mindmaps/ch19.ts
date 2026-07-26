import type { MindMap } from '../../types'

// Original synthesis of this companion's ch19 content.
const map: MindMap = {
  intro:
    'c.1955–c.1979: the fastest moral transformation in English history — the {{victorian-values|Christian-Victorian}} order dismantled by MPs, judges, bishops, and shoppers.',
  sections: [
    {
      title: 'The end of deference',
      cells: [
        {
          h: 'Satire on television',
          x: 'After {{suez-crisis|Suez}}, a boom of mockery makes the governing class ridiculous in front of millions.',
          cue: 'First they laughed at it.',
        },
        {
          h: 'Profumo, 1963',
          x: 'A war minister lies to the {{house-of-commons|Commons}} about an affair — every joke seemingly confirmed.',
        },
        {
          h: 'Chatterley acquitted, 1960',
          x: 'A jury laughs at the "wife or servants" question; literary censorship never recovers.',
          cue: 'The old guardians lose in court.',
        },
      ],
    },
    {
      title: 'Permissiveness by statute',
      cells: [
        {
          h: 'Jenkins\' avalanche',
          x: 'Under Wilson, Roy Jenkins calls the permissive society "civilized" — and legislates it.',
        },
        {
          h: 'The 1967 watershed',
          x: 'Abortion legalized; homosexual acts decriminalized — the legal heart of the {{sixties-revolution|sixties revolution}}.',
        },
        {
          h: 'Marriage and the pill',
          x: 'No-fault divorce (1969) ends the indissoluble marriage; the pill quietly rewrites sex itself.',
        },
        {
          h: 'Schools and feminism',
          x: 'Comprehensives and new universities; Dagenham (1968) to Equal Pay — the {{suffragettes|suffragettes}}\' logic reaches pay packets.',
        },
      ],
    },
    {
      title: 'The pews empty',
      cells: [
        {
          h: 'Churchgoing collapses',
          x: 'From the sixties, attendance, baptisms, and Sunday schools fall off a cliff — and never stop.',
          cue: 'The deepest change was the quietest.',
        },
        {
          h: 'Causes disputed',
          x: 'Affluence, television, the pill, women in paid work — or respectability simply losing its pew.',
        },
        {
          h: 'The quiet engine',
          x: 'The 1967 laws registered a morality already gone; {{methodism|Methodist}} self-restraint faded with its chapels.',
        },
      ],
    },
    {
      title: 'Pop conquest, new neighbours',
      cells: [
        {
          h: 'The British invasion',
          x: 'Beatles, Stones, Carnaby Street: swinging {{london|London}} becomes the planet\'s style capital.',
          cue: '"Declining" England\'s best export: its youth.',
        },
        {
          h: 'Punk\'s backhanded tribute',
          x: 'By 1976 the Sex Pistols turn national self-disgust itself into an export industry.',
        },
        {
          h: 'Strangers into neighbours',
          x: '{{windrush|Windrush}} grows into communities from Caribbean, India, Pakistan — met with welcome, indifference, and colour bars.',
        },
        {
          h: 'Powell, 1968',
          x: '"Rivers of blood"; sacked next day. Racism expelled from respectable politics; elite and public split lastingly.',
          cue: 'Westminster closes ranks; the polls disagree.',
        },
      ],
    },
    {
      title: 'The hinge: freedom, then failure',
      cells: [
        {
          h: 'Freer and lonelier',
          x: 'Liberation from shame and criminalized love; loss of community, restraint, and shared moral language.',
        },
        {
          h: 'The economy buckles',
          x: 'Inflation, strikes, the IMF in 1976, then the {{winter-of-discontent|Winter of Discontent}} — rubbish piled, dead unburied.',
        },
        {
          h: 'Waiting in Grantham',
          x: 'The {{postwar-consensus|postwar consensus}} exhausted; a Victorian moralist ready to govern the first post-Victorian country.',
          cue: 'The revolution\'s undertaker: a grocer\'s daughter.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Deference dies', x: 'Satire, Profumo, and the Chatterley jury finish the old guardians\' authority.' },
    { h: 'Law follows life', x: 'Parliament\'s permissive statutes registered a new morality; they did not create it.' },
    { h: 'Secularization', x: 'Emptying pews are the revolution\'s engine — {{protestantism|Protestant}} conscience went with the chapels.' },
    { h: 'Pop paradox', x: 'The country the {{declinism|declinists}} wrote off conquered the world\'s ears.' },
    { h: 'Immigration\'s bargain', x: 'Restrict entry, outlaw discrimination — and after Powell, a lasting elite–popular divide.' },
    { h: 'Tombs\' argument', x: 'Liberation and loss describe the same events; the English got freer and lonelier in twenty years.' },
    { h: 'Hinge', x: 'Culture transformed, economy failing: the {{sixties-revolution|revolution}} ends with Thatcher at the door.' },
  ],
  chain:
    'Pews empty → deference mocked away → permissive statutes → freer, lonelier England → economy seizes up → a Victorian moralist takes over.',
}

export default map
