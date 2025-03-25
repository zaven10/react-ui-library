import React from 'react'

import classNames from 'classnames'

import { ITabsProps } from './ITabsProps.interface'

import { ITab } from '@/interfaces'

import { TabItem } from '@ui/TabItem'

export const Tabs: React.FC<Partial<ITabsProps>> = ({
  items,
  textColor = 'text-app-medium-gray',
  bgColor = 'bg-app-midnight-blue',
  activeTextColor = 'text-app-white',
  activeBgColor = 'bg-app-charcoal-gray',
  hoverTextColor = 'text-app-white',
  hoverBgColor = 'bg-app-charcoal-gray',
  className,
}) => {
  const tabItemMap = (item: ITab) => (
    <TabItem
      key={item.value}
      item={item}
      textColor={textColor}
      bgColor={bgColor}
      activeTextColor={activeTextColor}
      activeBgColor={activeBgColor}
      hoverTextColor={hoverTextColor}
      hoverBgColor={hoverBgColor}
    />
  )

  return (
    <div
      className={classNames(
        'rounded-lg overflow-hidden flex gap-[2px] w-max',
        className,
      )}
    >
      {items?.length && items.map(tabItemMap)}
    </div>
  )
}
