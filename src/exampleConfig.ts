import { SimpleAnimate } from './pages/SimpleAnimate.tsx'
import { EnterExit } from './pages/EnterExit.tsx'
import { Keyframes } from './pages/Keyframes.tsx'
import { ListAddRemove } from './pages/ListAddRemove.tsx'
import { SVGAnimate } from './pages/SVGAnimate.tsx'
import { VariantsPropagation } from './pages/VariantsPropagation.tsx'
import { VariantsBasic } from './pages/VariantsBasic.tsx'

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
