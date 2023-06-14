import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function CodeSample({ children, ...overrides }: SyntaxHighlighterProps) {
  // wrapLongLines helps with mobile view.
  return (
    <SyntaxHighlighter style={dark} wrapLongLines={true} {...overrides}>
      {children}
    </SyntaxHighlighter>
  )
}
