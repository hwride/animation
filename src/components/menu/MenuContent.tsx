import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Menu as MenuIcon } from 'react-feather'
import { ConfigEntry, componentConfig } from '../../exampleConfig.ts'
import { Button } from '../Button.tsx'
import { Link } from '../Link.tsx'

export const menuCloseableBreakpoint = 'xs'
export { MenuIcon }

export function MenuContent({
  onMenuItemClick,
  selectedExampleId,
  closeIconSlot,
}: {
  onMenuItemClick: (entry?: ConfigEntry) => void
  selectedExampleId?: string
  closeIconSlot?: ReactNode
}) {
  return (
    <nav>
      <div className="flex items-start justify-between">
        <h2 className="my-2 self-end text-lg font-bold">
          <Link
            className="text-blue-600 underline visited:text-purple-600 hover:text-blue-800"
            href="https://www.framer.com/motion/"
            target="_blank"
            iconSize="text-lg"
          >
            Framer Motion
          </Link>
        </h2>
        {closeIconSlot}
      </div>
      <ol className="m-0 flex-1 list-none">
        {componentConfig.map((entry) => {
          const isCurrentEg = selectedExampleId === entry.id
          return (
            <motion.li
              key={entry.id}
              className={clsx('relative', isCurrentEg ? 'bg-blue-50' : '')}
              aria-current={isCurrentEg ? 'page' : undefined}
              whileHover={{ scale: 1.04, transition: { duration: 0.05 } }}
            >
              <ListButton
                className="w-full"
                onClick={() => onMenuItemClick(entry)}
              >
                {entry.label}
              </ListButton>
            </motion.li>
          )
        })}
      </ol>
    </nav>
  )
}

function ListButton({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <Button className={className} {...rest}>
      {children}
    </Button>
  )
}
