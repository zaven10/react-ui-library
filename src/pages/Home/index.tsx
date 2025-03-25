import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import classNames from 'classnames'

import { Grid } from '@ui/Grid'
import { Title } from '@ui/Title'
import { Tabs as TabsGroup } from '@ui/Tabs'
import { CardBox } from '@ui/CardBox'
import { ArrowPill } from '@ui/ArrowPill'
import { Button } from '@ui/Button'
import { RangeField } from '@ui/RangeField'
import { FeeSelector } from '@ui/FeeSelector'
import { FlexibleRowCard } from '@ui/FlexibleRowCard'
import { CoinPair } from '@ui/CoinPair'
import { Disclaimer } from '@ui/Disclaimer'
import { Badge } from '@ui/Badge'
import { PriceFieldBox } from '@ui/PriceFieldBox'
import { TickerSelector } from '@ui/TickerSelector'
import { DepositBox } from '@ui/DepositBox'
import { SettingsRowItem } from '@ui/SettingsRowItem'
import { Tooltip } from '@ui/Tooltip'
import { TextField } from '@ui/TextField'
import { SwitchButton } from '@ui/SwitchButton'
import { Select } from '@ui/Select'
import { ButtonGroup } from '@ui/ButtonGroup'
import { TWRealTimeChartBox } from '@ui/TWRealTimeChartBox'
import { ChartRange } from '@ui/ChartRange'

import { OrderBoxByOption } from '@/components/Temp/OrderBoxByOption'

import { Tabs } from '@/enums'

import { $shortenWalletAddress, $smallerSize } from '@/utils'

import { TabsProvider } from '@/contexts/Tabs'
import { FeeSelectorProvider } from '@/contexts/FeeSelector'

import PairCoin from '@/assets/images/pair-coin.png'
import PairCoinBlack from '@/assets/images/pair-coin-black.png'
import EthCoin from '@/assets/images/eth.png'

import { ReactComponent as PlusIcon } from '@/assets/svg/plus-icon.svg'
import { ReactComponent as OkxIcon } from '@/assets/svg/okx-icon.svg'
import { ReactComponent as PenIcon } from '@/assets/svg/pen-icon.svg'
import { ReactComponent as SearchIcon } from '@/assets/svg/search-icon.svg'
import { ReactComponent as ViceVersaIcon } from '@/assets/svg/vice-versa-icon.svg'
import { ReactComponent as SettingsIcon } from '@/assets/svg/settings-icon.svg'
import { ReactComponent as VerticalArrowsIcon } from '@/assets/svg/vertical-arrows-icon.svg'
import { ReactComponent as ChartBarIcon } from '@/assets/svg/chart-bar-icon.svg'
import { ReactComponent as TransactionHistoryIcon } from '@/assets/svg/transactions-history-icon.svg'
import { ReactComponent as RefreshIcon } from '@/assets/svg/refresh-icon.svg'
import { ReactComponent as ArrowDownLongIcon } from '@/assets/svg/arrow-down-long-icon.svg'
import { ReactComponent as MinusIcon } from '@/assets/svg/minus-icon.svg'
import { ReactComponent as OfflineCloseIcon } from '@/assets/svg/offline-close-icon.svg'
import { ReactComponent as OnlineMarkedIcon } from '@/assets/svg/online-marked-icon.svg'

import { MainLayout } from '@/layouts'

import { useNotification, useSelect, useSwitch } from '@/hooks'

