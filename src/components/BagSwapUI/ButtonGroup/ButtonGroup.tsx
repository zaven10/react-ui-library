import React from 'react'

import classNames from 'classnames'

import { IButtonGroupProps } from './IButtonGroupProps.interface'
import { IButtonGroupItemData } from '@/interfaces'

import { ButtonGroupItem } from '@ui/ButtonGroupItem'

export const ButtonGroup: React.FC<Partial<IButtonGroupProps>> = ({
  className,
  items,
  textColor = 'text-app-medium-gray',
  bgColor = 'bg-app-midnight-blue',
  hoverTextColor = 'text-app-white',
  hoverBgColor = 'bg-app-charcoal-gray',
}) => {
  const buttonItemMap = (item: IButtonGroupItemData, index: number) => (
    <ButtonGroupItem
      key={`button-group_item__${index}`}
      item={item}
      textColor={textColor}
      bgColor={bgColor}
      hoverTextColor={hoverTextColor}
      hoverBgColor={hoverBgColor}
    />
  )

  return (
    <div
      className={classNames(
        'rounded-lg overflow-hidden flex gap-[3px] w-max',
        className,
      )}
    >
      {items?.length && items.map(buttonItemMap)}
    </div>
  )
}
