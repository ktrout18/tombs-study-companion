import type { MindMap } from '../../types'

// Original synthesis of this companion's ch06 content.
const map: MindMap = {
  intro:
    'The Stuart century, 1603–1689: the one English revolution — regicide, a short-lived republic, then a quieter coup that set the constitution.',
  sections: [
    {
      title: 'The fuse burns',
      cells: [
        {
          h: 'The wisest fool',
          x: 'James I writes books on divine right but keeps the peace; the {{gunpowder-plot|Gunpowder Plot}} (1605) ends mainly in bonfires.',
          cue: '5 November burns {{anti-popery|anti-popery}} into the calendar.',
        },
        {
          h: 'Theory without caution',
          x: '{{charles-i|Charles I}} — rigid, shifty, ceremonial — looks like Rome to his {{puritans|Puritan}} subjects; rules eleven years without Parliament on Ship Money.',
        },
        {
          h: 'Scotland lights the match',
          x: '1637: a forced prayer book raises a Covenanter army; beaten and broke, Charles must recall Parliament in 1640.',
        },
        {
          h: 'Ireland poisons the crisis',
          x: 'The 1641 Catholic rising means someone must have an army — and neither king nor Parliament dares trust the other with it.',
          cue: 'Five members flee; by summer 1642, war.',
        },
      ],
    },
    {
      title: 'War, regicide, republic',
      cells: [
        {
          h: 'The New Model',
          x: 'Parliament holds London, navy, and the rich south-east; its merit-promoted, godly army wins at Naseby (1645). Enter {{oliver-cromwell|Cromwell}}.',
        },
        {
          h: 'The scaffold, 1649',
          x: 'A purged Parliament tries the king; he dies outside his own Banqueting House with a dignity that starts his rehabilitation.',
          cue: 'Two Englands on one scaffold; one walks away.',
        },
        {
          h: 'Ideas off the leash',
          x: 'The {{levellers|Levellers}} demand near-universal male suffrage; Diggers, Ranters, and Quakers go further; Cromwell faces them all down.',
        },
        {
          h: 'Ireland scarred',
          x: 'Drogheda, Wexford, mass dispossession of Catholic landowners — a wound Tombs refuses to soften, and one that never healed.',
        },
        {
          h: 'The republic fails',
          x: 'A king in all but name; resting on the sword alone, the {{commonwealth|Commonwealth}} collapses within two years of Cromwell\'s death (1658).',
        },
      ],
    },
    {
      title: 'Restoration and the old fear',
      cells: [
        {
          h: '1660: bells and bonfires',
          x: '{{charles-ii|Charles II}} returns — king, church, and (pointedly) Parliament all {{restoration|restored}} — vowing never to travel again.',
        },
        {
          h: 'Plague, then fire',
          x: 'The reign rides out 1665\'s plague and the Great Fire of 1666 — twin disasters that do not shake the throne.',
        },
        {
          h: 'Exclusion births the parties',
          x: 'A Catholic heir revives the fear; the fight to bar him (1679–81) names the {{whigs-tories|Whigs and Tories}} — both insults at first.',
          cue: 'Two centuries of party duel start here.',
        },
        {
          h: 'James wrecks himself',
          x: '{{james-ii|James II}}: Catholic officers, purged benches, bishops on trial — then a son (June 1688) promises a Catholic line forever.',
        },
      ],
    },
    {
      title: '1688 and the settlement',
      cells: [
        {
          h: 'Orange lands',
          x: 'Seven notables invite {{william-iii|William}}; he lands at Torbay, James\'s support melts, and the Great Seal goes into the Thames.',
        },
        {
          h: 'Bill of Rights, 1689',
          x: 'No suspending laws, no peacetime army, no tax without Parliament; Protestants only — and revenue too short to rule alone.',
          cue: 'A chosen king, on conditions — dressed as no change at all.',
        },
        {
          h: 'Bloodless where?',
          x: 'Only in England. Scotland gets Glencoe; Ireland gets Derry, the Boyne, and the penal laws.',
        },
        {
          h: 'The Dutch price',
          x: 'William came for his war on Louis XIV: a quarter-century of fighting, funded by inventing Bank, debt, and {{fiscal-military-state|fiscal-military state}}.',
        },
      ],
    },
  ],
  keys: [
    { h: 'Religion, not class', x: 'The {{civil-war|Civil War}} was the last and worst war of religion — faith, not class, sorted the sides.' },
    { h: 'The cost', x: 'A larger share of the islands\' people died than in the First World War.' },
    { h: 'The republic', x: 'England\'s one experiment without a king never won legitimacy beyond the sword.' },
    { h: 'Parties', x: 'The exclusion crisis invents Whig and Tory — the frame of politics for two centuries.' },
    { h: '1688', x: 'The {{glorious-revolution|Glorious Revolution}}: a conditional crown, a near-constitution, and a Dutch war bill.' },
    { h: 'Tombs\' argument', x: 'The 1640s inoculated the English against utopian zeal — their famous moderation was a scar, not a temperament.' },
  ],
  chain:
    'Half-reformed church → fear of popery → civil war → regicide → failed republic → restoration → 1688 → a nation that distrusts zeal.',
}

export default map
