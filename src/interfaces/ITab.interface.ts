import { ReactNode } from 'react'

import { Tabs } from '@/enums'

export interface ITab {
  text: string | ReactNode
  value: Tabs
  disabled?: boolean
}
