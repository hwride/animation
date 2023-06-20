import { motion } from 'framer-motion'
import { CenteredCodeSample } from '../components/CodeSample.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'

export function GesturesPropagation() {
  return (
    <Page title="Gestures">
      <PageParagraph>
        You can use variant propagation to have gestures animate different
        things at the same time. Here when you hover and tap the button the SVG
        path animates.
      </PageParagraph>

      <CenteredCodeSample language="jsx">
        {`<motion.button
  whileHover="hover"
  whileTap="tap"
  variants={{
    hover: { scale: 1.2 },
    tap: { scale: 0.9 },
  }}
>
  <svg>
    <motion.circle
      initial={{ pathLength: 0 }}
      variants={{
        hover: { pathLength: 0.3 },
        tap: { pathLength: 1 },
      }}
    />
  </svg>
</motion.button>`}
      </CenteredCodeSample>
      <div className="mx-auto mt-4 w-fit">
        <motion.button
          className="border border-gray-200 p-1"
          whileHover="hover"
          whileTap="tap"
          variants={{
            hover: {
              scale: 1.1,
            },
            tap: {
              scale: 0.9,
            },
          }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 200 200"
            className="outline-0"
          >
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              stroke="#60a5fa"
              style={{
                fill: 'transparent',
                strokeWidth: 10,
                transform: 'rotate(-90deg)',
                transformOrigin: 'center',
              }}
              initial={{ pathLength: 0 }}
              variants={{
                hover: { pathLength: 0.3 },
                tap: { pathLength: 1 },
              }}
            />
          </svg>
        </motion.button>
      </div>
    </Page>
  )
}
