import type { FC } from 'react'
import { HeptarchyMap } from './HeptarchyMap'
import { DynasticTree } from './DynasticTree'
import { ReformationPendulum } from './ReformationPendulum'
import { FranchiseExpansion } from './FranchiseExpansion'
import { FeudalPyramid } from './FeudalPyramid'
import { DeclineExplorer } from './DeclineExplorer'
import { HastingsDiagram } from './HastingsDiagram'
import { CornLawExplorer } from './CornLawExplorer'

/**
 * Bespoke interactive widgets, referenced from chapter content via
 * { t: 'widget', id: '<key>' }.
 */
export const WIDGETS: Record<string, FC> = {
  'heptarchy-map': HeptarchyMap,
  'dynastic-tree': DynasticTree,
  'reformation-pendulum': ReformationPendulum,
  'franchise-expansion': FranchiseExpansion,
  'feudal-pyramid': FeudalPyramid,
  'decline-explorer': DeclineExplorer,
  'hastings-diagram': HastingsDiagram,
  'corn-law-explorer': CornLawExplorer,
}
