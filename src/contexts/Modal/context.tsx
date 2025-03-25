import { createContext } from 'react'

import { IModalContextProps } from '@/interfaces'

export const ModalContext = createContext<IModalContextProps | undefined>(
  undefined,
)
