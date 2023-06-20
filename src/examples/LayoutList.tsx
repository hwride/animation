import { motion } from 'framer-motion'
import { useState } from 'react'
import { BorderButton } from '../components/Button.tsx'
import { CenteredCodeSample } from '../components/CodeSample.tsx'
import { ControlGrid } from '../components/ControlGrid.tsx'
import { LabelledSelect } from '../components/LabelledSelect.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'

export function LayoutList() {
  const [listItemIds, setListItemIds] = useState([1, 2, 3, 4, 5, 6, 7, 8])
  const [transitionType, setTransitionType] = useState('tween')

  return (
    <Page title="LayoutList">
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
      <CenteredCodeSample language="jsx">
        {`<ul>
${listItemIds
  .map((num) => `  <motion.li key=${num} layout> List item ${num} </motion.li>`)
  .join('\n')}
</ul>`}
      </CenteredCodeSample>

      <ControlGrid>
        <LabelledSelect
          id="transitionType"
          label={<code>transition.type</code>}
          selectClassName="font-mono"
          value={transitionType}
          onOptionChange={setTransitionType}
        >
          <option value="tween">tween</option>
          <option value="spring">spring</option>
        </LabelledSelect>
      </ControlGrid>
      <BorderButton
        className="mx-auto mt-2 block"
        onClick={() => {
          setListItemIds((prevIds) => shuffle(prevIds))
        }}
      >
        Randomise list
      </BorderButton>

      <div className="mx-auto mt-4 w-fit">
        <ul>
          {listItemIds.map((num) => (
            <motion.li
              key={num}
              layout
              className="border-1 mb-2 w-[15rem] rounded-lg border border-gray-500 bg-blue-100 px-4 py-2"
              transition={{
                type: transitionType,
                bounce: 0.3,
              }}
            >
              List item {num}
            </motion.li>
          ))}
        </ul>
      </div>
    </Page>
  )
}

function shuffle<T>(array: T[]) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}
