import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../components/Button.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const parentVariants = {
  start: {
    backgroundColor: '#60a5fa',
    transition: {
      when: 'afterChildren',
    },
  },
  end: {
    backgroundColor: '#f87171',
    transition: {
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
}
const childVariants = {
  start: { height: 0 },
  end: { height: '100px' },
}

export function VariantsOrchestration() {
  const [key, setKey] = useState(0)

  return (
    <Page title="Variants orchestration">
      <PageParagraph>
        Variants also have{' '}
        <Link href="https://www.framer.com/motion/animation/##orchestration">
          orchestration
        </Link>{' '}
        properties. These allow you to control the order in which different
        animations happen. For example a parent before or after it's children,
        or staggering children.
      </PageParagraph>

      <div className="mx-auto w-fit">
        <SyntaxHighlighter language="jsx" style={dark}>
          {`const parentVariants = {
  start: {
    backgroundColor: '#60a5fa',
    // transition: {
    //   when: 'afterChildren',
    // },
  },
  end: {
    backgroundColor: '#f87171',
    transition: {
      // This delays the child animations until the parent's is complete.
      when: 'beforeChildren',
      // This staggers the start of the child animation by .3s between
      // each child.
      staggerChildren: 0.3,
    },
  },
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

      <div className="w-min m-auto mt-2 mb-4" key={key}>
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
          {[1, 2, 3].map((id) => (
            <motion.div
              key={id}
              className="w-[30px] bg-green-400 inline-block mr-1"
              variants={childVariants}
              transition={{ duration: 1 }}
            />
          ))}
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
        </motion.div>
      </div>
    </Page>
  )
}
