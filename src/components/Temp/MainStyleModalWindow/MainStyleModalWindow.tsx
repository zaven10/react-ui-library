import React, { useEffect, useState } from 'react'

import { ModalWindow } from '@ui/ModalWindow'
import { Grid } from '@ui/Grid'
import { Button } from '@ui/Button'
import { FlexibleRowCard } from '@ui/FlexibleRowCard'
import { CoinPair } from '@ui/CoinPair'
import { Disclaimer } from '@ui/Disclaimer'
import { Title } from '@ui/Title'
import { Tooltip } from '@ui/Tooltip'
import { SwitchButton } from '@ui/SwitchButton'
import { DepositBox } from '@ui/DepositBox'
import { CardBox } from '@ui/CardBox'
import { ButtonGroup } from '@ui/ButtonGroup'
import { SettingsRowItem } from '@ui/SettingsRowItem'
import { Badge } from '@ui/Badge'

import { ReactComponent as CloseIcon } from '@/assets/svg/close-icon.svg'
import { ReactComponent as ExternalLinkIcon } from '@/assets/svg/external-link-icon.svg'
import { ReactComponent as PlusIcon } from '@/assets/svg/plus-icon.svg'
import { ReactComponent as ArrowDownLongIcon } from '@/assets/svg/arrow-down-long-icon.svg'

import PairCoinBlack from '@/assets/images/pair-coin-black.png'
import EthImage from '@/assets/images/eth.png'
import ZnnImage from '@/assets/images/znn.png'

import { useModal, useSwitch } from '@/hooks'

import { $shortenWalletAddress, $smallerSize } from '@/utils'
import { TransactionProcessRow } from '@/components/BagSwapUI/TransactionProcessRow'

