import { useMemo } from 'react'

import classNames from 'classnames'

import { ISwitchButtonProps } from './ISwitchButtonProps.interface'

export const useSwitchButton = ({
  disabled,
  bgColor,
  thumbColor = 'bg-app-midnight-blue',
  thumbColorOn = 'bg-app-midnight-blue',
  thumbColorOff = 'bg-app-midnight-blue',
  className,
  isSwitchOn,
  setIsSwitchOn,
}: Partial<ISwitchButtonProps>) => {
  const bgColorValue = useMemo<string>(() => {
    if (disabled) {
      return 'bg-app-medium-gray'
    }

    if (bgColor) {
      return bgColor
    }

    if (isSwitchOn) {
      return 'bg-app-spring-green'
    }

    return 'bg-app-salmon-pink'
  }, [isSwitchOn, disabled, bgColor])

  const slideEffect = useMemo<React.CSSProperties>(() => {
    const style: any = {
      left: 5,
    }

    if (isSwitchOn) {
      style.left = 'calc(100% - 26px)'
    }

    return style
  }, [isSwitchOn])

  const thumbColorValue = useMemo<string>(() => {
    if (disabled) {
      return thumbColor
    }

    if (isSwitchOn) {
      return thumbColorOn
    }

    return thumbColorOff
  }, [disabled, isSwitchOn, thumbColor, thumbColorOff, thumbColorOn])

  const onToggleHandler = (): void => {
    if (!disabled) {
      setIsSwitchOn?.(!isSwitchOn)
    }
  }

  const switchClassNames = useMemo<string>(
    () =>
      classNames(
        'w-14 min-h-[31px] rounded-md p-[5px] relative transition-all',

        {
          [bgColorValue]: true,
          'cursor-pointer': !disabled,
          'cursor-no-drop': disabled,
        },
        className,
      ),
    [bgColorValue, disabled, className],
  )

  const switchThumbClassNames = useMemo<string>(
    () =>
      classNames('absolute w-[21px] h-[21px] rounded-[4px] transition-all', {
        [thumbColorValue]: true,
      }),
    [thumbColorValue],
  )

  return {
    isSwitchOn,
    bgColorValue,
    slideEffect,
    thumbColorValue,
    onToggleHandler,
    switchClassNames,
    switchThumbClassNames,
  }
}
