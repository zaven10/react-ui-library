import React from 'react'

import classNames from 'classnames'

import { ICoinPairProps } from './ICoinPairProps.interface'

export const CoinPair: React.FC<Partial<ICoinPairProps>> = ({
  left,
  right,
  className,
  network,
  networkMaskBgColor = 'bg-app-charcoal-gray',
  maskBgColor = 'bg-app-charcoal-gray',
}) => {
  return (
    <div className={classNames('flex items-center relative w-max', className)}>
      {left && (
        <>
          <img src={left} alt="left coin pair" className="relative z-0" />
          {network && (
            <>
              <img
                src={network}
                alt="network coin"
                className="absolute z-[2] w-4 h-4 bottom-0 -right-1"
              />
              <div
                className={classNames(
                  'w-5 h-5 absolute -bottom-0.5 -right-1.5 z-[1] rounded-full',
                  networkMaskBgColor,
                )}
              />
            </>
          )}
        </>
      )}
      {right && (
        <>
          <img
            src={right}
            alt="right coin pair"
            className="relative -left-[13px] z-20"
          />
          <div
            className={classNames(
              'w-9 h-9 absolute left-3.5 z-10 rounded-full',
              maskBgColor,
            )}
          />
        </>
      )}
    </div>
  )
}
