import './App.css'
import { SimpleCoordAnimate } from './pages/SimpleCoordAnimate.tsx'
import { ButtonHTMLAttributes, ReactNode, useState } from 'react'

function App() {
  const [selectedExample, setSelectedExample] = useState<string>()

  return (
    <div className="flex h-full text-left">
      <ol className="border-black border-r list-none m-0 p-4">
        <li>
          <ListButton onClick={() => setSelectedExample(undefined)}>
            Empty
          </ListButton>
        </li>
        <li>
          <ListButton onClick={() => setSelectedExample('simpleCoordAnimate')}>
            Simple coordinate animation
          </ListButton>
        </li>
      </ol>
      <div className="flex-1">
        {selectedExample === 'simpleCoordAnimate' && <SimpleCoordAnimate />}
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
