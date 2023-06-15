import { AnimatePresence, motion } from 'framer-motion'
import { InputHTMLAttributes, ReactNode, useState } from 'react'
import { Button } from '../components/Button.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'
import { H3 } from '../components/Headings.tsx'
import { TextInput } from '../components/TextInput.tsx'

export function ListAddRemove() {
  const [i, setI] = useState(4)
  const [listItems, setListItems] = useState(() => [
    { id: 1, label: 'List item ' + 1 },
    { id: 2, label: 'List item ' + 2 },
    { id: 3, label: 'List item ' + 3 },
  ])
  const [duration, setDuration] = useState('.2')
  const [opacityDuration, setOpacityDuration] = useState('.2')
  const [transitionType, setTransitionType] = useState('tween')

  return (
    <Page title="List add/remove">
      <PageParagraph className="mb-2">
        Test example showing animating of list items in and out of a list.
      </PageParagraph>

      <H3>Controls</H3>
      <div className="mx-auto grid w-max grid-cols-2 gap-2">
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
      <Button
        className="mx-auto mt-2 block"
        onClick={() => {
          setListItems((listItems) =>
            listItems.concat([{ id: i, label: 'List item ' + i }])
          )
          setI((i) => i + 1)
        }}
      >
        Add item
      </Button>

      <div className="m-auto mb-4 mt-4 w-min">
        <ul>
          {/* Note position of AnimatePresence. It must be the direct parent
           of the elements that are animating out. */}
          <AnimatePresence initial={false}>
            {listItems.map((li) => {
              return (
                <motion.li
                  key={li.id}
                  className="mb-1 flex w-80 justify-between overflow-hidden rounded border border-gray-300 bg-blue-200 p-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    type: transitionType,
                    duration: Number(duration),
                    opacity: { duration: 0.1 },
                  }}
                >
                  {li.label}
                  <Button
                    className="ml-auto inline-block border-gray-200 bg-white text-black"
                    onClick={() =>
                      setListItems((lis) =>
                        lis.filter((liInner) => liInner.id !== li.id)
                      )
                    }
                  >
                    Remove
                  </Button>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </ul>
      </div>
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
