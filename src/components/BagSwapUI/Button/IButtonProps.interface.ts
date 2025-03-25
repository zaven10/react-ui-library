import { ReactNode } from 'react'

import { IComponentWithChildrenProps } from '@/interfaces'

export type TButtonColor = 'pink' | 'green' | 'white'

export interface IButtonProps extends IComponentWithChildrenProps {
  poweredBy: boolean
  color: TButtonColor
  disabled: boolean
  disclaimer: string
  customize: any
  prependIcon: ReactNode
  action: () => void
}