const HomePage: React.FC = () => {
  const { t } = useTranslation()

  const [isArrowPillShow, setIsArrowPillShow] = useState(false)

  const $navigate = useNavigate()

  const { setContent, setBgColor } = useNotification()

  useEffect(() => {
    setContent(
      <>
        <span className="text-app-white mr-1 inline-block">
          {t('NOTIFICATION_BAR.TEXT')}
        </span>
        <Link to="#" className="text-app-baby-blue">
          {t('NOTIFICATION_BAR.LINK')}
        </Link>
      </>,
    )

    setBgColor('bg-app-midnight-blue')
  }, [setContent, t, setBgColor])

  const chartData = [
    {
      value: 4,
      color: 'var(--appSpringGreen)',
      xaxis: 0.005,
    },
    {
      value: 4,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 4,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 4,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 4,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 4,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 4,
      color: 'var(--appSpringGreen)',
      xaxis: 0.01,
    },
    {
      value: 4,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 4,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 11,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 11,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 11,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 11,
      color: 'var(--appSpringGreen)',
      xaxis: 0.015,
    },
    {
      value: 11,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 11,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 11,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 11,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 11,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 11,
      color: 'var(--appSpringGreen)',
      xaxis: 0.02,
    },
    {
      value: 11,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 13,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 13,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 13,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 13,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 13,
      color: 'var(--appSpringGreen)',
      xaxis: 0.025,
    },
    {
      value: 13,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 13,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 13,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 13,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 13,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 13,
      color: 'var(--appSpringGreen)',
      xaxis: 0.03,
    },
    {
      value: 13,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 17,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 33,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 50,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 99,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 140,
      color: 'var(--appSpringGreen)',
      xaxis: 0.035,
    },
    {
      value: 197,
      color: 'var(--appSpringGreen)',
      xaxis: null,
    },
    {
      value: 197,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 140,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 99,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 50,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 33,
      color: '#F28B8B',
      xaxis: 0.04,
    },
    {
      value: 17,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 13,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: 0.045,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: 0.05,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: 0.055,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: 0.06,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: 0.065,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
    {
      value: 0,
      color: '#F28B8B',
      xaxis: null,
    },
  ]

  return (
    <MainLayout>
      <Grid className="grid-cols-[514px_1fr] gap-5 items-start">
        <Grid className="gap-5">
          <div className="flex items-center justify-between">
            <Title
              withArrow
              text="Group A"
              action={() => setIsArrowPillShow(true)}
            />
            {isArrowPillShow ? (
              <ArrowPill
                leftSideText="V2"
                rightSideText="V3"
                onClick={() => setIsArrowPillShow(false)}
              />
            ) : (
              <TabsProvider>
                <TabsGroup
                  items={[
                    {
                      text: 'Option 1',
                      value: Tabs.OPTION_1,
                    },
                    {
                      text: 'Option 2',
                      value: Tabs.OPTION_2,
                    },
                    {
                      text: 'Option 3',
                      value: Tabs.OPTION_3,
                    },
                  ]}
                />
              </TabsProvider>
            )}
          </div>
          <Grid className="gap-2.5">
            <CardBox rounded="top" className="gap-4">
              <div className="flex items-center justify-between">
                <Grid className="gap-[5px] grid-cols-[repeat(3,auto)]">
                  <Button customize="py-[7px] px-2.5 bg-app-baby-blue rounded-md !text-xs group-hover:bg-app-white">
                    Button
                  </Button>
                  <Button
                    customize="py-[7px] px-2.5 bg-app-baby-blue rounded-md !text-xs group-hover:bg-app-white"
                    action={() => $navigate('/group-b')}
                  >
                    Group B
                  </Button>
                  <Button
                    customize="py-[7px] px-2.5 bg-app-baby-blue rounded-md !text-xs group-hover:bg-app-white w-[66px]"
                    action={() => $navigate('/modals')}
                  >
                    Modals
                  </Button>
                </Grid>
                <span className="text-[10px] text-app-medium-gray select-none">
                  #33,333
                </span>
              </div>
              <div className="flex items-center justify-between">
                <Grid className="gap-[5px] grid-cols-[repeat(3,auto)]">
                  <Button customize="py-[7px] px-2.5 bg-app-baby-blue rounded-md !text-xs group-hover:bg-app-white">
                    Button
                  </Button>
                </Grid>
                <span className="text-[10px] text-app-spring-green select-none">
                  #33,333
                </span>
              </div>
              <Grid className="gap-3">
                <Title subtitle text="Sub-title" />
                <Grid className="grid-cols-[1fr_auto_1fr] items-center gap-3.5">
                  <TickerSelector
                    leftIcon={PairCoinBlack}
                    coin="XYZ"
                    withArrow
                    className="!bg-app-baby-blue hover:!bg-app-white"
                  />
                  <PlusIcon className="w-[15px] h-[15px] [&_path]:fill-app-baby-blue" />
                  <TickerSelector
                    direction="right"
                    leftIcon={PairCoinBlack}
                    coin="XYZ"
                    withArrow
                    className="!bg-app-baby-blue hover:!bg-app-white"
                  />
                </Grid>
              </Grid>
              <Grid className="gap-3">
                <div className="flex items-center justify-between">
                  <Title subtitle text="Sub-title" />
                  <span className="text-[10px] text-app-medium-gray select-none">
                    $33,333.33
                  </span>
                </div>
                <Grid className="gap-[5px]">
                  <FlexibleRowCard
                    className="pr-2.5"
                    rounded="left"
                    prepend={<OnlineMarkedIcon className="w-[30px] h-[30px]" />}
                    append={
                      <span className="text-app-medium-gray leading-5">
                        {$shortenWalletAddress(
                          '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
                        )}
                      </span>
                    }
                  >
                    <span className="text-app-white leading-5">0x3639.com</span>
                  </FlexibleRowCard>
                  <FlexibleRowCard
                    className="bg-app-salmon-pink pr-2.5"
                    rounded="left"
                    prepend={<OfflineCloseIcon className="w-[30px] h-[30px]" />}
                    append={
                      <span className="text-app-space-black leading-5">
                        {$shortenWalletAddress(
                          '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
                        )}
                      </span>
                    }
                  >
                    <span className="text-app-space-black leading-5">
                      0x3639.com
                    </span>
                  </FlexibleRowCard>
                  <FlexibleRowCard
                    rounded="full"
                    prepend={<CoinPair left={PairCoin} />}
                    append={<CoinPair left={EthCoin} />}
                  >
                    <span
                      className="text-app-white font-semibold leading-5"
                      dangerouslySetInnerHTML={{
                        __html: $smallerSize('33,333.33', {
                          from: -2,
                          size: 14,
                        }),
                      }}
                    />
                    <span
                      className="text-app-white font-semibold leading-5"
                      dangerouslySetInnerHTML={{
                        __html: $smallerSize('33.333', {
                          from: -3,
                          size: 14,
                        }),
                      }}
                    />
                  </FlexibleRowCard>
                  <FlexibleRowCard
                    rounded="left"
                    className="pr-2.5"
                    prepend={<CoinPair left={PairCoin} />}
                  >
                    <div className="flex items-center gap-[7px]">
                      <span className="text-app-white font-semibold text-lg leading-5">
                        XYZ
                      </span>
                      <span className="text-app-medium-gray text-xs leading-4">
                        Text
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-app-medium-gray text-xs leading-4">
                        $33.33
                      </span>
                      <span className="border-r border-r-app-medium-gray h-5"></span>
                      <span
                        className="text-app-white text-lg leading-5"
                        dangerouslySetInnerHTML={{
                          __html: $smallerSize('3.333', {
                            from: -3,
                            size: 14,
                          }),
                        }}
                      ></span>
                    </div>
                  </FlexibleRowCard>
                  <FlexibleRowCard
                    rounded="left"
                    className="pr-2.5"
                    prepend={
                      <CoinPair
                        left={PairCoin}
                        right={PairCoin}
                        className="-mr-[13px]"
                      />
                    }
                  >
                    <div className="flex items-center gap-[7px]">
                      <span className="text-app-white text-lg leading-5">
                        XYZ-XYZ
                      </span>
                      <span className="text-app-medium-gray text-xs leading-4">
                        Text
                      </span>
                    </div>
                    <span
                      className="text-app-white text-lg leading-5"
                      dangerouslySetInnerHTML={{
                        __html: $smallerSize('3.33333333333', {
                          from: 1,
                          size: 14,
                          fillFull: true,
                        }),
                      }}
                    />
                  </FlexibleRowCard>
                </Grid>
              </Grid>
              <Grid className="gap-3">
                <Title subtitle text="Sub-title" />
                <RangeField isShowPrependValue />
              </Grid>
              <Grid className="gap-3">
                <Title subtitle text="Sub-title" />
                <FeeSelectorProvider selected="0.05%">
                  <Grid className="gap-[15px] grid-cols-2">
                    <FeeSelector
                      label="Lorem ipsum."
                      value="0.01%"
                      badge="8% Text"
                    />
                    <FeeSelector
                      label="Lorem ipsum."
                      value="0.05%"
                      badge="91% Text"
                    />
                    <FeeSelector
                      label="Lorem ipsum."
                      value="0.25%"
                      badge="0.5% Text"
                    />
                    <FeeSelector
                      label="Lorem ipsum."
                      value="1%"
                      badge="0.5% Text"
                    />
                  </Grid>
                </FeeSelectorProvider>
              </Grid>
              <DepositBox
                title={<Title subtitle text="Sub-title" />}
                address="0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn"
                assetsPrice="1 XYZ = $3,333.33"
                priceInUSD="$ 0.00"
                walletBalance="0.00"
                walletIcon={<OkxIcon className="w-4 h-4" />}
                coin="XYZ"
                coinIcon={EthCoin}
                className="[&_input]:max-w-[363px] [&>div>div:last-child]:!py-0 [&>div>div:last-child]:!px-1.5"
              />
              <DepositBox
                title={<Title subtitle text="Sub-title" />}
                address="0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn"
                assetsPrice="1 XYZ = $3,333.33"
                priceInUSD="$ 0.00"
                walletBalance="0.00"
                walletIcon={<OkxIcon className="w-4 h-4" />}
                coin="XYZ"
                coinIcon={EthCoin}
                locked
                lockedContent={
                  <Grid className="text-app-white text-sm">
                    <span>Text line 1</span>
                    <span>text line 2.</span>
                  </Grid>
                }
                className="[&_input]:max-w-[363px] [&>div>div:last-child]:!py-0 [&>div>div:last-child]:!pr-1"
              />
              <Grid className="gap-4">
                <Grid className="gap-3.5">
                  <div className="flex justify-between items-center">
                    <Title text="Sub-title" subtitle />
                    <Badge
                      text="1 XYZ = $33,333 XYZ"
                      className="bg-app-baby-blue hover:bg-app-white hover:text-app-space-black cursor-pointer"
                    />
                  </div>
                  <Grid className="gap-8 grid-cols-2">
                    <PriceFieldBox top="Text" bottom="Text" />
                    <PriceFieldBox top="Text" bottom="Text" />
                  </Grid>
                </Grid>
                <Grid className="gap-2.5">
                  <Disclaimer color="pink">
                    <Grid className="gap-2">
                      <span>Lorem ipsum dolor sit amet.</span>
                      <span>
                        Consectetur adipiscing elit. Morbi porttitor gravida
                        massa quis suscipit.
                      </span>
                      <Button customize="py-2 px-2 w-[57px] bg-app-salmon-pink rounded-md text-xs hover:bg-app-white">
                        Button
                      </Button>
                    </Grid>
                  </Disclaimer>
                  <Disclaimer color="pink" className="leading-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi porttitor gravida massa quis suscipit. Vestibulum
                    convallis consequat velit sed.
                  </Disclaimer>
                </Grid>
                <Grid className="gap-5">
                  <Grid className="grid-cols-[1.25fr_1fr]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[5px]">
                        <Button customize="py-[7px] px-2.5 bg-app-baby-blue rounded-md text-xs group-hover:bg-app-white">
                          Button
                        </Button>
                        <Button customize="py-[7px] px-2.5 bg-app-baby-blue rounded-md text-xs group-hover:bg-app-white">
                          Button
                        </Button>
                      </div>
                      <Button customize="py-[7px] px-2.5 bg-app-baby-blue rounded-md text-xs group-hover:bg-app-white">
                        Button
                      </Button>
                    </div>
                    <div className="flex items-center gap-[5px] justify-end">
                      <Button
                        className="w-5 h-5"
                        customize="!p-0 bg-app-baby-blue rounded-full hover:bg-app-white"
                      >
                        <MinusIcon className="w-2.5" />
                      </Button>
                      <Button
                        className="w-5 h-5"
                        customize="!p-0 bg-app-baby-blue rounded-full hover:bg-app-white"
                      >
                        <PlusIcon className="w-2.5 h-2.5" />
                      </Button>
                    </div>
                  </Grid>
                  <ChartRange data={chartData} />
                  <Grid className="gap-3.5">
                    <SettingsRowItem label="Text">
                      <Button customize="bg-app-baby-blue group-hover:bg-app-white grid-cols-[repeat(2,_auto)] !gap-2 !py-0.5 !px-1.5 font-semibold rounded-md">
                        <PenIcon className="w-2.5 h-2.5" />
                        <span className="text-sm text-app-space-black">
                          0.3%
                        </span>
                      </Button>
                    </SettingsRowItem>
                    <SettingsRowItem label="Text">
                      <Title text="33.33%" subtitle />
                    </SettingsRowItem>
                    <SettingsRowItem label="Text">
                      <div className="flex items-center gap-1">
                        <Title
                          text="$234.51"
                          subtitle
                          className="[&_h1]:!text-xs [&_h1]:!text-app-medium-gray"
                        />
                        <span className="text-app-medium-gray">|</span>
                        <Title text="0.00000333" subtitle />
                      </div>
                    </SettingsRowItem>
                    <SettingsRowItem
                      label="Text"
                      tooltip={
                        <Tooltip
                          className="[&>svg_path]:!fill-app-medium-gray [&>svg]:w-[21px] [&>svg]:h-[21px] [&>svg]:p-[3px] [&>svg]:rounded-full hover:[&>svg]:!bg-app-white"
                          text={
                            <Grid className="text-xs text-app-space-black gap-2">
                              <span>
                                Automatic risk scanning for the selected token.
                                This scanning result is for reference only, and
                                should NOT be taken as investment advice.
                              </span>
                              <span>
                                Provided by{' '}
                                <span className="underline cursor-pointer font-semibold">
                                  HashDit
                                </span>
                              </span>
                              <span className="underline cursor-pointer font-semibold">
                                Learn More
                              </span>
                            </Grid>
                          }
                        />
                      }
                    >
                      <Title text="0.33%" subtitle />
                    </SettingsRowItem>
                  </Grid>
                </Grid>
              </Grid>
            </CardBox>
            <CardBox rounded="bottom" className="!p-2">
              {Array.from({ length: 3 }, (_, idx: number) => (
                <FlexibleRowCard
                  key={idx}
                  className={classNames('rounded-md p-2', {
                    'bg-transparent': idx % 2,
                  })}
                >
                  <div className="flex items-center gap-2">
                    <CoinPair left={PairCoin} className="!w-[15px] !h-[15px]" />
                    <span className="text-xs leading-[15px] flex items-center gap-1">
                      <span className="text-app-white">XYZ</span>
                      <span className="text-app-medium-gray">+3</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CoinPair left={PairCoin} className="!w-[15px] !h-[15px]" />
                    <span className="text-xs leading-[15px] flex items-center gap-1">
                      <span className="text-app-white">XYZ</span>
                      <span className="text-app-medium-gray">+0.03</span>
                    </span>
                  </div>
                  <span className="text-xs leading-[15px] text-app-white">
                    XYZ
                  </span>
                  <span className="text-xs leading-[15px] flex items-center gap-1">
                    <span className="text-app-white">9/9/24</span>
                    <span className="text-app-medium-gray">11:45 PM</span>
                  </span>
                </FlexibleRowCard>
              ))}
            </CardBox>
          </Grid>
          <Grid className="gap-2.5">
            <CardBox rounded="top" className="bg-app-salmon-pink">
              <DepositBox
                title={
                  <Title
                    subtitle
                    text="Sub-title"
                    className="[&_h1]:text-app-space-black"
                  />
                }
                address="0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn"
                assetsPrice="1 XYZ = $3,333.33"
                priceInUSD="$ 0.00"
                walletBalance="0.00"
                badgeBgColor="bg-[#0F11163A]"
                fieldBgColor="bg-[#0F11163A]"
                tickerBgColor="bg-app-white"
                tickerBgHoverColor="group-hover:bg-app-salmon-pink"
                walletIcon={<OkxIcon className="w-4 h-4" />}
                coin="XYZ"
                coinIcon={EthCoin}
                textColor="text-app-space-black"
                tickerTextHoverColor="group-hover:[&_span]:!text-app-space-black group-focus-within:[&_span]:!space-black"
                isTickerWithArrow
                className="[&_input]:max-w-[363px] [&>div>div:last-child]:!py-0 [&>div>div:last-child]:!px-1.5"
              />
            </CardBox>
            <CardBox className="bg-app-spring-green">
              <DepositBox
                title={
                  <Title
                    subtitle
                    text="Sub-title"
                    className="[&_h1]:text-app-space-black"
                  />
                }
                address="0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn"
                assetsPrice="1 XYZ = $3,333.33"
                priceInUSD="$ 0.00"
                walletBalance="0.00"
                badgeBgColor="bg-[#0F11163A]"
                fieldBgColor="bg-[#0F11163A]"
                tickerBgColor="bg-app-white"
                tickerBgHoverColor="group-hover:bg-app-spring-green"
                walletIcon={<OkxIcon className="w-4 h-4" />}
                coin="XYZ"
                coinIcon={EthCoin}
                textColor="text-app-space-black"
                tickerTextHoverColor="group-hover:[&_span]:!text-app-space-black group-focus-within:[&_span]:!space-black"
                isTickerWithArrow
                className="[&_input]:max-w-[363px] [&>div>div:last-child]:!py-0 [&>div>div:last-child]:!px-1.5"
              />
            </CardBox>
            <CardBox rounded="bottom" className="bg-app-spring-green gap-2.5">
              <SettingsRowItem
                label="Text"
                labelClassName="!text-app-space-black"
                tooltip={
                  <Tooltip
                    className="[&>svg_path]:!fill-app-space-black [&>svg]:w-[21px] [&>svg]:h-[21px] [&>svg]:p-[3px] [&>svg]:rounded-full hover:[&>svg]:!bg-[#0F11163A]"
                    text={
                      <Grid className="text-xs text-app-space-black gap-2">
                        <span>
                          Automatic risk scanning for the selected token. This
                          scanning result is for reference only, and should NOT
                          be taken as investment advice.
                        </span>
                        <span>
                          Provided by{' '}
                          <span className="underline cursor-pointer font-semibold">
                            HashDit
                          </span>
                        </span>
                        <span className="underline cursor-pointer font-semibold">
                          Learn More
                        </span>
                      </Grid>
                    }
                  />
                }
              >
                <Button customize="bg-[#0000003A] group-hover:bg-app-white grid-cols-[repeat(2,_auto)] !gap-2 !py-0.5 !px-1.5 font-semibold rounded-md">
                  <PenIcon className="w-2.5 h-2.5" />
                  <span className="text-sm text-app-space-black">0.3%</span>
                </Button>
              </SettingsRowItem>
              <SettingsRowItem
                label="Text"
                labelClassName="!text-app-space-black"
              >
                <span className="text-app-space-black text-sm font-semibold select-none">
                  0.000003 ETH
                </span>
              </SettingsRowItem>
              <SettingsRowItem
                label="Text"
                labelClassName="!text-app-space-black"
              >
                <Button customize="bg-[#0000003A] group-hover:bg-app-white grid-cols-[repeat(2,_auto)] !gap-2 !py-0.5 !px-1.5 font-semibold rounded-md">
                  <SearchIcon className="w-2.5 h-2.5" />
                  <span className="text-sm text-app-space-black">
                    XYZ &gt; XYZ
                  </span>
                </Button>
              </SettingsRowItem>
              <SettingsRowItem
                label="Text"
                labelClassName="!text-app-space-black"
              >
                <div className="flex items-center gap-[5px]">
                  <div className="flex items-center gap-[3px]">
                    <Button customize="bg-[#0000003A] group-hover:bg-app-white !p-2.5 rounded-l-md rounded-r-none">
                      <span className="text-[10px] text-app-space-black">
                        RESET
                      </span>
                    </Button>
                    <TextField
                      className="rounded-r-md rounded-l-none [&_input]:[direction:rtl] [&_input]:text-app-space-black"
                      bgColor="bg-[#0000003A]"
                    />
                  </div>
                  <SwitchButton
                    {...useSwitch()}
                    bgColor="bg-app-space-black"
                    thumbColorOn="bg-app-spring-green"
                    thumbColorOff="bg-app-salmon-pink"
                  />
                </div>
              </SettingsRowItem>
              <SettingsRowItem
                label="Text"
                labelClassName="!text-app-space-black"
              >
                <div className="text-sm text-app-space-black flex items-center gap-1.5">
                  <span>1 XYZ</span>
                  <ViceVersaIcon className="w-2.5 h-2.5" />
                  <span>3.3 XYZ</span>
                </div>
              </SettingsRowItem>
              <SettingsRowItem
                label="Text"
                labelClassName="!text-app-space-black"
              >
                <RangeField
                  bgColor="bg-[#0000003A] hover:bg-app-white"
                  thumbLineColor="bg-app-spring-green"
                  thumbLineFilledColor="bg-app-space-black"
                  thumbColor="var(--appSpaceBlack)"
                  max="10"
                  className="w-[201px] [&>div]:flex [&>div]:items-center"
                  appendInner={(rangeValue) => (
                    <div className="px-2 text-xs">{rangeValue}</div>
                  )}
                />
              </SettingsRowItem>
              <SettingsRowItem
                label="Text"
                labelClassName="!text-app-space-black"
              >
                <Select
                  {...useSelect()}
                  selectMenuClassName="px-[5px] py-[5px]"
                  className="w-[141px] !text-app-space-black"
                  bgColor="bg-[#0000003A]"
                  appendInner={
                    <span className="text-xs text-app-space-black">Text</span>
                  }
                  items={[
                    { text: '5', value: '5' },
                    { text: '10', value: '10' },
                    { text: '15', value: '15' },
                    { text: '20', value: '20' },
                  ]}
                />
              </SettingsRowItem>
              <SettingsRowItem
                label="Text"
                labelClassName="!text-app-space-black"
              >
                <Select
                  {...useSelect()}
                  selectMenuClassName="px-[5px] py-[5px]"
                  className="w-[141px] !text-app-space-black"
                  bgColor="bg-[#0000003A]"
                  appendInner={
                    <span className="text-xs text-app-space-black">Text</span>
                  }
                  items={[
                    { text: '5', value: '5' },
                    { text: '10', value: '10' },
                    { text: '15', value: '15' },
                    { text: '20', value: '20' },
                  ]}
                />
              </SettingsRowItem>
            </CardBox>
          </Grid>
          <Button
            disclaimer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor gravida massa quis suscipit. Vestibulum convallis consequat velit sed."
            color="white"
          >
            Button
          </Button>
          <Button disabled color="white">
            Button
          </Button>
          <Grid className="gap-2.5 grid-cols-2">
            <Button color="green">Button</Button>
            <Button color="pink">Button</Button>
          </Grid>
          <Button poweredBy color="white">
            Button
          </Button>
          <Grid className="gap-2.5 relative">
            <CardBox rounded="top" className="h-[50px]" />
            <ButtonGroup
              className="absolute left-1/2 -translate-x-1/2 top-[39px]"
              bgColor="bg-app-space-black"
              hoverBgColor=""
              items={[
                {
                  text: (
                    <SettingsIcon className="w-[19px] h-[19px] group-hover:[&_path]:fill-app-white [&_path]:transition-all ml-[1.5px] mt-px" />
                  ),
                  className: 'h-8 w-8 !px-0 !py-0',
                },
              ]}
            />
            <CardBox className="h-[50px]" />
            <ButtonGroup
              className="absolute left-1/2 -translate-x-1/2 top-[99px] !gap-0"
              bgColor="bg-app-space-black"
              hoverBgColor=""
              items={[
                {
                  text: (
                    <VerticalArrowsIcon className="w-[15px] h-[15px] group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                  ),
                  className: 'h-8 w-8 !px-0 !py-0',
                },
                {
                  text: (
                    <ChartBarIcon className="w-[15px] h-[15px] group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                  ),
                  className: 'h-8 w-8 !px-0 !py-0',
                },
                {
                  text: (
                    <TransactionHistoryIcon className="w-[15px] h-[15px] group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                  ),
                  className: 'h-8 w-8 !px-0 !py-0',
                },
                {
                  text: (
                    <SettingsIcon className="w-[19px] h-[19px] group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                  ),
                  className: 'h-8 w-8 !px-0 !py-0',
                },
                {
                  text: (
                    <RefreshIcon className="w-[15px] h-[15px] group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                  ),
                  className: 'h-8 w-8 !px-0 !py-0',
                },
              ]}
            />
            <CardBox className="h-[50px]" />
            <ButtonGroup
              className="absolute left-1/2 -translate-x-1/2 top-[159px] !gap-0"
              bgColor="bg-app-space-black"
              hoverBgColor=""
              items={[
                {
                  text: (
                    <VerticalArrowsIcon className="w-[15px] h-[15px] group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                  ),
                  className: 'h-8 w-8 !px-0 !py-0',
                },
                {
                  text: '25%',
                  className: 'h-8 w-8 !px-0 !py-0 [&>span]:text-[10px]',
                },
                {
                  text: '50%',
                  className: 'h-8 w-8 !px-0 !py-0 [&>span]:text-[10px]',
                },
                {
                  text: '75%',
                  className: 'h-8 w-8 !px-0 !py-0 [&>span]:text-[10px]',
                },
                {
                  text: 'MAX',
                  className: 'h-8 w-8 !px-0 !py-0 !pr-1.5 [&>span]:text-[10px]',
                },
              ]}
            />
            <CardBox className="h-[50px]" />
            <ButtonGroup
              className="absolute left-1/2 -translate-x-1/2 top-[219px] !w-[22px]"
              bgColor="bg-app-space-black"
              hoverBgColor=""
              items={[
                {
                  text: (
                    <ArrowDownLongIcon className="w-[15px] h-[15px] group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                  ),
                  className: 'h-8 w-8 !px-0 !py-0',
                },
              ]}
            />
            <CardBox rounded="bottom" className="h-[50px]" />
          </Grid>
        </Grid>
        <Grid className="gap-5 mt-[3px]">
          <Grid>
            <TWRealTimeChartBox />
          </Grid>
          <Grid className="gap-5">
            <TabsProvider initialTab={Tabs.EMPTY}>
              <OrderBoxByOption />
            </TabsProvider>
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default HomePage
