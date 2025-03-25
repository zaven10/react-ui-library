export type TEventChoiceCardBoxTrail = 'top' | 'bottom' | 'full'
export type TEventChoiceCardBoxType =
  | 'ERROR'
  | 'DEFAULT'
  | 'PINK_NO_HOVER'
  | 'GREEN_NO_HOVER'

export interface IEventChoiceCardBoxPropsProps {
  title: string
  label: string
  trail: TEventChoiceCardBoxTrail
  type: TEventChoiceCardBoxType
}
