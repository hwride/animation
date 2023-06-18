import { clsx } from 'clsx'
import { DialogMenu, MenuIcon } from './Menu.tsx'
import { useMenu } from './MenuContext.tsx'
import { ConfigEntry } from '../../exampleConfig.ts'
import { MotionIconButton } from '../IconButton.tsx'

export function MenuButton({
  onMenuItemClick,
  selectedExampleId,
}: {
  onMenuItemClick: (entry?: ConfigEntry) => void
  selectedExampleId?: string
}) {
  const { menuVisible, setMenuVisible } = useMenu()

  return (
    <DialogMenu
      onMenuItemClick={onMenuItemClick}
      selectedExampleId={selectedExampleId}
      openButton={
        <MotionIconButton
          aria-label="Open menu"
          className={clsx(
            'ml-auto',
            menuVisible ? 'bg-gray-200 outline outline-1 outline-gray-300' : ''
          )}
          onClick={() => setMenuVisible(true)}
          animate={menuVisible ? { rotate: 180 } : undefined}
          transition={{ duration: 0.3 }}
        >
          <MenuIcon />
        </MotionIconButton>
      }
    />
  )
}
