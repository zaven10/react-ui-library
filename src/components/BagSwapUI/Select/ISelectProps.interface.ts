import { ReactNode } from 'react'

import { IComponentProps, ISelectItem } from '@/interfaces'

export interface ISelectProps extends IComponentProps {
  items: ISelectItem[]
  disabled: boolean
  bgColor: string
  appendInner: ReactNode
  selected?: any
  selectMenuClassName: string
  setSelected?: (item: any) => void
}
