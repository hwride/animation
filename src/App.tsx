import './App.css'
import { SimpleAnimate } from './pages/SimpleAnimate.tsx'
import { ButtonHTMLAttributes, ReactNode, useState } from 'react'
import { EnterExit } from './pages/EnterExit.tsx'
import { Button } from './components/Button.tsx'
import { Link } from './components/Link.tsx'
import { Keyframes } from './pages/Keyframes.tsx'

type ConfigEntry = { label: string; Component: React.FC }
const componentConfig: ConfigEntry[] = [
  {
    label: 'Simple animation',
    Component: SimpleAnimate,
  },
  {
    label: 'Enter/exit',
    Component: EnterExit,
  },
  {
    label: 'Keyframes',
    Component: Keyframes,
  },
]

function App() {
  const [selectedExample, setSelectedExample] = useState<ConfigEntry>()
  const ComponentToRender: React.FC =
    selectedExample?.Component ?? EmptyComponent

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
                <ListButton onClick={() => setSelectedExample(entry)}>
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
