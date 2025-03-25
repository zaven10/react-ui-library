import React from 'react'

import { IPriceFieldBoxProps } from './IPriceFieldBoxProps.interface'

import { Grid } from '@ui/Grid'
import { TextField } from '@ui/TextField'
import { Button } from '@ui/Button'

import { ReactComponent as MinusIcon } from '@/assets/svg/minus-icon.svg'
import { ReactComponent as PlusIcon } from '@/assets/svg/plus-icon.svg'

import { usePriceFieldBox } from './usePriceFieldBox'

export const PriceFieldBox: React.FC<IPriceFieldBoxProps> = ({
  top,
  bottom,
}) => {
  const { inputAttrs, onPlusHandler, onMinusHandler } = usePriceFieldBox()

  return (
    <Grid className="gap-1.5">
      {top && (
        <span className="font-semibold text-app-medium-gray text-xs">
          {top}
        </span>
      )}
      <div className="flex items-center gap-2">
        <TextField
          {...inputAttrs}
          bgColor="bg-app-baby-blue"
          className="grow !rounded-lg !text-app-space-black [&>input]:text-[26px] [&>input]:font-semibold max-w-[185px] h-[29px] px-1"
        />
        <div className="flex items-center gap-[5px]">
          <Button
            className="w-5 h-5"
            customize="!p-0 bg-app-baby-blue rounded-full hover:bg-app-white"
            action={onMinusHandler}
          >
            <MinusIcon className="w-[9.55px] h-[1.87px] ml-px" />
          </Button>
          <Button
            className="w-5 h-5"
            customize="!p-0 bg-app-baby-blue rounded-full hover:bg-app-white"
            action={onPlusHandler}
          >
            <PlusIcon className="w-[10.67px] h-[10.67px] ml-px" />
          </Button>
        </div>
      </div>
      {bottom && (
        <span className="font-semibold text-app-medium-gray text-xs">
          {bottom}
        </span>
      )}
    </Grid>
  )
}
