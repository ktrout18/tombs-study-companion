# Interactive study companion — COMPLETE (v2: learning features)

## v2 additions (all shipped, reviewed, republished)
- Progress & collection: chapters auto-marked read, per-part progress bars,
  resume banner, concepts "discovered" on tooltip open (✦ n/143 counter)
- 116-question chapter quizzes with instant feedback + spaced review deck
  (missed questions return on doubling intervals; 4 straight wins retires one)
- ⌘K search across all chapters and concepts, with jump-and-flash highlight
- Era scrubber (600–2014 timeline) on every chapter; click to jump between parts
- Timeline ordering game ("Shuffle & test yourself") on every chapter timeline
- Candlelight dark theme (auto/light/dark toggle, no flash on load)
- Manuscript flourishes: drop caps, tooltip category glyphs, page transitions
- "A voice from the time" boxes: six short public-domain primary sources
- The Three Threads page tracing Tombs' master claims across the book
- Two new widgets: Hastings battle diagram (ch2), Corn Law bread-price explorer (ch12)
- Hostile re-review: 0 critical; both majors (dark-theme SVG contrast,
  search-highlight StrictMode bug) fixed and re-verified live
- Artifact republished to the same URL (phone link unchanged)

**Project**: An original interactive study companion to Robert Tombs, *The
English and Their History* (all prose written for this app; no text reproduced
from the book). React + TypeScript + Tailwind + Vite, in `companion/`.

## Delivered
- 29 companion units mirroring the book: Introduction, Prelude, chapters 1–21,
  five historiographical interludes, Conclusion (~31,000 words, all original)
- Concept dictionary: 143 cross-linked tooltip entries (the knowledge graph),
  browsable at the Concept Library page
- Paradox-style nested tooltips: 300ms open delay, hold-still-to-pin with gold
  progress bar, nesting to 5 levels, adjacent child placement, ~250ms grace
  close, Esc closes the chain, circular-reference guard, tap-to-open on touch
- Interactive widgets: Heptarchy→Danelaw→England map (time slider), feudal
  pyramid, Wars of the Roses dynastic tree, Reformation pendulum, franchise
  expansion, declinism explorer, plus expandable timelines and SVG charts
- 509 concept links across chapters, 100% validated against the dictionary

## Quality gate
- `npm run build` and strict type-check pass
- Hostile-review agent (fresh context) attacked the app: 0 critical findings;
  both major findings (child-tooltip overlap at narrow widths; in-tooltip
  scroll closing the chain) fixed and re-verified live; factual nits in
  ch15/ch20 corrected; ch09 gained its missing "Go deeper" panel
- Known accepted trade-offs: single ~550KB JS bundle (local app, not split);
  three interludes are deliberately essay-only (no timeline/widgets)

## Run it
```
cd companion && npm run dev
```
(then open the printed localhost URL; routes are hash-based, e.g. /#/c/ch01)
