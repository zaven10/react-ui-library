import { SetStateAction } from 'react'

export interface IDrawerContextProps {
  isOpen: boolean
  onClick: (cb?: any) => void
  setIsOpen: (value: SetStateAction<boolean>) => void
}
