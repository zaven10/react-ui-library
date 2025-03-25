import React from 'react'

import { Link } from 'react-router-dom'

import classNames from 'classnames'

import { BagSwapMenuModalWindow } from '@ui/BagSwapMenuModalWindow'

import { ReactComponent as Logo } from '@/assets/svg/logo.svg'

import { ReactComponent as ArrowDownIcon } from '@/assets/svg/arrow-down-icon.svg'

import { useBagSwapMenu } from './useBagSwapMenu.hook'

export const BagSwapMenu: React.FC = () => {
  const { onOpenMenu, isMenuOpen, onCloseMenu } = useBagSwapMenu()

  return (
    <div
      className="flex items-center gap-2.5 cursor-pointer relative z-50"
      onMouseOver={onOpenMenu}
      onMouseLeave={onCloseMenu}
    >
      <Link to="/">
        <Logo />
      </Link>
      <ArrowDownIcon
        className={classNames(
          'w-[11px] h-[7.7px] transition-all [&_g]:fill-app-white',
          {
            'rotate-180': isMenuOpen,
          },
        )}
      />
      {isMenuOpen && <BagSwapMenuModalWindow />}
    </div>
  )
}
