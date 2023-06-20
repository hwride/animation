import { useState } from 'react'
import './App.css'
import { MobileHeader } from './components/MobileHeader.tsx'
import { DesktopMenu } from './components/menu/DesktopMenu.tsx'
import {
  MobileMenuProvider,
  useMobileMenu,
} from './components/menu/MobileMenuContext.tsx'
import { ConfigEntry } from './exampleConfig.ts'
import { EmptyExample } from './examples/EmptyExample.tsx'
import {
  getExampleFromQueryParams,
  useExampleQueryParams,
} from './queryParams.ts'

function AppWithProviders() {
  return (
    <MobileMenuProvider>
      <App />
    </MobileMenuProvider>
  )
}

function App() {
  // Selected example
  const [selectedExample, setSelectedExample] = useState<
    ConfigEntry | undefined
  >(getExampleFromQueryParams)
  const ComponentToRender: React.FC = selectedExample?.Component ?? EmptyExample

  // Query params
  const { setIdQueryParamToExample } = useExampleQueryParams(setSelectedExample)

  // Menu
  const { setMenuVisible } = useMobileMenu()

  const setSelectedExampleHelper = (example?: ConfigEntry) => {
    setIdQueryParamToExample(example)
    setSelectedExample(example)
  }

  return (
    <div className="grid h-full grid-cols-1 grid-rows-[auto_1fr] text-left sm:grid-cols-[auto_1fr] sm:grid-rows-1">
      <MobileHeader
        selectedExampleId={selectedExample?.id}
        onMenuItemClick={(example) => {
          setSelectedExampleHelper(example)
          setMenuVisible(false)
        }}
      />
      <DesktopMenu
        selectedExampleId={selectedExample?.id}
        onMenuItemClick={setSelectedExampleHelper}
      />
      <div className="flex-1 overflow-auto">
        <ComponentToRender />
      </div>
    </div>
  )
}

export default AppWithProviders
