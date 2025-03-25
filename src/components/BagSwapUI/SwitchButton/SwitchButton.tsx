import React from 'react'

import { ISwitchButtonProps } from './ISwitchButtonProps.interface'

import { useSwitchButton } from './useSwitchButton.hook'

export const SwitchButton: React.FC<Partial<ISwitchButtonProps>> = (props) => {
  const {
    switchClassNames,
    slideEffect,
    switchThumbClassNames,
    onToggleHandler,
    isSwitchOn,
  } = useSwitchButton(props)

  return (
    <div
      role="switch"
      tabIndex={0}
      aria-checked={isSwitchOn}
      className={switchClassNames}
      onClick={onToggleHandler}
    >
      <div style={slideEffect} className={switchThumbClassNames} />
    </div>
  )
}
