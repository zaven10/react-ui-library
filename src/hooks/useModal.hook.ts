import { useContext } from 'react'

import { IModalContextProps } from '@/interfaces'

import { ModalContext } from '@/contexts/Modal'

export const useModal = (): IModalContextProps => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }

  return context
}
