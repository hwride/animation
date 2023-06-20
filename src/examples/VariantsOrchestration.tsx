import { motion } from 'framer-motion'
import { useState } from 'react'
import { BorderButton } from '../components/Button.tsx'
import { CenteredCodeSample } from '../components/CodeSample.tsx'
import { ControlGrid } from '../components/ControlGrid.tsx'
import { H3 } from '../components/Headings.tsx'
import { LabelledNumberInput } from '../components/LabelledNumberInput.tsx'
import { LabelledSelect } from '../components/LabelledSelect.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'
import { useRerender } from '../utils/useRerender.ts'

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
  const [staggerChildren, setStaggerChildren] = useState(0.5)

  return (
    <Page title="Variants orchestration">
      <PageParagraph>
        Variants also have{' '}
        <Link
          href="https://www.framer.com/motion/animation/##orchestration"
          target="_blank"
        >
          orchestration
        </Link>{' '}
        properties. These allow you to control the order in which different
        animations happen. For example a parent before or after it's children,
        or staggering children.
      </PageParagraph>

      <Code />

      <H3>Controls</H3>
      <ControlGrid>
        <LabelledSelect
          id="when"
          label={<code>when</code>}
          selectClassName="font-mono"
          value={when}
          onOptionChange={setWhen}
        >
          <option value="beforeChildren">beforeChildren</option>
          <option value="afterChildren">afterChildren</option>
        </LabelledSelect>

        <LabelledNumberInput
          id="staggerChildren"
          label={<code>staggerChildren</code>}
          type="number"
          min="0"
          step=".1"
          value={staggerChildren}
          onNumChange={setStaggerChildren}
        />
      </ControlGrid>

      <BorderButton className="mx-auto my-2 block" onClick={rerender}>
        Re-mount component
      </BorderButton>

      <div className="m-auto mb-4 mt-2 w-fit">
        <H3>Animation</H3>
        <div className="m-auto mb-4 mt-2 w-min" key={key}>
          <motion.div
            className="mx-auto flex h-[200px] w-[200px] items-center justify-center bg-red-400"
            initial="start"
            animate="end"
            variants={getParentVariants(when, Number(staggerChildren))}
          >
            {[1, 2, 3, 4].map((id) => (
              <motion.div
                key={id}
                className="mr-1 inline-block w-[30px] bg-green-400"
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
    <CenteredCodeSample language="jsx">
      {`const parentVariants = {
  start: {
    backgroundColor: '#60a5fa', // Blue
  },
  end: {
    backgroundColor: '#f87171', // Red
    transition: {
      // This delays the child animations 
      // until the parent's is complete.
      when: 'afterChildren',
      // This staggers the start of the child 
      // animations by .5s between each child.
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
    </CenteredCodeSample>
  )
}
