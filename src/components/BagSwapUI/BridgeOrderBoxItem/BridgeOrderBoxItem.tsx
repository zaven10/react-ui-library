import React, { useMemo } from 'react'

import classNames from 'classnames'

import { IBridgeOrderBoxItemProps } from './IBridgeOrderBoxItemProps.interface'

import { Grid } from '@ui/Grid'

export const BridgeOrderBoxItem: React.FC<
  Partial<IBridgeOrderBoxItemProps>
> = ({
  fromCoinImg,
  fromNetworkImg,
  fromQuantity,
  toCoinImg,
  toNetworkImg,
  toQuantity,
  fromCoin,
  fromNetwork,
  toCoin,
  toNetwork,
  status,
  className,
  duration,
}) => {
  const statusData = useMemo(() => {
    switch (status) {
      case 'SIGNING':
        return {
          text: 'Signing...',
          class: 'text-app-medium-gray',
        }
      case 'REDEEM':
        return {
          text: 'Redeem',
          class: 'text-app-white',
        }
      case 'COMPLETED':
        return {
          text: 'Completed',
          class: 'text-app-spring-green',
        }
      case 'FAILED':
        return {
          text: 'Failed',
          class: 'text-app-salmon-pink',
        }
      case 'DURATION':
        return {
          text: `${duration} sec...`,
          class: 'text-app-yellow',
        }
      default:
        return {
          text: <span>&mdash;</span>,
        }
    }
  }, [duration, status])

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
              src={fromCoinImg}
              alt="coin"
              width="15"
              height="15"
              className="rounded-full"
            />
            <img
              src={fromNetworkImg}
              alt="network"
              className="rounded-full absolute bottom-0 -right-0.5"
              width="8"
              height="8"
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="transition-all text-app-white group-hover:text-app-midnight-blue">
              {fromCoin}
            </span>
            <span className="transition-all text-app-medium-gray group-hover:text-app-midnight-blue">
              on {fromNetwork}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="transition-all text-app-white group-hover:text-app-midnight-blue">
            {fromQuantity}
          </span>
          <span className="transition-all text-app-medium-gray group-hover:text-app-midnight-blue">
            {fromCoin}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="relative">
            <img
              src={toCoinImg}
              alt="coin"
              width="15"
              height="15"
              className="rounded-full"
            />
            <img
              src={toNetworkImg}
              alt="network"
              className="rounded-full absolute bottom-0 -right-0.5"
              width="8"
              height="8"
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="transition-all text-app-white group-hover:text-app-midnight-blue">
              {toCoin}
            </span>
            <span className="transition-all text-app-medium-gray group-hover:text-app-midnight-blue">
              on {toNetwork}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="transition-all text-app-white group-hover:text-app-midnight-blue">
            {toQuantity}
          </span>
          <span className="transition-all text-app-medium-gray group-hover:text-app-midnight-blue">
            {toCoin}
          </span>
        </div>
        <div className="text-right">
          <span
            className={classNames(
              'transition-all group-hover:text-app-midnight-blue',
              statusData?.class,
            )}
          >
            {statusData.text}
          </span>
        </div>
      </Grid>
    </div>
  )
}
