import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Grid } from '@ui/Grid'
import { Button } from '@ui/Button'
import { CardBox } from '@ui/CardBox'
import { Select } from '@ui/Select'
import { ButtonGroup } from '@ui/ButtonGroup'
import { CoinPair } from '@ui/CoinPair'
import { FlexibleRowCard } from '@ui/FlexibleRowCard'
import { Tabs as TabsGroup } from '@ui/Tabs'
import { Title } from '@ui/Title'

import { TabsProvider } from '@/contexts/Tabs'

import { Tabs } from '@/enums'

import { useSelect, useTabs } from '@/hooks'

import { ReactComponent as ArrowDownLongIcon } from '@/assets/svg/arrow-down-long-icon.svg'

import EthImage from '@/assets/images/eth.png'
import ZnnImage from '@/assets/images/znn.png'

export const GroupBFirst: React.FC = () => {
  const $navigate = useNavigate()

  const { active } = useTabs()

  const items = [
    {
      id: '1',
      pair: 'ETH-xZNN',
      coinImages: [EthImage, ZnnImage],
      poolType: 'V3',
      feeTier: '0.25%',
      apr: '0.45%',
      tvl: '$385.3 M',
      volume: '$85.3 M',
    },
    {
      id: '2',
      pair: 'ETH-xZNN',
      coinImages: [EthImage, ZnnImage],
      poolType: 'V3',
      feeTier: '0.25%',
      apr: '0.45%',
      tvl: '$385.3 M',
      volume: '$85.3 M',
    },
    {
      id: '3',
      pair: 'ETH-xZNN',
      coinImages: [EthImage, ZnnImage],
      poolType: 'V2',
      feeTier: '0.25%',
      apr: '0.45%',
      tvl: '$385.3 M',
      volume: '$85.3 M',
    },
    {
      id: '4',
      pair: 'ETH-xZNN',
      coinImages: [EthImage, ZnnImage],
      poolType: 'Stable',
      feeTier: '0.25%',
      apr: '0.45%',
      tvl: '$385.3 M',
      volume: '$85.3 M',
    },
    {
      id: '5',
      pair: 'ETH-xZNN',
      coinImages: [EthImage, ZnnImage],
      poolType: 'V2',
      feeTier: '0.25%',
      apr: '0.45%',
      tvl: '$385.3 M',
      volume: '$85.3 M',
    },
    ...Array.from({ length: 6 }, (_, id) => ({
      id: `${id + 6}`,
      pair: 'ETH-xZNN',
      coinImages: [EthImage, ZnnImage],
      poolType: 'V2',
      feeTier: '0.25%',
      apr: '0.45%',
      tvl: '$385.3 M',
      volume: '$85.3 M',
    })),
  ]

  const select = useSelect('ALL')

  return (
    <>
      {active === Tabs.OPTION_1 && (
        <Grid className="gap-5">
          <div className="flex items-center justify-between">
            <Title text="Title" />
            <TabsGroup
              items={[
                {
                  text: 'Option 1',
                  value: Tabs.OPTION_1,
                },
                {
                  text: 'Option 2',
                  value: Tabs.POSITIONS,
                },
                {
                  text: 'Option 3',
                  value: Tabs.OPTION_3,
                },
              ]}
            />
          </div>
          <Grid className="gap-2.5">
            <CardBox rounded="top" className="grid-cols-[1fr_auto]">
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
              <Grid className="gap-[5px] grid-cols-[repeat(3,auto)]">
                <Button customize="py-[7px] px-2.5 bg-app-baby-blue rounded-md text-xs group-hover:bg-app-white">
                  Button
                </Button>
                <Button customize="py-[7px] px-2.5 bg-app-baby-blue rounded-md text-xs group-hover:bg-app-white">
                  Button
                </Button>
                <Button customize="py-[7px] px-2.5 bg-app-baby-blue rounded-md text-xs group-hover:bg-app-white w-[66px]">
                  Button
                </Button>
              </Grid>
            </CardBox>
            <CardBox rounded="bottom" className="gap-3.5 px-[15px]">
              <Grid className="grid-cols-[2fr_repeat(5,_1fr)] text-app-medium-gray text-xs pl-1 pr-[11px]">
                <span>All Pools</span>
                <span className="text-right">Pool Type</span>
                <span className="text-center">Fee Tier</span>
                <div className="flex items-center justify-center gap-[5px]">
                  <span>ARP</span>
                  <ButtonGroup
                    className="!rounded-[4px]"
                    bgColor="bg-app-charcoal-gray"
                    hoverBgColor=""
                    items={[
                      {
                        text: (
                          <ArrowDownLongIcon className="w-[5.71px] h-2.5 group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                        ),
                        className: 'w-4 !p-[5px]',
                      },
                    ]}
                  />
                </div>
                <div className="flex items-center justify-center gap-[5px]">
                  <span>TVL</span>
                  <ButtonGroup
                    className="!rounded-[4px]"
                    bgColor="bg-app-charcoal-gray"
                    hoverBgColor=""
                    items={[
                      {
                        text: (
                          <ArrowDownLongIcon className="w-[5.71px] h-2.5 group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                        ),
                        className: 'w-4 !p-[5px]',
                      },
                    ]}
                  />
                </div>
                <div className="flex items-center justify-end gap-[5px]">
                  <span>Vol 24H</span>
                  <ButtonGroup
                    className="!rounded-[4px]"
                    bgColor="bg-app-charcoal-gray"
                    hoverBgColor=""
                    items={[
                      {
                        text: (
                          <ArrowDownLongIcon className="w-[5.71px] h-2.5 group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                        ),
                        className: 'w-4 !p-[5px]',
                      },
                    ]}
                  />
                </div>
              </Grid>
              <Grid className="gap-[5px]">
                {items.map((item) => (
                  <div onClick={() => $navigate('/group-b/details')}>
                    <FlexibleRowCard
                      key={item.id}
                      rounded="left"
                      className="hover:bg-app-white transition-all cursor-pointer group pr-2.5"
                      prepend={
                        <CoinPair
                          left={item.coinImages[0]}
                          right={item.coinImages[1]}
                          maskBgColor="group-hover:bg-app-white"
                          className="-mr-[13px]"
                        />
                      }
                    >
                      <Grid className="grid-cols-[140px_repeat(5,_1fr)] grow items-center">
                        <span className="text-app-white text-lg group-hover:text-app-space-black">
                          {item.pair}
                        </span>
                        <span className="text-app-medium-gray text-right group-hover:text-app-space-black">
                          {item.poolType}
                        </span>
                        <span className="text-app-medium-gray text-center group-hover:text-app-space-black">
                          {item.feeTier}
                        </span>
                        <span className="text-app-medium-gray text-center group-hover:text-app-space-black">
                          {item.apr}
                        </span>
                        <span className="text-app-white text-center group-hover:text-app-space-black">
                          {item.tvl}
                        </span>
                        <span className="text-app-white text-right group-hover:text-app-space-black">
                          {item.volume}
                        </span>
                      </Grid>
                    </FlexibleRowCard>
                  </div>
                ))}
              </Grid>
            </CardBox>
          </Grid>
        </Grid>
      )}
    </>
  )
}
