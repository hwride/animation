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

export const menuCloseableBreakpoint = 'xs'
export { MenuIcon }

export function Menu({
  onMenuItemClick,
}: {
  onMenuItemClick: (entry?: ConfigEntry) => void
}) {
  return (
    <>
      <DesktopMenu onMenuItemClick={onMenuItemClick} />
      <DialogMenu onMenuItemClick={onMenuItemClick} />
    </>
  )
}

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

function DialogMenu({
  onMenuItemClick,
}: {
  onMenuItemClick: (entry?: ConfigEntry) => void
}) {
  const { menuVisible, setMenuVisible } = useMenu()

  return (
    <Dialog.Root
      open={menuVisible}
      onOpenChange={(open) => setMenuVisible(open)}
    >
      <AnimatePresence>
        {menuVisible && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay
              forceMount
              // className="fixed inset-[0] bg-black opacity-40 sm:hidden"
            >
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
                'bg-white dark:bg-gray-800',
                'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
              )}
            >
              <motion.div
                initial={{ transform: 'translateX(-100%)' }}
                animate={{ transform: 'translateX(0)' }}
                exit={{ transform: 'translateX(-100%)' }}
                transition={{ duration: 0.2 }}
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
    <>
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
            <li key={i} className="relative">
              <ListButton
                className="w-full"
                onClick={() => onMenuItemClick(entry)}
              >
                {entry.label}
              </ListButton>
            </li>
          )
        })}
      </ol>
    </>
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
