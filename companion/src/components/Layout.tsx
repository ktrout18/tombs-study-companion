import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CHAPTERS } from '../content/chapters'
import { CONCEPTS } from '../content/concepts'
import { QUIZZES } from '../content/quiz'
import { PARTS } from '../content/structure'
import { dueReviewKeys, setTheme, useAppState } from '../engine/store'
import { SearchPalette } from './SearchPalette'
import { AskPanel } from './AskPanel'

const THEME_LABEL = { auto: 'Auto', light: 'Light', dark: 'Dark' } as const

export function Layout({ children }: { children: ReactNode }) {
  const [navOpen, setNavOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const loc = useLocation()
  const app = useAppState()

  // Apply theme preference to the root element. Host pages (the artifact
  // frame) stamp data-theme themselves, so when the reader has an explicit
  // preference we watch the attribute and re-assert it.
  useEffect(() => {
    const root = document.documentElement
    if (app.theme === 'auto') {
      root.removeAttribute('data-theme')
      root.style.colorScheme = ''
      return
    }
    const apply = () => {
      if (root.getAttribute('data-theme') !== app.theme) {
        root.setAttribute('data-theme', app.theme)
      }
      root.style.colorScheme = app.theme
    }
    apply()
    const mo = new MutationObserver(apply)
    mo.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    return () => mo.disconnect()
  }, [app.theme])

  // Global ⌘K / Ctrl-K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen((s) => !s)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const totalConcepts = Object.keys(CONCEPTS).length
  // Count only deck keys that still map to a real question, so the badge
  // matches what the review page will actually show.
  const due = dueReviewKeys().filter((k) => {
    const [ch, qi] = k.split(':')
    return QUIZZES[ch]?.[Number(qi)] !== undefined
  }).length

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 z-40 h-screen w-[300px] shrink-0 border-r border-(--color-ink)/10 bg-(--color-paper-deep)
          transition-transform lg:translate-x-0 ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-full flex flex-col">
          <Link to="/" className="block px-6 pt-6 pb-4 border-b border-(--color-ink)/10" onClick={() => setNavOpen(false)}>
            <div className="text-[10.5px] uppercase tracking-[0.18em] text-(--color-ink-faint)">
              A study companion to Robert Tombs'
            </div>
            <div className="font-serif text-[21px] font-bold leading-tight mt-1 text-(--color-oxblood-deep)">
              The English and Their History
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="mx-3 mt-3 mb-1 flex items-center gap-2 rounded-md border border-(--color-ink)/15 bg-(--color-card) px-3 py-2 text-[12.5px] text-(--color-ink-faint) hover:border-(--color-oxblood)/50 cursor-pointer"
          >
            <span>⌕</span> Search… <span className="ml-auto text-[10.5px]">⌘K</span>
          </button>

          <nav className="sidebar-scroll flex-1 overflow-y-auto px-3 py-2">
            {PARTS.map((part) => {
              const chapters = CHAPTERS.filter((c) => c.part === part.n)
              if (chapters.length === 0) return null
              const readCount = chapters.filter((c) => app.read.includes(c.id)).length
              return (
                <div key={part.n} className="mb-4">
                  <div className="px-3 pb-1 flex items-baseline justify-between">
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-(--color-ink-soft)">
                      {part.n >= 1 && part.n <= 7 ? `Part ${['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'][part.n - 1]} · ` : ''}
                      {part.title}
                    </span>
                    {part.era && <span className="text-[10px] text-(--color-ink-faint)">{part.era}</span>}
                  </div>
                  <div className="mx-3 mb-1.5 h-[3px] rounded bg-(--color-ink)/8 overflow-hidden">
                    <div
                      className="h-full bg-(--color-gilt) transition-all"
                      style={{ width: `${(readCount / chapters.length) * 100}%` }}
                    />
                  </div>
                  <ul>
                    {chapters.map((c) => {
                      const isRead = app.read.includes(c.id)
                      return (
                        <li key={c.id}>
                          <NavLink
                            to={`/c/${c.id}`}
                            onClick={() => setNavOpen(false)}
                            className={({ isActive }) =>
                              `flex items-baseline rounded-md px-3 py-[7px] text-[13.5px] leading-snug transition-colors ${
                                isActive
                                  ? 'bg-(--color-oxblood) text-white'
                                  : 'text-(--color-ink) hover:bg-(--color-ink)/6'
                              } ${c.number === undefined ? 'italic' : ''}`
                            }
                          >
                            {c.number !== undefined && (
                              <span className="inline-block w-6 shrink-0 font-bold tabular-nums opacity-60">{c.number}</span>
                            )}
                            <span className="flex-1">{c.title}</span>
                            {isRead && <span className="ml-1.5 text-[10px] opacity-70">✓</span>}
                          </NavLink>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </nav>

          <div className="border-t border-(--color-ink)/10 px-3 py-2.5 space-y-1">
            <NavLink
              to="/concepts"
              onClick={() => setNavOpen(false)}
              className={({ isActive }) =>
                `flex items-baseline rounded-md px-3 py-1.5 text-[13px] font-semibold transition-colors ${
                  isActive ? 'bg-(--color-navy) text-white' : 'text-(--color-navy) hover:bg-(--color-navy)/10'
                }`
              }
            >
              Concept Library
              <span className="ml-auto text-[11px] font-normal opacity-75 tabular-nums">
                {app.discovered.length}/{totalConcepts}
              </span>
            </NavLink>
            <NavLink
              to="/threads"
              onClick={() => setNavOpen(false)}
              className={({ isActive }) =>
                `flex rounded-md px-3 py-1.5 text-[13px] font-semibold transition-colors ${
                  isActive ? 'bg-(--color-navy) text-white' : 'text-(--color-navy) hover:bg-(--color-navy)/10'
                }`
              }
            >
              The Three Threads
            </NavLink>
            <NavLink
              to="/review"
              onClick={() => setNavOpen(false)}
              className={({ isActive }) =>
                `flex items-baseline rounded-md px-3 py-1.5 text-[13px] font-semibold transition-colors ${
                  isActive ? 'bg-(--color-navy) text-white' : 'text-(--color-navy) hover:bg-(--color-navy)/10'
                }`
              }
            >
              Review deck
              {due > 0 && (
                <span className="ml-auto rounded-full bg-(--color-oxblood) text-white text-[10.5px] px-1.5 py-0.5 tabular-nums">
                  {due}
                </span>
              )}
            </NavLink>
            <button
              type="button"
              onClick={() => {
                const order = ['auto', 'light', 'dark'] as const
                setTheme(order[(order.indexOf(app.theme) + 1) % 3])
              }}
              className="flex w-full rounded-md px-3 py-1.5 text-[12.5px] text-(--color-ink-soft) hover:bg-(--color-ink)/6 cursor-pointer"
            >
              Theme
              <span className="ml-auto font-semibold">{THEME_LABEL[app.theme]}</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile top bar + backdrop */}
      {navOpen && (
        <div className="fixed inset-0 z-30 bg-black/25 lg:hidden" onClick={() => setNavOpen(false)} />
      )}
      <div className="flex-1 min-w-0">
        <div className="lg:hidden sticky top-0 z-20 flex items-center gap-3 bg-(--color-paper)/95 backdrop-blur border-b border-(--color-ink)/10 px-4 py-3">
          <button
            type="button"
            className="rounded-md border border-(--color-ink)/20 px-3 py-1.5 text-[13px] font-semibold"
            onClick={() => setNavOpen(true)}
          >
            ☰ Contents
          </button>
          <button
            type="button"
            className="rounded-md border border-(--color-ink)/20 px-3 py-1.5 text-[13px]"
            onClick={() => setSearchOpen(true)}
          >
            ⌕
          </button>
          <span className="font-serif italic text-[14px] text-(--color-ink-soft) truncate">
            {loc.pathname === '/' ? 'The English and Their History' : ''}
          </span>
        </div>
        <main>{children}</main>
      </div>

      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
      <AskPanel />
    </div>
  )
}
