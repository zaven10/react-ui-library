import { IComponentProps } from '@/interfaces'

export interface ICoinPairProps extends IComponentProps {
  left: string
  right: string
  network: string
  maskBgColor: string
  networkMaskBgColor: string
}
