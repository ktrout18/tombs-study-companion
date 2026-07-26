import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import {
  GRACE_MS,
  LOCK_MS,
  TooltipCtx,
  type TipEntry,
  type TooltipApi,
} from './TooltipContext'
import { TooltipLayer } from './TooltipLayer'
import { discoverConcept } from '../store'

let nextKey = 1

/**
 * Owns the tooltip chain. Global listeners handle:
 *  - chain-leave grace close (pointer off every card + anchor for GRACE_MS)
 *  - lock-on-hold (cursor still while in chain → top tooltip locks)
 *  - Esc closes the whole chain
 *  - click/tap outside closes (touch support)
 *  - scroll/resize closes (positions are viewport-fixed)
 */
export function TooltipProvider({ children }: { children: ReactNode }) {
  const [stack, setStack] = useState<TipEntry[]>([])
  const stackRef = useRef(stack)
  stackRef.current = stack

  /** Elements that keep the chain alive when hovered: anchors + cards. */
  const chainEls = useRef(new Set<HTMLElement>())
  const cardEls = useRef(new Map<number, HTMLElement>())
  const graceTimer = useRef<number | null>(null)
  const lastMove = useRef(0)
  const pointer = useRef({ x: -1, y: -1 })

  const closeAll = useCallback(() => {
    if (graceTimer.current) window.clearTimeout(graceTimer.current)
    graceTimer.current = null
    setStack([])
  }, [])

  const push = useCallback(
    (conceptId: string, depth: number, anchorEl: HTMLElement, locked: boolean) => {
      discoverConcept(conceptId)
      const entry: TipEntry = {
        key: nextKey++,
        conceptId,
        depth,
        anchorRect: anchorEl.getBoundingClientRect(),
        locked,
        progress: locked ? 1 : 0,
      }
      setStack((s) => {
        const base = s.slice(0, depth)
        // Reopening the same concept at the same position is a no-op
        const cur = s[depth]
        if (cur && cur.conceptId === conceptId && s.length === depth + 1) return s
        return [...base, entry]
      })
    },
    [],
  )

  const open = useCallback(
    (id: string, depth: number, el: HTMLElement) => push(id, depth, el, false),
    [push],
  )
  const openLocked = useCallback(
    (id: string, depth: number, el: HTMLElement) => push(id, depth, el, true),
    [push],
  )

  const registerChainEl = useCallback((el: HTMLElement) => {
    chainEls.current.add(el)
    return () => {
      chainEls.current.delete(el)
    }
  }, [])

  const registerCardEl = useCallback((key: number, el: HTMLElement | null) => {
    if (el) cardEls.current.set(key, el)
    else cardEls.current.delete(key)
  }, [])
  const getCardEl = useCallback(
    (key: number) => cardEls.current.get(key) ?? null,
    [],
  )

  const setCardPos = useCallback((key: number, pos: { left: number; top: number }) => {
    setStack((s) => s.map((e) => (e.key === key ? { ...e, pos } : e)))
  }, [])

  /** Is the pointer inside any tooltip card rect or anchor rect (with margin)?
   *  Cards are hit-tested by coordinates because unlocked cards have
   *  pointer-events: none (the cursor "passes through" them). */
  const pointerInChain = useCallback(() => {
    const { x, y } = pointer.current
    const M = 6
    for (const el of chainEls.current) {
      const r = el.getBoundingClientRect()
      if (x >= r.left - M && x <= r.right + M && y >= r.top - M && y <= r.bottom + M)
        return true
    }
    for (const el of cardEls.current.values()) {
      const r = el.getBoundingClientRect()
      if (x >= r.left - M && x <= r.right + M && y >= r.top - M && y <= r.bottom + M)
        return true
    }
    return false
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pointer.current = { x: e.clientX, y: e.clientY }
      lastMove.current = performance.now()
      if (stackRef.current.length === 0) return
      if (pointerInChain()) {
        if (graceTimer.current) {
          window.clearTimeout(graceTimer.current)
          graceTimer.current = null
        }
      } else if (graceTimer.current === null) {
        graceTimer.current = window.setTimeout(() => {
          graceTimer.current = null
          setStack([])
        }, GRACE_MS)
      }
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && stackRef.current.length > 0) closeAll()
    }

    const onPointerDown = (e: PointerEvent) => {
      if (stackRef.current.length === 0) return
      const t = e.target as Node
      for (const el of chainEls.current) if (el.contains(t)) return
      for (const el of cardEls.current.values()) if (el.contains(t)) return
      closeAll()
    }

    const onScroll = (e: Event) => {
      // Scrolling inside a tooltip card must not close the chain.
      const t = e.target
      if (t instanceof Node) {
        for (const el of cardEls.current.values()) if (el.contains(t)) return
      }
      if (stackRef.current.length > 0) closeAll()
    }

    // Pointer leaves the window entirely: no mousemove will fire, so start
    // the grace close here.
    const onWindowOut = (e: MouseEvent) => {
      if (e.relatedTarget === null && stackRef.current.length > 0 && graceTimer.current === null) {
        graceTimer.current = window.setTimeout(() => {
          graceTimer.current = null
          setStack([])
        }, GRACE_MS)
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('scroll', onScroll, { passive: true, capture: true })
    window.addEventListener('resize', onScroll)
    document.addEventListener('mouseout', onWindowOut)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('scroll', onScroll, { capture: true })
      window.removeEventListener('resize', onScroll)
      document.removeEventListener('mouseout', onWindowOut)
    }
  }, [closeAll, pointerInChain])

  /** Lock loop: while the top tooltip is unlocked and the pointer rests
   *  inside the chain, fill the progress indicator; on completion, lock. */
  useEffect(() => {
    const top = stack[stack.length - 1]
    if (!top || top.locked) return
    const iv = window.setInterval(() => {
      const still = performance.now() - lastMove.current
      const inChain = pointerInChain()
      const progress = inChain ? Math.min(1, still / LOCK_MS) : 0
      setStack((s) => {
        const t = s[s.length - 1]
        if (!t || t.locked) return s
        if (progress >= 1) {
          return s.map((e, i) =>
            i === s.length - 1 ? { ...e, locked: true, progress: 1 } : e,
          )
        }
        if (Math.abs(t.progress - progress) < 0.02) return s
        return s.map((e, i) => (i === s.length - 1 ? { ...e, progress } : e))
      })
    }, 40)
    return () => window.clearInterval(iv)
  }, [stack, pointerInChain])

  const api = useMemo<TooltipApi>(
    () => ({
      stack,
      open,
      openLocked,
      closeAll,
      registerChainEl,
      setCardPos,
      registerCardEl,
      getCardEl,
    }),
    [stack, open, openLocked, closeAll, registerChainEl, setCardPos, registerCardEl, getCardEl],
  )

  return (
    <TooltipCtx.Provider value={api}>
      {children}
      <TooltipLayer />
    </TooltipCtx.Provider>
  )
}
