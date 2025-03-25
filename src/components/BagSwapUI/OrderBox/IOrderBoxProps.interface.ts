import { IComponentWithChildrenProps } from '@/interfaces'

export interface IOrderBoxProps extends IComponentWithChildrenProps {
  heading: string[]
  height: string
  headingClassName: string
  isEmpty: boolean
  isScroll: boolean
}
