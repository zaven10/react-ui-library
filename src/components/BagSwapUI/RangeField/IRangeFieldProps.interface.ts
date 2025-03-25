import { ReactNode } from 'react'

import { IComponentProps } from '@/interfaces'

export interface IRangeFieldProps extends IComponentProps {
  step: number | string
  max: number | string
  min: number | string
  bgColor: string
  thumbColor: string
  thumbLineColor: string
  thumbLineFilledColor: string
  isShowPrependValue: boolean
  appendInner: (value: number) => ReactNode
}
