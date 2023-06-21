import { motion } from 'framer-motion'
import { useState } from 'react'
import { X as CloseIcon } from 'react-feather'
import { CenteredCodeSample } from '../components/CodeSample.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'

export function LayoutShared() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Page title="Layout shared" className="relative">
      <PageParagraph>
        You can use{' '}
        <Link
          href="https://www.framer.com/motion/layout-animations/#shared-layout-animations"
          target="_blank"
        >
          shared layout animations
        </Link>{' '}
        to automatically animate between completely different elements.
      </PageParagraph>
      <PageParagraph>
        Notice how you can't keep two elements with the same
        <code>layoutId</code> on the page at the same time. If you leave an
        element on the page when a new one is added, Framer Motion will
        crossfade between them.
      </PageParagraph>
      <PageParagraph>
        Also notice distortion such as stretching text can occur which might not
        be desirable. See the{' '}
        <Link
          href="https://www.framer.com/motion/layout-animations/#troubleshooting"
          target="_blank"
        >
          troubleshooting
        </Link>{' '}
        section for tips.
      </PageParagraph>

      <CenteredCodeSample language="jsx">{`{!modalOpen && <motion.article
  layoutId="modal"
  onClick={() => setModalOpen(true)}
>
  <h2 className="font-bold">Card title</h2>
  <p>Click for more info...</p>
</motion.article>}

{modalOpen && (
  <motion.div layoutId="modal">
    Modal title
    <button onClick={() => setModalOpen(false)}>
      <CloseIcon />
    </button>
  </motion.div>
)}`}</CenteredCodeSample>

      <div className="relative mx-auto mt-4 w-fit">
        {/* Included the removal of the card as it looks better, otherwise
            the cross-fade looks a bit strange. */}
        {!modalOpen && (
          <motion.article
            layoutId="modal"
            className="h-[200px] rounded-lg border border-gray-400 bg-white p-6"
            onClick={() => setModalOpen(true)}
          >
            <h2 className="font-bold">Card title</h2>
            <p>Click for more info...</p>
          </motion.article>
        )}
        {/*<AnimatePresence>*/}
        {modalOpen && (
          <motion.div
            layoutId="modal"
            className="absolute left-[-250px] top-[-250px] h-[300px] w-[500px] rounded-lg border border-gray-400 bg-white"
          >
            <div className="spac-b flex justify-between p-4">
              <h2 className="font-bold">Card title</h2>
              <button onClick={() => setModalOpen(false)}>
                <CloseIcon />
              </button>
            </div>
          </motion.div>
        )}
        {/*</AnimatePresence>*/}
      </div>
    </Page>
  )
}
