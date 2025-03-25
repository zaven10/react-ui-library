import { IComponentWithChildrenProps } from '@/interfaces'

type TPosition = 'left' | 'right'

export interface IDrawerProps extends IComponentWithChildrenProps {
  position: TPosition
}
