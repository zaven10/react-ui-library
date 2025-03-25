import { useContext } from 'react'

import { ITabsContextProps } from '@/interfaces'

import { TabsContext } from '@/contexts/Tabs'

export const useTabs = (): ITabsContextProps => {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider')
  }

  return context
}
