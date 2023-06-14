import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../components/Button.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

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

      <div className="mx-auto w-fit">
        <SyntaxHighlighter language="jsx" style={dark}>
          {`const parentVariants = {
  start: { backgroundColor: '#60a5fa' },
  end: { backgroundColor: '#f87171' },
}
const childVariants = {
  start: { height: 0 },
  end: { height: '100px' },
}
const grandChildVariants = {
  start: { width: 0 },
  end: { width: '20px' },
}

<motion.div
  initial="start"
  animate="end"
  variants={parentVariants}
>
  <motion.div variants={childVariants}>
    <motion.div variants={grandChildVariants}/>
  </motion.div>
  <motion.div variants={childVariants} />
  <motion.div variants={childVariants} />
  <motion.div variants={childVariants} />
</motion.div>`}
        </SyntaxHighlighter>
      </div>

      <div className="m-auto mb-4 mt-2 w-min" key={key}>
        <Button
          className="mx-auto mb-2 block"
          onClick={() => setKey((key) => key + 1)}
        >
          Re-mount component
        </Button>
        <motion.div
          className="mx-auto flex h-[200px] w-[200px] items-center justify-center bg-red-400"
          initial="start"
          animate="end"
          variants={parentVariants}
          transition={{ duration: 1 }}
        >
          {[1, 2, 3].map((id) => (
            <motion.div
              key={id}
              className="mr-1 inline-block w-[30px] bg-green-400"
              variants={childVariants}
              transition={{ duration: 1 }}
            />
          ))}
          <motion.div
            className="mr-1 flex w-[30px] items-center justify-center bg-green-400"
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
        </motion.div>
      </div>
    </Page>
  )
}
