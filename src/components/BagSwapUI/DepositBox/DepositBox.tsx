import React from 'react'

import classNames from 'classnames'

import { IDepositBoxProps } from './IDepositBoxProps.interface'

import { Grid } from '@ui/Grid'
import { Badge } from '@ui/Badge'
import { TextField } from '@ui/TextField'
import { TickerSelector } from '@ui/TickerSelector'

import { ReactComponent as ExternalLinkIcon } from '@/assets/svg/external-link-icon.svg'
import { ReactComponent as LockedIcon } from '@/assets/svg/locked-icon.svg'

import { $shortenWalletAddress, $smallerSize } from '@/utils'

export const DepositBox: React.FC<Partial<IDepositBoxProps>> = ({
  title,
  address = '',
  assetsPrice,
  priceInUSD,
  isExceedsBalance,
  walletBalance,
  walletIcon,
  badgeBgColor = 'bg-app-baby-blue',
  fieldBgColor = 'bg-app-baby-blue',
  tickerBgColor = '!bg-[#FFFFFF3A]',
  tickerBgHoverColor = 'group-hover:!bg-app-space-black group-focus-within:!bg-app-space-black',
  tickerTextHoverColor = 'group-hover:[&_span]:!text-app-white group-focus-within:[&_span]:!text-app-white',
  coinIcon,
  coin,
  network,
  textColor = 'text-app-medium-gray',
  className,
  isTickerWithArrow,
  locked,
  lockedContent,
  networkMaskBgColor,
  readonly,
  value,
}) => {
  return (
    <div className="relative">
      <Grid className={classNames('gap-0.5', className)}>
        <Grid className="gap-1.5">
          {(title || address || assetsPrice) && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {title}
                {address && (
                  <Badge
                    className={classNames(
                      { 'hover:bg-app-white cursor-pointer': !locked },
                      badgeBgColor,
                    )}
                    text={$shortenWalletAddress(address)}
                    appendIcon={
                      <ExternalLinkIcon className="w-[7px] h-[7px]" />
                    }
                  />
                )}
              </div>
              {assetsPrice && (
                <span className={classNames('text-[10px]', textColor)}>
                  {assetsPrice}
                </span>
              )}
            </div>
          )}
          <TextField
            bgColor={fieldBgColor}
            value={value}
            disabled={locked}
            readonly={readonly}
            className="!rounded-lg group !text-app-space-black [&>input]:text-[46px] grid grid-cols-[1fr_auto] !p-1 !pl-2"
            append={
              <TickerSelector
                leftIcon={coinIcon}
                network={network}
                networkMaskBgColor={networkMaskBgColor}
                coin={coin}
                className={classNames(
                  { [tickerTextHoverColor]: !locked },
                  { [tickerBgColor]: !locked },
                  { [tickerBgHoverColor]: !locked },
                )}
                withArrow={isTickerWithArrow}
              />
            }
          />
        </Grid>
        {(isExceedsBalance || priceInUSD || walletIcon || walletBalance) && (
          <div className="flex items-center justify-between">
            {isExceedsBalance && (
              <span className="leading-5 text-app-space-black">
                Exceeds Balance
              </span>
            )}
            {priceInUSD && !isExceedsBalance && (
              <span
                className={classNames('leading-5', textColor)}
                dangerouslySetInnerHTML={{
                  __html: $smallerSize(priceInUSD, {
                    from: -2,
                    size: 14,
                  }),
                }}
              />
            )}
            <div className="flex items-center gap-1.5">
              {walletIcon}
              {walletBalance && (
                <span
                  className={classNames('leading-5', textColor)}
                  dangerouslySetInnerHTML={{
                    __html: $smallerSize(walletBalance, {
                      from: -2,
                      size: 14,
                    }),
                  }}
                />
              )}
            </div>
          </div>
        )}
      </Grid>
      {locked && (
        <Grid
          className="absolute -inset-3.5 bg-[#000000CC] select-none cursor-not-allowed"
          placeItemsCenter
        >
          <Grid placeItemsCenter className="gap-2">
            <LockedIcon className="w-2.5 h-[21px]" />
            {lockedContent}
          </Grid>
        </Grid>
      )}
    </div>
  )
}
