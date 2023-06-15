import {
  PrismLight as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'

SyntaxHighlighter.registerLanguage('jsx', jsx)

export function CodeSample({ children, ...overrides }: SyntaxHighlighterProps) {
  // wrapLongLines helps with mobile view.
  return (
    <SyntaxHighlighter style={prism} wrapLongLines={true} {...overrides}>
      {children}
    </SyntaxHighlighter>
  )
}
