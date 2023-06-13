import './App.css'
import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { Button } from './components/Button.tsx'
import { Link } from './components/Link.tsx'
import { componentConfig, ConfigEntry } from './exampleConfig.ts'

function getEgFromQueryParams() {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  return id ? componentConfig.find((example) => example.id === id) : undefined
}

function App() {
  const [selectedExample, setSelectedExample] = useState<
    ConfigEntry | undefined
  >(getEgFromQueryParams)

  const ComponentToRender: React.FC =
    selectedExample?.Component ?? EmptyComponent

  const selectExample = (example: ConfigEntry) => {
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('id', example.id)
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
    <div className="flex h-full text-left">
      <div className="flex flex-col border-black border-r p-4">
        <ListButton onClick={() => setSelectedExample(undefined)}>
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
              <li key={i}>
                <ListButton onClick={() => selectExample(entry)}>
                  {entry.label}
                </ListButton>
              </li>
            )
          })}
        </ol>
      </div>
      <div className="flex-1">
        <ComponentToRender />
      </div>
    </div>
  )
}

function ListButton({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <Button
      className={
        'border border-black px-1 rounded mb-1 hover:bg-gray-100' +
        (className ?? '')
      }
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
