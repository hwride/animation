import { motion } from 'framer-motion'
import { useState } from 'react'
import { CenteredCodeSample } from '../components/CodeSample.tsx'
import { H3 } from '../components/Headings.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'

export function GesturesDrag() {
  const [drag, setDrag] = useState('true')

  return (
    <Page title="Gestures">
      <PageParagraph>
        You can use a simple{' '}
        <Link
          href="https://www.framer.com/motion/gestures/#drag"
          target="_blank"
        >
          <code>drag</code>
        </Link>{' '}
        to allow elements to be dragged around the page. This is achieved with{' '}
        <code>transform: translateX/translateY</code>.
      </PageParagraph>

      <H3>Controls</H3>
      <div className="mx-auto mb-4 mt-2 w-fit">
        <div className="grid grid-cols-2">
          <label htmlFor="drag">
            <code>drag</code>
          </label>
          <select
            id="drag"
            className="font-mono"
            value={drag}
            onChange={(e) => setDrag(e.target.value)}
          >
            <option value="false">false</option>
            <option value="true">true</option>
            <option value="x">x</option>
            <option value="y">y</option>
          </select>
        </div>
      </div>

      <motion.div
        className="mx-auto mt-16 w-fit"
        drag={drag === 'true' ? true : (drag as boolean | 'x' | 'y')}
      >
        <CenteredCodeSample language="jsx">{`<motion.div drag={${drag}}>
  ..
</motion.div>`}</CenteredCodeSample>
      </motion.div>
    </Page>
  )
}
