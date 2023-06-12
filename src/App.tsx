import './App.css'
import { SimpleCoordAnimate } from './pages/SimpleCoordAnimate.tsx'
import { useState } from 'react'

function App() {
  const [selectedExample, setSelectedExample] = useState<string>()

  return (
    <div className="flex h-full text-left">
      <ol className="border-black border-r list-none m-0 p-4">
        <li>
          <button onClick={() => setSelectedExample(undefined)}>Empty</button>
        </li>
        <li>
          <button onClick={() => setSelectedExample('simpleCoordAnimate')}>
            Simple coordinate animation
          </button>
        </li>
      </ol>
      <div className="flex-1">
        {selectedExample === 'simpleCoordAnimate' && <SimpleCoordAnimate />}
        {selectedExample == null && 'Choose an example'}
      </div>
    </div>
  )
}

export default App
