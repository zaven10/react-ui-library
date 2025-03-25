import React from 'react'

import { ModalWindow } from '@ui/ModalWindow'
import { BagSwapMenuItem } from '@ui/BagSwapMenuItem'
import { Grid } from '@ui/Grid'

import { ReactComponent as GithubIcon } from '@/assets/svg/github-icon.svg'
import { ReactComponent as TelegramIcon } from '@/assets/svg/telegram-icon.svg'
import { ReactComponent as XIcon } from '@/assets/svg/x-icon.svg'

import { useBagSwapModalWindow } from './useBagSwapModalWindow.hook'

export const BagSwapMenuModalWindow: React.FC = () => {
  const { items } = useBagSwapModalWindow()

  return (
    <ModalWindow
      className="pt-2.5 top-[55px] left-2"
      boxClass="w-[219px] !px-2.5 !py-4"
    >
      <Grid className="gap-4">
        {items.map((item, idx) => (
          <BagSwapMenuItem key={idx} items={item.items} title={item.title} />
        ))}
        <div className="flex gap-4 px-[9px]">
          <div className="cursor-pointer">
            <XIcon className="w-5 h-5 [&_path]:hover:fill-app-x transition-all" />
          </div>
          <div className="cursor-pointer">
            <TelegramIcon className="h-5 w-[24px] [&_path]:hover:fill-app-telegram transition-all" />
          </div>
          <div className="cursor-pointer">
            <GithubIcon className="w-5 h-5 [&_path]:hover:fill-app-github transition-all" />
          </div>
        </div>
      </Grid>
    </ModalWindow>
  )
}
