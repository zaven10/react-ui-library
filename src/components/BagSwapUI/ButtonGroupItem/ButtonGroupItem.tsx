import React from 'react'

import classNames from 'classnames'

import { IButtonGroupItemProps } from './IButtonGroupItemProps.interface'

import { Grid } from '@ui/Grid'

export const ButtonGroupItem: React.FC<IButtonGroupItemProps> = ({
  item,
  textColor,
  bgColor,
  hoverBgColor,
  hoverTextColor,
}) => {
  return (
    <div
      className={classNames(
        'px-3.5 py-3 transition-all grow flex items-center justify-center gap-[5px] select-none',
        item.isActive
          ? `${hoverBgColor} ${hoverTextColor}`
          : `${bgColor} ${textColor}`,
        {
          [hoverTextColor]: item.isActiveText,
          [`hover:${hoverBgColor} hover:${hoverTextColor} group`]:
            !item.disabled,
          'relative z-50': item.isOverTint && item.isActive,
        },
        item.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        item?.className,
      )}
      onClick={() => item?.action?.()}
    >
      {item?.prependIcon && <Grid placeItemsCenter>{item.prependIcon}</Grid>}
      {item?.text && (
        <span
          className={classNames('text-sm group-hover:[&_path]:fill-app-white', {
            '[&_path]:fill-app-white': item.isActive,
          })}
        >
          {item.text}
        </span>
      )}
    </div>
  )
}
