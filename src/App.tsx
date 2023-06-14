import './App.css'
import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { Button } from './components/Button.tsx'
import { Link } from './components/Link.tsx'
import { componentConfig, ConfigEntry } from './exampleConfig.ts'
import { clsx } from './utils/clsx.ts'
import { motion, AnimatePresence } from 'framer-motion'

function getEgFromQueryParams() {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  return id ? componentConfig.find((example) => example.id === id) : undefined
}

function App() {
  const [selectedExample, setSelectedExample] = useState<
    ConfigEntry | undefined
  >(getEgFromQueryParams)
  const [menuVisible, setMenuVisible] = useState(true)

  const ComponentToRender: React.FC =
    selectedExample?.Component ?? EmptyComponent

  const selectExample = (example?: ConfigEntry) => {
    const urlParams = new URLSearchParams(window.location.search)
    if (example) {
      urlParams.set('id', example.id)
    } else {
      urlParams.delete('id')
    }
    window.history.pushState({}, '', '?' + urlParams.toString())
    setSelectedExample(example)
  }

  // Listen for changes in query params with the forward/back buttons.
  useEffect(() => {
    const popstateListener = () => setSelectedExample(getEgFromQueryParams())
    window.addEventListener('popstate', popstateListener)
    return () => window.removeEventListener('popstate', popstateListener)
  }, [])

  return (
    <div className="flex min-h-full text-left">
      <AnimatePresence>
        {menuVisible && (
          <motion.div
            initial={false}
            animate={{ width: 'auto' }}
            exit={{ width: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col border-black border-r p-4 overflow-hidden fixed bg-white z-10"
          >
            <ListButton onClick={() => setMenuVisible(false)}>
              Close menu
            </ListButton>
            <ListButton onClick={() => selectExample(undefined)}>
              Empty
            </ListButton>
            <h2 className="text-lg font-bold my-2">
              <Link
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                href="https://www.framer.com/motion/"
                target="_blank"
              >
                Framer Motion
              </Link>
            </h2>
            <ol className="flex-1 list-none m-0">
              {componentConfig.map((entry, i) => {
                return (
                  <li key={i} className="relative">
                    <ListButton
                      className="w-full"
                      onClick={() => selectExample(entry)}
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
      <div className="flex-1">
        <ComponentToRender />
      </div>
    </div>
  )
}

function Menu() {}

function ListButton({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <Button
      className={clsx(
        'border border-black rounded mb-1 hover:bg-gray-100',
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
    <div className="flex items-center justify-center h-full">
      Choose an example
    </div>
  )
}

export default App
