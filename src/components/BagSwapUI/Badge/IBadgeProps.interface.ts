import { IComponentProps } from '@/interfaces'
import { ReactNode } from 'react'

export interface IBadgeProps extends IComponentProps {
  text: string
  appendIcon?: ReactNode
  prependIcon?: ReactNode
}