export const MainStyleModalWindow: React.FC = () => {
  const { setIsOpen, onClick, isOpen } = useModal()

  const [isMainStyle, setIsMainStyle] = useState(false)

  const onOpenModal = () => {
    setIsMainStyle(true)

    setIsOpen(true)
  }

  const onClose = () => onClick(() => setIsMainStyle(false))

  useEffect(() => {
    if (isOpen) {
      return
    }

    setIsMainStyle(false)
  }, [isOpen])

  const switchButton = <SwitchButton {...useSwitch(true)} />

  return (
    <>
      <Button
        color="pink"
        customize="py-3 px-2.5 rounded-md text-sm group-hover:bg-app-white"
        action={onOpenModal}
      >
        Main Style
      </Button>
      {isMainStyle && isOpen && (
        <ModalWindow
          isScroll
          titleChild={
            <div className="flex items-center justify-between px-5">
              <span className="text-lg">Title</span>
              <CloseIcon
                className="w-[15px] h-[15px] cursor-pointer transition-all hover:[&_path]:fill-app-white"
                onClick={onClose}
              />
            </div>
          }
          className="pt-2.5 left top-[123px] left-1/2 !fixed -translate-x-1/2"
          boxClass="w-[495px] !px-0"
        >
          <Grid className="gap-5 px-5">
            <Grid className="gap-2.5 relative">
              <CardBox rounded="top" className="!bg-app-charcoal-gray !p-2">
                <DepositBox
                  badgeBgColor="bg-app-charcoal-gray"
                  fieldBgColor="!bg-transparent"
                  tickerBgColor="!bg-[#0000003A]"
                  tickerBgHoverColor="bg-[#0000003A]"
                  networkMaskBgColor="bg-[#1D1E23]"
                  tickerTextHoverColor=""
                  coin="XYZ"
                  readonly
                  value="0.333"
                  className="[&>div>div]:!text-app-medium-gray [&>div>div>div_span]:!text-app-medium-gray [&_input]:text-[46px] [&_input]:max-w-[331px] [&_input]:font-normal"
                  network={PairCoinBlack}
                  coinIcon={PairCoinBlack}
                />
              </CardBox>
              <ButtonGroup
                className="absolute left-1/2 -translate-x-1/2 top-[70px]"
                bgColor="bg-app-space-black"
                hoverBgColor=""
                items={[
                  {
                    text: (
                      <ArrowDownLongIcon className="w-[15px] h-[15px] group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                    ),
                    className: 'h-[25px] w-[22px] !px-0 !py-0',
                  },
                ]}
              />
              <CardBox
                rounded="bottom"
                className="!bg-app-charcoal-gray !p-2 gap-4"
              >
                <DepositBox
                  badgeBgColor="bg-app-charcoal-gray"
                  fieldBgColor="!bg-transparent"
                  tickerBgColor="!bg-[#0000003A]"
                  tickerBgHoverColor="bg-[#0000003A]"
                  networkMaskBgColor="bg-[#1D1E23]"
                  tickerTextHoverColor=""
                  coin="XYZ"
                  readonly
                  value="0.333"
                  className="[&>div>div]:!text-app-medium-gray [&>div>div>div_span]:!text-app-medium-gray [&_input]:text-[46px] [&_input]:max-w-[331px] [&_input]:font-normal"
                  network={PairCoinBlack}
                  coinIcon={PairCoinBlack}
                />
                <Grid className="px-2 gap-2.5 pb-[7px]">
                  <SettingsRowItem label="Text">
                    <Title
                      subtitle
                      text="Text"
                      className="[&_h1]:text-app-spring-green"
                    />
                  </SettingsRowItem>
                  <SettingsRowItem label="Text">
                    <Title subtitle text="Text" />
                  </SettingsRowItem>
                  <SettingsRowItem label="Text">
                    <div className="flex gap-1 items-center">
                      <Title subtitle text="Text" />
                      <Title
                        subtitle
                        text="Text"
                        className="[&_h1]:text-app-medium-gray"
                      />
                    </div>
                  </SettingsRowItem>
                  <SettingsRowItem label="Text">
                    <Badge
                      className="bg-[#0F11163A] !text-app-medium-gray hover:bg-app-white hover:!text-app-space-black cursor-pointer group/badge !text-sm !px-[5px]"
                      text={$shortenWalletAddress(
                        '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
                        7,
                      )}
                      appendIcon={
                        <ExternalLinkIcon className="w-2.5 h-2.5 [&_path]:fill-app-medium-gray group-hover/badge:[&_path]:fill-app-space-black [&_path]:transition-all" />
                      }
                    />
                  </SettingsRowItem>
                </Grid>
              </CardBox>
            </Grid>
            <Grid className="gap-2.5 relative">
              <CardBox rounded="top" className="!bg-app-salmon-pink !p-2">
                <DepositBox
                  badgeBgColor="bg-app-charcoal-gray"
                  fieldBgColor="!bg-transparent"
                  tickerBgColor="!bg-[#ffffff3A]"
                  tickerBgHoverColor="!bg-[#ffffff3A]"
                  networkMaskBgColor="bg-[#F5A5A5]"
                  tickerTextHoverColor=""
                  coin="XYZ"
                  readonly
                  value="0.333"
                  className="[&>div>div]:!text-app-space-black [&>div>div>div_span]:!text-app-space-black [&_input]:text-[46px] [&_input]:max-w-[331px] [&_input]:font-normal"
                  network={PairCoinBlack}
                  coinIcon={PairCoinBlack}
                />
              </CardBox>
              <ButtonGroup
                className="absolute left-1/2 -translate-x-1/2 top-[70px]"
                bgColor="bg-app-space-black"
                hoverBgColor=""
                items={[
                  {
                    text: (
                      <ArrowDownLongIcon className="w-[15px] h-[15px] group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                    ),
                    className: 'h-[25px] w-[22px] !px-0 !py-0',
                  },
                ]}
              />
              <CardBox
                rounded="bottom"
                className="!bg-app-spring-green !p-2 gap-4"
              >
                <DepositBox
                  badgeBgColor="bg-app-charcoal-gray"
                  fieldBgColor="!bg-transparent"
                  tickerBgColor="!bg-[#ffffff3A]"
                  tickerBgHoverColor="!bg-[#ffffff3A]"
                  networkMaskBgColor="bg-[#D3F4A5]"
                  tickerTextHoverColor=""
                  coin="XYZ"
                  readonly
                  value="0.333"
                  className="[&>div>div]:!text-app-space-black [&>div>div>div_span]:!text-app-space-black [&_input]:text-[46px] [&_input]:max-w-[331px] [&_input]:font-normal"
                  network={PairCoinBlack}
                  coinIcon={PairCoinBlack}
                />
                <Grid className="px-2 gap-2.5 pb-[7px]">
                  <SettingsRowItem
                    label="Text"
                    labelClassName="text-app-space-black"
                  >
                    <Title
                      subtitle
                      text="Text"
                      className="[&_h1]:text-app-space-black"
                    />
                  </SettingsRowItem>
                  <SettingsRowItem
                    label="Text"
                    labelClassName="text-app-space-black"
                    tooltip={
                      <Tooltip className="[&>svg]:w-[21px] [&>svg]:h-[21px] [&>svg]:p-[3px] [&>svg]:rounded-full [&_path]:fill-app-space-black" />
                    }
                  >
                    <Title
                      subtitle
                      text="Text"
                      className="[&_h1]:text-app-space-black"
                    />
                  </SettingsRowItem>
                  <SettingsRowItem
                    label="Text"
                    labelClassName="text-app-space-black"
                  >
                    <Badge
                      className="bg-[#0F11163A] hover:bg-app-white hover:!text-app-space-black cursor-pointer group/badge !text-sm !px-[5px]"
                      text={$shortenWalletAddress(
                        '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
                        7,
                      )}
                      appendIcon={
                        <ExternalLinkIcon className="w-2.5 h-2.5 [&_path]:fill-app-space-black" />
                      }
                    />
                  </SettingsRowItem>
                </Grid>
              </CardBox>
            </Grid>
            <Grid className="gap-2.5 relative">
              <CardBox rounded="top" className="!bg-app-baby-blue !p-2">
                <DepositBox
                  badgeBgColor="bg-app-charcoal-gray"
                  fieldBgColor="!bg-transparent"
                  tickerBgColor="!bg-[#ffffff3A]"
                  tickerBgHoverColor="!bg-[#ffffff3A]"
                  networkMaskBgColor="bg-[#BFE4EC]"
                  tickerTextHoverColor=""
                  coin="XYZ"
                  readonly
                  value="0.333"
                  className="[&>div>div]:!text-app-space-black [&>div>div>div_span]:!text-app-space-black [&_input]:text-[46px] [&_input]:max-w-[331px] [&_input]:font-normal"
                  network={PairCoinBlack}
                  coinIcon={PairCoinBlack}
                />
              </CardBox>
              <ButtonGroup
                className="absolute left-1/2 -translate-x-1/2 top-[70px]"
                bgColor="bg-app-space-black"
                hoverBgColor=""
                items={[
                  {
                    text: (
                      <PlusIcon className="w-[15px] h-[15px] [&_path]:fill-app-medium-gray group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                    ),
                    className: 'h-[25px] w-[25px] !px-0 !py-0',
                  },
                ]}
              />
              <CardBox className="!bg-app-baby-blue !p-2 gap-4">
                <DepositBox
                  badgeBgColor="bg-app-charcoal-gray"
                  fieldBgColor="!bg-transparent"
                  tickerBgColor="!bg-[#ffffff3A]"
                  tickerBgHoverColor="!bg-[#ffffff3A]"
                  networkMaskBgColor="bg-[#BFE4EC]"
                  tickerTextHoverColor=""
                  coin="XYZ"
                  readonly
                  value="0.333"
                  className="[&>div>div]:!text-app-space-black [&>div>div>div_span]:!text-app-space-black [&_input]:text-[46px] [&_input]:max-w-[331px] [&_input]:font-normal"
                  network={PairCoinBlack}
                  coinIcon={PairCoinBlack}
                />
              </CardBox>
              <CardBox
                rounded="bottom"
                className="!bg-app-baby-blue !p-2 gap-4"
              >
                <Grid className="px-2 pt-2.5 gap-2.5 pb-[7px]">
                  <SettingsRowItem
                    label="Text"
                    labelClassName="text-app-space-black"
                  >
                    <Title
                      subtitle
                      text="Text"
                      className="[&_h1]:text-app-space-black"
                    />
                  </SettingsRowItem>
                  <SettingsRowItem
                    label="Text"
                    labelClassName="text-app-space-black"
                  >
                    <Badge
                      className="bg-[#0F11163A] hover:bg-app-white hover:!text-app-space-black cursor-pointer group/badge !text-sm !px-[5px]"
                      text="⇋ xZNN"
                    />
                  </SettingsRowItem>
                </Grid>
              </CardBox>
            </Grid>
            <Disclaimer>
              <Grid className="gap-3">
                <span>Disclaimer:</span>
                <span className="font-normal leading-3">
                  Orders are executed in smaller trades over a specified period
                  of time and are subject to market conditions and other
                  risks.{' '}
                </span>
                <span className="font-normal leading-3">
                  Your trade may be executed at a price that is significantly
                  different from the current market price (although not below
                  your Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum lacinia nulla eget dui tristique accumsan. Nulla at
                  laoreet lectus, a sagittis magna. Donec nec diam
                </span>
              </Grid>
            </Disclaimer>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Title
                  subtitle
                  text="Accept Disclaimer"
                  className="[&_h1]:text-app-medium-gray"
                />
                <Tooltip className="[&>svg]:w-[21px] [&>svg]:h-[21px] [&>svg]:p-[3px] [&>svg]:rounded-full hover:[&>svg]:!bg-black" />
              </div>
              {switchButton}
            </div>
            <Grid className="gap-5">
              <TransactionProcessRow
                items={[
                  {
                    coins: [EthImage],
                    label: '11%',
                  },
                  {
                    coins: [EthImage, ZnnImage],
                    label: (
                      <span>
                        V3{' '}
                        <span className="text-app-medium-gray text-[10px]">
                          (0.01%)
                        </span>
                      </span>
                    ),
                  },
                  {
                    coins: [ZnnImage],
                    isSingle: true,
                  },
                ]}
              />
              <TransactionProcessRow
                items={[
                  {
                    coins: [EthImage],
                    label: '11%',
                  },
                  {
                    coins: [EthImage, ZnnImage],
                    label: (
                      <span>
                        V3{' '}
                        <span className="text-app-medium-gray text-[10px]">
                          (0.01%)
                        </span>
                      </span>
                    ),
                  },
                  {
                    coins: [EthImage, ZnnImage],
                    label: (
                      <span>
                        V3{' '}
                        <span className="text-app-medium-gray text-[10px]">
                          (0.01%)
                        </span>
                      </span>
                    ),
                  },
                  {
                    coins: [ZnnImage],
                    isSingle: true,
                  },
                ]}
              />
              <TransactionProcessRow
                items={[
                  {
                    coins: [EthImage],
                    label: '11%',
                  },
                  {
                    coins: [EthImage, ZnnImage],
                    label: 'V2',
                  },
                  {
                    coins: [ZnnImage],
                    isSingle: true,
                  },
                ]}
              />
            </Grid>
            <Grid className="gap-3.5">
              <Title text="Sub-title" subtitle />
              <Grid className="gap-[5px]">
                <FlexibleRowCard
                  rounded="left"
                  className="pr-2.5"
                  prepend={<CoinPair left={EthImage} />}
                >
                  <div className="flex items-center gap-[7px]">
                    <span className="text-app-white text-lg leading-5">
                      XYZ
                    </span>
                    <span className="text-app-medium-gray text-xs leading-4">
                      Text
                    </span>
                  </div>
                  <span
                    className="text-app-white text-lg leading-5"
                    dangerouslySetInnerHTML={{
                      __html: $smallerSize('0.003', {
                        from: -3,
                        size: 14,
                      }),
                    }}
                  />
                </FlexibleRowCard>
                <FlexibleRowCard
                  rounded="left"
                  className="pr-2.5"
                  prepend={<CoinPair left={ZnnImage} />}
                >
                  <div className="flex items-center gap-[7px]">
                    <span className="text-app-white text-lg leading-5">
                      XYZ
                    </span>
                    <span className="text-app-medium-gray text-xs leading-4">
                      Text
                    </span>
                  </div>
                  <span
                    className="text-app-white text-lg leading-5"
                    dangerouslySetInnerHTML={{
                      __html: $smallerSize('3,333.3333', {
                        from: -4,
                        size: 14,
                      }),
                    }}
                  />
                </FlexibleRowCard>
                <FlexibleRowCard
                  rounded="left"
                  className="pr-2.5"
                  prepend={
                    <CoinPair
                      left={EthImage}
                      right={ZnnImage}
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
                      __html: $smallerSize('0.00000333', {
                        from: -8,
                        size: 14,
                        fillFull: true,
                      }),
                    }}
                  />
                </FlexibleRowCard>
              </Grid>
            </Grid>
            <Grid className="grid-cols-2 gap-2">
              <Button disabled customize="!bg-app-charcoal-gray">
                Button
              </Button>
              <Button disabled customize="!bg-app-charcoal-gray">
                Button
              </Button>
            </Grid>
          </Grid>
        </ModalWindow>
      )}
    </>
  )
}
