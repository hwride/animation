import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { X as CloseIcon } from 'react-feather'
import { CenteredCodeSample } from '../components/CodeSample.tsx'
import { ControlGrid } from '../components/ControlGrid.tsx'
import { useBoolLabelledSelect } from '../components/LabelledSelect.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'

export function LayoutSharedModal() {
  const [modalOpen, setModalOpen] = useState(false)
  const [hideContentWhenAnimatingJsx, hideContentWhenAnimating] =
    useBoolLabelledSelect({
      id: 'hideContentWhenAnimating',
      label: 'Hide content when animating',
      initialValue: true,
      selectClassName: 'font-mono',
    })
  const [modalAnimating, setModalAnimating] = useState(false)
  const [cardAnimating, setCardAnimating] = useState(false)

  return (
    <Page title="Layout shared" className="relative h-full overflow-y-scroll">
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
        section for tips. One way around this is to hide the content while
        animation happens. Be careful about removing the elements or using{' '}
        <code>display: none</code> to achieve this though, as this seems to mess
        up Framer Motion.
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

      <ControlGrid>{hideContentWhenAnimatingJsx}</ControlGrid>

      <div className="relative mx-auto mt-4 min-h-[200px]">
        {/* Included the removal of the card as it looks better, otherwise
            the cross-fade looks a bit strange. */}
        {!modalOpen && (
          <motion.article
            layoutId="modal"
            transition={{ duration: 0.7, type: 'spring' }}
            className="mx-auto h-[200px] w-fit rounded-lg border border-gray-400 bg-white p-6"
            onClick={() => setModalOpen(true)}
            onLayoutAnimationStart={() => setCardAnimating(true)}
            onLayoutAnimationComplete={() => setCardAnimating(false)}
          >
            <div
              className={clsx({
                invisible: hideContentWhenAnimating && cardAnimating,
              })}
            >
              <h2 className="font-bold">Card title</h2>
              <p>Click for more info...</p>
            </div>
          </motion.article>
        )}

        {modalOpen && (
          <motion.div
            layoutId="modal"
            className="absolute left-0 right-0 top-[-250px] mx-auto h-[300px] w-[500px] max-w-full rounded-lg border border-gray-400 bg-white"
            onLayoutAnimationStart={() => setModalAnimating(true)}
            onLayoutAnimationComplete={() => setModalAnimating(false)}
          >
            <div
              className={clsx('spac-b flex justify-between p-4', {
                invisible: hideContentWhenAnimating && modalAnimating,
              })}
            >
              <h2 className="font-bold">Card title</h2>
              <button onClick={() => setModalOpen(false)}>
                <CloseIcon />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </Page>
  )
}
