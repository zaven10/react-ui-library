import { useState } from 'react'

import { TabsContext } from './context'

import { ITabsProviderProps } from '@/interfaces'

export const TabsProvider: React.FC<ITabsProviderProps> = ({
  initialTab,
  children,
}) => {
  const [active, setActiveTab] = useState(initialTab)

  return (
    <TabsContext.Provider value={{ active, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  )
}
