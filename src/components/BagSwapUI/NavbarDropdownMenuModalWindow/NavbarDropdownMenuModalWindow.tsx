import React from 'react'

import classNames from 'classnames'

import { INavbarDropdownMenuModalWindow } from './INavbarDropdownMenuModalWindowProps.interface'

import { ModalWindow } from '@ui/ModalWindow'
import { Grid } from '@ui/Grid'

export const NavbarDropdownMenuModalWindow: React.FC<
  INavbarDropdownMenuModalWindow
> = ({ width, items }) => {
  return (
    <ModalWindow
      className="top-[55px] -left-1 py-2.5"
      boxClass={classNames('!px-2.5 !py-2.5', width)}
    >
      <Grid>
        {items.map((item: any) => (
          <div
            key={item.value}
            className="py-1.5 px-[9px] text-sm text-app-medium-gray hover:bg-app-white hover:text-app-space-black rounded-md transition-all cursor-pointer"
          >
            <span>{item.text}</span>
          </div>
        ))}
      </Grid>
    </ModalWindow>
  )
}
