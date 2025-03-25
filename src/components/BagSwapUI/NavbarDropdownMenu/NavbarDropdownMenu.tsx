import React from 'react'

import classNames from 'classnames'

import { ReactComponent as ArrowDownIcon } from '@/assets/svg/arrow-down-icon.svg'

import { NavbarDropdownMenuModalWindow } from '@ui/NavbarDropdownMenuModalWindow'

import { INavbarDropdownMenuProps } from './INavbarDropdownMenuProps.interface'

import { useNavbarDropdownMenu } from './useNavbarDropdownMenu.hook'

export const NavbarDropdownMenu: React.FC<INavbarDropdownMenuProps> = ({
  width,
  items,
  bgStyle,
  activeStyle,
  title,
}) => {
  const { onOpenMenu, onCloseMenu, isDropdownMenuOpen, isActive } =
    useNavbarDropdownMenu({ items })

  return (
    <div
      className="relative z-50 py-[7px]"
      onMouseOver={onOpenMenu}
      onMouseLeave={onCloseMenu}
    >
      <div
        className={classNames(
          'w-[86px] flex items-center justify-center gap-3 py-4 cursor-pointer group rounded-lg transition-all',
          bgStyle,
          { [activeStyle]: isActive },
        )}
      >
        <span
          className={classNames(
            'text-app-medium-gray text-sm leading-[9px] transition-all group-hover:text-app-space-black',
            {
              'text-app-space-black': isActive,
            },
          )}
        >
          {title}
        </span>
        <ArrowDownIcon
          className={classNames(
            'w-2 h-[5.6px] transition-all [&_g]:fill-app-medium-gray group-hover:[&_g]:fill-app-space-black',
            {
              'rotate-180': isDropdownMenuOpen,
              '[&_g]:fill-app-space-black': isActive,
            },
          )}
        />
        {isDropdownMenuOpen && (
          <NavbarDropdownMenuModalWindow width={width} items={items} />
        )}
      </div>
    </div>
  )
}
