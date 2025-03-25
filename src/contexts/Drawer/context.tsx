import { createContext } from 'react'

import { IDrawerContextProps } from '@/interfaces'

export const DrawerContext = createContext<IDrawerContextProps | undefined>(
  undefined,
)
