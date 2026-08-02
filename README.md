# The English — an interactive study companion

An original, interactive study companion to Robert Tombs' *The English and
Their History* (2014). **This is not the book and contains none of its text** —
every chapter summary, explanation, and quiz question was written for this
project. It is meant to be read alongside your own copy.

**Read it here:** the built app is served from `docs/` via GitHub Pages.

## What it does

- 29 companion units mirroring the book's structure — original summaries of
  each chapter's story and argument, for a curious first-year reader
- Paradox-style nested tooltips over a 143-entry concept dictionary
  (hover to open, hold still to pin, drill five levels deep; tap on touch)
- 116 self-test questions with a spaced-repetition review deck
- Full-text search (⌘K), reading progress, concept collection
- Interactive widgets: Heptarchy→Danelaw map, Hastings battle diagram,
  Wars of the Roses dynastic tree, Reformation pendulum, franchise expansion,
  Corn Law bread prices, declinism data explorer, and more
- Light "manuscript" and dark "candlelight" themes
- "Chapter at a glance" mind-map boards on every chapter
- "Ask the Companion" tutor: finds relevant passages anywhere; on this
  public site, readers can add their own Anthropic API key (stored only in
  their browser, sent only to Anthropic) for a live AI tutor grounded in the
  companion's own content — never the book's text

The handful of quoted primary sources (Bede, the Anglo-Saxon Chronicle,
Magna Carta, Charles I, Nelson, Wilfred Owen) are public-domain, brief,
and attributed.

## Run from source

```
cd companion
npm install
npm run dev
```

React + TypeScript + Vite + Tailwind. `docs/index.html` is the entire app
inlined into one self-contained file (no external requests).

Progress, quiz scores, and theme preference are stored in the reader's own
browser (localStorage); nothing is sent anywhere.
