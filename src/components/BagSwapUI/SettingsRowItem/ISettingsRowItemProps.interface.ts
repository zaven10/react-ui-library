import { ReactNode } from 'react'

import { IComponentWithChildrenProps } from '@/interfaces'

export interface ISettingsItemProps extends IComponentWithChildrenProps {
  label: string
  labelClassName: string
  tooltip: ReactNode | boolean
}
