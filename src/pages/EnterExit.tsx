import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { SubHeading } from '../components/SubHeading.tsx'
import { Button } from '../components/Button.tsx'
import { Link } from '../components/Link.tsx'

export function EnterExit() {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <SubHeading>Enter/exit animations</SubHeading>

      <p className="max-w-[80ch] mx-auto">
        You must use{' '}
        <Link href="https://www.framer.com/motion/animate-presence/">
          <code>AnimatePresence</code>
        </Link>{' '}
        when you want to have exit animations. This is because by default when
        an element is no longer rendered by React the element is instantly
        removed, so there's nothing to animate. <code>AnimatePresence</code>
        keeps the element around until the exit animation completes.
      </p>

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
              <pre>
                &lt;AnimatePresence&gt;
                <br />
                &nbsp;&nbsp;&lt;motion.div
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;initial={'{{'} opacity: 0 {'}}'}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;animate={'{{'} opacity: 1 {'}}'}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;exit={'{{'} opacity: 0 {'}}'}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;transition={'{{'} duration: 0.5 {'}}'}
                <br />
                &nbsp;&nbsp;{'}}'}&gt;
                <br />
                &lt;/AnimatePresence&gt;
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
