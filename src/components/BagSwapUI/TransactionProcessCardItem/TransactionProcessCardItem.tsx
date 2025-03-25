import React from 'react'

import classNames from 'classnames'

import { Grid } from '@ui/Grid'

import { ITransactionRowItem } from '@/interfaces'

export const TransactionProcessCardItem: React.FC<
  Partial<ITransactionRowItem>
> = ({ coins, label, isSingle = false }) => {
  return (
    <Grid
      className={classNames(
        'p-1.5 gap-[7px] bg-app-charcoal-gray rounded-b-lg rounded-t-[20.5px]',
        { '!rounded-full self-start': isSingle },
      )}
    >
      <div className="flex items-center gap-[5px]">
        {coins?.map((coin, idx) => (
          <img
            src={coin}
            key={idx}
            alt={`coin ${idx}`}
            className="w-[30px] h-[30px]"
          />
        ))}
      </div>
      {label && (
        <Grid
          className="text-app-white text-sm leading-[14px]"
          placeItemsCenter
        >
          {label}
        </Grid>
      )}
    </Grid>
  )
}
