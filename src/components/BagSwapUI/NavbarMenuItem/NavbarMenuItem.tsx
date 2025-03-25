import React, { useEffect, useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { INavbarMenuItemProps } from './INavbarMenuItemProps.interface'
import classNames from 'classnames'

export const NavbarMenuItem: React.FC<INavbarMenuItemProps> = ({
  text,
  value,
  isOnline,
}) => {
  const $route = useLocation()

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive($route.pathname === value)
  }, [value, $route])

  return (
    <Link to={value}>
      <div className="relative z-50 py-[7px]">
        <div
          className={classNames(
            'w-[86px] flex items-center justify-center py-4 cursor-pointer group hover:bg-app-midnight-blue rounded-md transition-all relative',
            {
              'bg-app-midnight-blue': isActive,
            },
          )}
        >
          <span
            className={classNames(
              'text-app-medium-gray text-sm leading-[9px] transition-all group-hover:text-app-white',
              { 'text-app-white': isActive },
            )}
          >
            {text}
          </span>
          {isOnline && (
            <span className="text-app-spring-green absolute top-1 right-2.5 text-[8px]">
              Online
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
