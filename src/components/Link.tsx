import { clsx } from 'clsx'
import { AnchorHTMLAttributes } from 'react'
export function Link({
  className,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={clsx(
        className,
        'text-blue-600 underline visited:text-purple-600 hover:text-blue-800'
      )}
      {...rest}
    >
      {children}
    </a>
  )
}
