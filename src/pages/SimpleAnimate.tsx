import { motion } from 'framer-motion'
import { useState } from 'react'
import { SubHeading } from '../components/SubHeading.tsx'

export function SimpleAnimate() {
  const [coordVal, setCoordVal] = useState(50)
  const initialColourVal = '#ffffff'
  const animateColourVal = '#ff0000'

  return (
    <div className="pt-2">
      <SubHeading>Coordinates</SubHeading>
      {/* Controls */}
      <div className="w-fit m-auto mt-2">
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
      <div className="w-min m-auto mt-4 mb-4">
        <motion.div
          animate={{ x: -coordVal }}
          className="w-min border border-gray-100 my-4"
        >
          <pre className="m-0">
            &lt;motion.div animate={'{{'} x: -{coordVal} {'}}'}&gt;
          </pre>
        </motion.div>
        <motion.div
          animate={{ x: coordVal }}
          className="w-min border border-gray-100"
        >
          <pre className="m-0">
            &lt;motion.div animate={'{{'} x: {coordVal} {'}}'}&gt;
          </pre>
        </motion.div>
      </div>

      <SubHeading>Colour</SubHeading>
      <div className="w-min m-auto">
        <motion.div
          className="p-4"
          initial={{ backgroundColor: initialColourVal }}
          animate={{ backgroundColor: animateColourVal }}
        >
          <pre>
            &lt;motion.div
            <br />
            &nbsp;&nbsp;initial={'{{'} backgroundColor: {initialColourVal}{' '}
            {'}}'}
            <br />
            &nbsp;&nbsp;animate={'{{'} backgroundColor: {animateColourVal}{' '}
            {'}}'}&gt;
          </pre>
        </motion.div>
      </div>
    </div>
  )
}
