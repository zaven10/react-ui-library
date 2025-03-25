import { Tabs } from '@/enums'

export interface ITabsContextProps {
  active: Tabs | undefined
  setActiveTab: (value: Tabs) => void
}
