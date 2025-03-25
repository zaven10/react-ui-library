import { createContext } from 'react'

import { IFeeSelectorContextProps } from '@/interfaces'

export const FeeSelectorContext = createContext<
  IFeeSelectorContextProps | undefined
>(undefined)
