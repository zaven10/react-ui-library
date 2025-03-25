import { useMemo } from 'react'

import { IDisclaimerProps } from './IDisclaimerProps.interface'

export const useDisclaimer = ({ color }: Partial<IDisclaimerProps>) => {
  const colors = useMemo<string>(() => {
    switch (color) {
      case 'white':
        return 'bg-app-white text-app-space-black'
      case 'pink':
        return 'bg-app-salmon-pink-light text-app-space-black'
      case 'green':
        return 'bg-app-spring-green text-app-space-black'
      default:
        return 'bg-app-charcoal-gray text-app-medium-gray'
    }
  }, [color])

  return {
    colors,
  }
}
