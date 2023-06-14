import './App.css'
import {
  ButtonHTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Button } from './components/Button.tsx'
import { Link } from './components/Link.tsx'
import { componentConfig, ConfigEntry } from './exampleConfig.ts'
import { clsx } from './utils/clsx.ts'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuProvider, useMenu } from './components/menu/MenuContext.tsx'
import { Page } from './components/Page.tsx'
import { useBreakpoint } from './utils/useBreakpoint.ts'

function getEgFromQueryParams() {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  return id ? componentConfig.find((example) => example.id === id) : undefined
}

const menuCloseableBreakpoint = 'xs'

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

  return (
    <div className="flex min-h-full text-left">
      <Menu
        onMenuItemClick={(example?: ConfigEntry) => {
          setIdQueryParamToExample(example)
          setSelectedExample(example)
          // On tablet and above the menu never closes.
          if (menuIsCloseable) setMenuVisible(false)
        }}
      />
      <div className="flex-1">
        <ComponentToRender />
      </div>
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

/**
 * Helper to setup our menu so it opens and closes responsively.
 */
function useResponsiveMenu() {
  const { setMenuVisible } = useMenu()
  // If we change to a non-mobile breakpoint, ensure the menu is visible.
  const breakpoint = useBreakpoint(
    useCallback(
      (bp: string) => {
        if (bp !== menuCloseableBreakpoint) setMenuVisible(true)
      },
      [setMenuVisible]
    )
  )

  return {
    setMenuVisible,
    menuIsCloseable: breakpoint === menuCloseableBreakpoint,
  }
}

function Menu({
  onMenuItemClick,
}: {
  onMenuItemClick: (entry?: ConfigEntry) => void
}) {
  const { menuVisible, setMenuVisible } = useMenu()
  return (
    <AnimatePresence>
      {menuVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed z-10 flex flex-col overflow-hidden border-b border-r border-black bg-white p-4 sm:static sm:flex"
        >
          <ListButton
            className="sm:hidden"
            onClick={() => setMenuVisible(false)}
          >
            Close menu
          </ListButton>
          <ListButton onClick={() => onMenuItemClick(undefined)}>
            Empty
          </ListButton>
          <h2 className="my-2 text-lg font-bold">
            <Link
              className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
              href="https://www.framer.com/motion/"
              target="_blank"
            >
              Framer Motion
            </Link>
          </h2>
          <ol className="m-0 flex-1 list-none">
            {componentConfig.map((entry, i) => {
              return (
                <li key={i} className="relative">
                  <ListButton
                    className="w-full"
                    onClick={() => onMenuItemClick(entry)}
                  >
                    {entry.label}
                  </ListButton>
                </li>
              )
            })}
          </ol>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ListButton({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <Button
      className={clsx(
        'mb-1 rounded border border-black hover:bg-gray-100',
        className
      )}
      {...rest}
    >
      {children}
    </Button>
  )
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
