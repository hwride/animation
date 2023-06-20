import { motion } from 'framer-motion'
import { useState } from 'react'
import { BorderButton } from '../components/Button.tsx'
import { CenteredCodeSample } from '../components/CodeSample.tsx'
import { ControlGrid } from '../components/ControlGrid.tsx'
import { LabelledSelect } from '../components/LabelledSelect.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'

const dirOpts = ['row', 'column']
const alignOpts = ['flex-start', 'center', 'flex-end', 'stretch']
const justifyOpts = ['flex-start', 'center', 'flex-end']
export function Layout() {
  const [flexDirection, setFlexDirection] = useState('column')
  const [alignItems, setAlignItems] = useState('center')
  const [justifyContent, setJustifyContent] = useState('center')

  return (
    <Page title="Layout">
      <PageParagraph>
        You can use{' '}
        <Link
          href="https://www.framer.com/motion/layout-animations/"
          target="_blank"
        >
          layout animations
        </Link>{' '}
        to automatically animate between layout changes.
      </PageParagraph>

      {/* min-width to stop code sample size changing when options change. */}
      <CenteredCodeSample language="jsx" className="min-w-[320px]">
        {`<div
  style={{ 
    display: 'flex';
    flexDirection: ${flexDirection};
    alignItems: ${alignItems};
    justifyContent: ${justifyContent};
  }}
>
  <motion.div layout />
  <motion.div layout />
  <motion.div layout />
  <motion.div layout />
</div>`}
      </CenteredCodeSample>

      <ControlGrid>
        <LabelledSelect
          id="flexDirection"
          label={<code>flex-direction</code>}
          selectClassName="font-mono"
          value={flexDirection}
          onOptionChange={setFlexDirection}
        >
          <option value="row">row</option>
          <option value="column">column</option>
        </LabelledSelect>
        <LabelledSelect
          id="alignItems"
          label={<code>align-items</code>}
          selectClassName="font-mono"
          value={alignItems}
          onOptionChange={setAlignItems}
        >
          <option value="flex-start">flex-start</option>
          <option value="center">center</option>
          <option value="flex-end">flex-end</option>
          <option value="stretch">stretch</option>
        </LabelledSelect>
        <LabelledSelect
          id="justifyContent"
          label={<code>justify-content</code>}
          selectClassName="font-mono"
          value={justifyContent}
          onOptionChange={setJustifyContent}
        >
          <option value="flex-start">flex-start</option>
          <option value="center">center</option>
          <option value="flex-end">flex-end</option>
        </LabelledSelect>
      </ControlGrid>
      <BorderButton
        className="mx-auto mt-2 block"
        onClick={() => {
          setFlexDirection(getRandomArrayEntry(dirOpts))
          setAlignItems(getRandomArrayEntry(alignOpts))
          setJustifyContent(getRandomArrayEntry(justifyOpts))
        }}
      >
        Randomise
      </BorderButton>

      <div className="mx-auto mt-4 w-fit">
        <div
          className="flex h-[300px] w-[300px] flex-col items-start gap-2 rounded-2xl border border-gray-200 px-4 py-2"
          style={{
            flexDirection: flexDirection as any,
            alignItems,
            justifyContent,
          }}
        >
          <motion.div
            layout
            className="min-h-[2rem] min-w-[2rem] bg-blue-200"
          />
          <motion.div
            layout
            className="min-h-[2rem] min-w-[2rem] bg-blue-200"
          />
          <motion.div
            layout
            className="min-h-[2rem] min-w-[2rem] bg-blue-200"
          />
          <motion.div
            layout
            className="min-h-[2rem] min-w-[2rem] bg-blue-200"
          />
        </div>
      </div>
    </Page>
  )
}

function getRandomArrayEntry<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}
