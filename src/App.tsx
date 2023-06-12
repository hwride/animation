import './App.css'
import { SimpleAnimate } from './pages/SimpleAnimate.tsx'
import { ButtonHTMLAttributes, ReactNode, useState } from 'react'

function App() {
  const [selectedExample, setSelectedExample] = useState<string>()

  return (
    <div className="flex h-full text-left">
      <div className="flex flex-col border-black border-r p-4">
        <ListButton onClick={() => setSelectedExample(undefined)}>
          Empty
        </ListButton>
        <h2 className="text-lg font-bold my-2">
          <a
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href="https://www.framer.com/motion/"
            target="_blank"
          >
            Framer Motion
          </a>
        </h2>
        <ol className="flex-1 list-none m-0">
          <li>
            <ListButton
              onClick={() => setSelectedExample('simpleCoordAnimate')}
            >
              Simple animation
            </ListButton>
          </li>
        </ol>
      </div>
      <div className="flex-1">
        {selectedExample === 'simpleCoordAnimate' && <SimpleAnimate />}
        {selectedExample == null && (
          <div className="flex items-center justify-center h-full">
            Choose an example
          </div>
        )}
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
    <button
      className={
        'border border-black px-1 rounded mb-1 hover:bg-gray-100' +
        (className ?? '')
      }
      {...rest}
    >
      {children}
    </button>
  )
}

export default App
