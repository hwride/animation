import { motion } from 'framer-motion'
import { Button } from '../components/Button.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
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
        <Link href="https://www.framer.com/motion/animation/#variants">
          variants
        </Link>{' '}
        to share animation property settings. The way it works is you define
        some variants with names and pass them to a motion element. Then for
        your animation properties like <code>initial</code> and{' '}
        <code>animate</code>, instead of defining objects you can just reference
        these names.
      </PageParagraph>

      <div className="mb-4 block mx-auto w-fit">
        <SyntaxHighlighter language="jsx" style={dark}>
          {codeStr}
        </SyntaxHighlighter>
      </div>

      <Button className="mx-auto block mt-2" onClick={rerender}>
        Re-mount component
      </Button>
      <div className="w-min m-auto mt-4 mb-4" key={key}>
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
