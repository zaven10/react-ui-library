import { useState } from 'react'

import { FeeSelectorContext } from './context'

import { IFeeSelectorProviderProps } from '@/interfaces'

export const FeeSelectorProvider: React.FC<IFeeSelectorProviderProps> = ({
  selected,
  children,
}) => {
  const [value, setValue] = useState(selected)

  return (
    <FeeSelectorContext.Provider
      value={{ selected: value, setSelected: setValue }}
    >
      {children}
    </FeeSelectorContext.Provider>
  )
}
