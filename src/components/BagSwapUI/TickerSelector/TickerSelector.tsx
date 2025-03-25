import React from 'react'

import classNames from 'classnames'

import { FlexibleRowCard } from '@ui/FlexibleRowCard'
import { CoinPair } from '@ui/CoinPair'

import { ITrickerSelectorProps } from './ITickerSelectorProps.interface'

import { ReactComponent as ArrowDownIcon } from '@/assets/svg/arrow-down-icon.svg'

export const TickerSelector: React.FC<Partial<ITrickerSelectorProps>> = ({
  direction = 'left',
  className,
  leftIcon,
  rightIcon,
  coin,
  network,
  withArrow,
  prependInner,
  networkMaskBgColor = 'bg-app-charcoal-gray',
  maskBgColor = 'bg-app-charcoal-gray',
  textColor = 'text-app-space-black',
}) => {
  return (
    <FlexibleRowCard
      rounded={direction}
      className={classNames('cursor-pointer transition-all group', className)}
    >
      <div
        className={classNames('flex items-center gap-2.5', {
          'order-1 pl-2': direction === 'right',
          'pr-2': direction === 'left' && !withArrow,
        })}
      >
        <CoinPair
          left={leftIcon}
          right={rightIcon}
          network={network}
          maskBgColor={maskBgColor}
          networkMaskBgColor={networkMaskBgColor}
          className={classNames({ 'order-1': direction === 'right' })}
        />
        <span className={classNames('text-lg', textColor)}>{coin}</span>
      </div>
      {prependInner}
      {withArrow && (
        <ArrowDownIcon
          className={classNames(
            'w-[11px] h-[7.7px] [&_g]:fill-app-space-black',
            direction === 'left' ? 'mr-1' : 'ml-1',
          )}
        />
      )}
    </FlexibleRowCard>
  )
}
