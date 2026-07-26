import type { Chapter } from '../../types'

const chapter: Chapter = {
  id: 'ch06',
  part: 3,
  number: '6',
  title: "Revolution",
  era: "1603–1689",
  blurb:
    'The Stuart century: England\'s only revolution, a king beheaded, a republic tried and abandoned, and a second, quieter coup in 1688 that fixed the shape of English government. Tombs reads the {{civil-war|Civil War}} not as a class struggle but as the last and worst of Europe\'s wars of religion — fought, uniquely, inside one country.',
  blocks: [
    {
      t: 'p',
      x: 'The Tudors left a time bomb: a half-reformed church, a crown dependent on Parliament for money, and a nation that read {{foxes-martyrs|Foxe}} and feared popery above all else. Over four Stuart reigns it detonated. This chapter runs from the union of the crowns to the {{glorious-revolution|Glorious Revolution}} — the most violent stretch of English history since the Conquest, and the source, Tombs argues, of a lasting English distrust of zeal.',
    },
    { t: 'h', x: 'The wisest fool and his stubborn son' },
    {
      t: 'p',
      x: 'James VI of Scotland became James I of England in 1603, a learned, unkempt king who wrote books defending the {{divine-right|divine right}} of kings. He was cautious and kept the peace; even the {{gunpowder-plot|Gunpowder Plot}} of 1605 — a Catholic scheme to blow up king and Parliament — ended mainly in the annual bonfires that burned {{anti-popery|anti-popery}} into the calendar. His son had the theory without the caution. {{charles-i|Charles I}} was rigid, shifty, and devoted to a ceremonial style of worship his {{puritans|Puritan}} subjects could not tell apart from Rome. After quarrels over taxes and religion he dissolved Parliament in 1629 and ruled without one for eleven years on half-forgotten levies like Ship Money.',
    },
    {
      t: 'p',
      x: 'The personal rule died in Scotland. In 1637 Charles forced an English-style prayer book on the Presbyterian Scots; they signed a National Covenant and raised an army. Beaten and bankrupt, Charles had to call the English Parliament in 1640, which dismantled his machinery of rule. A Catholic rising in Ireland in 1641 poisoned the crisis: both king and Parliament needed an army, and neither dared let the other have it. In January 1642 Charles marched into the Commons to arrest five members and found the birds flown; by summer England was at war with itself.',
    },
    {
      t: 'argument',
      x: 'Tombs rejects readings of the {{civil-war|Civil War}} as bourgeois revolution or constitutional inevitability. It was a war of religion — the last and worst of the wars set off by the Reformation, between {{puritans|Puritans}} who thought the Reformation in mortal danger and men who rallied to church and king. Gentry, merchants, and counties split down the middle; religion did the sorting. And it was catastrophic: proportionally, the fighting and its diseases killed a larger share of the population of these islands than the First World War.',
    },
    { t: 'h', x: 'War, regicide, republic' },
    {
      t: 'p',
      x: 'Parliament held London, the navy, and the richer south-east, and built the best army England had seen, the New Model: professional, promoted on merit, ablaze with godly conviction. Its rising star was a Huntingdonshire squire, {{oliver-cromwell|Oliver Cromwell}}. Defeat at Naseby (1645) ended the first war; Charles\'s intrigues restarted it and exhausted the army\'s patience. A purged Parliament tried the king for treason against his own people, and on 30 January 1649 he was beheaded outside his own Banqueting House, dying with a dignity that began his rehabilitation. England became a {{commonwealth|Commonwealth}} — a republic — for the only time in its history.',
    },
    {
      t: 'p',
      x: 'The war unleashed ideas as well as armies. The {{levellers|Levellers}} demanded something close to manhood suffrage — "the poorest he that is in England hath a life to live, as the greatest he" — and were faced down by Cromwell; Diggers, Ranters, and Quakers pushed further still. Cromwell conquered Ireland with a brutality Tombs does not soften — the massacres at Drogheda and Wexford, mass dispossession of Catholic landowners — leaving a scar that never healed. At home the Lord Protector was a king in all but name; when he died in 1658 the republic, never legitimate beyond the sword, collapsed within two years.',
    },
    {
      t: 'voice',
      source: 'Charles I on the scaffold, 30 January 1649',
      x: 'The king went to the block insisting to the end that the people\'s liberty lay in having a government, "not in having share in government: that is nothing pertaining to them" — "a sovereign and a subject are clean different things". Two irreconcilable Englands stood on that scaffold; only one walked away.',
    },
    { t: 'h', x: 'Restoration and the return of the fear' },
    {
      t: 'p',
      x: 'In 1660 {{charles-ii|Charles II}} came home to bells and bonfires — the {{restoration|Restoration}} of king, church, and, pointedly, Parliament. Charles was determined, as he said, never to go on his travels again. His reign survived the plague of 1665 and the {{great-fire|Great Fire}} of 1666. Then the old fear returned: the heir, Charles\'s brother James, was a Catholic. The crisis over excluding him from the throne (1679–81) created the first parties — exclusionists were called Whigs, the king\'s defenders Tories, both names originally insults — and began the {{whigs-tories|Whig and Tory}} duel that structured English politics for two centuries.',
    },
    {
      t: 'p',
      x: '{{james-ii|James II}} succeeded peacefully in 1685, then wrecked himself in three years: Catholic officers in a standing army, purges of universities and county benches, bishops tried for petitioning against his policies. The nation waited for his Protestant daughter Mary to inherit — until June 1688, when the queen bore a son and made a Catholic dynasty likely forever. Seven notables invited Mary\'s husband, the Dutch stadtholder {{william-iii|William of Orange}}, to intervene. He landed at Torbay with a large army; James\'s support dissolved, and he fled to France, dropping the Great Seal in the Thames.',
    },
    {
      t: 'timeline',
      title: 'The Stuart century',
      events: [
        { year: '1603', label: 'James I unites the crowns', detail: 'The Scottish king inherits England; one monarch, still two kingdoms and two churches.' },
        { year: '1605', label: '{{gunpowder-plot|Gunpowder Plot}}', detail: 'A Catholic plot to blow up king and Parliament fails; 5 November feeds {{anti-popery|anti-popery}} for centuries.' },
        { year: '1637', label: 'Prayer-book riot in Edinburgh', detail: '{{charles-i|Charles}}\'s liturgy for Scotland ignites the Covenanter revolt that ends his personal rule.' },
        { year: '1642', label: '{{civil-war|Civil War}} begins', detail: 'Charles raises his standard at Nottingham; the country splits, mostly along religious lines.' },
        { year: '1649', label: 'Charles I executed', detail: 'Tried by a purged Parliament; England becomes a republic — the {{commonwealth|Commonwealth}}.' },
        { year: '1653', label: '{{oliver-cromwell|Cromwell}} becomes Lord Protector', detail: 'Rule by a godly soldier who twice dismissed his own parliaments.' },
        { year: '1660', label: '{{restoration|Restoration}} of {{charles-ii|Charles II}}', detail: 'Monarchy and church return; the regicides, dead and alive, are punished.' },
        { year: '1666', label: '{{great-fire|Great Fire}} of London', detail: 'A year after the plague, most of the old City burns in four days.' },
        { year: '1688–89', label: '{{glorious-revolution|Glorious Revolution}}', detail: '{{william-iii|William of Orange}} lands, {{james-ii|James II}} flees; the Bill of Rights sets the terms of the new monarchy.' },
      ],
    },
    { t: 'h', x: '1688: glorious for whom?' },
    {
      t: 'p',
      x: 'The settlement of 1689 gave England its nearest thing to a written constitution. The Bill of Rights barred the crown from suspending laws, keeping a peacetime army, or taxing without Parliament; only Protestants could succeed; and William\'s revenue was too short to rule without annual parliaments. England had chosen its king and set conditions — while insisting nothing revolutionary had happened at all.',
    },
    {
      t: 'reading',
      title: 'How bloodless was the Bloodless Revolution?',
      blocks: [
        {
          t: 'p',
          x: 'Tombs presses two corrections to the cosy legend. First, 1688 was bloodless only in England. Scotland got war and the Glencoe massacre; Ireland got a full-scale conflict — the siege of Derry, the battle of the Boyne — and then the penal laws against Catholics.',
        },
        {
          t: 'p',
          x: 'Second, William did not cross the sea to bless English liberties. He came to pull England into his life\'s work, the coalition against Louis XIV\'s France. The price of the revolution was a quarter-century of European war — paid for by inventing the {{bank-of-england|Bank of England}}, the {{national-debt|national debt}}, and the {{fiscal-military-state|fiscal-military state}}. That bargain is the next chapter\'s story.',
        },
      ],
    },
    {
      t: 'argument',
      title: 'The lesson the English drew',
      x: 'England\'s only revolution came from religious passion, not class conflict — and it traumatized the nation that made it. Tombs argues the memory of the 1640s inoculated the English against utopian politics: having pursued the rule of the saints and got the rule of the sword, they settled for compromise and precedent, and learned to distrust anyone offering heaven on earth. The moderation later celebrated as an English virtue was less a temperament than a scar.',
    },
  ],
}

export default chapter
