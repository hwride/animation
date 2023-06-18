import { motion } from 'framer-motion'
import { useState } from 'react'
import { BorderButton } from '../components/Button.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'
import { CodeSample } from '../components/CodeSample.tsx'

export function TriggerAnimation() {
  const [animate, setAnimate] = useState<boolean>(false)

  return (
    <Page title="Trigger animation">
      <PageParagraph>
        This is an example showing triggering an animation when you want it,
        rather than on component mount.
      </PageParagraph>

      <div className="mx-auto w-fit">
        <CodeSample language="jsx">
          {`const [animate, setAnimate] = useState(false)

return <>
  <motion.div
    initial={{ 
      width: 50,
      height: 50 
    }}
    animate={ animate ? { 
      width: 200, 
      height: 200 
    } : undefined }
  />
  <button onClick={() => 
      setAnimate(animate => !animate)}>
    Toggle animation
  </button>
</>`}
        </CodeSample>
      </div>

      <div className="m-auto mb-4 mt-2 w-fit">
        <BorderButton
          className="mx-auto mb-2 block"
          onClick={() => setAnimate((animate) => !animate)}
        >
          Toggle animation
        </BorderButton>
        <motion.div
          className="mx-auto bg-blue-400"
          initial={{
            width: 50,
            height: 50,
          }}
          animate={
            animate
              ? {
                  width: 200,
                  height: 200,
                }
              : undefined
          }
          transition={{ duration: 1 }}
        />
      </div>
    </Page>
  )
}
