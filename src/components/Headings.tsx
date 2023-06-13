import { HTMLAttributes } from 'react'

export function H2({
  className,
  children,
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={'text-center text-lg font-bold mb-2' + (className ?? '')}>
      {children}
    </h2>
  )
}
export function H3({
  className,
  children,
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={'text-center text-md font-bold mb-2' + (className ?? '')}>
      {children}
    </h3>
  )
}
