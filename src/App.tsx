import { useState } from 'react'
import './App.css'
import { EmptyExample } from './components/EmptyExample.tsx'
import { MobileHeader } from './components/MobileHeader.tsx'
import { DesktopMenu, useResponsiveMenu } from './components/menu/Menu.tsx'
import { MenuProvider } from './components/menu/MenuContext.tsx'
import { ConfigEntry } from './exampleConfig.ts'
import {
  getExampleFromQueryParams,
  useExampleQueryParams,
} from './queryParams.ts'

function AppWithProviders() {
  return (
    <MenuProvider>
      <App />
    </MenuProvider>
  )
}

function App() {
  // Selected example
  const [selectedExample, setSelectedExample] = useState<
    ConfigEntry | undefined
  >(getExampleFromQueryParams)
  const ComponentToRender: React.FC = selectedExample?.Component ?? EmptyExample

  // Menu
  const { menuIsCloseable, setMenuVisible } = useResponsiveMenu()

  // Query params
  const { setIdQueryParamToExample } = useExampleQueryParams(setSelectedExample)

  const onMenuItemClick = (example?: ConfigEntry) => {
    setIdQueryParamToExample(example)
    setSelectedExample(example)
    // On tablet and above the menu never closes.
    if (menuIsCloseable) setMenuVisible(false)
  }

  return (
    <div className="grid h-full grid-cols-1 grid-rows-[auto_1fr] text-left sm:grid-cols-[auto_1fr] sm:grid-rows-1">
      <MobileHeader
        selectedExampleId={selectedExample?.id}
        onMenuItemClick={onMenuItemClick}
      />
      <DesktopMenu
        selectedExampleId={selectedExample?.id}
        onMenuItemClick={onMenuItemClick}
      />
      <div className="flex-1 overflow-auto">
        <ComponentToRender />
      </div>
    </div>
  )
}

export default AppWithProviders
