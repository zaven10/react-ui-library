import { useMemo } from 'react'
import { ICardBoxProps } from './ICardBoxProps.interface'

export const useCardBox = ({ rounded }: Partial<ICardBoxProps>) => {
  const roundedClass = useMemo(() => {
    if (typeof rounded === 'boolean') {
      return rounded && 'rounded-[13px]'
    }

    switch (rounded) {
      case 'top':
        return 'rounded-tl-[13px] rounded-tr-[13px]'
      case 'bottom':
        return 'rounded-bl-[13px] rounded-br-[13px]'
      case 'left':
        return 'rounded-tl-[13px] rounded-bl-[13px]'
      case 'right':
        return 'rounded-tr-[13px] rounded-br-[13px]'
      default:
        return
    }
  }, [rounded])

  return {
    roundedClass,
  }
}
