import React, { useEffect, useState } from 'react'

import { ModalWindow } from '@ui/ModalWindow'
import { Grid } from '@ui/Grid'
import { Button } from '@ui/Button'
import { Tabs as TabsGroup } from '@ui/Tabs'
import { FlexibleRowCard } from '@ui/FlexibleRowCard'
import { TextField } from '@ui/TextField'
import { CoinPair } from '@ui/CoinPair'
import { Tooltip } from '@ui/Tooltip'
import { SwitchButton } from '@ui/SwitchButton'
import { Title } from '@ui/Title'
import { Disclaimer } from '@ui/Disclaimer'
import { SettingsRowItem } from '@ui/SettingsRowItem'
import { TagBadge } from '@ui/TagBadge'

import { ReactComponent as CloseIcon } from '@/assets/svg/close-icon.svg'
import { ReactComponent as SuccessfulIcon } from '@/assets/svg/successful-icon.svg'
import { ReactComponent as FailedIcon } from '@/assets/svg/failed-icon.svg'
import { ReactComponent as ExternalLinkIcon } from '@/assets/svg/external-link-icon.svg'
import { ReactComponent as FailButtonIcon } from '@/assets/svg/fail-button-icon.svg'

import PairCoinBlack from '@/assets/images/pair-coin-black.png'
import EthImage from '@/assets/images/eth.png'
import ZnnImage from '@/assets/images/znn.png'
import CoingeckoImage from '@/assets/images/coingecko.png'
import BlackImageRounded from '@/assets/images/black-image-rounded.png'

import { useModal, useSwitch } from '@/hooks'

import { TabsProvider } from '@/contexts/Tabs'

import { Tabs } from '@/enums'

import { $smallerSize } from '@/utils'

