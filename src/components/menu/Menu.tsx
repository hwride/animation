import { componentConfig, ConfigEntry } from '../../exampleConfig.ts'
import { useMenu } from './MenuContext.tsx'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { clsx } from '../../utils/clsx.ts'
import { Link } from '../Link.tsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { useBreakpoint } from '../../utils/useBreakpoint.ts'
import { Menu as MenuIcon, X as CloseIcon } from 'react-feather'
import { Button } from '../Button.tsx'

export const menuCloseableBreakpoint = 'xs'
export { MenuIcon }

export function DesktopMenu({
  selectedExampleId,
  onMenuItemClick,
}: {
  selectedExampleId?: string
  onMenuItemClick: (entry?: ConfigEntry) => void
}) {
  return (
    <div className="hidden border-r border-gray-800 p-4 sm:block">
      <MenuContent
        selectedExampleId={selectedExampleId}
        onMenuItemClick={onMenuItemClick}
      />
    </div>
  )
}

export function DialogMenu({
  selectedExampleId,
  onMenuItemClick,
  openButton,
}: {
  selectedExampleId?: string
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
                transition={{ duration: 0.2 }}
              >
                <MenuContent
                  onMenuItemClick={onMenuItemClick}
                  selectedExampleId={selectedExampleId}
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
