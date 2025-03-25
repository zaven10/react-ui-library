import React, { useEffect, useState } from 'react'

import { useDrawer } from '@/hooks'

import { Button } from '@ui/Button'
import { Grid } from '@ui/Grid'
import { Drawer } from '@ui/Drawer'
import { Title } from '@ui/Title'
import { EventChoiceCard } from '@ui/EventChoiceCard'

import { ReactComponent as CloseIcon } from '@/assets/svg/close-icon.svg'
import { ReactComponent as CopyIcon } from '@/assets/svg/copy-icon.svg'
import { ReactComponent as DownloadIcon } from '@/assets/svg/download-icon.svg'
import { ReactComponent as TelegramIcon } from '@/assets/svg/telegram-drawer-icon.svg'

import EventChoiceLogo from '@/assets/images/event-choice-logo.png'

export const ErrorStyleDrawer: React.FC = () => {
  const { setIsOpen, onClick, isOpen } = useDrawer()

  const [isErrorStyleDrawer, setIsErrorStyleDrawer] = useState(false)

  const onOpenModal = () => {
    setIsErrorStyleDrawer(true)

    setIsOpen(true)
  }

  const onClose = () => onClick(() => setIsErrorStyleDrawer(false))

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

    setIsErrorStyleDrawer(false)
  }, [isOpen])

  // TODO: just for design
  const errors = [
    `sendTransaction error Error: user rejected transaction
(action="sendTransaction",
transaction={"data":"0xfb51c1780000000000000000000000007384ea997f94598bab3620d90fe46981db9f7402000000000000000000000000b2e96a63479c2edd2fd62b382c89d5ca79f572d30000000000000000000000000000000000000000000000000000000039d10680ef19a6b026441429c69d232f7afd9249b6fe9d51726ef9513d03b3ab74ca2b5600000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000414532a1e3dfd4dbf38aae4bbcc1529139998279743373aebb6345edcbb68fc98c32f6e49357284320523bac753a7e15c6f8684de99a7f5670435ef643356f78301b00000000000000000000000000000000000000000000000000000000000000","to":"0xA98706106F7710d743186031be2245F33AceA106","from":"0x7384eA997F94598bab3620d90fE46981DB9F7402","value":{"type":"BigNumber","hex":"0x00"},"gasLimit":{"type":"BigNumber","hex":"0x015c9c"}}, code=ACTION_REJECTED, version=providers/5.7.2)
    at c.makeError (index.ts:269:28)
    at c.throwError (index.ts:281:20)
    at json-rpc-provider.ts:259:28`,
  ]

  return (
    <>
      <Button
        color="pink"
        customize="py-3 px-2.5 rounded-md text-sm group-hover:bg-app-white w-[250px]"
        action={onOpenModal}
      >
        Open Error style drawer
      </Button>
      {isErrorStyleDrawer && isOpen && (
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Title text="Title" subtitle className="[&_h1]:text-lg" />
                  <Title
                    text="Text"
                    subtitle
                    className="[&_h1]:text-xs [&_h1]:text-app-medium-gray"
                  />
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="cursor-pointer group">
                    <CopyIcon className="w-4 h-[15px] group-hover:[&>g>g]:stroke-app-white [&>g>g]:transition-all" />
                  </div>
                  <div className="cursor-pointer group">
                    <DownloadIcon className="w-[15px] h-[15px] group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                  </div>
                  <div className="cursor-pointer group">
                    <TelegramIcon className="w-[15px] h-3 group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                  </div>
                </div>
              </div>
              <Grid className="gap-[21px]">
                {errors.map((error) => (
                  <div className="text-app-white text-xs break-all whitespace-pre-wrap">
                    {error}
                  </div>
                ))}
              </Grid>
            </Grid>
          </div>
        </Drawer>
      )}
    </>
  )
}
