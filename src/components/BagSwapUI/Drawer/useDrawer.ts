import { useMemo } from 'react'

import { IDrawerProps } from './IDrawerProps.interface'

export const useDrawer = ({ position }: Partial<IDrawerProps>) => {
  const positionClass = useMemo(() => {
    switch (position) {
      case 'right':
        return 'right-0'
      case 'left':
        return 'left-0'
      default:
        return 'left-0'
    }
  }, [position])

  return { positionClass }
}
