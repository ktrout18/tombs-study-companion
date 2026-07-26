import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'ch14',
  part: 5,
  number: '14',
  title: "Imperial England",
  era: "1815–1918",
  blurb:
    'The century when a quarter of the world map turned pink. Settler colonies, the Raj, the scramble for Africa, and Ireland in revolt — and Tombs\' awkward question: how much did any of it really matter to the English at home?',
  blocks: [
    {
      t: 'p',
      x: 'After Waterloo, Britain was the only world power. The {{royal-navy|Royal Navy}} policed the oceans, the {{city-of-london|City of London}} financed the planet, and the {{british-empire|empire}} grew decade by decade until it covered roughly a quarter of the earth and its people. This chapter tells that story — but Tombs tells it against the grain. His question is not how the empire was won but how lightly it sat on the country that supposedly lived for it.',
    },
    {
      t: 'argument',
      x: 'Tombs argues — and this is one of his most contested claims — that the empire loomed smaller in ordinary English life than either imperial nostalgists or postcolonial critics assume. It was acquired piecemeal, run on the cheap by a few thousand officials, and regarded with chronic doubt at home. England, he insists, was always more absorbed in itself and in Europe than in its distant possessions. Many historians think he understates how deeply empire shaped English wealth, culture, and self-regard; he presents the counter-case, and the reader should hold both.',
    },
    { t: 'h', x: 'The pink map' },
    {
      t: 'p',
      x: 'The empire was really several empires. The settler colonies — Canada, Australia, New Zealand, the Cape — filled up with emigrants (millions left Britain and Ireland across the century) and were handed self-government early; by 1914 they were dominions in all but sovereignty, tied to Britain by trade, sentiment, and family letters. India was different: first the private domain of the {{east-india-company|East India Company}}, then, after the shock of the {{indian-rebellion|Indian Rebellion}} of 1857, ruled directly by the Crown as the {{british-raj|Raj}}. {{disraeli|Disraeli}} made {{victoria|Victoria}} Empress of India in 1876 — pageantry deliberately laid on thick, because the underlying facts were thin: a few thousand British civil servants and officers governing some 300 million people, mostly through Indian intermediaries and an Indian-funded army.',
    },
    {
      t: 'p',
      x: 'The 1880s brought the scramble for Africa: Egypt occupied in 1882 almost by accident, then vast tracts claimed inland, often to forestall France or Germany rather than from any plan. The public consumed it as theatre. General Gordon, besieged and killed at Khartoum in 1885, became a martyr-hero of the popular press; the relief expedition arrived two days late, and {{gladstone|Gladstone}} took the blame. Small colonial wars — quick, cheap, and fought against opponents without modern weapons — kept the drama going without ever asking much of the taxpayer.',
    },
    { t: 'h', x: 'Ireland: the empire at home' },
    {
      t: 'p',
      x: 'The empire\'s deepest wound was closest to home. The {{irish-famine|Great Famine}} of 1845–52 killed roughly a million people and drove well over a million more to emigrate, while the government in London clung to {{free-trade|free-trade}} doctrine and did too little, too late — a failure that poisoned Anglo-Irish relations for a century. From the 1880s the demand for {{irish-home-rule|Home Rule}} dominated politics: Gladstone\'s conversion to it in 1886 split his Liberal party, a second bill fell in 1893, and the third, passed in 1914, brought Ulster and Ireland to the brink of civil war — a crisis suspended, not solved, by the outbreak of the {{first-world-war|First World War}}.',
    },
    { t: 'h', x: 'Jingo, and the Boer shock' },
    {
      t: 'p',
      x: 'The century closed in a blaze of imperial feeling: music-hall jingoism, Kipling, the Diamond Jubilee of 1897 with colonial troops parading through London. Then came the Boer War (1899–1902). Two small farmer republics held the world\'s greatest empire at bay for three years; Britain needed some 400,000 troops to win, herded Boer civilians into camps where tens of thousands died of disease, and was jeered across Europe. Worse, recruiting officers found alarming numbers of city volunteers too stunted and sickly to serve. The result was a panic about "national efficiency" — a fear that the imperial race was rotting at its urban core — which fed social reform, compulsory school meals, and much anxious talk about decline.',
    },
    {
      t: 'reading',
      title: 'Did the empire actually pay?',
      blocks: [
        {
          t: 'p',
          x: 'The economics undercut the pageantry. Britain traded and invested more with Europe, the United States, and Latin America than with most of its own colonies; the empire took perhaps a quarter to a third of exports, no more. Defence was startlingly cheap — the Navy cost a small share of national income, and the Indian Army was paid for by Indian taxpayers. Some individuals and firms grew rich on empire; whether the average English family gained anything from it is genuinely doubtful, and some historians argue the colonies cost more than they returned.',
        },
        {
          t: 'p',
          x: 'This is where the historiographical battle sits. Bernard Porter called the Victorians "absent-minded imperialists" — empire mattered intensely to a governing few and only fitfully to everyone else. Against this, historians influenced by postcolonial studies reply that empire saturated everything: sugar in the tea, cotton in the mills, race-thinking in the schoolbooks, and profits (including the earlier profits of slavery) deep in the country\'s capital. Tombs stands closer to Porter. The debate is live, and it is really a debate about what "mattering" means.',
        },
      ],
    },
    {
      t: 'timeline',
      title: 'The imperial century',
      events: [
        { year: '1845', label: 'The {{irish-famine|Irish Famine}} begins', detail: 'Potato blight meets doctrinaire government. Roughly a million die; emigration remakes Ireland and the Irish diaspora.' },
        { year: '1857', label: '{{indian-rebellion|Indian Rebellion}}', detail: 'Sepoy revolt shakes British India; savage repression follows. The Crown takes over from the {{east-india-company|East India Company}}.' },
        { year: '1876', label: 'Victoria becomes Empress of India', detail: '{{disraeli|Disraeli}}\'s theatrical gift to the Queen — imperial ceremony covering a thin administrative machine.' },
        { year: '1882', label: 'Britain occupies Egypt', detail: 'A "temporary" intervention to secure the Suez route; it lasts seventy years and helps trigger the scramble for Africa.' },
        { year: '1885', label: 'Gordon dies at Khartoum', detail: 'The relief force arrives two days late. The press makes a martyr; {{gladstone|Gladstone}} gets the blame.' },
        { year: '1886', label: 'First {{irish-home-rule|Home Rule}} bill', detail: 'Gladstone converts to Irish self-government and splits the Liberal party for a generation.' },
        { year: '1897', label: 'Diamond Jubilee', detail: 'The high noon of imperial pageantry — and, in Kipling\'s "Recessional", a warning that it would pass.' },
        { year: '1899', label: 'Boer War begins', detail: 'Three years, 400,000 troops, camps, and international disgrace to beat two farmer republics. The "national efficiency" panic follows.' },
        { year: '1914', label: 'Home Rule passed — and suspended', detail: 'Ulster arms to resist; Europe\'s war postpones Ireland\'s. It will resume in 1916.' },
      ],
    },
    { t: 'h', x: 'A power in spite of itself' },
    {
      t: 'p',
      x: 'What emerges from Tombs\' account is an empire run half-heartedly: no colonial conscription, no imperial tariff wall until the 1930s, no master plan — and a public that cheered the shows, mourned the heroes, and declined to pay for much. "English" quietly did duty for "British" at the empire\'s height, a habit of speech with a long afterlife ({{britishness|Britishness}}). The real test of the whole structure was coming from Europe, the continent England had never stopped watching. In August 1914 it arrived.',
    },
  ],
}

export default chapter
