import React, { useMemo } from 'react'

import { TransactionProcessCardItem } from '@ui/TransactionProcessCardItem'

import { ITransactionProcessRowProps } from './ITransactionProcessRowProps.interface'

import { ReactComponent as LongDotsLine } from '@/assets/svg/long-dots-line.svg'
import { ReactComponent as ShortDotsLine } from '@/assets/svg/short-dots-line.svg'

export const TransactionProcessRow: React.FC<ITransactionProcessRowProps> = ({
  items,
}) => {
  const isLongLine = useMemo(() => items.length <= 3, [items])

  return (
    <div className="flex items-center gap-1.5">
      {items.map((item, idx) => (
        <>
          {Boolean(idx) &&
            (isLongLine ? (
              <LongDotsLine className="mb-[22px]" />
            ) : (
              <ShortDotsLine className="mb-[22px]" />
            ))}
          <TransactionProcessCardItem
            label={item?.label}
            coins={item?.coins}
            isSingle={item?.isSingle}
          />
        </>
      ))}
    </div>
  )
}
