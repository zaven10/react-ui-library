import React from 'react'

import classNames from 'classnames'

import { Grid } from '@ui/Grid'

import { IDrawerProps } from './IDrawerProps.interface'

import { useDrawer } from './useDrawer'

export const Drawer: React.FC<Partial<IDrawerProps>> = ({
  children,
  className,
  position,
}) => {
  const { positionClass } = useDrawer({ position })

  return (
    <div
      className={classNames(
        'min-h-screen max-h-screen overflow-y-auto custom-overflow fixed z-50 inset-y-0',
        positionClass,
      )}
    >
      <Grid className={classNames('bg-app-space-black h-full', className)}>
        {children}
      </Grid>
    </div>
  )
}
