import { IComponentProps } from '@/interfaces'

type TColor = 'white' | 'green' | 'pink' | 'gray' | 'yellow'

export interface ITagBadgeProps extends IComponentProps {
  color: TColor
  text: string
}
