import { clsx } from 'clsx'
import { ButtonHTMLAttributes } from 'react'
export function Button({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        className,
        'rounded border border-black px-2 hover:bg-gray-100'
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
