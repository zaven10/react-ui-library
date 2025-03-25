import { ReactNode } from 'react'

export interface ITransactionRowItem {
  coins?: string[]
  label?: string | ReactNode
  isSingle?: boolean
}
