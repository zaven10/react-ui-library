import React from 'react'

import { Grid } from '@ui/Grid'
import { Button } from '@ui/Button'
import { CardBox } from '@ui/CardBox'
import { Select } from '@ui/Select'
import { CoinPair } from '@ui/CoinPair'
import { FlexibleRowCard } from '@ui/FlexibleRowCard'
import { Tabs as TabsGroup } from '@ui/Tabs'
import { Title } from '@ui/Title'

import classNames from 'classnames'

import { TabsProvider } from '@/contexts/Tabs'

import { Tabs } from '@/enums'

import { useSelect, useTabs } from '@/hooks'

import EthImage from '@/assets/images/eth.png'
import ZnnImage from '@/assets/images/znn.png'

import { ReactComponent as PlusIcon } from '@/assets/svg/plus-icon.svg'

import { $smallerSize } from '@/utils'

export const GroupBPositions: React.FC = () => {
  const { active } = useTabs()

  const items = [
    {
      id: '1',
      pair: 'ETH-xZNN',
      coinImages: [EthImage, ZnnImage],
      hash: '#1370716',
      type: 'V3',
      value: '0.01%',
      status: 'ACTIVE',
      priceInUSD: '$123.51',
      coins: [
        {
          coin: 'ETH',
          value: '0.003202',
        },
        {
          coin: 'xZNN',
          value: '23,432',
        },
      ],
    },
    {
      id: '2',
      pair: 'ETH-xZNN',
      coinImages: [EthImage, ZnnImage],
      hash: '#1370713',
      type: 'V3',
      value: '0.01%',
      status: 'INACTIVE',
      priceInUSD: '$123.51',
      coins: [
        {
          coin: 'ETH',
          value: '0.003202',
        },
        {
          coin: 'xZNN',
          value: '23,432',
        },
      ],
    },
    {
      id: '3',
      pair: 'ETH-xZNN',
      coinImages: [EthImage, ZnnImage],
      hash: '#137042',
      type: 'V3',
      value: '0.01%',
      status: 'CLOSED',
      priceInUSD: '$123.51',
      coins: [
        {
          coin: 'ETH',
          value: '0.003202',
        },
        {
          coin: 'xZNN',
          value: '23,432',
        },
      ],
    },
    {
      id: '4',
      pair: 'ETH-xZNN',
      coinImages: [EthImage, ZnnImage],
      hash: '#137042',
      type: 'Stable',
      status: 'ACTIVE',
      priceInUSD: '$123.51',
      coins: [
        {
          coin: 'ETH',
          value: '0.003202',
        },
        {
          coin: 'xZNN',
          value: '23,432',
        },
      ],
    },
  ]

  const select = useSelect('ALL')

  return (
    <>
      {active === Tabs.POSITIONS && (
        <Grid className="gap-5">
          <div className="flex items-center justify-between">
            <Title text="Liquidity Positions" />
            <TabsGroup
              items={[
                {
                  text: 'Pools',
                  value: Tabs.OPTION_1,
                },
                {
                  text: 'Positions',
                  value: Tabs.POSITIONS,
                },
              ]}
            />
          </div>
          <Grid>
            <CardBox
              rounded="top"
              className="grid-cols-[1fr_auto] py-0 pt-[15px]"
            >
              <div className="flex items-center gap-2.5">
                <Select
                  {...select}
                  className="w-[99px]"
                  items={[
                    { text: 'All Tokens', value: 'ALL' },
                    { text: 'XYZ', value: 'XYZ' },
                  ]}
                />
                <TabsProvider initialTab={Tabs.ALL}>
                  <TabsGroup
                    items={[
                      {
                        text: 'All',
                        value: Tabs.ALL,
                      },
                      {
                        text: 'V2',
                        value: Tabs.V2,
                      },
                      {
                        text: 'V3',
                        value: Tabs.V3,
                      },
                      {
                        text: 'Stable',
                        value: Tabs.STABLE,
                      },
                    ]}
                    bgColor="bg-app-space-black"
                    className="[&>div]:!py-[7px] [&>div]:!px-2.5 [&>div]:!text-xs"
                  />
                </TabsProvider>
              </div>
              <div className="gap-2.5 flex items-center">
                <TabsProvider initialTab={Tabs.ALL}>
                  <TabsGroup
                    items={[
                      {
                        text: 'All',
                        value: Tabs.ALL,
                      },
                      {
                        text: 'Active',
                        value: Tabs.ACTIVE,
                      },
                      {
                        text: 'Inactive',
                        value: Tabs.INACTIVE,
                      },
                      {
                        text: 'Closed',
                        value: Tabs.CLOSED,
                      },
                    ]}
                    bgColor="bg-app-space-black"
                    className="[&>div]:!py-[7px] [&>div]:!px-2.5 [&>div]:!text-xs"
                  />
                </TabsProvider>
                <Button customize="py-[7px] px-2.5 bg-app-baby-blue rounded-md text-xs group-hover:bg-app-white">
                  Add Liquidity
                </Button>
              </div>
            </CardBox>
            <CardBox rounded="bottom" className="gap-3.5 p-0 pt-5">
              <Grid className="gap-[5px] overflow-y-auto max-h-[420px] custom-overflow">
                {items.map((item) => (
                  <FlexibleRowCard
                    key={item.id}
                    rounded="left"
                    className="hover:bg-app-white transition-all cursor-pointer group pr-2.5"
                    prepend={
                      <CoinPair
                        maskBgColor="group-hover:bg-app-white"
                        left={item.coinImages[0]}
                        right={item.coinImages[1]}
                        className="-mr-[13px]"
                      />
                    }
                    append={
                      <div className="text-xs flex items-baseline gap-1 text-app-medium-gray group-hover:text-app-space-black">
                        <span>{item.priceInUSD}</span>
                        <span className="border-l h-4 border-app-medium-gray group-hover:border-app-space-black self-center" />
                        {item.coins?.map((coin, idx) => (
                          <div className="gap-1 flex items-baseline">
                            {Boolean(idx) && (
                              <PlusIcon className="w-2 h-2 self-center [&_g]:fill-app-white group-hover:[&_g]:fill-app-space-black" />
                            )}
                            <span>
                              {!Boolean(idx) && (
                                <span
                                  className="text-app-white group-hover:text-app-space-black text-base"
                                  dangerouslySetInnerHTML={{
                                    __html: $smallerSize(coin.value, {
                                      from: -6,
                                      size: 14,
                                      fillFull: true,
                                    }),
                                  }}
                                />
                              )}
                              {Boolean(idx) && (
                                <span className="text-base text-app-white group-hover:text-app-space-black">
                                  {coin.value}
                                </span>
                              )}
                            </span>
                            <span className="text-base">{coin.coin}</span>
                          </div>
                        ))}
                      </div>
                    }
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-app-white text-lg group-hover:text-app-space-black">
                        {item.pair}
                      </span>
                      <div className="text-xs flex items-baseline gap-1 text-app-medium-gray group-hover:text-app-space-black">
                        <span>{item.hash}</span>
                        <span className="border-l h-[13px] border-app-medium-gray group-hover:border-app-space-black self-center" />
                        {item.type && (
                          <>
                            <span>{item.type}</span>
                            <span className="border-l h-[13px] border-app-medium-gray group-hover:border-app-space-black self-center" />
                          </>
                        )}
                        <span>{item.value}</span>
                        <span className="border-l h-[13px] border-app-medium-gray group-hover:border-app-space-black self-center" />
                        <span
                          className={classNames(
                            'text-right group-hover:text-app-space-black',
                            {
                              'text-app-spring-green': item.status === 'ACTIVE',
                            },
                            {
                              'text-app-medium-gray':
                                item.status === 'INACTIVE',
                            },
                            {
                              'text-app-salmon-pink': item.status === 'CLOSED',
                            },
                          )}
                        >
                          {item.status === 'ACTIVE' && 'Active'}
                          {item.status === 'INACTIVE' && 'Inactive'}
                          {item.status === 'CLOSED' && 'Closed'}
                        </span>
                      </div>
                    </div>
                  </FlexibleRowCard>
                ))}
              </Grid>
            </CardBox>
          </Grid>
        </Grid>
      )}
    </>
  )
}
