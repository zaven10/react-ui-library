import { useContext } from 'react'

import { IFeeSelectorContextProps } from '@/interfaces'

import { FeeSelectorContext } from '@/contexts/FeeSelector'

export const useFeeSelector = (): IFeeSelectorContextProps => {
  const context = useContext(FeeSelectorContext)

  if (!context) {
    throw new Error('useFeeSelector must be used within a FeeSelectorProvider')
  }

  return context
}
