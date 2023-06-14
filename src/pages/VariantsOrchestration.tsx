import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../components/Button.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useRerender } from '../utils/useRerender.ts'
import { H3 } from '../components/Headings.tsx'
import { TextInput } from '../components/TextInput.tsx'

const getParentVariants = (when: string, staggerChildren: number) => ({
  start: {
    backgroundColor: '#60a5fa',
  },
  end: {
    backgroundColor: '#f87171',
    transition: {
      duration: 1,
      staggerChildren,
      when,
    },
  },
})
const childVariants = {
  start: { height: 0 },
  end: { height: '100px' },
}

export function VariantsOrchestration() {
  const { key, rerender } = useRerender()
  const [when, setWhen] = useState<string>('afterChildren')
  const [staggerChildren, setStaggerChildren] = useState<string>('0.5')

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
        <Code />
      </div>

      <H3>Controls</H3>
      <div className="w-min m-auto mt-2 mb-4">
        <div className="grid grid-cols-2 mx-auto w-max">
          <label htmlFor="when">
            <code>when</code>
          </label>
          <select
            className="font-mono"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
          >
            <option value="beforeChildren">beforeChildren</option>
            <option value="afterChildren">afterChildren</option>
          </select>

          <label htmlFor="staggerChildren">
            <code>staggerChildren</code> (ms)
          </label>
          <TextInput
            id="staggerChildren"
            value={staggerChildren}
            type="number"
            min="0"
            step=".1"
            onChange={(e) => setStaggerChildren(e.target.value)}
          />
        </div>

        <Button className="mx-auto block my-2" onClick={rerender}>
          Re-mount component
        </Button>

        <H3>Animation</H3>
        <div className="w-min m-auto mt-2 mb-4" key={key}>
          <motion.div
            className="w-[200px] h-[200px] bg-red-400 flex mx-auto items-center justify-center"
            initial="start"
            animate="end"
            variants={getParentVariants(when, Number(staggerChildren))}
          >
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
      </div>
    </Page>
  )
}

function Code() {
  return (
    <SyntaxHighlighter language="jsx" style={dark} wrapLongLines={true}>
      {`const parentVariants = {
  start: {
    backgroundColor: '#60a5fa', // Blue
  },
  end: {
    backgroundColor: '#f87171', // Red
    transition: {
      // This delays the child animations until the parent's is complete.
      when: 'afterChildren',
      // This staggers the start of the child animation by .5s between
      // each child.
      staggerChildren: 0.5,
    },
  },
}
const childVariants = {
  start: { height: 0 },
  end: { height: '100px' },
}

<motion.div
  initial="start"
  animate="end"
  variants={parentVariants}
>
  <motion.div variants={childVariants} />
  <motion.div variants={childVariants} />
  <motion.div variants={childVariants} />
  <motion.div variants={childVariants} />
</motion.div>`}
    </SyntaxHighlighter>
  )
}
