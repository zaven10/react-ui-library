import { IComponentWithChildrenProps } from '@/interfaces'

type TRounded = 'top' | 'bottom' | 'left' | 'right'

export interface ICardBoxProps extends IComponentWithChildrenProps {
  rounded: boolean | TRounded
}
