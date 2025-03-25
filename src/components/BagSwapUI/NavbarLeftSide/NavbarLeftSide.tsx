import React from 'react'

import { BagSwapMenu } from '@ui/BagSwapMenu'
import { NavbarDropdownMenu } from '@ui/NavbarDropdownMenu'
import { NavbarMenuItem } from '@ui/NavbarMenuItem'

import { useNavbarLeftSide } from './useNavbarLeftSide.hook'

export const NavbarLeftSide: React.FC = () => {
  const { tradeMenu, poolMenu, restMenuItems } = useNavbarLeftSide()

  return (
    <div className="flex gap-6">
      <BagSwapMenu />
      <div className="flex items-center gap-[5px]">
        <NavbarDropdownMenu
          title={tradeMenu.title}
          items={tradeMenu.items}
          width="w-[94px]"
          activeStyle="bg-trade-menu-gradient"
          bgStyle="hover:bg-trade-menu-gradient"
        />
        <NavbarDropdownMenu
          title={poolMenu.title}
          items={poolMenu.items}
          width="w-[162px]"
          activeStyle="bg-app-baby-blue"
          bgStyle="hover:bg-app-baby-blue"
        />
        {restMenuItems.map((item) => (
          <NavbarMenuItem
            key={item.value}
            text={item.text}
            value={item.value}
            isOnline={item.isOnline}
          />
        ))}
      </div>
    </div>
  )
}
