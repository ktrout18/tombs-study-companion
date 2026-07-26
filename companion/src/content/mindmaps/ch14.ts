import type { MindMap } from '../../types'

// Original synthesis of this companion's ch14 content.
const map: MindMap = {
  intro:
    'A quarter of the map turns pink, 1815–1918 — and Tombs asks how much the {{british-empire|empire}} ever really weighed on the English at home.',
  sections: [
    {
      title: 'Several empires, one colour',
      cells: [
        {
          h: 'Navy and money',
          x: 'The {{royal-navy|Royal Navy}} polices the oceans; the {{city-of-london|City}} finances the planet.',
        },
        {
          h: 'Settler colonies',
          x: 'Canada, Australia, New Zealand, the Cape fill with emigrants and win self-government early.',
          cue: 'An empire held by family letters.',
        },
        {
          h: 'India: the exception',
          x: '{{east-india-company|Company}} rule ends with the {{indian-rebellion|1857 Rebellion}}; the Crown takes over as the {{british-raj|Raj}}.',
        },
        {
          h: 'Thin machine, thick pageant',
          x: 'A few thousand officials govern 300 million; {{disraeli|Disraeli}} makes {{victoria|Victoria}} Empress, 1876.',
          cue: 'Ceremony laid on because the facts are thin.',
        },
      ],
    },
    {
      title: 'Scramble and spectacle',
      cells: [
        {
          h: 'Egypt by accident',
          x: '1882: a "temporary" occupation to guard the Suez route lasts seventy years.',
        },
        {
          h: 'Africa claimed inland',
          x: 'Vast tracts taken mainly to forestall France and Germany — improvisation, not plan.',
        },
        {
          h: 'Gordon at Khartoum',
          x: '1885: the relief steamers miss him by two days; the press canonizes Gordon and blames {{gladstone|Gladstone}}.',
          cue: 'Empire consumed as theatre.',
        },
        {
          h: 'Cheap little wars',
          x: 'Quick victories over ill-armed opponents keep the drama going without taxing anyone much.',
        },
      ],
    },
    {
      title: 'Ireland: the wound at home',
      cells: [
        {
          h: 'The Famine',
          x: '{{irish-famine|1845–52}}: a million dead, over a million emigrate, while London clings to {{free-trade|free-trade}} doctrine.',
          cue: 'Doctrine held firm while people starved.',
        },
        {
          h: 'Home Rule splits politics',
          x: '{{irish-home-rule|Home Rule}} converts Gladstone in 1886 and breaks his Liberal party; a second bill falls in 1893.',
        },
        {
          h: 'The 1914 brink',
          x: 'The third bill passes; Ulster arms; civil war is suspended — not solved — by the {{first-world-war|war}}.',
        },
      ],
    },
    {
      title: 'Jingo, then the Boer shock',
      cells: [
        {
          h: 'Jubilee high noon',
          x: '1897: music-hall jingoism, Kipling, colonial troops parading through London.',
        },
        {
          h: 'Two republics, three years',
          x: '1899–1902: 400,000 troops, camps where Boer civilians die of disease, Europe jeering.',
        },
        {
          h: '"National efficiency" panic',
          x: 'Stunted city recruits spark fear the imperial race is rotting — feeding social reform.',
          cue: 'The empire checked its pulse and flinched.',
        },
      ],
    },
    {
      title: 'Did it matter?',
      cells: [
        {
          h: 'Run on the cheap',
          x: 'No conscription, no tariff wall, a small navy budget, an Indian-funded army.',
        },
        {
          h: 'Trade points elsewhere',
          x: 'Europe and the Americas outweigh most colonies; empire\'s share of exports: a quarter, maybe a third.',
        },
        {
          h: 'The historians\' fight',
          x: '"Absent-minded imperialists" versus empire-in-everything — sugar, cotton, race-thinking, slave profits. Tombs stands nearer Porter.',
          cue: 'Really a debate about what "mattering" means.',
        },
        {
          h: '"English" for "British"',
          x: 'At the height of {{britishness|Britishness}}, the English rarely bother to distinguish themselves from it.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Plural empire', x: 'Settler dominions, the Raj, and African claims — different systems under one colour.' },
    { h: 'Piecemeal', x: 'Acquired by accident and pre-emption, run by a few thousand officials, doubted at home.' },
    { h: 'Ireland', x: 'The {{irish-famine|Famine}} and Home Rule — the empire\'s deepest wound is nearest home.' },
    { h: 'Spectacle', x: 'Gordon, jubilees, small wars: the public cheers the show and declines to pay.' },
    { h: 'Boer shock', x: 'Three years to beat two farmer republics — pride gives way to efficiency panic.' },
    { h: 'Tombs\' argument', x: 'The empire sat lightly on English life; England watched itself and Europe more than its possessions.' },
    { h: 'Contested', x: 'Many historians say he understates empire\'s reach — hold both cases.' },
    { h: 'The real test', x: 'It comes not from the colonies but from Europe, in August 1914.' },
  ],
  chain:
    'Cheap wars and jubilees → Boer humiliation → efficiency panic → doubt beneath the pageantry → the true test arrives from Europe, 1914.',
}

export default map
