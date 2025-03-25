import { IComponentProps } from '@/interfaces'

export interface ITitleProps extends IComponentProps {
  withArrow: boolean
  text: string
  subtitle: boolean
  action: () => void
}
