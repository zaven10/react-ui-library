import { SetStateAction } from 'react'

export interface IModalContextProps {
  isOpen: boolean
  onClick: (cb?: any) => void
  setIsOpen: (value: SetStateAction<boolean>) => void
}
