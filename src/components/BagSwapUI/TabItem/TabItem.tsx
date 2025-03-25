import React from 'react'

import classNames from 'classnames'

import { ITabItemProps } from './ITabItemProps.interface'

import { useTabItem } from './useTabItem.hook'

export const TabItem: React.FC<ITabItemProps> = ({
  item,
  textColor,
  bgColor,
  activeTextColor,
  activeBgColor,
  hoverBgColor,
  hoverTextColor,
}) => {
  const { isActive, onSetTabHandler } = useTabItem(item)

  return (
    <div
      className={classNames(
        'px-3.5 py-3 text-sm transition-all grow select-none grid place-items-center',
        item.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        {
          [`${textColor} ${bgColor}`]: !isActive,
          [`hover:${hoverBgColor} hover:${hoverTextColor}`]:
            !isActive && !item.disabled,
          [`${activeTextColor} ${activeBgColor}`]: isActive,
        },
      )}
      onClick={onSetTabHandler}
    >
      {item?.text}
    </div>
  )
}
