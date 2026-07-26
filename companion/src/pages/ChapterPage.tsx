import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CHAPTERS } from '../content/chapters'
import { PARTS } from '../content/structure'
import { Blocks } from '../components/Blocks'
import { renderRich } from '../engine/rich'
import { markRead, setLastChapter } from '../engine/store'
import { EraScrubber } from '../components/EraScrubber'
import { ChapterQuiz } from '../components/ChapterQuiz'
import { MindMapBoard } from '../components/MindMapBoard'
import { clearPendingHighlight, getPendingHighlight } from '../components/SearchPalette'

export function ChapterPage() {
  const { id } = useParams()
  const idx = CHAPTERS.findIndex((c) => c.id === id)
  const chapter = CHAPTERS[idx]

  useEffect(() => {
    window.scrollTo(0, 0)
    if (id) setLastChapter(id)
  }, [id])

  // After a search jump, scroll to and flash the first match.
  useEffect(() => {
    if (!getPendingHighlight()) return
    const t = window.setTimeout(() => {
      const phrase = getPendingHighlight()
      if (!phrase) return
      clearPendingHighlight()
      const article = document.querySelector('article')
      if (!article) return
      const walker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT)
      const needle = phrase.toLowerCase()
      let node: Node | null
      while ((node = walker.nextNode())) {
        const text = node.textContent ?? ''
        const at = text.toLowerCase().indexOf(needle)
        if (at >= 0) {
          try {
            const range = document.createRange()
            range.setStart(node, at)
            range.setEnd(node, at + phrase.length)
            const mark = document.createElement('mark')
            mark.className = 'search-flash'
            range.surroundContents(mark)
            mark.scrollIntoView({ block: 'center' })
            window.setTimeout(() => {
              const parent = mark.parentNode
              if (parent) {
                parent.replaceChild(document.createTextNode(mark.textContent ?? ''), mark)
                parent.normalize()
              }
            }, 2600)
          } catch {
            ;(node.parentElement ?? article).scrollIntoView({ block: 'center' })
          }
          return
        }
      }
    }, 80)
    return () => window.clearTimeout(t)
  }, [id])

  // Reaching the end-of-chapter nav marks the chapter read.
  const endRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = endRef.current
    if (!el || !id) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          markRead(id)
          obs.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [id])

  if (!chapter) {
    return (
      <div className="px-8 py-16 text-center text-(--color-ink-soft)">
        Chapter not found. <Link className="underline" to="/">Back to start</Link>
      </div>
    )
  }

  const part = PARTS.find((p) => p.n === chapter.part)
  const prev = CHAPTERS[idx - 1]
  const next = CHAPTERS[idx + 1]

  return (
    <article key={chapter.id} className="page-in mx-auto max-w-[720px] px-6 sm:px-10 py-10 lg:py-14">
      <EraScrubber chapter={chapter} />
      <header className="mb-8">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-(--color-ink-faint)">
            {part && chapter.part >= 1 && chapter.part <= 7
              ? `Part ${['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'][chapter.part - 1]} — ${part.title}`
              : (part?.title ?? '')}
          </div>
          <div className="text-[11px] font-bold tracking-[0.08em] text-(--color-gilt) tabular-nums">
            {chapter.era}
          </div>
        </div>
        <h1 className="font-serif text-[34px] sm:text-[40px] font-bold leading-tight mt-2 text-(--color-oxblood-deep)">
          {chapter.number !== undefined && (
            <span className="text-(--color-gilt) mr-3">{chapter.number}.</span>
          )}
          {chapter.title}
        </h1>
        {chapter.subtitle && (
          <div className="font-serif italic text-[19px] text-(--color-ink-soft) mt-1">{chapter.subtitle}</div>
        )}
        <p className="prose-body mt-5 text-[1.02rem] text-(--color-ink-soft) border-y border-(--color-ink)/10 py-4">
          {renderRich(chapter.blurb)}
        </p>
      </header>

      <Blocks blocks={chapter.blocks} />

      <MindMapBoard chapterId={chapter.id} />

      <ChapterQuiz chapterId={chapter.id} />

      <nav ref={endRef} className="mt-14 pt-6 border-t border-(--color-ink)/12 flex justify-between gap-4 text-[14px]">
        {prev ? (
          <Link to={`/c/${prev.id}`} className="group max-w-[45%]">
            <div className="text-[10.5px] uppercase tracking-[0.14em] text-(--color-ink-faint)">← Previous</div>
            <div className="font-serif text-(--color-oxblood) group-hover:underline mt-0.5">{prev.title}</div>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/c/${next.id}`} className="group max-w-[45%] text-right">
            <div className="text-[10.5px] uppercase tracking-[0.14em] text-(--color-ink-faint)">Next →</div>
            <div className="font-serif text-(--color-oxblood) group-hover:underline mt-0.5">{next.title}</div>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  )
}
