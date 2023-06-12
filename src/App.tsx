import './App.css'
import { SimpleCoordAnimate } from './pages/SimpleCoordAnimate.tsx'
import { useState } from 'react'

function App() {
  const [selectedExample, setSelectedExample] = useState<string>()

  return (
    <div style={{ display: 'flex', height: '100%', textAlign: 'left' }}>
      <ol
        style={{
          borderRight: '1px solid black',
          listStyleType: 'none',
          margin: 0,
          padding: '1em',
        }}
      >
        <li>
          <button onClick={() => setSelectedExample(undefined)}>Empty</button>
        </li>
        <li>
          <button onClick={() => setSelectedExample('simpleCoordAnimate')}>
            Simple coordinate animation
          </button>
        </li>
      </ol>
      <div style={{ flex: '1' }}>
        {selectedExample === 'simpleCoordAnimate' && <SimpleCoordAnimate />}
        {selectedExample == null && 'Choose an example'}
      </div>
    </div>
  )
}

export default App
