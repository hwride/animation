import { componentConfig, ConfigEntry } from '../../exampleConfig.ts'
import { useMenu } from './MenuContext.tsx'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { clsx } from '../../utils/clsx.ts'
import { Link } from '../Link.tsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button } from '../Button.tsx'
import { useBreakpoint } from '../../utils/useBreakpoint.ts'
import { Menu as MenuIcon, X as CloseIcon } from 'react-feather'

export const menuOpenDuration = 0.2
export const menuCloseableBreakpoint = 'xs'
export { MenuIcon }

export function DesktopMenu({
  onMenuItemClick,
}: {
  onMenuItemClick: (entry?: ConfigEntry) => void
}) {
  return (
    <div className="hidden border-r border-gray-800 p-4 sm:block">
      <MenuContent onMenuItemClick={onMenuItemClick} />
    </div>
  )
}

export function DialogMenu({
  onMenuItemClick,
  openButton,
}: {
  onMenuItemClick: (entry?: ConfigEntry) => void
  openButton: ReactNode
}) {
  const { menuVisible, setMenuVisible } = useMenu()

  return (
    <Dialog.Root
      open={menuVisible}
      onOpenChange={(open) => setMenuVisible(open)}
    >
      <Dialog.Trigger asChild>{openButton}</Dialog.Trigger>
      <AnimatePresence>
        {menuVisible && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="sm:no fixed inset-[0] bg-black opacity-40 "
              ></motion.div>
            </Dialog.Overlay>
            <Dialog.Content
              forceMount
              asChild
              className={clsx(
                'fixed z-50',
                'h-full w-[85vw] max-w-md p-4 md:w-full',
                'left-0 top-0',
                'bg-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
              )}
            >
              <motion.div
                initial={{ transform: 'translateX(-100%)' }}
                animate={{ transform: 'translateX(0)' }}
                exit={{ transform: 'translateX(-100%)' }}
                transition={{ duration: menuOpenDuration }}
              >
                <MenuContent
                  onMenuItemClick={onMenuItemClick}
                  closeIconSlot={
                    <Dialog.Close asChild>
                      <button
                        className="mb-2 rounded p-1 text-gray-600 hover:bg-gray-200"
                        aria-label="Close menu"
                      >
                        <CloseIcon />
                      </button>
                    </Dialog.Close>
                  }
                />
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

function MenuContent({
  onMenuItemClick,
  closeIconSlot,
}: {
  onMenuItemClick: (entry?: ConfigEntry) => void
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
        {componentConfig.map((entry, i) => {
          return (
            <motion.li
              key={i}
              className="relative"
              initial={{}}
              whileHover={{ scale: 1.05 }}
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
    <Button
      className={clsx(
        'mb-1 rounded border border-black hover:bg-gray-100',
        className
      )}
      {...rest}
    >
      {children}
    </Button>
  )
}

/**
 * Helper to setup our menu so it opens and closes responsively.
 */
export function useResponsiveMenu() {
  const { menuVisible, setMenuVisible } = useMenu()
  const breakpoint = useBreakpoint()

  return {
    menuVisible,
    setMenuVisible,
    menuIsCloseable: breakpoint === menuCloseableBreakpoint,
  }
}
