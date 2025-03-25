import { ReactNode } from 'react'

import { IComponentProps } from '@/interfaces'

export interface ITrickerSelectorProps extends IComponentProps {
  direction: 'left' | 'right'
  leftIcon: string
  rightIcon: string
  coin: string
  network: string
  textColor: string
  withArrow: boolean
  prependInner: ReactNode
  maskBgColor: string
  networkMaskBgColor: string
}
