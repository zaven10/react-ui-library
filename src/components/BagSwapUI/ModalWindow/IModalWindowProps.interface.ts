import { ReactNode } from 'react'

import { IComponentWithChildrenProps } from '@/interfaces'

export interface IModalWindowProps extends IComponentWithChildrenProps {
  titleChild: ReactNode
  bgColor: string
  boxClass: string
  isScroll?: boolean
}
