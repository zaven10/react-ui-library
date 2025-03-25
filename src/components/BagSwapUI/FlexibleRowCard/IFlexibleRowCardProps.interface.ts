import { ReactNode } from 'react'

import { IComponentWithChildrenProps } from '@/interfaces'

export type TRounded = 'left' | 'right' | 'full'

export interface IFlexibleRowCardProps extends IComponentWithChildrenProps {
  rounded: boolean | TRounded
  prepend: ReactNode
  append: ReactNode
}
