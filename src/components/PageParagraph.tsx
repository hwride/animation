import { ReactNode } from 'react'
import { clsx } from 'clsx'

export function PageParagraph({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <p className={clsx(className, 'max-w-[80ch] mx-auto mb-2')}>{children}</p>
  )
}
