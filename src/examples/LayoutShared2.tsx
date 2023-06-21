import { motion } from 'framer-motion'
import { useState } from 'react'
import { BorderButton } from '../components/Button.tsx'
import { CenteredCodeSample } from '../components/CodeSample.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'

const els = [
  <motion.div
    key={1}
    style={{ width: 50, height: 50, background: 'red' }}
    layoutId="layout1"
  />,
  <motion.div
    key={2}
    style={{
      width: 300,
      height: 300,
      background: 'green',
      borderRadius: '100%',
    }}
    layoutId="layout1"
  />,
  <motion.h2 key={3} layoutId="layout1">
    Some text
  </motion.h2>,
  <motion.ul layoutId="layout1" className="border border-gray-200 px-4 py-2">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </motion.ul>,
]

export function LayoutShared2() {
  const [elIndex, setElIndex] = useState(0)

  return (
    <Page title="Layout shared">
      <PageParagraph>
        You can use{' '}
        <Link
          href="https://www.framer.com/motion/layout-animations/#shared-layout-animations"
          target="_blank"
        >
          shared layout animations
        </Link>{' '}
        to automatically animate between completely different elements.
      </PageParagraph>
      <PageParagraph>
        Notice how it will animate position and size, but not attributes like
        background colour.
      </PageParagraph>

      <CenteredCodeSample language="jsx">{`const els = [
  <motion.div key={1} layoutId="layout1" className='redSquare' />,
  <motion.div key={2} layoutId="layout1" className='greenCircle' />,
  <motion.h2 key={3} layoutId="layout1">Some text</motion.h2>,
  <motion.ul layoutId="layout1">
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </motion.ul>
]

function LayoutSharedExample() {
  const [elIndex, setElIndex] = useState(0)
  return <>
    <BorderButton onClick={() => setElIndex(i => (i + 1) % els.length)}>
      Move to next element
    </BorderButton>
    {els[elIndex]}
  </>
}`}</CenteredCodeSample>

      <BorderButton
        className="mx-auto mt-2 block"
        onClick={() => setElIndex((i) => (i + 1) % els.length)}
      >
        Move to next element
      </BorderButton>
      {/* Min height so avoid scroll coming and going as size changes. */}
      <div className="mx-auto mt-4 min-h-[300px] w-fit">{els[elIndex]}</div>
    </Page>
  )
}
