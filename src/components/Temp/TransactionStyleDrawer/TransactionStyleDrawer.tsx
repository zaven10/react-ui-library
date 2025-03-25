import React, { useEffect, useState } from 'react'

import { useDrawer } from '@/hooks'

import { Button } from '@ui/Button'
import { Grid } from '@ui/Grid'
import { Drawer } from '@ui/Drawer'
import { Title } from '@ui/Title'
import { Disclaimer } from '@ui/Disclaimer'
import { CardBox } from '@ui/CardBox'
import { DepositBox } from '@ui/DepositBox'
import { ButtonGroup } from '@ui/ButtonGroup'
import { SettingsRowItem } from '@ui/SettingsRowItem'
import { Badge } from '@ui/Badge'
import { EventChoiceCard } from '@ui/EventChoiceCard'

import PairCoinBlack from '@/assets/images/pair-coin-black.png'
import EventChoiceLogo from '@/assets/images/event-choice-logo.png'

import { ReactComponent as CloseIcon } from '@/assets/svg/close-icon.svg'
import { ReactComponent as DownloadIcon } from '@/assets/svg/download-icon.svg'
import { ReactComponent as ArrowDownLongIcon } from '@/assets/svg/arrow-down-long-icon.svg'
import { ReactComponent as ExternalLinkIcon } from '@/assets/svg/external-link-icon.svg'

import { $shortenWalletAddress } from '@/utils'

export const TransactionStyleDrawer: React.FC = () => {
  const { setIsOpen, onClick, isOpen } = useDrawer()

  const [isTransactionStyleDrawer, setIsTransactionStyleDrawer] =
    useState(false)

  const onOpenModal = () => {
    setIsTransactionStyleDrawer(true)

    setIsOpen(true)
  }

  const onClose = () => onClick(() => setIsTransactionStyleDrawer(false))

  // TODO: will be removed jsut for design
  const eventChoices = [
    {
      id: '1',
      title: 'Text',
      label: 'Text: 333,333.33',
      logo: EventChoiceLogo,
      items: [
        {
          title: 'Text',
          label: 'Text',
          type: 'ERROR',
          trail: 'full',
        },
        {
          title: 'Text',
          label: 'Text',
          type: 'DEFAULT',
          trail: 'full',
        },
        {
          title: 'Text',
          label: 'Text',
          type: 'PINK_NO_HOVER',
          trail: 'full',
        },
        {
          title: 'Text',
          label: 'Text',
          type: 'GREEN_NO_HOVER',
          trail: 'top',
        },
      ],
    },
    {
      id: '2',
      title: 'Text',
      label: 'Text: 333,333.33',
      logo: EventChoiceLogo,
      items: [
        {
          title: 'Text',
          label: 'Text',
          type: 'ERROR',
          trail: 'full',
        },
        {
          title: 'Text',
          label: 'Text',
          type: 'DEFAULT',
          trail: 'full',
        },
        {
          title: 'Text',
          label: 'Text',
          type: 'PINK_NO_HOVER',
          trail: 'full',
        },
        {
          title: 'Text',
          label: 'Text',
          type: 'GREEN_NO_HOVER',
          trail: 'top',
        },
      ],
    },
  ]

  useEffect(() => {
    if (isOpen) {
      return
    }

    setIsTransactionStyleDrawer(false)
  }, [isOpen])

  return (
    <>
      <Button
        color="green"
        customize="py-3 px-2.5 rounded-md text-sm group-hover:bg-app-white w-[250px]"
        action={onOpenModal}
      >
        Open Transaction style drawer
      </Button>
      {isTransactionStyleDrawer && isOpen && (
        <Drawer position="right" className="w-[769px] grid-cols-[273px_1fr]">
          <div className="h-full bg-app-midnight-blue p-5">
            <Grid className="gap-[27px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[11px]">
                  <div onClick={onClose} className="cursor-pointer">
                    <CloseIcon className="w-[15px] h-[15px]" />
                  </div>
                  <Title text="Title" subtitle className="[&_h1]:text-lg" />
                </div>
                <div className="cursor-pointer group">
                  <DownloadIcon className="w-[15px] h-[15px] group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                </div>
              </div>
              <Grid className="gap-2.5">
                {eventChoices.map((eventChoice) => (
                  <EventChoiceCard
                    key={eventChoice.id}
                    title={eventChoice.title}
                    label={eventChoice.label}
                    logo={eventChoice.logo}
                    items={eventChoice.items}
                  />
                ))}
              </Grid>
            </Grid>
          </div>
          <div className="p-5 h-full">
            <Grid className="gap-[27px]">
              <div className="flex items-center gap-2.5">
                <Title text="Title" subtitle className="[&_h1]:text-lg" />
                <Title
                  text="Text"
                  subtitle
                  className="[&_h1]:text-xs [&_h1]:text-app-medium-gray"
                />
              </div>
              <Grid className="gap-[21px]">
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
                <Disclaimer className="leading-3">
                  <Grid className="gap-3">
                    <span>Import at your own risk</span>
                    <span className="font-normal">
                      Anyone can create tokens on BNB Smart Chain with any name,
                      including creating fake versions of existing tokens and
                      tokens that claim to represent projects that do not have a
                      token.
                    </span>
                    <span className="font-normal">
                      If you purchase a fraudulent token, you may be exposed to
                      permanent loss of funds.
                    </span>
                  </Grid>
                </Disclaimer>
                <Disclaimer color="white" className="leading-3">
                  <Grid className="gap-3">
                    <span>Import at your own risk</span>
                    <span className="font-normal">
                      Anyone can create tokens on BNB Smart Chain with any name,
                      including creating fake versions of existing tokens and
                      tokens that claim to represent projects that do not have a
                      token.
                    </span>
                    <span className="font-normal">
                      If you purchase a fraudulent token, you may be exposed to
                      permanent loss of funds.
                    </span>
                  </Grid>
                </Disclaimer>
                <Disclaimer color="pink" className="leading-3">
                  <Grid className="gap-3">
                    <span>Import at your own risk</span>
                    <span className="font-normal">
                      Anyone can create tokens on BNB Smart Chain with any name,
                      including creating fake versions of existing tokens and
                      tokens that claim to represent projects that do not have a
                      token.
                    </span>
                    <span className="font-normal">
                      If you purchase a fraudulent token, you may be exposed to
                      permanent loss of funds.
                    </span>
                  </Grid>
                </Disclaimer>
                <Disclaimer color="green" className="leading-3">
                  <Grid className="gap-3">
                    <span>Import at your own risk</span>
                    <span className="font-normal">
                      Anyone can create tokens on BNB Smart Chain with any name,
                      including creating fake versions of existing tokens and
                      tokens that claim to represent projects that do not have a
                      token.
                    </span>
                    <span className="font-normal">
                      If you purchase a fraudulent token, you may be exposed to
                      permanent loss of funds.
                    </span>
                  </Grid>
                </Disclaimer>
              </Grid>
            </Grid>
          </div>
        </Drawer>
      )}
    </>
  )
}
