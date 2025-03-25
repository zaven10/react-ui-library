import React from 'react'

import classNames from 'classnames'

import { IButtonProps } from './IButtonProps.interface'

import { ReactComponent as PoweredByOrbsIcon } from '@/assets/svg/powered-by-orbs-icon.svg'

import { Grid } from '@ui/Grid'

import { useButton } from './useButton'

export const Button: React.FC<Partial<IButtonProps>> = ({
  poweredBy,
  children,
  className,
  color,
  disabled,
  disclaimer,
  customize,
  action,
  prependIcon,
}) => {
  const { colorClasses, disclaimerColorClasses } = useButton({
    disabled,
    disclaimer,
    color,
  })

  return (
    <div onClick={action}>
      <Grid className={classNames('select-none gap-4 group', className)}>
        <Grid
          placeItemsCenter
          className={classNames(
            'rounded-[14px] transition-all text-lg leading-[1.17] gap-3',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            disclaimer ? 'p-[15px]' : 'p-5',
            colorClasses,
            { 'grid-cols-[auto_1fr]': prependIcon },
            customize,
          )}
        >
          {prependIcon}
          {disclaimer && (
            <div
              className={classNames(
                'rounded-lg font-semibold text-xs p-3.5 transition-all text-app-space-black',
                disclaimerColorClasses,
              )}
            >
              {disclaimer}
            </div>
          )}
          {children}
        </Grid>
        {poweredBy && (
          <Grid placeItemsCenter>
            <PoweredByOrbsIcon />
          </Grid>
        )}
      </Grid>
    </div>
  )
}
