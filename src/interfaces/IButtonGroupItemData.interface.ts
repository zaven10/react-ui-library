import { ReactNode } from 'react'

import { IComponentProps } from './IComponentProps.interface'

export interface IButtonGroupItemData extends IComponentProps {
  prependIcon?: ReactNode
  text?: string | ReactNode
  disabled?: boolean
  isOverTint?: boolean
  isActive?: boolean
  isActiveText?: boolean
  action?: () => void
}
