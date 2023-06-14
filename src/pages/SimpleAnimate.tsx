import { motion } from 'framer-motion'
import { useState } from 'react'
import { H3 } from '../components/Headings.tsx'
import { Page } from '../components/Page.tsx'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { useRerender } from '../utils/useRerender.ts'
import { Button } from '../components/Button.tsx'

export function SimpleAnimate() {
  return (
    <Page title="Simple animation">
      <CoordinateAnimation />
      <ColourAnimation />
    </Page>
  )
}

function CoordinateAnimation() {
  const [coordVal, setCoordVal] = useState(50)
  return (
    <>
      <H3>Coordinates</H3>
      {/* Controls */}
      <div className="m-auto mt-2 w-fit">
        <label>
          <input
            className="mx-2"
            value={coordVal}
            type="range"
            min={0}
            max={100}
            onChange={(e) => setCoordVal(parseFloat(e.target.value))}
          />
          {/* Absolute to stop it affecting width when the numbers increase */}
          <span className="absolute">{coordVal}px</span>
        </label>
      </div>

      {/* Animated stuff */}
      <div className="m-auto mb-4 mt-4 w-fit">
        <motion.div animate={{ x: -coordVal }}>
          <SyntaxHighlighter language="jsx" style={dark}>
            {`<motion.div animate={{ x: -${coordVal} }} />`}
          </SyntaxHighlighter>
        </motion.div>
        <motion.div animate={{ x: coordVal }}>
          <SyntaxHighlighter language="jsx" style={dark}>
            {`<motion.div animate={{ x: ${coordVal} }} />`}
          </SyntaxHighlighter>
        </motion.div>
      </div>
    </>
  )
}

function ColourAnimation() {
  const initialColourVal = '#ffffff'
  const animateColourVal = '#ff0000'
  const { key, rerender } = useRerender()
  return (
    <>
      <H3>Colour</H3>
      <div className="mx-auto w-fit">
        <SyntaxHighlighter language="jsx" style={dark}>
          {`<motion.div 
  initial={{ backgroundColor: ${initialColourVal} }}
  animate={{ backgroundColor: ${animateColourVal} }} />`}
        </SyntaxHighlighter>
      </div>
      <Button className="mx-auto my-2 block" onClick={rerender}>
        Re-mount component
      </Button>
      <div className="m-auto w-min" key={key}>
        <motion.div
          className="h-20 w-20 p-4"
          initial={{ backgroundColor: initialColourVal }}
          animate={{ backgroundColor: animateColourVal }}
        ></motion.div>
      </div>
    </>
  )
}
