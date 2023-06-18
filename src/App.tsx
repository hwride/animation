import './App.css'
import { useEffect, useState } from 'react'
import { componentConfig, ConfigEntry } from './exampleConfig.ts'
import { MenuProvider } from './components/menu/MenuContext.tsx'
import { Page } from './components/Page.tsx'
import { DesktopMenu, useResponsiveMenu } from './components/menu/Menu.tsx'
import { MenuButton } from './components/menu/MenuButton.tsx'
import { clsx } from 'clsx'

function getEgFromQueryParams() {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  return id ? componentConfig.find((example) => example.id === id) : undefined
}

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
  >(getEgFromQueryParams)
  const ComponentToRender: React.FC =
    selectedExample?.Component ?? EmptyComponent

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

function MobileHeader({
  selectedExampleId,
  onMenuItemClick,
}: {
  selectedExampleId?: string
  onMenuItemClick: (entry?: ConfigEntry) => void
}) {
  return (
    <div
      className={clsx(
        // Stops the rotating menu button causing scrollbars.
        'overflow-hidden',
        'border-b border-gray-200 p-1 sm:hidden'
      )}
    >
      <MenuButton
        selectedExampleId={selectedExampleId}
        onMenuItemClick={onMenuItemClick}
      />
    </div>
  )
}

/**
 * Helper for example ID query param changes. Listens for changes and updates
 * selected examples, and provides helper to set the query param.
 */
function useExampleQueryParams(
  setSelectedExample: (eg: ConfigEntry | undefined) => void
) {
  // Listen for changes in query params with the forward/back buttons.
  useEffect(() => {
    const popstateListener = () => setSelectedExample(getEgFromQueryParams())
    window.addEventListener('popstate', popstateListener)
    return () => window.removeEventListener('popstate', popstateListener)
  }, [setSelectedExample])

  return {
    setIdQueryParamToExample: (example?: ConfigEntry) => {
      const urlParams = new URLSearchParams(window.location.search)
      if (example) {
        urlParams.set('id', example.id)
      } else {
        urlParams.delete('id')
      }
      window.history.pushState({}, '', '?' + urlParams.toString())
    },
  }
}

function EmptyComponent() {
  return (
    <Page className="h-full">
      <div className="flex h-full items-center justify-center">
        Choose an example
      </div>
    </Page>
  )
}

export default AppWithProviders
