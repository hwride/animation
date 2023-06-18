import { clsx } from 'clsx'
import { HTMLMotionProps, motion } from 'framer-motion'
import { ButtonHTMLAttributes } from 'react'

const iconButtonClasses = 'block rounded p-1 text-gray-600 hover:bg-gray-200'

export function IconButton({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  'aria-label': string // Make this required.
}) {
  return (
    <button className={clsx(iconButtonClasses, className)} {...rest}>
      {children}
    </button>
  )
}

/**
 * An icon button with support for Framer Motion.
 */
export function MotionIconButton({
  children,
  className,
  ...rest
}: HTMLMotionProps<'button'> & {
  'aria-label': string
}) {
  return (
    <motion.button className={clsx(iconButtonClasses, className)} {...rest}>
      {children}
    </motion.button>
  )
}
