import React from 'react'

import classNames from 'classnames'

import { IDisclaimerProps } from './IDisclaimerProps.interface'

import { useDisclaimer } from './useDisclaimer'

export const Disclaimer: React.FC<Partial<IDisclaimerProps>> = ({
  children,
  className,
  color,
}) => {
  const { colors } = useDisclaimer({ color })

  return (
    <div
      className={classNames(
        'p-3.5 rounded-lg font-semibold text-xs select-none',
        colors,
        className,
      )}
    >
      {children}
    </div>
  )
}
