# Content spec — chapter files for the Tombs study companion

You are writing ONE OR MORE chapter files for an interactive study companion to
Robert Tombs, *The English and Their History* (2014). Read this whole spec, then
read `src/content/chapters/ch01.ts` as the model of tone and structure, then
write your assigned files.

## The one absolute rule

**Original prose only.** This companion contains NO text from Tombs' book and no
sentences copied from any other source. You write your own summary of the
period and of Tombs' argument, from general historical knowledge, for a curious
first-year university reader. Do not quote the book, even one sentence. Short
famous historical quotations that are common knowledge (a king's recorded
remark, a slogan) are fine when attributed. When you state Tombs' view, do it
in your own words ("Tombs argues that…").

## File mechanics

- Each chapter lives at `src/content/chapters/<id>.ts` as a stub. **Read the
  stub first** (the Write tool requires it), then overwrite it completely.
- Keep the stub's `id`, `part`, `number`, `title`, `subtitle`, `era` EXACTLY as
  they are. Replace only `blurb` and `blocks`.
- Valid TypeScript. Follow the model file's quoting style. Escape apostrophes
  correctly.
- When done, verify with:
  `cd companion && npx tsc --noEmit -p tsconfig.app.json` (run from the repo
  root; ignore errors in files that are not yours).

## Block types (see src/types.ts)

- `{ t: 'p', x: '…' }` — paragraph.
- `{ t: 'h', x: '…' }` — section heading (3–5 per chapter). Short, lively.
- `{ t: 'argument', title?: '…', x: '…' }` — a boxed statement of Tombs'
  interpretive claim. Default title is "Tombs' argument". 1–2 per chapter.
- `{ t: 'reading', title: '…', blocks: [...] }` — collapsible "Go deeper"
  panel: extra context, a historiographical debate, a mechanism explained.
  1–2 per chapter, each 1–3 paragraphs.
- `{ t: 'timeline', title: '…', events: [{ year, label, detail? }] }` — 5–9
  events. `label` short; `detail` 1–2 sentences. Both support inline markup.
  Every narrative chapter should have one; interludes usually not.
- `{ t: 'chart', ... }` — optional; only if you have solid approximate data
  (line/bar; see types.ts). Add a `note` stating figures are approximate.
- `{ t: 'widget', id: '…' }` — ONLY where the assignment tells you to.

## Inline markup (in `x`, `blurb`, `label`, `detail`)

- `{{concept-id|display text}}` — tooltip link. Use ONLY ids from the list
  below. 8–20 per chapter, spread naturally; link a concept the first time it
  meaningfully appears, not every time. Wrong/unknown ids render as dead text —
  never invent an id.
- `**bold**`, `*italic*` supported. No other markdown, no HTML, no headings
  inside paragraphs.

## Voice

- English plain style: short words, active voice, concrete detail. Orwell's
  rules. Confident, occasionally wry; never listy or textbook-flat.
- Each chapter: one opening paragraph placing the period in the book's arc,
  then narrative sections, then (usually) end on the hinge to the next chapter.
- Word budget: numbered chapters 600–1,000 words of prose total; interludes
  400–650. Interludes are about MEMORY and historiography (how the era was
  later retold and used), not narrative.
- Facts must be right. Prefer fewer, correct details over many shaky ones.
  Round numbers; say "roughly". If unsure of a fact, leave it out.

## Valid concept ids (use these and no others)

roman-britain, anglo-saxon-settlement, anglo-saxon-england, heptarchy,
northumbria, mercia, wessex, bede, synod-of-whitby, viking-invasions, danelaw,
alfred-the-great, wessex-alfred, athelstan, witan, shire, danegeld, cnut,
edward-confessor, norman-conquest, william-conqueror, domesday, feudalism,
norman-yoke, common-law, jury-trial, henry-ii, thomas-becket, king-john,
magna-carta, parliament, house-of-commons, hundred-years-war, edward-iii,
black-death, peasants-revolt, lollards, agincourt, henry-v, wars-of-roses,
reformation-england, henry-viii, edward-vi, mary-i, thomas-cranmer,
book-of-common-prayer, dissolution-monasteries, church-of-england,
protestantism, catholicism, anti-popery, foxes-martyrs, elizabeth-i,
spanish-armada, puritans, gunpowder-plot, divine-right, charles-i, civil-war,
levellers, oliver-cromwell, commonwealth, restoration, charles-ii, great-fire,
james-ii, glorious-revolution, william-iii, whigs-tories, bank-of-england,
national-debt, fiscal-military-state, act-of-union-1707, jacobites, walpole,
enlightenment, methodism, royal-navy, east-india-company, thirteen-colonies,
american-revolution, atlantic-slavery, abolitionism, industrial-revolution,
french-revolution, napoleonic-wars, trafalgar, wellington, waterloo, london,
pax-britannica, dickensian-england, great-reform-act, second-reform-act,
chartism, corn-laws, free-trade, irish-famine, victorian-values, gladstone,
disraeli, victoria, british-empire, british-raj, indian-rebellion,
irish-home-rule, city-of-london, suffragettes, fourth-reform-act, liberalism,
labour-party, trade-unions, first-world-war, somme, war-poets, general-strike,
appeasement, munich, second-world-war, churchill, gallipoli, dunkirk,
battle-of-britain, blitz, welfare-state, nhs, attlee, postwar-consensus,
suez-crisis, decolonization, windrush, sixties-revolution,
winter-of-discontent, thatcher, falklands-war, miners-strike, european-union,
devolution, blair, declinism, whig-history, macaulay, britishness
