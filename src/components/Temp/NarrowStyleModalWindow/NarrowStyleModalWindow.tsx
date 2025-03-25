import React, { useEffect, useState } from 'react'

import { ModalWindow } from '@ui/ModalWindow'
import { Grid } from '@ui/Grid'
import { Button } from '@ui/Button'
import { FlexibleRowCard } from '@ui/FlexibleRowCard'
import { TextField } from '@ui/TextField'
import { CoinPair } from '@ui/CoinPair'
import { Disclaimer } from '@ui/Disclaimer'

import { ReactComponent as CloseIcon } from '@/assets/svg/close-icon.svg'

import PairCoinBlack from '@/assets/images/pair-coin-black.png'
import BlackImageRounded from '@/assets/images/black-image-rounded.png'
import QRCodeImage from '@/assets/images/QRCode.png'

import { useModal } from '@/hooks'

import { $smallerSize } from '@/utils'

export const NarrowStyleModalWindow: React.FC = () => {
  const { setIsOpen, onClick, isOpen } = useModal()

  const [isNarrowStyle, setIsNarrowStyle] = useState(false)

  const onOpenModal = () => {
    setIsNarrowStyle(true)

    setIsOpen(true)
  }

  const onClose = () => onClick(() => setIsNarrowStyle(false))

  useEffect(() => {
    if (isOpen) {
      return
    }

    setIsNarrowStyle(false)
  }, [isOpen])

  return (
    <>
      <Button
        color="green"
        customize="py-3 px-2.5 rounded-md text-sm group-hover:bg-app-white"
        action={onOpenModal}
      >
        Narrow Style
      </Button>
      {isNarrowStyle && isOpen && (
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
          boxClass="w-[395px] !px-0"
        >
          <Grid className="gap-5 px-5">
            <TextField
              placeholder="Input field"
              className="[&_input]:placeholder:text-sm [&_input]:placeholder:text-app-medium-gray py-3 px-[15px]"
            />
            <Grid className="gap-[5px]">
              <FlexibleRowCard
                className="!pr-2.5 group/box hover:bg-app-white transition-all"
                rounded="left"
                prepend={<CoinPair left={PairCoinBlack} />}
                append={
                  <span
                    className="text-app-white group-hover/box:text-app-space-black transition-all"
                    dangerouslySetInnerHTML={{
                      __html: $smallerSize('3,333.33', {
                        from: -2,
                        size: 14,
                      }),
                    }}
                  />
                }
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-app-white group-hover/box:text-app-space-black leading-[21px] text-lg transition-all">
                    XYZ
                  </span>
                  <div className="flex items-center text-app-medium-gray group-hover/box:text-app-space-black gap-1 text-xs transition-all">
                    <span>Text</span>
                  </div>
                </div>
              </FlexibleRowCard>
              <FlexibleRowCard
                className="!pr-2.5 group/box hover:bg-app-white transition-all"
                rounded="left"
                prepend={<CoinPair left={PairCoinBlack} />}
                append={
                  <span
                    className="text-app-white group-hover/box:text-app-space-black transition-all"
                    dangerouslySetInnerHTML={{
                      __html: $smallerSize('333,333.33', {
                        from: -2,
                        size: 14,
                      }),
                    }}
                  />
                }
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-app-white leading-[21px] text-lg group-hover/box:text-app-space-black transition-all">
                    XYZ
                  </span>
                  <div className="flex items-center text-app-medium-gray gap-1 text-xs group-hover/box:text-app-space-black transition-all">
                    <span>Text</span>
                  </div>
                </div>
              </FlexibleRowCard>
            </Grid>
            <FlexibleRowCard
              className="group/box"
              rounded
              prepend={<CoinPair left={BlackImageRounded} />}
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
              <div className="flex items-center gap-2.5">
                <span className="text-app-white leading-[21px] text-lg">
                  XYZ
                </span>
                <div className="flex items-center text-app-salmon-pink group-hover/box:text-app-medium-gray gap-1 text-xs transition-all">
                  <span>Text</span>
                </div>
              </div>
            </FlexibleRowCard>
            <img src={QRCodeImage} alt="qr code" />
            <Disclaimer>
              <Grid className="gap-3">
                <span>Import at your own risk</span>
                <span className="font-normal">
                  Anyone can create tokens on BNB Smart Chain with any name,
                  including creating fake versions of existing tokens and tokens
                  that claim to represent projects.
                </span>
              </Grid>
            </Disclaimer>
            <Button color="white">Button</Button>
          </Grid>
        </ModalWindow>
      )}
    </>
  )
}
