import { ReactNode } from 'react'
import { H2 } from './Headings.tsx'

export function Page({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="pt-2">
      <H2>{title}</H2>
      {children}
    </div>
  )
}
