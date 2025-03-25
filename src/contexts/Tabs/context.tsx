import { createContext } from 'react'

import { ITabsContextProps } from '@/interfaces'

export const TabsContext = createContext<ITabsContextProps | undefined>(
  undefined,
)
