import React from 'react'

import classNames from 'classnames'

import { IFlexibleRowCardProps } from './IFlexibleRowCardProps.interface'

import { useFlexibleRowCard } from './useFlexibleRowCard'

export const FlexibleRowCard: React.FC<Partial<IFlexibleRowCardProps>> = ({
  children,
  className,
  append,
  prepend,
  rounded,
}) => {
  const { roundedClass } = useFlexibleRowCard({ rounded })

  return (
    <div
      className={classNames(
        'flex items-center bg-app-charcoal-gray p-1.5 gap-2.5 select-none',
        roundedClass,
        className,
      )}
    >
      {prepend}
      <div className="grow justify-between items-center flex gap-2.5">
        {children}
      </div>
      {append}
    </div>
  )
}
