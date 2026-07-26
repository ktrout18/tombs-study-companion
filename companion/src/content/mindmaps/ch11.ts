import type { MindMap } from '../../types'

// Original synthesis of this companion's ch11 content.
const map: MindMap = {
  intro:
    '1789–1815: twenty-two years of war with revolutionary France — fought over what the world should be, and paid for on credit.',
  sections: [
    {
      title: 'The argument before the armies',
      cells: [
        {
          h: 'Cheering the Bastille',
          x: '1789: many English applaud — France seems to be catching up with 1688. Fox calls it history\'s best event.',
        },
        {
          h: 'Burke\'s prophecy',
          x: '*Reflections* (1790) predicts terror and a military dictator while the Revolution is still moderate.',
          cue: 'Right about the Terror, right about the general.',
        },
        {
          h: 'Paine\'s answer',
          x: '*Rights of Man* (1791): the dead cannot rule the living; hereditary government is absurd. It outsells Burke many times over.',
        },
        {
          h: 'The lasting frame',
          x: 'Inheritance versus rational blueprint — the axis of English conservatism and radicalism ever since.',
        },
      ],
    },
    {
      title: 'Repression that misfired',
      cells: [
        {
          h: 'Pitt cracks down',
          x: 'Habeas corpus suspended, meetings banned, spies planted, workers\' associations outlawed (1799–1800).',
        },
        {
          h: 'Juries refuse',
          x: '1794 treason trials collapse: London jurors acquit Hardy and Horne Tooke.',
          cue: 'No hangings for holding meetings.',
        },
        {
          h: 'Contrast with France',
          x: 'England\'s counter-revolution works through courts it cannot control — and mostly fails to convict.',
        },
      ],
    },
    {
      title: 'The nation in arms',
      cells: [
        {
          h: 'Invasion scare',
          x: 'Napoleon masses at Boulogne (1798, 1803–05); England expects landings.',
        },
        {
          h: 'Volunteers pour in',
          x: 'Perhaps one man in five of military age drills for home defence — many despising their own government.',
          cue: 'No wish to be liberated by France.',
        },
        {
          h: 'Popular patriotism',
          x: 'Loyalist songs, "Boney" caricatures, the cult of the {{royal-navy|Navy}}: the first war of mass national feeling.',
        },
        {
          h: 'Trafalgar, 1805',
          x: 'Nelson destroys the Franco-Spanish fleets at {{trafalgar|Trafalgar}} and dies doing it; invasion becomes impossible.',
        },
        {
          h: 'Grinding Napoleon down',
          x: 'The Continental System hurts Europe more than England; {{wellington|Wellington}} bleeds France in Spain; Russia finishes the army.',
        },
        {
          h: 'Waterloo, 1815',
          x: 'The nearest-run thing {{waterloo|Wellington}} ever saw ends the adventure.',
        },
      ],
    },
    {
      title: 'Credit against conquest',
      cells: [
        {
          h: 'Outspending everyone',
          x: 'The {{fiscal-military-state|fiscal-military state}} of 1688 shows its full power.',
        },
        {
          h: 'Debt beyond income',
          x: '{{national-debt|Debt}} tops twice national income, yet the {{bank-of-england|Bank}} lends on — Parliament\'s promises are believed.',
          cue: 'Trust is the secret weapon.',
        },
        {
          h: 'Income tax, 1798',
          x: 'Pitt\'s ten per cent on large incomes — a "temporary" wartime expedient.',
        },
        {
          h: 'Hiring Europe',
          x: 'Subsidies keep allied armies fighting: Napoleon holds more land, London more credit. Credit wins.',
        },
      ],
    },
  ],
  keys: [
    { h: 'War of dreams', x: 'Both sides fight for a vision of the future, not a province.' },
    { h: 'Burke v. Paine', x: 'Inherited experience against abstract blueprint — the debate that outlived the war.' },
    { h: 'Restraint at home', x: 'Repression was real but juries would not convict; no English Terror.' },
    { h: 'Sea power', x: '{{trafalgar|Trafalgar}} closes the Channel and opens a century of naval supremacy.' },
    { h: 'Credit wins', x: 'The {{fiscal-military-state|fiscal-military state}}, the income tax, and believed promises outlast conquest.' },
    { h: 'Tombs\' argument', x: 'Victory fixed the self-image: pragmatic, free, counter-revolutionary England, exempt from continental follies — with {{pax-britannica|Pax Britannica}} ahead.' },
    { h: 'Hinge', x: 'The fireworks of 1815 light a hungry country: peace opens with distress.' },
  ],
  chain:
    'Revolution in France → pamphlet war → world war → Trafalgar seals the sea → credit hires Europe → Waterloo → a self-image of exemption, and a hungry peace.',
}

export default map
