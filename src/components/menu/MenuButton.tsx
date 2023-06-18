import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { DialogMenu, MenuIcon } from './Menu.tsx'
import { useMenu } from './MenuContext.tsx'
import { ConfigEntry } from '../../exampleConfig.ts'

export function MenuButton({
  onMenuItemClick,
}: {
  onMenuItemClick: (entry?: ConfigEntry) => void
}) {
  const { menuVisible, setMenuVisible } = useMenu()

  return (
    <DialogMenu
      onMenuItemClick={() => setMenuVisible(true)}
      openButton={
        <motion.button
          aria-label="Open menu"
          className={clsx(
            'ml-auto block rounded p-1 text-gray-600 hover:bg-gray-200',
            menuVisible ? 'bg-gray-200 outline outline-1 outline-gray-300' : ''
          )}
          onClick={() => {
            setMenuVisible(true)
            onMenuItemClick()
          }}
          initial={{}}
          animate={menuVisible ? { rotate: 180 } : undefined}
          transition={{ duration: 0.3 }}
        >
          <MenuIcon />
        </motion.button>
      }
    />
  )
}
