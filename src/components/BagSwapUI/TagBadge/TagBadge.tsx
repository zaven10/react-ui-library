import React from 'react'

import classNames from 'classnames'

import { ITagBadgeProps } from './ITagBadgeProps.interface'

import { useTagBadge } from './useTagBadge'

export const TagBadge: React.FC<Partial<ITagBadgeProps>> = ({
  className,
  color,
  text,
}) => {
  const { colorClass } = useTagBadge({ color })

  return (
    <div
      className={classNames(
        'rounded px-2 py-0.5 text-app-space-black leading-3 transition-all select-none',
        colorClass,
        className,
      )}
    >
      <span className="text-sm">{text}</span>
    </div>
  )
}
