import { motion } from 'framer-motion'
import { BorderButton } from '../components/Button.tsx'
import { CenteredCodeSample } from '../components/CodeSample.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'
import { useRerender } from '../utils/useRerender.ts'

const variants = {
  heightSmall: { height: 0 },
  heightBig: { height: '200px' },
}

const codeStr = `const variants = {
  heightSmall: { height: 0 },
  heightBig: { height: '200px' },
}

<motion.div
  className="w-[200px] bg-blue-400"
  initial="heightSmall"
  animate="heightBig"
  variants={variants}
/> `

export function VariantsBasic() {
  const { key, rerender } = useRerender()
  return (
    <Page title="Variants basic">
      <PageParagraph>
        You can use{' '}
        <Link
          href="https://www.framer.com/motion/animation/#variants"
          target="_blank"
        >
          variants
        </Link>{' '}
        to share animation property settings. The way it works is you define
        some variants with names and pass them to a motion element. Then for
        your animation properties like <code>initial</code> and{' '}
        <code>animate</code>, instead of defining objects you can just reference
        these names.
      </PageParagraph>

      <CenteredCodeSample className="mb-4" language="jsx">
        {codeStr}
      </CenteredCodeSample>

      <BorderButton className="mx-auto mt-2 block" onClick={rerender}>
        Re-mount component
      </BorderButton>
      <div className="m-auto mb-4 mt-4 w-min" key={key}>
        <motion.div
          className="w-[200px] bg-blue-400"
          initial="heightSmall"
          animate="heightBig"
          variants={variants}
        />
      </div>
    </Page>
  )
}
