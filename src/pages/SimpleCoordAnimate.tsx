import { motion } from 'framer-motion'
import { useState } from 'react'
export function SimpleCoordAnimate() {
  const [coordVal, setCoordVal] = useState(50)
  return (
    <div className="w-min m-auto pt-4">
      <label>
        Animate
        <input
          value={coordVal}
          type="range"
          min={0}
          max={100}
          onChange={(e) => setCoordVal(parseFloat(e.target.value))}
        />
        {/* Absolute to stop it affecting width when the numbers increase */}
        <span className="absolute">{coordVal}px</span>
      </label>
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
  )
}
