# Mind map spec — "chapter at a glance" boards

You are writing mind-map data files for chapters of the study companion in
this repo. Read this spec, then `src/types.ts` (the `MindMap` interface), then
`src/content/mindmaps/ch03.ts` (the model — match its density and voice), then
for each assigned chapter: read `src/content/chapters/<id>.ts`, read the stub
`src/content/mindmaps/<id>.ts`, and overwrite the stub with the authored map.

## Rules

- **Original wording only.** Synthesize the chapter file's own content; never
  copy sentences from it or any outside source. Everything on the board must
  be supported by that chapter's text — no new facts.
- Structure per map: **3–5 sections** (mirroring the chapter's arc, often its
  `h` headings), each with **3–6 cells**; **5–8 keys** ("links to remember",
  ordered — the chapter's argument in miniature, usually ending with the
  hinge/crisis); **one `chain`** line (a → arrow chain of cause and effect,
  or a single memorable closing line).
- Cell: `h` ≤ 5 words; `x` ≤ 22 words, telegraphic but grammatical; optional
  `cue` on roughly a third of cells — a short, vivid retrieval hook, not a
  repetition.
- Interludes (int1–int5, intro, conclusion): sections become the essay's
  moves (e.g. "The myth", "Who built it", "What it did", "The correction").
- `{{concept-id|text}}` markers work everywhere; use ONLY ids that appear in
  that chapter's own file (grep it). 6–15 links per map, on first natural
  appearance. Never invent an id.
- Include Tombs' interpretive claim as one key (h: "Tombs' argument").
- Valid TypeScript matching the model file exactly: `const map: MindMap = {…}`
  then `export default map`. Escape apostrophes. Keep the header comment
  "// Original synthesis of this companion's <id> content."
- Verify when done: `npx tsc --noEmit -p tsconfig.app.json` from the
  `companion` dir (ignore errors outside your files).

Final message: one line per file — path + section/cell/key counts.
