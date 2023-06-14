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
        'border border-black px-2 rounded hover:bg-gray-100'
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
