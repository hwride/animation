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
        'underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
      )}
      {...rest}
    >
      {children}
    </a>
  )
}
