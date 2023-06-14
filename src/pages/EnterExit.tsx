import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../components/Button.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function EnterExit() {
  const [visible, setVisible] = useState(true)

  return (
    <Page title="Enter/exit">
      <PageParagraph>
        You must use{' '}
        <Link href="https://www.framer.com/motion/animate-presence/">
          <code>AnimatePresence</code>
        </Link>{' '}
        when you want to have exit animations. This is because by default when
        an element is no longer rendered by React the element is instantly
        removed, so there's nothing to animate. <code>AnimatePresence</code>
        keeps the element around until the exit animation completes.
      </PageParagraph>

      <Button
        className="mx-auto block"
        onClick={() => setVisible((visible) => !visible)}
      >
        Toggle visible
      </Button>

      <div className="w-min m-auto mt-4 mb-4">
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SyntaxHighlighter language="jsx" style={dark}>
                {`<AnimatePresence>
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  />
</AnimatePresence>`}
              </SyntaxHighlighter>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Page>
  )
}
