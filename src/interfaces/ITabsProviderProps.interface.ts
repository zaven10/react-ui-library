import { ReactNode } from 'react'

import { Tabs } from '@/enums'

export interface ITabsProviderProps {
  initialTab?: Tabs
  children: ReactNode
}
