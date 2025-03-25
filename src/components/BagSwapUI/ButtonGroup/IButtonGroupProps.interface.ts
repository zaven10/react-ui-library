import { IButtonGroupItemData, IComponentProps } from '@/interfaces'

export interface IButtonGroupProps extends IComponentProps {
  items: IButtonGroupItemData[]
  textColor: string
  bgColor: string
  hoverTextColor: string
  hoverBgColor: string
}
