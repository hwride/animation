import { motion } from 'framer-motion'
import './SVGAnimate.css'
import { ReactNode, useState } from 'react'
import { TextInput } from '../components/TextInput.tsx'
import { H2, H3 } from '../components/Headings.tsx'

function getVariants(opts: { pathLength: number; duration: number }) {
  return {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: opts.pathLength,
      transition: { duration: opts.duration },
    },
  }
}

export function SVGAnimate() {
  const [key, setKey] = useState(0)
  const [pathLength, setPathLength] = useState('1')
  const [duration, setDuration] = useState('1')
  const drawVariants = getVariants({
    pathLength: Number(pathLength),
    duration: Number(duration),
  })
  const reRenderSvg = () => setKey((key) => key + 1)

  return (
    <div className="pt-2">
      <div>
        <H2>SVG animation</H2>
        <H3>Options</H3>
        <div className="grid grid-cols-2 mx-auto w-max">
          <LabelledTextInput
            id="path-length"
            label={<code>pathLength</code>}
            value={pathLength}
            onChange={(val) => {
              setPathLength(val)
              reRenderSvg()
            }}
          />
          <LabelledTextInput
            id="duration"
            label={<code>duration</code>}
            value={duration}
            onChange={(val) => {
              setDuration(val)
              reRenderSvg()
            }}
          />
        </div>
        <pre className="mx-auto max-w-lg mt-4">
          <code>variants: {JSON.stringify(drawVariants, null, 2)}</code>
        </pre>
      </div>

      <H2>SVG</H2>
      <motion.svg
        className="mx-auto"
        key={key}
        width="600"
        height="200"
        viewBox="0 0 600 200"
        initial="hidden" // These names match the variant definition above.
        animate="visible" // These names match the variant definition above.
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          stroke="#ff0055"
          variants={drawVariants}
        />
        <motion.line
          x1="220"
          y1="30"
          x2="360"
          y2="170"
          stroke="#00cc88"
          variants={drawVariants}
        />
        <motion.line
          x1="220"
          y1="170"
          x2="360"
          y2="30"
          stroke="#00cc88"
          variants={drawVariants}
        />
        <motion.rect
          width="140"
          height="140"
          x="410"
          y="30"
          rx="20"
          stroke="#0099ff"
          variants={drawVariants}
        />
      </motion.svg>
    </div>
  )
}

function LabelledTextInput({
  id,
  label,
  value,
  onChange,
}: {
  id: string
  label: ReactNode
  value: string
  onChange: (text: string) => void
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <TextInput
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}
