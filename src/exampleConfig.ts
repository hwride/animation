import { SimpleAnimate } from './pages/SimpleAnimate.tsx'
import { EnterExit } from './pages/EnterExit.tsx'
import { Keyframes } from './pages/Keyframes.tsx'
import { ListAddRemove } from './pages/ListAddRemove.tsx'
import { SVGAnimate } from './pages/SVGAnimate.tsx'
import { VariantsPropagation } from './pages/VariantsPropagation.tsx'
import { VariantsBasic } from './pages/VariantsBasic.tsx'
import { VariantsOrchestration } from './pages/VariantsOrchestration.tsx'
import { TriggerAnimation } from './pages/TriggerAnimation.tsx'

export type ConfigEntry = { id: string; label: string; Component: React.FC }
export const componentConfig: ConfigEntry[] = [
  {
    id: 'simple_animation',
    label: 'Simple animation',
    Component: SimpleAnimate,
  },
  {
    id: 'enter_exit',
    label: 'Enter/exit',
    Component: EnterExit,
  },
  {
    id: 'keyframes',
    label: 'Keyframes',
    Component: Keyframes,
  },
  {
    id: 'variants_basic',
    label: 'Variants basic',
    Component: VariantsBasic,
  },
  {
    id: 'variants_propagation',
    label: 'Variants propagation',
    Component: VariantsPropagation,
  },
  {
    id: 'variants_orchestration',
    label: 'Variants orchestration',
    Component: VariantsOrchestration,
  },
  {
    id: 'trigger_animation',
    label: 'Trigger animation',
    Component: TriggerAnimation,
  },
  {
    id: 'list_add_remove',
    label: 'List add/remove',
    Component: ListAddRemove,
  },
  {
    id: 'svg_animation',
    label: 'SVG animation',
    Component: SVGAnimate,
  },
]
