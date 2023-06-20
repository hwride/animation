import { EnterExit } from './examples/EnterExit.tsx'
import { Keyframes } from './examples/Keyframes.tsx'
import { ListAddRemove } from './examples/ListAddRemove.tsx'
import { SVGAnimate } from './examples/SVGAnimate.tsx'
import { SimpleAnimate } from './examples/SimpleAnimate.tsx'
import { TriggerAnimation } from './examples/TriggerAnimation.tsx'
import { VariantsBasic } from './examples/VariantsBasic.tsx'
import { VariantsOrchestration } from './examples/VariantsOrchestration.tsx'
import { VariantsPropagation } from './examples/VariantsPropagation.tsx'

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
