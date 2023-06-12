import { HTMLAttributes } from 'react'

export function SubHeading({
  className,
  children,
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={'text-center text-lg font-bold mb-2' + (className ?? '')}>
      {children}
    </h2>
  )
}
