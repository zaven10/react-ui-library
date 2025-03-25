import { ReactNode } from 'react'

import { IComponentProps } from '@/interfaces'

export interface ITextFieldProps extends IComponentProps {
  prepend: ReactNode
  append: ReactNode
  disabled: boolean
  bgColor?: string
  placeholder: string
  readonly?: boolean
  value?: string | number
  onChange?: (e: any) => void
}
