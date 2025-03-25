import React from 'react'

import classNames from 'classnames'

import { IOrderBoxItemProps } from './IOrderBoxItemProps.interface'

import { ReactComponent as PercentIcon } from '@/assets/svg/percent-icon.svg'
import { ReactComponent as RemoveIcon } from '@/assets/svg/remove-icon.svg'

import { Grid } from '@ui/Grid'

import { useOrderBoxItem } from './useOrderBoxItem.hook'

export const OrderBoxItem: React.FC<Partial<IOrderBoxItemProps>> = ({
  coinImg,
  networkImg,
  marketPair,
  currentPrice,
  currentPriceCoin,
  limitPrice,
  limitPriceCoin,
  quantity,
  quantityCoin,
  progress,
  timestamp,
  className,
  removable,
}) => {
  const { pairA, pairB, date, time } = useOrderBoxItem({
    marketPair,
    timestamp,
  })

  return (
    <div className="flex items-center gap-2 group">
      <Grid
        className={classNames(
          'p-2 text-xs bg-app-charcoal-gray rounded-md select-none cursor-pointer transition-all group-hover:bg-app-white grow',
          className,
        )}
      >
        <div className="flex items-center gap-1.5">
          <div className="relative">
            <img
              src={coinImg}
              alt="coin"
              width="15"
              height="15"
              className="rounded-full"
            />
            <img
              src={networkImg}
              alt="network"
              className="rounded-full absolute bottom-0 -right-0.5"
              width="8"
              height="8"
            />
          </div>
          <div>
            <span className="transition-all text-app-white group-hover:text-app-midnight-blue">
              {pairA || <>&mdash;</>}
            </span>
            <span className="transition-all text-app-medium-gray group-hover:text-app-midnight-blue">
              /{pairB || <>&mdash;</>}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="transition-all text-app-white group-hover:text-app-midnight-blue">
            {currentPrice || <>&mdash;</>}
          </span>
          <span className="transition-all text-app-medium-gray group-hover:text-app-midnight-blue">
            {currentPriceCoin || <>&mdash;</>}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="transition-all text-app-white group-hover:text-app-midnight-blue">
            {limitPrice || <>&mdash;</>}
          </span>
          <span className="transition-all text-app-medium-gray group-hover:text-app-midnight-blue">
            {limitPriceCoin || <>&mdash;</>}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="transition-all text-app-white group-hover:text-app-midnight-blue">
            {quantity || <>&mdash;</>}
          </span>
          <span className="transition-all text-app-medium-gray group-hover:text-app-midnight-blue">
            {quantityCoin || <>&mdash;</>}
          </span>
        </div>
        <div className="flex items-center gap-0.5">
          <span className="transition-all text-app-white group-hover:text-app-midnight-blue">
            {progress || <>&mdash;</>}
          </span>
          <span>
            <PercentIcon className="transition-all w-3 h-[15px] [&_path]:fill-app-medium-gray group-hover:[&_path]:fill-app-midnight-blue" />
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="transition-all text-app-white group-hover:text-app-midnight-blue">
            {date || <>&mdash;</>}
          </span>
          <span className="transition-all text-app-medium-gray group-hover:text-app-midnight-blue">
            {time || <>&mdash;</>}
          </span>
        </div>
      </Grid>
      {removable && (
        <RemoveIcon className="w-4 h-4 group-hover:[&_path]:fill-app-salmon-pink cursor-pointer transition-all" />
      )}
    </div>
  )
}
