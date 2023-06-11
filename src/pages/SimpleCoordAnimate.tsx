import { motion } from 'framer-motion'
import { useState } from 'react'
export function SimpleCoordAnimate() {
  const [coordVal, setCoordVal] = useState(50)
  return (
    <div
      style={{
        width: 'min-content',
        margin: 'auto',
        paddingBlockStart: '1rem',
      }}
    >
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
        <span style={{ position: 'absolute' }}>{coordVal}px</span>
      </label>
      <motion.div
        animate={{ x: -coordVal }}
        style={{
          width: 'min-content',
          border: '1px dotted lightgray',
          marginBlock: '1rem',
        }}
      >
        <pre style={{ margin: 0 }}>
          &lt;motion.div animate={'{{'} x: -{coordVal} {'}}'}&gt;
        </pre>
      </motion.div>
      <motion.div
        animate={{ x: coordVal }}
        style={{
          width: 'min-content',
          border: '1px dotted lightgray',
        }}
      >
        <pre style={{ margin: 0 }}>
          &lt;motion.div animate={'{{'} x: {coordVal} {'}}'}&gt;
        </pre>
      </motion.div>
    </div>
  )
}
