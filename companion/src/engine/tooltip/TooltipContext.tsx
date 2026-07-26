import { createContext, useContext } from 'react'

export const OPEN_DELAY_MS = 300
export const LOCK_MS = 450
export const GRACE_MS = 250
export const MAX_DEPTH = 5

export interface TipEntry {
  key: number
  conceptId: string
  depth: number
  anchorRect: DOMRect
  locked: boolean
  /** 0..1 lock progress for the top tooltip's indicator */
  progress: number
  pos?: { left: number; top: number }
}

export interface TooltipApi {
  stack: TipEntry[]
  /** Open (hover path): truncates stack to `depth`, pushes new tooltip unlocked. */
  open: (conceptId: string, depth: number, anchorEl: HTMLElement) => void
  /** Open immediately locked (touch / click path). */
  openLocked: (conceptId: string, depth: number, anchorEl: HTMLElement) => void
  closeAll: () => void
  /** Register a live element (tooltip card or anchor link) for chain hit-testing. */
  registerChainEl: (el: HTMLElement) => () => void
  setCardPos: (key: number, pos: { left: number; top: number }) => void
  registerCardEl: (key: number, el: HTMLElement | null) => void
  getCardEl: (key: number) => HTMLElement | null
}

export const TooltipCtx = createContext<TooltipApi | null>(null)

export function useTooltips(): TooltipApi {
  const ctx = useContext(TooltipCtx)
  if (!ctx) throw new Error('useTooltips outside TooltipProvider')
  return ctx
}
