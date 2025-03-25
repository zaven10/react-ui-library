import React, { useState } from 'react'

import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets'

import { Grid } from '@ui/Grid'
import { TickerSelector } from '@ui/TickerSelector'

import PairCoin from '@/assets/images/pair-coin.png'
import PairCoinBlack from '@/assets/images/pair-coin-black.png'

import { ReactComponent as ViceVersaIcon } from '@/assets/svg/vice-versa-icon.svg'

import { ITWRealTimeChartBoxProps } from './ITWRealTimeChartBoxProps.interface'
import classNames from 'classnames'

export const TWRealTimeChartBox: React.FC<
  Partial<ITWRealTimeChartBoxProps>
> = ({ chartHeight = 'h-[506px]' }) => {
  const [coin, setCoin] = useState(PairCoin) // just for design, it should be removed

  return (
    <Grid className="gap-[24px]">
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-app-white leading-[29px] text-2xl">
            $3,333.33
          </span>
          <span className="text-sm leading-[17px] text-app-spring-green">
            33.333 (3.33%)
          </span>
        </div>
        <div
          // onMouseOver and onMouseLeave just for design it should be removed
          onMouseOver={() => setCoin(PairCoinBlack)}
          onMouseLeave={() => setCoin(PairCoin)}
        >
          <TickerSelector
            leftIcon={coin}
            rightIcon={coin}
            direction="right"
            coin="XYZ / XYZ"
            textColor="text-app-white group-hover:text-app-space-black"
            maskBgColor="group-hover/nested:bg-app-white bg-app-charcoal-gray"
            prependInner={
              <ViceVersaIcon className="w-[15px] h-[15px] [&_path]:fill-app-white group-hover:[&_path]:fill-app-space-black pl-1" />
            }
            className="hover:!bg-app-white !text-app-white [&>div>div>div]:!w-[47px] group/nested"
          />
        </div>
      </div>
      <div
        className={classNames(chartHeight, 'rounded-[13px] overflow-hidden')}
      >
        <AdvancedRealTimeChart
          theme="dark"
          autosize
          symbol="WZNNWETH_DAC866.USD"
          hide_top_toolbar
          hide_side_toolbar
          hide_legend
          interval="D"
          copyrightStyles={{ parent: { display: 'none' } }}
          studies={['MACD@tv-basicstudies']}
        />
      </div>
    </Grid>
  )
}
