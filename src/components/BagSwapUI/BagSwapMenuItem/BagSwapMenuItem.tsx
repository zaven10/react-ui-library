import React from 'react'

import { Grid } from '@ui/Grid'

import { IBagSwapMenuItemProps } from './IBagSwapMenuItemProps.interface'

export const BagSwapMenuItem: React.FC<IBagSwapMenuItemProps> = ({
  items,
  title,
}) => {
  return (
    <Grid className="gap-px">
      <div className="px-[9px] mb-1.5">
        <span className="text-app-white text-base">{title}</span>
      </div>
      {items.map((item: any) => (
        <div
          key={item.value}
          className="py-1.5 px-[9px] text-sm text-app-medium-gray hover:bg-app-white hover:text-app-space-black rounded-md transition-all cursor-pointer"
        >
          <span>{item.text}</span>
        </div>
      ))}
    </Grid>
  )
}
