import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { H2 } from '../components/Headings.tsx'
import { Button } from '../components/Button.tsx'
import { Link } from '../components/Link.tsx'

export function Keyframes() {
  const [key, setKey] = useState(0)

  return (
    <div className="pt-2">
      <H2>Keyframes</H2>

      <p className="max-w-[80ch] mx-auto">
        You can use{' '}
        <Link href="https://www.framer.com/motion/animation/##keyframes">
          keyframes
        </Link>{' '}
        to animate through a list of values in sequence. Do this by setting an
        array of values for the <code>animate</code> property.
      </p>

      <Button
        className="mx-auto block"
        onClick={() => setKey((key) => key + 1)}
      >
        Remount component
      </Button>

      <div className="w-min m-auto mt-4 mb-4" key={key}>
        <AnimatePresence>
          <motion.div
            animate={{
              rotate: [0, 0, 180, 180, 270, 0],
            }}
            transition={{ duration: 3 }}
          >
            <pre>
              &lt;motion.div animate={'{{'} rotate: [0, 0, 180, 180, 270, 0]{' '}
              {'}}'}
              &gt;
            </pre>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
