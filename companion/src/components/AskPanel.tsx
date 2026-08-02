import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  askClaude,
  askCorpus,
  getApiKey,
  getModel,
  liveChatPossible,
  MODELS,
  setApiKey,
  setModel,
  type ChatTurn,
  type TutorAnswer,
} from '../engine/tutor'

interface Entry {
  turn: ChatTurn
  answer?: TutorAnswer
  error?: string
  pending?: boolean
}

const SUGGESTIONS = [
  'Why does Tombs think "declinism" is bad history?',
  'What actually changed in 1066?',
  'How did the Black Death make survivors freer?',
  'Was appeasement cowardice?',
]

/** "Ask the Companion" — floating tutor panel. Retrieval works everywhere;
 *  live Claude chat needs the public site + the reader's own API key. */
export function AskPanel() {
  const [open, setOpen] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [input, setInput] = useState('')
  const [log, setLog] = useState<Entry[]>([])
  const [busy, setBusy] = useState(false)
  const [keyDraft, setKeyDraft] = useState(getApiKey())
  const [modelDraft, setModelDraft] = useState(getModel())
  const logRef = useRef<HTMLDivElement>(null)
  const live = liveChatPossible() && getApiKey().length > 0

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight })
  }, [log])

  const ask = async (question: string) => {
    const q = question.trim()
    if (!q || busy) return
    setInput('')
    const history: ChatTurn[] = [
      ...log.filter((e) => !e.error).flatMap((e) =>
        e.answer?.text
          ? [e.turn, { role: 'assistant' as const, text: e.answer.text }]
          : [e.turn],
      ),
      { role: 'user', text: q },
    ]
    const entry: Entry = { turn: { role: 'user', text: q }, pending: true }
    setLog((l) => [...l, entry])
    if (live) {
      setBusy(true)
      try {
        const answer = await askClaude(history)
        setLog((l) => l.map((e) => (e === entry ? { ...e, answer, pending: false } : e)))
      } catch (err) {
        setLog((l) =>
          l.map((e) =>
            e === entry ? { ...e, error: err instanceof Error ? err.message : 'Request failed.', pending: false } : e,
          ),
        )
      } finally {
        setBusy(false)
      }
    } else {
      const answer = askCorpus(q)
      setLog((l) => l.map((e) => (e === entry ? { ...e, answer, pending: false } : e)))
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[55] rounded-full bg-(--color-oxblood) text-white shadow-lg px-5 py-3 text-[14px] font-semibold hover:opacity-90 cursor-pointer"
        aria-label="Ask the Companion"
      >
        ❧ Ask
      </button>
    )
  }

  return (
    <div className="fixed bottom-0 right-0 sm:bottom-5 sm:right-5 z-[55] w-full sm:w-[420px] sm:max-h-[calc(100vh-40px)] h-[85vh] sm:h-[600px] flex flex-col rounded-t-xl sm:rounded-xl border border-(--color-ink)/20 bg-(--color-paper) shadow-2xl">
      {/* Header */}
      <header className="flex items-center gap-2 px-4 py-3 border-b border-(--color-ink)/10 bg-(--color-paper-deep) rounded-t-xl">
        <span className="text-[13px] font-bold">❧ Ask the Companion</span>
        <span className="text-[10.5px] rounded-full px-2 py-0.5 bg-(--color-ink)/8 text-(--color-ink-soft)">
          {live ? `live · ${MODELS.find((m) => m.id === getModel())?.label.split(' (')[0] ?? getModel()}` : 'passage finder'}
        </span>
        <button
          type="button"
          onClick={() => setShowSettings(!showSettings)}
          className="ml-auto text-[12px] text-(--color-ink-soft) hover:text-(--color-ink) cursor-pointer"
        >
          ⚙ settings
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-[16px] leading-none text-(--color-ink-soft) hover:text-(--color-ink) cursor-pointer"
          aria-label="Close"
        >
          ×
        </button>
      </header>

      {/* Settings */}
      {showSettings && (
        <div className="px-4 py-3 border-b border-(--color-ink)/10 bg-(--color-gilt)/6 text-[12.5px] space-y-2">
          {liveChatPossible() ? (
            <>
              <p className="text-(--color-ink-soft)">
                Add your own Anthropic API key for a live AI tutor grounded in the
                companion. The key is stored only in this browser and sent only to
                Anthropic; usage bills to your key.
              </p>
              <div className="flex gap-1.5">
                <input
                  type="password"
                  value={keyDraft}
                  onChange={(e) => setKeyDraft(e.target.value)}
                  placeholder="sk-ant-…"
                  className="flex-1 rounded-md border border-(--color-ink)/20 bg-(--color-card-strong) px-2.5 py-1.5 outline-none focus:border-(--color-oxblood)"
                />
                <button
                  type="button"
                  onClick={() => {
                    setApiKey(keyDraft.trim())
                    setModel(modelDraft)
                    setShowSettings(false)
                  }}
                  className="rounded-md bg-(--color-navy) text-white px-3 py-1.5 font-semibold cursor-pointer"
                >
                  Save
                </button>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-(--color-ink-soft)">Model:</label>
                <select
                  value={modelDraft}
                  onChange={(e) => setModelDraft(e.target.value)}
                  className="rounded-md border border-(--color-ink)/20 bg-(--color-card-strong) px-2 py-1"
                >
                  {MODELS.map((m) => (
                    <option key={m.id} value={m.id}>{m.label}</option>
                  ))}
                </select>
                {getApiKey() && (
                  <button
                    type="button"
                    onClick={() => {
                      setApiKey('')
                      setKeyDraft('')
                    }}
                    className="ml-auto text-(--color-oxblood) hover:underline cursor-pointer"
                  >
                    Remove key
                  </button>
                )}
              </div>
            </>
          ) : (
            <p className="text-(--color-ink-soft)">
              Inside the Claude artifact, outside connections are blocked, so the
              tutor works as a passage finder here. For the live AI tutor, open
              the public site and add your own Anthropic API key.
            </p>
          )}
        </div>
      )}

      {/* Log */}
      <div ref={logRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {log.length === 0 && (
          <div className="text-[13px] text-(--color-ink-soft) space-y-2">
            <p>
              Ask anything about the book's history or Tombs' argument.
              {live
                ? ' Answers come from Claude, grounded in the companion\'s own chapters.'
                : ' I\'ll find the most relevant companion passages.'}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ask(s)}
                  className="rounded-full border border-(--color-ink)/20 px-2.5 py-1 text-[12px] hover:border-(--color-oxblood) hover:text-(--color-oxblood) cursor-pointer text-left"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {log.map((e, i) => (
          <div key={i}>
            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-lg rounded-br-sm bg-(--color-oxblood) text-white px-3.5 py-2 text-[13.5px]">
                {e.turn.text}
              </div>
            </div>
            {e.pending && (
              <div className="mt-2 text-[12.5px] text-(--color-ink-faint) italic">thinking…</div>
            )}
            {e.error && (
              <div className="mt-2 max-w-[85%] rounded-lg border border-(--color-oxblood)/40 bg-(--color-oxblood)/8 px-3.5 py-2 text-[13px]">
                {e.error}
              </div>
            )}
            {e.answer && (
              <div className="mt-2 max-w-[92%] space-y-2">
                {e.answer.text && (
                  <div className="rounded-lg rounded-bl-sm bg-(--color-card-strong) border border-(--color-ink)/10 px-3.5 py-2.5 text-[13.5px] leading-relaxed whitespace-pre-wrap">
                    {e.answer.text}
                  </div>
                )}
                {e.answer.sources.length > 0 && (
                  <div className="space-y-1.5">
                    {!e.answer.text && (
                      <div className="text-[11px] uppercase tracking-[0.12em] text-(--color-ink-faint)">
                        Most relevant passages
                      </div>
                    )}
                    {(e.answer.text ? e.answer.sources.slice(0, 3) : e.answer.sources).map((p) => (
                      <Link
                        key={p.id}
                        to={p.route}
                        onClick={() => setOpen(false)}
                        className="block rounded-md border border-(--color-ink)/12 bg-(--color-card) px-3 py-2 hover:border-(--color-oxblood)/50"
                      >
                        <div className="text-[11px] font-bold text-(--color-oxblood)">{p.source}</div>
                        {!e.answer!.text && (
                          <div className="text-[12.5px] text-(--color-ink-soft) mt-0.5 line-clamp-3">{p.text}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
                {!e.answer.text && e.answer.sources.length === 0 && (
                  <div className="text-[13px] text-(--color-ink-faint)">
                    Nothing matched — try different words, or browse the ⌘K search.
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <form
        className="flex gap-2 px-4 py-3 border-t border-(--color-ink)/10"
        onSubmit={(e) => {
          e.preventDefault()
          ask(input)
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={live ? 'Ask the tutor…' : 'Find passages about…'}
          className="flex-1 rounded-md border border-(--color-ink)/20 bg-(--color-card-strong) px-3 py-2 text-[13.5px] outline-none focus:border-(--color-oxblood)"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="rounded-md bg-(--color-oxblood) text-white px-4 py-2 text-[13px] font-semibold disabled:opacity-40 cursor-pointer"
        >
          {busy ? '…' : 'Ask'}
        </button>
      </form>
    </div>
  )
}
