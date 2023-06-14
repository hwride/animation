import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../components/Button.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'

const parentVariants = {
  start: { backgroundColor: '#60a5fa' },
  end: { backgroundColor: '#f87171' },
}
const childVariants = {
  start: { height: 0 },
  end: { height: '100px' },
}

export function VariantsPropagation() {
  const [key, setKey] = useState(0)

  return (
    <Page title="Variants propagation">
      <PageParagraph>
        Variants also have{' '}
        <Link href="https://www.framer.com/motion/animation/##propagation">
          propagation
        </Link>{' '}
        properties. If you assign a variant name to an animation property, all
        descendant elements will also automatically assign the same variant name
        to that animation. All you need to do on descendants is provide variants
        with matching names.
      </PageParagraph>
      <PageParagraph>
        See below for an example. Notice how the only thing provided to the
        children are variants, but animations still apply.
      </PageParagraph>
      <PageParagraph>
        Also notice that grandchildren are also affected.
      </PageParagraph>
      <PageParagraph>
        This can be useful for declaratively specifying certain animations
        should happen at the same time.
      </PageParagraph>

      <div className="w-min m-auto mt-4 mb-4" key={key}>
        <Button
          className="mx-auto block mb-2"
          onClick={() => setKey((key) => key + 1)}
        >
          Re-mount component
        </Button>
        <motion.div
          className="w-[200px] h-[200px] bg-red-400 flex mx-auto items-center justify-center"
          initial="start"
          animate="end"
          variants={parentVariants}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-[30px] bg-green-400 mr-1 flex items-center justify-center"
            variants={childVariants}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="h-[50px] bg-blue-400"
              variants={{
                start: { width: 0 },
                end: { width: '20px' },
              }}
              transition={{ duration: 1 }}
            ></motion.div>
          </motion.div>
          {[1, 2, 3, 4].map((id) => (
            <motion.div
              key={id}
              className="w-[30px] bg-green-400 inline-block mr-1"
              variants={childVariants}
              transition={{ duration: 1 }}
            />
          ))}
        </motion.div>
      </div>
    </Page>
  )
}
