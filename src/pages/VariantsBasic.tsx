import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../components/Button.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'

const variants = {
  heightSmall: { height: 0 },
  heightBig: { height: '200px' },
}

export function VariantsBasic() {
  const [key, setKey] = useState(0)

  return (
    <Page title="Variants basic">
      <PageParagraph>
        You can use{' '}
        <Link href="https://www.framer.com/motion/animation/#variants">
          variants
        </Link>{' '}
        to share animation property settings. The way it works is you define
        some variants with names and pass them to a motion element. Then for
        your animation properties like <code>initial</code> and{' '}
        <code>animate</code>, instead of defining objects you can just reference
        these names.
      </PageParagraph>

      <Button
        className="mx-auto block mt-2"
        onClick={() => setKey((key) => key + 1)}
      >
        Re-mount
      </Button>

      <div className="w-min m-auto mt-4 mb-4" key={key}>
        <code className="mb-4 block">
          <pre>
            const variants = {'{'}
            <br />
            &nbsp;&nbsp;heightSmall: {'{'} height: 0 {'}'},<br />
            &nbsp;&nbsp;heightBig: {'{'} height: '200px' <br />
            {'}'};
            <br />
            <br />
            {'<'}motion.div
            <br />
            &nbsp;&nbsp;initial="heightSmall" <br />
            &nbsp;&nbsp;animate="heightBig" <br />
            &nbsp;&nbsp;variants={'{'}variants
            {'}'} /{'>'}
          </pre>
        </code>
        <motion.div
          className="w-[200px] bg-blue-400"
          initial="heightSmall"
          animate="heightBig"
          variants={variants}
        />
      </div>
    </Page>
  )
}
