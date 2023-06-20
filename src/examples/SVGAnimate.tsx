import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { CenteredCodeSample } from '../components/CodeSample.tsx'
import { ControlGrid } from '../components/ControlGrid.tsx'
import { H2, H3 } from '../components/Headings.tsx'
import { Page } from '../components/Page.tsx'
import { TextInput } from '../components/TextInput.tsx'
import './SVGAnimate.css'

function getVariants(opts: {
  pathLength: number
  pathSpacing: number
  pathOffset: number
  duration: number
}) {
  return {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: opts.pathLength,
      pathSpacing: opts.pathSpacing,
      pathOffset: opts.pathOffset,
      transition: { duration: opts.duration },
    },
  }
}

export function SVGAnimate() {
  const [key, setKey] = useState(0)
  const [pathLength, setPathLength] = useState('1')
  const [pathSpacing, setPathSpacing] = useState('1')
  const [pathOffset, setPathOffset] = useState('0')
  const [duration, setDuration] = useState('1')
  const drawVariants = getVariants({
    pathLength: Number(pathLength),
    pathSpacing: Number(pathSpacing),
    pathOffset: Number(pathOffset),
    duration: Number(duration),
  })
  const reRenderSvg = () => setKey((key) => key + 1)

  return (
    <Page title="SVG animation" className="svg-animate">
      <div className="mb-2">
        <H3>Options</H3>
        <CenteredCodeSample language="jsx" className="min-w-[240px]">
          {'variants: ' + JSON.stringify(drawVariants, null, 2)}
        </CenteredCodeSample>
        <ControlGrid>
          <PathRangeInput
            id="path-length"
            label={<code>pathLength</code>}
            value={pathLength}
            onChange={(val) => {
              setPathLength(val)
              reRenderSvg()
            }}
          />
          <PathRangeInput
            id="path-spacing"
            label={<code>pathSpacing</code>}
            value={pathSpacing}
            onChange={(val) => {
              setPathSpacing(val)
              reRenderSvg()
            }}
          />
          <PathRangeInput
            id="path-offset"
            label={<code>pathOffset</code>}
            value={pathOffset}
            onChange={(val) => {
              setPathOffset(val)
              reRenderSvg()
            }}
          />
          <label htmlFor="duration">{<code>duration</code>}</label>
          <TextInput
            id="duration"
            value={duration}
            type="number"
            step=".5"
            onChange={(e) => {
              setDuration(e.target.value)
              reRenderSvg()
            }}
          />
        </ControlGrid>
      </div>

      <H2>SVG</H2>
      <motion.svg
        className="mx-auto"
        key={key}
        width="200"
        height="200"
        viewBox="0 0 200 200"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          stroke="#60a5fa"
          variants={drawVariants}
        />
      </motion.svg>
    </Page>
  )
}

/**
 * Internal util component defining a range between 0 and 1 with a step of .1.
 */
function PathRangeInput({
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
      <input
        id={id}
        value={value}
        type="range"
        min="0"
        max="1"
        step=".1"
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}
