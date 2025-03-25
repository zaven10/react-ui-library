import React from 'react'

import { IModalWindowProps } from './IModalWindowProps.interface'

import classNames from 'classnames'

import { Grid } from '@ui/Grid'

export const ModalWindow: React.FC<Partial<IModalWindowProps>> = ({
  children,
  titleChild,
  boxClass,
  className,
  isScroll,
  bgColor = 'bg-app-midnight-blue',
}) => {
  return (
    <div className={classNames('absolute z-50', className)}>
      <Grid
        className={classNames(
          'py-4 px-5 gap-4 rounded-[18px]',
          bgColor,
          boxClass,
        )}
      >
        {titleChild && <div className="text-app-white">{titleChild}</div>}
        <div
          className={classNames({
            'max-h-[calc(100vh_-_276px)] overflow-y-auto custom-overflow':
              isScroll,
          })}
        >
          {children}
        </div>
      </Grid>
    </div>
  )
}
