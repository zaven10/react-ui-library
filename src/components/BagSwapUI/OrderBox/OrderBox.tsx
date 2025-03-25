import React from 'react'

import classNames from 'classnames'

import { Grid } from '@ui/Grid'

import { IOrderBoxProps } from './IOrderBoxProps.interface'

export const OrderBox: React.FC<Partial<IOrderBoxProps>> = ({
  height = 'h-[210px]',
  isEmpty,
  children,
  className,
  heading,
  headingClassName,
  isScroll,
}) => {
  return (
    <Grid
      className={classNames(
        'rounded-[14px]',
        isScroll && height,
        {
          'border border-app-charcoal-gray': isEmpty,
        },
        className,
      )}
      placeItemsCenter={isEmpty}
    >
      {heading && (
        <Grid
          className={classNames(
            'text-app-medium-gray text-xs px-[15px] pt-[13px]',
            headingClassName,
          )}
        >
          {heading.map((title, index) => (
            <span key={index}>{title}</span>
          ))}
        </Grid>
      )}
      {children && (
        <div
          className={classNames('py-3 px-2', {
            'max-h-[calc(210px_-_45px)] overflow-y-auto custom-overflow':
              isScroll,
          })}
        >
          <Grid className="gap-1">{children}</Grid>
        </div>
      )}
    </Grid>
  )
}
