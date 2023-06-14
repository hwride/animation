import { createContext, ReactNode, useContext, useState } from 'react'

type MenuContextType = {
  menuVisible: boolean
  setMenuVisible: (visible: boolean) => void
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

export const useMenu = () => {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider')
  }
  return context
}

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(true)

  return (
    <MenuContext.Provider value={{ menuVisible, setMenuVisible }}>
      {children}
    </MenuContext.Provider>
  )
}
