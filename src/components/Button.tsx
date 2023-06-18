import { clsx } from 'clsx'
import { ButtonHTMLAttributes } from 'react'

export function Button({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(className, 'px-2 hover:bg-gray-100')} {...rest}>
      {children}
    </button>
  )
}

export function BorderButton({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      className={clsx(className, 'rounded border border-black')}
      {...rest}
    >
      {children}
    </Button>
  )
}
