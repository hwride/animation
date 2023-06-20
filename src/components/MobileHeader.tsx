import { clsx } from 'clsx'
import { ConfigEntry } from '../exampleConfig.ts'
import { MenuButton } from './menu/MenuButton.tsx'

export function MobileHeader({
  selectedExampleId,
  onMenuItemClick,
}: {
  selectedExampleId?: string
  onMenuItemClick: (entry?: ConfigEntry) => void
}) {
  return (
    <div
      className={clsx(
        // Stops the rotating menu button causing scrollbars.
        'overflow-hidden',
        'border-b border-gray-200 p-1 sm:hidden'
      )}
    >
      <MenuButton
        selectedExampleId={selectedExampleId}
        onMenuItemClick={onMenuItemClick}
      />
    </div>
  )
}
