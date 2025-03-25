import React from 'react'

import { useNavigate } from 'react-router-dom'

import { MainLayout } from '@/layouts'

import { Grid } from '@ui/Grid'
import { Button } from '@ui/Button'
import { Tabs as TabsGroup } from '@ui/Tabs'
import { Title } from '@ui/Title'
import { Container } from '@ui/Container'
import { CoinPair } from '@ui/CoinPair'
import { CardBox } from '@ui/CardBox'
import { FlexibleRowCard } from '@ui/FlexibleRowCard'
import { ButtonGroup } from '@ui/ButtonGroup'

import { TabsProvider } from '@/contexts/Tabs'

import { $shortenWalletAddress, $smallerSize } from '@/utils'

import { Tabs } from '@/enums'

import EthImage from '@/assets/images/eth.png'
import ZnnImage from '@/assets/images/znn.png'

import { ReactComponent as ExternalLinkIcon } from '@/assets/svg/external-link-icon.svg'
import { ReactComponent as ArrowDownLongIcon } from '@/assets/svg/arrow-down-long-icon.svg'
import { ReactComponent as RightArrowIcon } from '@/assets/svg/right-arrow-icon.svg'

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

const GroupBDetailsPage: React.FC = () => {
  const $navigate = useNavigate()

  const items = [
    {
      id: '1',
      coins: [EthImage, ZnnImage],
      title: 'Swap ETH for xZNN',
      eth: '3.24',
      xZnn: '12,235.29',
      value: '$23,024.02',
      account: '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
      time: '20 minutes ago',
    },
    {
      id: '2',
      coins: [ZnnImage, EthImage],
      title: 'Swap xZNN for ETH',
      eth: '6.74',
      xZnn: '34,245.22',
      value: '$64,203.92',
      account: '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
      time: '23 minutes ago',
    },
    {
      id: '3',
      coins: [EthImage, ZnnImage],
      title: 'Swap ETH for xZNN',
      eth: '3.24',
      xZnn: '12,235.29',
      value: '$23,024.02',
      account: '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
      time: '20 minutes ago',
    },
    {
      id: '4',
      coins: [ZnnImage, EthImage],
      title: 'Swap xZNN for ETH',
      eth: '6.74',
      xZnn: '34,245.22',
      value: '$64,203.92',
      account: '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
      time: '23 minutes ago',
    },
    {
      id: '5',
      coins: [EthImage, ZnnImage],
      title: 'Swap ETH for xZNN',
      eth: '3.24',
      xZnn: '12,235.29',
      value: '$23,024.02',
      account: '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
      time: '20 minutes ago',
    },
    {
      id: '6',
      coins: [ZnnImage, EthImage],
      title: 'Swap xZNN for ETH',
      eth: '6.74',
      xZnn: '34,245.22',
      value: '$64,203.92',
      account: '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
      time: '23 minutes ago',
    },
    {
      id: '7',
      coins: [EthImage, ZnnImage],
      title: 'Swap ETH for xZNN',
      eth: '3.24',
      xZnn: '12,235.29',
      value: '$23,024.02',
      account: '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
      time: '20 minutes ago',
    },
    {
      id: '8',
      coins: [ZnnImage, EthImage],
      title: 'Swap xZNN for ETH',
      eth: '6.74',
      xZnn: '34,245.22',
      value: '$64,203.92',
      account: '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
      time: '23 minutes ago',
    },
    {
      id: '9',
      coins: [EthImage, ZnnImage],
      title: 'Swap ETH for xZNN',
      eth: '3.24',
      xZnn: '12,235.29',
      value: '$23,024.02',
      account: '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
      time: '20 minutes ago',
    },
    {
      id: '10',
      coins: [ZnnImage, EthImage],
      title: 'Swap xZNN for ETH',
      eth: '6.74',
      xZnn: '34,245.22',
      value: '$64,203.92',
      account: '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
      time: '23 minutes ago',
    },
  ]

  const chartData = [
    95, 120, 161, 218, 141, 161, 268, 298, 193, 149, 231, 218, 193, 176, 202,
    184, 149, 116, 176, 168, 202, 101, 66, 33, 116, 141, 184, 202, 161, 224,
    101, 95, 120, 161, 218, 141, 161, 268, 298, 193, 149, 231, 218, 193, 176,
    202, 184, 149, 116, 176, 168, 202, 101, 66, 33, 116, 141, 184, 202, 161,
    224, 101, 184, 202, 161, 224,
  ].map((value, idx) => ({
    value,
    isCurrent: idx === 35,
    name: idx === 35 ? 'c' : 'a',
  }))

  return (
    <MainLayout>
      <Container className="!max-w-[1139px]">
        <TabsProvider initialTab={Tabs.OPTION_1}>
          <Grid className="gap-5 grid-cols-[1fr_356px] items-center">
            <Grid className="self-start gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Title withArrow action={() => $navigate('/group-b')} />
                  <div className="flex items-center gap-3">
                    <CoinPair
                      left={EthImage}
                      right={ZnnImage}
                      maskBgColor="bg-app-space-black"
                      className="-mr-[13px]"
                    />
                    <span className="text-app-white text-[32px]">
                      ETH / xZNN
                    </span>
                  </div>
                </div>
                <TabsGroup
                  items={[
                    {
                      text: (
                        <span className="text-sm flex gap-1">
                          <span className="text-app-white">V3</span>
                          <span className="text-app-medium-gray">(0.01%)</span>
                        </span>
                      ),
                      value: Tabs.OPTION_1,
                    },
                    {
                      text: (
                        <span className="text-sm flex gap-1">
                          <span className="text-app-white">26.34%</span>
                          <span className="text-app-medium-gray">APR</span>
                        </span>
                      ),
                      value: Tabs.OPTION_2,
                    },
                    {
                      text: (
                        <span className="text-sm flex gap-1 items-center">
                          <span className="text-app-white">
                            {$shortenWalletAddress(
                              '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
                            )}
                          </span>
                          <ExternalLinkIcon className="w-2.5 h-2.5 [&_path]:fill-app-white" />
                        </span>
                      ),
                      value: Tabs.OPTION_3,
                    },
                  ]}
                />
              </div>
              <CardBox className="!rounded-[14px]">
                <Grid className="gap-5">
                  <Grid className="justify-end">
                    <TabsProvider initialTab={Tabs.VOLUME}>
                      <TabsGroup
                        bgColor="bg-app-space-black"
                        textColor="text-app-white"
                        className="[&>div]:!py-[7px] [&>div]:!px-[9px] [&>div]:!text-xs"
                        items={[
                          {
                            text: 'Volume',
                            value: Tabs.VOLUME,
                          },
                          {
                            text: 'Liquidity',
                            value: Tabs.LIQUIDITY,
                          },
                          {
                            text: 'Fees',
                            value: Tabs.FEES,
                          },
                          {
                            text: 'TVL',
                            value: Tabs.TVL,
                          },
                        ]}
                      />
                    </TabsProvider>
                  </Grid>
                  <div className="h-[336px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        width={762}
                        height={320}
                        barSize={9}
                        barGap={2}
                        data={chartData}
                      >
                        <XAxis
                          dataKey="name"
                          axisLine={false}
                          tickLine={false}
                          minTickGap={10}
                          tick={(props) => {
                            return props.payload.value === 'c' ? (
                              <g transform={`translate(${props.x},${props.y})`}>
                                <text
                                  x={0}
                                  y={0}
                                  dy={16}
                                  textAnchor="end"
                                  fill="#F18D8B"
                                  transform="translate(43, 0)"
                                  className="text-[13px]"
                                >
                                  Current Price
                                </text>
                              </g>
                            ) : (
                              <></>
                            )
                          }}
                        />
                        <Tooltip
                          cursor={{ fill: 'var(--appCharcoalGray)' }}
                          content={({ active, payload, label }) => {
                            if (!active || !payload || !payload.length) {
                              return null
                            }

                            return (
                              <CardBox className="!rounded-lg w-[203px] !py-[11px] gap-0.5">
                                <div className="flex justify-between items-center">
                                  <Title
                                    text="ETH Price"
                                    subtitle
                                    className="[&_h1]:text-app-medium-gray [&_h1]:!font-bold"
                                  />
                                  <Title text="$3,234.23" subtitle />
                                </div>
                                <div className="flex justify-between items-center">
                                  <Title
                                    text="xZNN Price"
                                    subtitle
                                    className="[&_h1]:text-app-medium-gray [&_h1]:!font-bold"
                                  />
                                  <Title text="$1,000.00" subtitle />
                                </div>
                                <div className="flex justify-between items-center">
                                  <Title
                                    text="ETH Locked"
                                    subtitle
                                    className="[&_h1]:text-app-medium-gray [&_h1]:!font-bold"
                                  />
                                  <Title text="23.02" subtitle />
                                </div>
                              </CardBox>
                            )
                          }}
                        />
                        <Bar
                          dataKey="value"
                          fill="var(--appBabyBlue)"
                          shape={(props: any) => (
                            <g>
                              <rect
                                x={props.x}
                                y={props.y}
                                fill={props.isCurrent ? '#F18D8B' : props.fill}
                                width={props.width}
                                height={props.height}
                                rx="2"
                              />
                            </g>
                          )}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Grid>
              </CardBox>
            </Grid>
            <Grid className="gap-5">
              <Grid className="gap-3 grid-cols-2">
                <Button customize="bg-trade-menu-gradient !py-3 !rounded-lg text-sm h-[44px]">
                  Trade
                </Button>
                <Button customize="bg-app-baby-blue !py-3 !rounded-lg text-sm h-[44px]">
                  Add Liquidity
                </Button>
              </Grid>
              <CardBox className="!rounded-[14px] gap-4">
                <Grid className="gap-[5px]">
                  <FlexibleRowCard
                    rounded="left"
                    prepend={<CoinPair left={EthImage} />}
                    append={
                      <span
                        dangerouslySetInnerHTML={{
                          __html: $smallerSize('152.003', {
                            from: -3,
                            size: 14,
                          }),
                        }}
                        className="text-app-white pr-1 font-semibold"
                      />
                    }
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-app-white text-lg">ETH</span>
                      <span className="text-app-medium-gray text-xs">
                        Pooled
                      </span>
                    </div>
                  </FlexibleRowCard>
                  <FlexibleRowCard
                    rounded="left"
                    prepend={<CoinPair left={ZnnImage} />}
                    append={
                      <span
                        dangerouslySetInnerHTML={{
                          __html: $smallerSize('234,245.22', {
                            from: -2,
                            size: 14,
                          }),
                        }}
                        className="text-app-white pr-1 font-semibold"
                      />
                    }
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-app-white text-lg">xZNN</span>
                      <span className="text-app-medium-gray text-xs">
                        Pooled
                      </span>
                    </div>
                  </FlexibleRowCard>
                </Grid>
                <Grid className="gap-2">
                  <Title
                    subtitle
                    text="Total Value Locked (TVL)"
                    className="[&_h1]:text-app-medium-gray"
                  />
                  <div className="flex items-center gap-1">
                    <Title
                      text="$5.54M"
                      className="[&_h1]:text-[46px] leading-[56px]"
                    />
                    <Title
                      text="+2.88%"
                      subtitle
                      className="[&_h1]:text-app-spring-green"
                    />
                  </div>
                </Grid>
                <Grid className="gap-2">
                  <Title
                    subtitle
                    text="Volume 24H"
                    className="[&_h1]:text-app-medium-gray"
                  />
                  <div className="flex items-center gap-1">
                    <Title
                      text="$82.22M"
                      className="[&_h1]:text-[46px] leading-[56px]"
                    />
                    <Title
                      text="-5.43%"
                      subtitle
                      className="[&_h1]:text-app-salmon-pink"
                    />
                  </div>
                </Grid>
                <Grid className="gap-2">
                  <Title
                    subtitle
                    text="Fee 24H"
                    className="[&_h1]:text-app-medium-gray"
                  />
                  <div className="flex items-center gap-1">
                    <Title
                      text="$7.23K"
                      className="[&_h1]:text-[46px] leading-[56px]"
                    />
                  </div>
                </Grid>
              </CardBox>
            </Grid>
            <div className="col-span-2">
              <CardBox className="!rounded-[14px] gap-5">
                <Grid className="gap-[15px]">
                  <Grid className="grid-cols-[auto_1fr] pl-1 pr-[11px]">
                    <div className="flex gap-2">
                      <Title
                        text="Transactions"
                        subtitle
                        className="[&_h1]:!text-xs [&_h1]:!text-app-medium-gray"
                      />
                      <TabsProvider>
                        <TabsGroup
                          bgColor="bg-app-space-black"
                          textColor="text-app-white"
                          className="[&>div]:!py-[7px] [&>div]:!px-[9px] [&>div]:!text-xs"
                          items={[
                            {
                              text: 'All',
                              value: Tabs.ALL,
                            },
                            {
                              text: 'Swaps',
                              value: Tabs.SWAPS,
                            },
                            {
                              text: 'Adds',
                              value: Tabs.ADDS,
                            },
                            {
                              text: 'Removes',
                              value: Tabs.REMOVES,
                            },
                          ]}
                        />
                      </TabsProvider>
                    </div>
                    <Grid className="grid-cols-5">
                      <div className="flex items-center justify-center gap-[5px]">
                        <span className="text-app-medium-gray text-xs">
                          ETH
                        </span>
                        <ButtonGroup
                          className="rounded-[3px]"
                          bgColor="bg-app-charcoal-gray"
                          hoverBgColor=""
                          items={[
                            {
                              text: (
                                <ArrowDownLongIcon className="w-1.5 h-2.5 group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                              ),
                              className: 'w-3 !p-[5px]',
                            },
                          ]}
                        />
                      </div>
                      <div className="flex items-center justify-center gap-[5px]">
                        <span className="text-app-medium-gray text-xs">
                          xZNN
                        </span>
                        <ButtonGroup
                          className="rounded-[3px]"
                          bgColor="bg-app-charcoal-gray"
                          hoverBgColor=""
                          items={[
                            {
                              text: (
                                <ArrowDownLongIcon className="w-1.5 h-2.5 group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                              ),
                              className: 'w-3 !p-[5px]',
                            },
                          ]}
                        />
                      </div>
                      <div className="flex items-center justify-center gap-[5px]">
                        <span className="text-app-medium-gray text-xs">
                          Value
                        </span>
                        <ButtonGroup
                          className="rounded-[3px]"
                          bgColor="bg-app-charcoal-gray"
                          hoverBgColor=""
                          items={[
                            {
                              text: (
                                <ArrowDownLongIcon className="w-1.5 h-2.5 group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                              ),
                              className: 'w-3 !p-[5px]',
                            },
                          ]}
                        />
                      </div>
                      <div className="flex items-center justify-center gap-[5px]">
                        <span className="text-app-medium-gray text-xs">
                          Account
                        </span>
                        <ButtonGroup
                          className="rounded-[3px]"
                          bgColor="bg-app-charcoal-gray"
                          hoverBgColor=""
                          items={[
                            {
                              text: (
                                <ArrowDownLongIcon className="w-1.5 h-2.5 group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                              ),
                              className: 'w-3 !p-[5px]',
                            },
                          ]}
                        />
                      </div>
                      <div className="flex items-center justify-end gap-[5px]">
                        <span className="text-app-medium-gray text-xs">
                          Time
                        </span>
                        <ButtonGroup
                          className="rounded-[3px]"
                          bgColor="bg-app-charcoal-gray"
                          hoverBgColor=""
                          items={[
                            {
                              text: (
                                <ArrowDownLongIcon className="w-1.5 h-2.5 group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                              ),
                              className: 'w-3 !p-[5px]',
                            },
                          ]}
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <div className="max-h-[470px] overflow-y-auto custom-overflow">
                    <Grid className="gap-[5px]">
                      {items.map((transaction) => (
                        <FlexibleRowCard
                          rounded="left"
                          className="hover:bg-app-white transition-all cursor-pointer group [&>div:last-child]:block pr-2.5"
                          prepend={
                            <CoinPair
                              left={transaction.coins[0]}
                              right={transaction.coins[1]}
                              className="-mr-[13px]"
                            />
                          }
                        >
                          <Grid className="grid-cols-[1.5fr_repeat(5,_1fr)] text-center gap-2 group-hover:!text-app-space-black text-app-white text-base">
                            <span className="text-lg text-left">
                              {transaction.title}
                            </span>
                            <span>{transaction.eth}</span>
                            <span>{transaction.xZnn}</span>
                            <span>{transaction.value}</span>
                            <span className="text-app-medium-gray text-lg group-hover:!text-app-space-black">
                              {$shortenWalletAddress(transaction.account)}
                            </span>
                            <span className="text-right">
                              {transaction.time}
                            </span>
                          </Grid>
                        </FlexibleRowCard>
                      ))}
                    </Grid>
                  </div>
                </Grid>
                <Grid placeItemsCenter>
                  <ButtonGroup
                    className="rounded-md"
                    bgColor="bg-app-space-black"
                    items={[
                      {
                        text: (
                          <RightArrowIcon className="w-2.5 h-[5.71px] group-hover:[&_path]:fill-app-white [&_path]:transition-all rotate-180" />
                        ),
                        className: 'w-8 !py-3',
                      },
                      {
                        text: 'Page 1 of 5',
                        className:
                          'w-[82px] !py-1.5 [&>span]:!text-xs !px-[9px] !bg-app-charcoal-gray [&>span]:text-app-white',
                      },
                      {
                        text: (
                          <RightArrowIcon className="w-2.5 h-[5.71px] group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                        ),
                        className: 'w-8 !py-3',
                      },
                    ]}
                  />
                </Grid>
              </CardBox>
            </div>
          </Grid>
        </TabsProvider>
      </Container>
    </MainLayout>
  )
}

export default GroupBDetailsPage
