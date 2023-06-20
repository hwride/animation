import { motion } from 'framer-motion'
import { CenteredCodeSample } from '../components/CodeSample.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'

export function Gestures() {
  return (
    <Page title="Gestures">
      <PageParagraph>
        You can use{' '}
        <Link href="https://www.framer.com/motion/gestures/" target="_blank">
          Gestures
        </Link>{' '}
        to animate things like hover, focus, tap, pan and drag.
      </PageParagraph>
      <PageParagraph>
        Note differences on mobile where the hover animation won't trigger until
        the button is pressed.
      </PageParagraph>

      <CenteredCodeSample language="jsx">
        {`<motion.button
  whileHover={{ scale: 1.5 }}
  whileFocus={{ scale: 1.5 }}
  // Tap triggers when you click/tap on an element.
  whileTap={{ scale: 0.9 }}
  transition={{ 
    type: 'spring', 
    stiffness: 400, 
    damping: 17 
  }}
>
  Click me!
</motion.button>`}
      </CenteredCodeSample>

      <div className="mx-auto mt-16 w-fit">
        <motion.button
          className="rounded-2xl border border-gray-200 px-4 py-2"
          whileHover={{ scale: 1.5 }}
          whileFocus={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          Click me!
        </motion.button>
      </div>
    </Page>
  )
}
