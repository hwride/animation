import { EnterExit } from './examples/EnterExit.tsx'
import { Gestures } from './examples/Gestures.tsx'
import { GesturesDrag } from './examples/GesturesDrag.tsx'
import { GesturesPropagation } from './examples/GesturesPropagation.tsx'
import { Keyframes } from './examples/Keyframes.tsx'
import { Layout } from './examples/Layout.tsx'
import { LayoutList } from './examples/LayoutList.tsx'
import { LayoutShared } from './examples/LayoutShared.tsx'
import { LayoutSharedModal } from './examples/LayoutSharedModal.tsx'
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
    id: 'gestures',
    label: 'Gestures',
    Component: Gestures,
  },
  {
    id: 'gestures_propagation',
    label: 'Gestures propagation',
    Component: GesturesPropagation,
  },
  {
    id: 'gestures_drag',
    label: 'Gestures drag',
    Component: GesturesDrag,
  },
  {
    id: 'layout',
    label: 'Layout',
    Component: Layout,
  },
  {
    id: 'layout_list',
    label: 'Layout list',
    Component: LayoutList,
  },
  {
    id: 'layout_shared',
    label: 'Layout shared',
    Component: LayoutShared,
  },
  {
    id: 'layout_shared_modal',
    label: 'Layout shared modal',
    Component: LayoutSharedModal,
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