export const WideStyleModalWindow: React.FC = () => {
  const { setIsOpen, onClick, isOpen } = useModal()

  const [isWideStyle, setIsWideStyle] = useState(false)

  const onOpenModal = () => {
    setIsWideStyle(true)

    setIsOpen(true)
  }

  const onClose = () => onClick(() => setIsWideStyle(false))

  useEffect(() => {
    if (isOpen) {
      return
    }

    setIsWideStyle(false)
  }, [isOpen])

  const switchStateFirst = useSwitch(true)
  const switchStateSecond = useSwitch(false)

  const settingsRowItems = [
    {
      label: 'Text',
      switchState: useSwitch(true),
    },
    {
      label: 'Text',
      switchState: useSwitch(false),
    },
  ].map((item, idx) => (
    <SettingsRowItem label={item.label} key={idx}>
      <SwitchButton {...item.switchState} />
    </SettingsRowItem>
  ))

  return (
    <>
      <Button
        color="white"
        customize="py-3 px-2.5 rounded-md text-sm group-hover:bg-app-white"
        action={onOpenModal}
      >
        Wide Style
      </Button>
      {isWideStyle && isOpen && (
        <ModalWindow
          isScroll
          titleChild={
            <Grid className="grid-cols-[1fr_auto_1fr] items-center px-5">
              <span className="text-lg">Title</span>
              <TagBadge color="yellow" text="3333 text" />
              <CloseIcon
                className="ml-auto w-[15px] h-[15px] cursor-pointer transition-all hover:[&_path]:fill-app-white"
                onClick={onClose}
              />
            </Grid>
          }
          className="pt-2.5 left top-[123px] left-1/2 !fixed -translate-x-1/2"
          boxClass="w-[595px] !px-0"
        >
          <Grid className="gap-5 px-5">
            <TabsProvider initialTab={Tabs.OPTION_1}>
              <TabsGroup
                className="!w-full text-center"
                bgColor="bg-app-space-black"
                items={[
                  {
                    text: 'Text',
                    value: Tabs.OPTION_1,
                  },
                  {
                    text: 'Text',
                    value: Tabs.OPTION_2,
                    disabled: true,
                  },
                ]}
              />
            </TabsProvider>
            <Grid className="gap-[5px]">
              <FlexibleRowCard
                className="group/box"
                rounded="left"
                prepend={<SuccessfulIcon className="w-[30px] h-[30px]" />}
                append={
                  <Button
                    color="green"
                    customize="!py-2 !px-[9px] text-xs rounded-md"
                    className="invisible transition-all group-hover/box:visible"
                  >
                    Button
                  </Button>
                }
              >
                <span className="text-sm leading-[17px] font-semibold text-app-white">
                  Text
                </span>
              </FlexibleRowCard>
              <FlexibleRowCard
                className="group/box"
                rounded="left"
                prepend={<FailedIcon className="w-[30px] h-[30px]" />}
                append={
                  <Button
                    color="green"
                    customize="!py-2 !px-[9px] text-xs rounded-md"
                    className="invisible transition-all group-hover/box:visible"
                  >
                    Button
                  </Button>
                }
              >
                <span className="text-sm leading-[17px] font-semibold text-app-white">
                  Text
                </span>
              </FlexibleRowCard>
            </Grid>
            <FlexibleRowCard
              className="pl-[15px]"
              rounded
              append={
                <Button
                  color="green"
                  customize="!py-2 !px-[9px] text-xs rounded-md"
                >
                  Button
                </Button>
              }
            >
              <span className="text-sm leading-[17px] font-semibold text-app-white">
                0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5
              </span>
            </FlexibleRowCard>
            <FlexibleRowCard
              rounded
              prepend={<CoinPair left={BlackImageRounded} />}
              append={
                <Button customize="!py-2 !px-[9px] text-xs rounded-md bg-app-baby-blue">
                  Button
                </Button>
              }
            >
              <span className="text-sm leading-[17px] font-semibold text-app-white">
                0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5
              </span>
            </FlexibleRowCard>
            <TextField
              placeholder="Input field"
              className="[&_input]:placeholder:text-sm [&_input]:placeholder:text-app-medium-gray py-3 px-[15px]"
            />
            <Grid className="gap-[5px]">
              <FlexibleRowCard
                className="!pr-2.5"
                rounded="left"
                prepend={<CoinPair left={PairCoinBlack} />}
                append={
                  <span
                    className="text-app-white"
                    dangerouslySetInnerHTML={{
                      __html: $smallerSize('0.00', {
                        from: -2,
                        size: 14,
                      }),
                    }}
                  />
                }
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-app-white leading-[21px] text-lg">
                    XYZ
                  </span>
                  <div className="flex items-center text-app-medium-gray gap-1 text-xs">
                    <span>Text</span>|
                    <span className="flex items-center gap-1 cursor-pointer group hover:text-app-baby-blue transition-all">
                      Link
                      <ExternalLinkIcon className="w-[9px] h-[9px] [&_path]:fill-app-medium-gray group-hover:[&_path]:fill-app-baby-blue transition-all" />
                    </span>
                    |
                    <span className="text-app-salmon-pink cursor-pointer">
                      Cancel
                    </span>
                    |
                    <span className="text-app-spring-green cursor-pointer">
                      Confirm
                    </span>
                  </div>
                </div>
              </FlexibleRowCard>
              <FlexibleRowCard
                className="!pr-2.5"
                rounded="left"
                prepend={
                  <CoinPair
                    left={PairCoinBlack}
                    right={PairCoinBlack}
                    className="-mr-[13px]"
                  />
                }
                append={
                  <span
                    className="text-app-white"
                    dangerouslySetInnerHTML={{
                      __html: $smallerSize('0.00', {
                        from: -2,
                        size: 14,
                      }),
                    }}
                  />
                }
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-app-white leading-[21px] text-lg">
                    XYZ
                  </span>
                  <div className="flex items-center text-app-medium-gray gap-1 text-xs">
                    <span>Text</span>|
                    <span className="flex items-center gap-1 cursor-pointer group hover:text-app-baby-blue transition-all">
                      Link
                      <ExternalLinkIcon className="w-[9px] h-[9px] [&_path]:fill-app-medium-gray group-hover:[&_path]:fill-app-baby-blue transition-all" />
                    </span>
                    |
                    <span className="text-app-salmon-pink cursor-pointer">
                      Cancel
                    </span>
                    |
                    <span className="text-app-spring-green cursor-pointer">
                      Confirm
                    </span>
                  </div>
                </div>
              </FlexibleRowCard>
              <FlexibleRowCard
                className="!pr-2.5"
                rounded
                prepend={<CoinPair left={BlackImageRounded} />}
                append={
                  <span
                    className="text-app-white"
                    dangerouslySetInnerHTML={{
                      __html: $smallerSize('0.00', {
                        from: -2,
                        size: 14,
                      }),
                    }}
                  />
                }
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-app-white leading-[21px] text-lg">
                    XYZ
                  </span>
                  <div className="flex items-center text-app-medium-gray gap-1 text-xs">
                    <span>Text</span>|
                    <span className="flex items-center gap-1 cursor-pointer group hover:text-app-baby-blue transition-all">
                      Link
                      <ExternalLinkIcon className="w-[9px] h-[9px] [&_path]:fill-app-medium-gray group-hover:[&_path]:fill-app-baby-blue transition-all" />
                    </span>
                  </div>
                </div>
              </FlexibleRowCard>
              <FlexibleRowCard
                rounded="left"
                prepend={<CoinPair left={PairCoinBlack} />}
                append={
                  <Button
                    color="pink"
                    customize="!p-1 !pl-[9px] !pr-1.5 text-xs rounded-md grid-cols-2 !gap-1 items-center"
                  >
                    <span>Text</span>
                    <Tooltip className="[&>svg_path]:!fill-app-space-black [&>svg]:w-[21px] [&>svg]:h-[21px] [&>svg]:p-[3px] [&>svg]:rounded-full hover:[&>svg]:!bg-[#0F11163A] !py-0" />
                  </Button>
                }
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-app-white leading-[21px] text-lg">
                    XYZ
                  </span>
                  <div className="flex items-center text-app-medium-gray gap-1 text-xs">
                    <span>Text</span>|
                    <span className="flex items-center gap-1 cursor-pointer group hover:text-app-baby-blue transition-all">
                      Link
                      <ExternalLinkIcon className="w-[9px] h-[9px] [&_path]:fill-app-medium-gray group-hover:[&_path]:fill-app-baby-blue transition-all" />
                    </span>
                  </div>
                </div>
              </FlexibleRowCard>
              <FlexibleRowCard
                className="!pr-2.5"
                rounded="left"
                prepend={<CoinPair left={EthImage} />}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-app-white leading-[21px] text-lg">
                    XYZ
                  </span>
                  <div className="flex items-center text-app-medium-gray gap-1 text-xs">
                    <span>Text</span>|
                    <span className="flex items-center gap-1 cursor-pointer group hover:text-app-baby-blue transition-all">
                      Link
                      <ExternalLinkIcon className="w-[9px] h-[9px] [&_path]:fill-app-medium-gray group-hover:[&_path]:fill-app-baby-blue transition-all" />
                    </span>
                  </div>
                </div>
              </FlexibleRowCard>
              <FlexibleRowCard
                className="!pr-2.5"
                rounded="left"
                prepend={<CoinPair left={ZnnImage} />}
                append={<SwitchButton {...switchStateFirst} />}
              >
                <div className="flex items-center gap-2.5 grow">
                  <span className="text-app-white leading-[21px] text-lg">
                    XYZ
                  </span>
                  <div className="flex items-center text-app-medium-gray gap-1 text-xs grow">
                    <span>Confirm Removal</span>|
                    <span className="text-app-salmon-pink cursor-pointer">
                      Cancel
                    </span>
                    |
                    <span className="text-app-spring-green cursor-pointer">
                      Confirm
                    </span>
                  </div>
                </div>
              </FlexibleRowCard>
              <FlexibleRowCard
                className="!pr-2.5"
                rounded="left"
                prepend={<CoinPair left={CoingeckoImage} />}
                append={<SwitchButton {...switchStateSecond} />}
              >
                <div className="flex items-center gap-2.5 grow">
                  <span className="text-app-white leading-[21px] text-lg">
                    XYZ
                  </span>
                  <div className="flex items-center text-app-medium-gray gap-1 text-xs grow">
                    <span>3043 Tokens</span>|
                    <span className="flex items-center gap-1 cursor-pointer group hover:text-app-baby-blue transition-all">
                      v1.0.67
                      <ExternalLinkIcon className="w-[9px] h-[9px] [&_path]:fill-app-medium-gray group-hover:[&_path]:fill-app-baby-blue transition-all" />
                    </span>
                  </div>
                </div>
              </FlexibleRowCard>
              <FlexibleRowCard
                className="!pr-2.5"
                rounded="left"
                prepend={<CoinPair left={ZnnImage} />}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-app-white leading-[21px] text-lg">
                    XYZ
                  </span>
                  <div className="flex items-center text-app-medium-gray gap-1 text-xs">
                    <span>Super Zenon Network Token</span>|
                    <span className="flex items-center gap-1 cursor-pointer group hover:text-app-baby-blue transition-all">
                      Explore
                      <ExternalLinkIcon className="w-[9px] h-[9px] [&_path]:fill-app-medium-gray group-hover:[&_path]:fill-app-baby-blue transition-all" />
                    </span>
                    |
                    <span className="text-app-salmon-pink cursor-pointer">
                      Remove
                    </span>
                  </div>
                </div>
              </FlexibleRowCard>
            </Grid>
            <Title
              subtitle
              text="Centered Text"
              className="justify-center [&_h1]:!text-app-medium-gray"
            />
            <Disclaimer>
              <Grid className="gap-3">
                <span>Import at your own risk</span>
                <span className="font-normal">
                  Anyone can create tokens on BNB Smart Chain with any name,
                  including creating fake versions of existing tokens and tokens
                  that claim to represent projects that do not have a token.
                </span>
                <span className="font-normal">
                  If you purchase a fraudulent token, you may be exposed to
                  permanent loss of funds.
                </span>
              </Grid>
            </Disclaimer>
            {settingsRowItems}
            <Button disabled customize="!bg-app-charcoal-gray">
              Button
            </Button>
            <Grid className="gap-2.5 grid-cols-[1fr_auto]">
              <Button color="white">Button</Button>
              <Button
                color="pink"
                className="w-[152px]"
                prependIcon={<FailButtonIcon className="w-[21px] h-[15px]" />}
              >
                Button
              </Button>
            </Grid>
            <Grid className="gap-2.5 grid-cols-2">
              <Button disabled customize="!bg-app-charcoal-gray">
                Button
              </Button>
              <Button
                color="white"
                customize="p-[13px] pr-[35px]"
                prependIcon={
                  <CoinPair
                    left={BlackImageRounded}
                    className="w-[35px] h-[35px] [&_img]:w-full [&_img]:h-full"
                  />
                }
              >
                Button
              </Button>
            </Grid>
          </Grid>
        </ModalWindow>
      )}
    </>
  )
}
