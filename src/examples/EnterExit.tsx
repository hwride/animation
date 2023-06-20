import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { BorderButton } from '../components/Button.tsx'
import { CodeSample } from '../components/CodeSample.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'

export function EnterExit() {
  const [visible, setVisible] = useState(true)

  return (
    <Page title="Enter/exit">
      <PageParagraph>
        You must use{' '}
        <Link
          href="https://www.framer.com/motion/animate-presence/"
          target="_blank"
        >
          <code>AnimatePresence</code>
        </Link>{' '}
        when you want to have exit animations. This is because by default when
        an element is no longer rendered by React the element is instantly
        removed, so there's nothing to animate. <code>AnimatePresence</code>{' '}
        keeps the element around until the exit animation completes.
      </PageParagraph>

      <BorderButton
        className="mx-auto block"
        onClick={() => setVisible((visible) => !visible)}
      >
        Toggle visible
      </BorderButton>

      <div className="mx-auto my-4 w-fit">
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CodeSample language="jsx">
                {`<AnimatePresence>
  {visible && <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  />}
</AnimatePresence>`}
              </CodeSample>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Page>
  )
}
