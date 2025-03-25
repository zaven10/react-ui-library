import React from 'react'

import classNames from 'classnames'

import { IBadgeProps } from './IBadgeProps.interface'

export const Badge: React.FC<Partial<IBadgeProps>> = ({
  text,
  appendIcon,
  prependIcon,
  className,
}) => {
  return (
    <div
      className={classNames(
        'flex items-center gap-1 rounded px-1 py-0.5 text-app-space-black text-[10px] leading-3 transition-all select-none',
        className,
      )}
    >
      {prependIcon}
      <span>{text}</span>
      {appendIcon}
    </div>
  )
}
