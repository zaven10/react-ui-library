import { IComponentProps } from '@/interfaces'

export interface IOrderBoxItemProps extends IComponentProps {
  coinImg: string
  networkImg: string
  marketPair: string
  currentPrice: string
  currentPriceCoin: string
  limitPrice: string
  limitPriceCoin: string
  quantity: string
  quantityCoin: string
  progress: string
  timestamp: string
  removable: boolean
}
