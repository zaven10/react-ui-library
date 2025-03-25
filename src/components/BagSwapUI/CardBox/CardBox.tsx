import React from 'react'

import classNames from 'classnames'

import { ICardBoxProps } from './ICardBoxProps.interface'

import { Grid } from '@ui/Grid'

import { useCardBox } from './useCardBox'

export const CardBox: React.FC<Partial<ICardBoxProps>> = ({
  className,
  rounded,
  children,
}) => {
  const { roundedClass } = useCardBox({ rounded })

  return (
    <Grid
      className={classNames(
        'p-[15px] bg-app-midnight-blue',
        roundedClass,
        className,
      )}
    >
      {children}
    </Grid>
  )
}
