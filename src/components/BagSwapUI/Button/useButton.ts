import { useMemo } from 'react'

import { IButtonProps } from './IButtonProps.interface'

export const useButton = ({
  color,
  disabled,
  disclaimer,
}: Partial<IButtonProps>) => {
  const colorClasses = useMemo(() => {
    if (disabled) {
      return 'bg-app-midnight-blue text-app-medium-gray'
    }

    switch (color) {
      case 'pink':
        return 'bg-app-salmon-pink-light group-hover:bg-app-dusty-rose'
      case 'green':
        return `${disclaimer ? 'bg-app-green-light' : 'bg-app-spring-green'} group-hover:bg-app-dusty-green`
      case 'white':
        return 'bg-app-white group-hover:bg-app-medium-gray-light'
      default:
        return ''
    }
  }, [color, disabled, disclaimer])

  const disclaimerColorClasses = useMemo(() => {
    if (disabled) {
      return 'bg-app-charcoal-gray text-app-medium-gray'
    }

    switch (color) {
      case 'pink':
        return 'bg-app-salmon-pink group-hover:bg-app-salmon-pink-dark'
      case 'green':
        return 'bg-app-spring-green group-hover:bg-app-spring-green-light'
      case 'white':
        return 'bg-app-gray-light group-hover:bg-app-gray'
      default:
        return ''
    }
  }, [color, disabled])

  return {
    colorClasses,
    disclaimerColorClasses,
  }
}
