import React from 'react'

import classNames from 'classnames'

import { IFeeSelectorProps } from './IFeeSelectorProps.interface'

import { Grid } from '@ui/Grid'
import { Badge } from '@ui/Badge'

import { useFeeSelectorComponent } from './useFeeSelector'

export const FeeSelector: React.FC<Partial<IFeeSelectorProps>> = ({
  value,
  badge,
  label,
  className,
}) => {
  const { isActive, onSelectHandler } = useFeeSelectorComponent(value)

  return (
    <div
      className={classNames(
        'py-2.5 px-[15px] rounded-lg bg-app-charcoal-gray group hover:bg-app-white cursor-pointer select-none transition-all border border-transparent',
        { 'bg-app-space-black !border-app-baby-blue': isActive },
        className,
      )}
      onClick={onSelectHandler}
    >
      <Grid className="gap-1">
        <div className="flex items-center gap-2">
          <span className="transition-all font-semibold text-app-white text-lg group-hover:text-app-space-black">
            {value}
          </span>
          <Badge
            text={badge}
            className={classNames(
              'bg-app-baby-blue group-hover:bg-app-midnight-blue group-hover:text-app-white',
              { 'bg-app-white': isActive },
            )}
          />
        </div>
        <span
          className={classNames(
            'transition-all leading-3 text-app-medium-gray font-semibold text-[10px] group-hover:text-app-space-black',
            { 'text-app-white': isActive },
          )}
        >
          {label}
        </span>
      </Grid>
    </div>
  )
}
