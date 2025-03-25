import { ReactNode } from 'react'

import { IComponentProps } from '@/interfaces'

export interface ITooltipProps extends IComponentProps {
  text?: string | ReactNode
}
