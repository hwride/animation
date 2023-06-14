import { ReactNode } from 'react'
import { H2 } from './Headings.tsx'
import { Button } from './Button.tsx'
import { useMenu } from './menu/MenuContext.tsx'
import { clsx } from '../utils/clsx.ts'

export function Page({
  title,
  className,
  children,
}: {
  title?: string
  className?: string
  children: ReactNode
}) {
  const { setMenuVisible } = useMenu()
  return (
    <div className={clsx(className, 'p-2')}>
      <Button className="sm:hidden" onClick={() => setMenuVisible(true)}>
        Show menu
      </Button>
      {title && <H2>{title}</H2>}
      {children}
    </div>
  )
}
