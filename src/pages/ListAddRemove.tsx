import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../components/Button.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'

export function ListAddRemove() {
  const [i, setI] = useState(4)
  const [listItems, setListItems] = useState(() => [
    { id: 1, label: 'List item ' + 1 },
    { id: 2, label: 'List item ' + 2 },
    { id: 3, label: 'List item ' + 3 },
  ])

  return (
    <Page title="List add/remove">
      <PageParagraph className="mb-2">
        Test example showing animating of list items in and out of a list.
      </PageParagraph>

      <Button
        className="mx-auto block"
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
                  transition={{ duration: 0.2 }}
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
