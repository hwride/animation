import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { BorderButton } from '../components/Button.tsx'
import { CodeSample } from '../components/CodeSample.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'

export function Keyframes() {
  const [key, setKey] = useState(0)

  return (
    <Page title="Keyframes">
      <PageParagraph>
        You can use{' '}
        <Link
          href="https://www.framer.com/motion/animation/##keyframes"
          target="_blank"
        >
          keyframes
        </Link>{' '}
        to animate through a list of values in sequence. Do this by setting an
        array of values for the <code>animate</code> property.
      </PageParagraph>

      <BorderButton
        className="mx-auto block"
        onClick={() => setKey((key) => key + 1)}
      >
        Remount component
      </BorderButton>

      <div className="mx-auto my-4 w-fit" key={key}>
        <AnimatePresence>
          <motion.div
            animate={{
              rotate: [0, 0, 180, 180, 270, 0],
            }}
            transition={{ duration: 3 }}
          >
            <CodeSample language="jsx">
              {`<motion.div animate={{ 
  rotate: [
    0, 
    0, 
    180, 
    180, 
    270, 
    0
  ] 
}}>`}
            </CodeSample>
          </motion.div>
        </AnimatePresence>
      </div>
    </Page>
  )
}
