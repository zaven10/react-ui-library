import { IComponentProps, ITab } from '@/interfaces'

export interface ITabsProps extends IComponentProps {
  items: ITab[]
  textColor: string
  bgColor: string
  activeTextColor: string
  activeBgColor: string
  hoverTextColor: string
  hoverBgColor: string
}
