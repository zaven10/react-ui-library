import { ReactNode } from 'react'

import { IComponentProps } from '@/interfaces'

export interface IDepositBoxProps extends IComponentProps {
  title?: ReactNode
  address?: string
  assetsPrice?: string
  priceInUSD?: string
  isExceedsBalance?: boolean
  walletIcon?: ReactNode
  walletBalance?: string
  badgeBgColor?: string
  fieldBgColor?: string
  tickerBgColor?: string
  tickerBgHoverColor?: string
  tickerTextHoverColor?: string
  textColor?: string
  coinIcon: string
  coin: string
  network: string
  networkMaskBgColor: string
  isTickerWithArrow?: boolean
  locked?: boolean
  lockedContent?: ReactNode
  readonly?: boolean
  value?: string
}
