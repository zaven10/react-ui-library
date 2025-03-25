import { useContext } from 'react'

import { IDrawerContextProps } from '@/interfaces'

import { DrawerContext } from '@/contexts/Drawer'

export const useDrawer = (): IDrawerContextProps => {
  const context = useContext(DrawerContext)

  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider')
  }

  return context
}
