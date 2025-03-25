import { useMemo } from 'react'

import { IEventChoiceCardBoxPropsProps } from './IEventChoiceCardBoxProps.interface'

export const useEventChoiceCardBox = ({
  type,
  trail,
}: Partial<IEventChoiceCardBoxPropsProps>) => {
  const isError = useMemo(() => type === 'ERROR', [type])

  const isTrailFull = useMemo(() => trail === 'full', [trail])
  const isTrailTop = useMemo(() => trail === 'top', [trail])
  const isTrailBottom = useMemo(() => trail === 'bottom', [trail])

  const colorClasses = useMemo(() => {
    switch (true) {
      case isError:
        return {
          box: 'hover:bg-app-salmon-pink',
          trailDot: 'bg-app-space-black',
          title: 'text-app-salmon-pink group-hover/box:text-app-space-black',
          label: 'text-app-salmon-pink group-hover/box:text-app-space-black',
        }
      case type === 'PINK_NO_HOVER':
        return {
          trailDot: 'bg-app-salmon-pink',
          title: 'text-app-salmon-pink',
          label: 'text-app-salmon-pink',
        }
      case type === 'GREEN_NO_HOVER':
        return {
          trailDot: 'bg-app-spring-green',
          title: 'text-app-spring-green',
          label: 'text-app-spring-green',
        }
      default:
        return {
          box: 'hover:bg-app-charcoal-gray',
          trailDot: 'bg-app-spring-green',
          title: 'text-app-medium-gray group-hover/box:text-app-white',
          label: 'text-app-medium-gray group-hover/box:text-app-white',
        }
    }
  }, [type, isError])

  return {
    isError,
    isTrailFull,
    isTrailBottom,
    isTrailTop,
    colorClasses,
  }
}
