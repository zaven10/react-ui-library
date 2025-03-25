import { IComponentProps } from '@/interfaces'

export interface ISwitchButtonProps extends IComponentProps {
  disabled: boolean
  thumbColor: string
  thumbColorOn: string
  thumbColorOff: string
  bgColor: string
  isSwitchOn?: boolean
  setIsSwitchOn?: (value: boolean) => void
}
