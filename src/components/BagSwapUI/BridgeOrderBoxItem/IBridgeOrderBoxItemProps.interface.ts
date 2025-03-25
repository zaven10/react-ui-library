import { IComponentProps } from '@/interfaces'

export type TStatus = 'SIGNING' | 'REDEEM' | 'FAILED' | 'COMPLETED' | 'DURATION'

export interface IBridgeOrderBoxItemProps extends IComponentProps {
  fromCoinImg: string
  fromNetworkImg: string
  fromCoin: string
  fromNetwork: string
  fromQuantity: string
  toCoinImg: string
  toNetworkImg: string
  toCoin: string
  toNetwork: string
  toQuantity: string
  duration: number
  status: TStatus
}
