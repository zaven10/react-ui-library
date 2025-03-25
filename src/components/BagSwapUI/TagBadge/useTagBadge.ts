import { useMemo } from 'react'
import { ITagBadgeProps } from './ITagBadgeProps.interface'

export const useTagBadge = ({ color }: Partial<ITagBadgeProps>) => {
  const colorClass = useMemo(() => {
    switch (color) {
      case 'yellow':
        return 'bg-app-yellow'
      case 'green':
        return 'bg-app-spring-green'
      case 'gray':
        return 'bg-app-charcoal-gray !text-app-medium-gray'
      case 'pink':
        return 'bg-app-salmon-pink'
      default:
        return 'bg-app-white'
    }
  }, [color])

  return { colorClass }
}
