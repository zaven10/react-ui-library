import { useMemo } from 'react'

import { IFlexibleRowCardProps } from './IFlexibleRowCardProps.interface'

export const useFlexibleRowCard = ({
  rounded,
}: Partial<IFlexibleRowCardProps>) => {
  const roundedClass = useMemo(() => {
    if (typeof rounded == 'boolean') {
      return rounded && 'rounded-lg'
    }

    switch (rounded) {
      case 'left':
        return 'rounded-l-3xl rounded-tr-lg rounded-br-lg'
      case 'right':
        return 'rounded-r-3xl rounded-tl-lg rounded-bl-lg'
      case 'full':
        return 'rounded-full'
      default:
        return
    }
  }, [rounded])

  return {
    roundedClass,
  }
}
