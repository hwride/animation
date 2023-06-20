import { AnimatePresence, motion } from 'framer-motion'
import { InputHTMLAttributes, ReactNode, useState } from 'react'
import { BorderButton } from '../components/Button.tsx'
import { CenteredCodeSample } from '../components/CodeSample.tsx'
import { H3 } from '../components/Headings.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'
import { TextInput } from '../components/TextInput.tsx'

export function ListAddRemove() {
  const [i, setI] = useState(4)
  const [listItems, setListItems] = useState(() => [
    { id: 1, label: 'List item ' + 1 },
    { id: 2, label: 'List item ' + 2 },
    { id: 3, label: 'List item ' + 3 },
  ])
  const [duration, setDuration] = useState('.5')
  const [opacityDuration, setOpacityDuration] = useState('.2')
  const [transitionType, setTransitionType] = useState('spring')

  return (
    <Page title="List add/remove">
      <PageParagraph>
        Test example showing animating of list items in and out of a list.
      </PageParagraph>

      <PageParagraph className="mb-2">
        When you are animating height with Framer Motion there is a gotcha to be
        aware of. Having spacing such as padding class on the element that is
        animating can cause the height animation calculations to mess up and
        look jumpy. This is why in this example the padding is applied on an
        extra element below the <code>motion.li</code>.
      </PageParagraph>

      <H3>Controls</H3>
      <div className="mx-auto grid w-fit grid-cols-2 gap-2">
        <label htmlFor="transitionType">
          <code>transition.type</code>
        </label>
        <select
          className="border border-gray-100 font-mono"
          value={transitionType}
          onChange={(e) => setTransitionType(e.target.value)}
        >
          <option value="spring">spring</option>
          <option value="tween">tween</option>
        </select>

        <LabelledTextInput
          id="duration"
          type="number"
          min={0}
          step={0.05}
          max={20}
          label={
            <>
              <code>duration</code> (ms)
            </>
          }
          onChangeValue={setDuration}
          value={duration}
        />
        <LabelledTextInput
          id="opacityDuration"
          type="number"
          min={0}
          step={0.05}
          max={20}
          label={
            <>
              <code>opacity.duration</code> (ms)
            </>
          }
          onChangeValue={setOpacityDuration}
          value={opacityDuration}
        />
      </div>
      <BorderButton
        className="mx-auto mt-2 block"
        onClick={() => {
          setListItems((listItems) =>
            listItems.concat([{ id: i, label: 'List item ' + i }])
          )
          setI((i) => i + 1)
        }}
      >
        Add item
      </BorderButton>

      <div className="m-auto mb-4 mt-4 w-fit">
        <ul>
          {/* Note position of AnimatePresence. It must be the direct parent
           of the elements that are animating out. */}
          <AnimatePresence initial={false}>
            {listItems.map((li) => {
              return (
                <motion.li
                  key={li.id}
                  className="overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    type: transitionType,
                    duration: Number(duration),
                    opacity: { duration: 0.1 },
                  }}
                >
                  <div className="mb-1 flex w-80 justify-between rounded border border-gray-300 bg-blue-200 p-1">
                    {li.label}
                    <BorderButton
                      className="ml-auto inline-block border-gray-200 bg-white text-black"
                      onClick={() =>
                        setListItems((lis) =>
                          lis.filter((liInner) => liInner.id !== li.id)
                        )
                      }
                    >
                      Remove
                    </BorderButton>
                  </div>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </ul>
      </div>

      <CenteredCodeSample language="jsx">
        {`<ul>
  <AnimatePresence initial={false}>
    {listItems.map((li) => (
      <motion.li
        className="overflow-hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{
          type: 'spring', // Note spring is the default for height
          duration: 0.4,
          opacity: { duration: 0.1 },
        }}
      >
        {/* Note the spacing being applied internally here */}
        <div className="mb-1 p-1">
          {li.label}
          <button>Remove</button>
        </div>
      </motion.li>
    ))}
  </AnimatePresence>
</ul>`}
      </CenteredCodeSample>
    </Page>
  )
}

function LabelledTextInput({
  id,
  label,
  onChangeValue,
  ...rest
}: {
  id: string
  label: ReactNode
  onChangeValue: (v: string) => void
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <TextInput
        id={id}
        type="number"
        {...rest}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </>
  )
}
