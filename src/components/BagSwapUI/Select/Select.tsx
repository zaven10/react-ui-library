import React from 'react'

import classNames from 'classnames'

import { ISelectProps } from './ISelectProps.interface'
import { ISelectItem } from '@/interfaces'

import { ReactComponent as ArrowDownIcon } from '@/assets/svg/arrow-down-icon.svg'

import { useSelect } from './useSelect.hook'

import { Grid } from '@ui/Grid'

export const Select: React.FC<Partial<ISelectProps>> = ({
  disabled,
  className,
  bgColor = 'bg-app-charcoal-gray',
  items,
  selected,
  setSelected,
  selectMenuClassName,
  appendInner,
}) => {
  const { isOpen, onToggleHandler, dropdownRef } = useSelect()

  return (
    <div
      ref={dropdownRef}
      className={classNames(
        'rounded-md p-2 flex items-center justify-between text-app-white select-none transition-all relative gap-2 min-h-[31px]',
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer hover:bg-app-white hover:text-app-space-black',
        bgColor,
        className,
      )}
      onClick={onToggleHandler}
    >
      <div className="text-xs leading-3 w-[calc(100%_-_8px)] truncate">
        <span className="truncate">{selected?.text}</span>
      </div>
      <div className="flex items-center gap-2">
        {appendInner}
        <ArrowDownIcon
          className={classNames(
            'w-2 h-[5.6px] transition-all [&_g]:fill-app-midnight-blue',
            {
              'rotate-180': isOpen,
            },
          )}
        />
      </div>
      {isOpen && (
        <div
          className={classNames(
            'absolute px-[2px] py-1 top-0 left-0 w-full bg-app-white h-fit rounded-md text-xs overflow-hidden z-10',
            selectMenuClassName,
          )}
        >
          <Grid className="overflow-y-auto max-h-32 custom-overflow gap-px">
            {items?.length &&
              items.map((item: ISelectItem) => (
                <div
                  key={item.value}
                  className={classNames(
                    'hover:bg-app-space-black rounded-md hover:text-app-white text-app-space-black py-1.5 px-2 leading-[1]',
                    {
                      'bg-app-space-black text-app-white':
                        item.value === selected?.value,
                    },
                  )}
                  onClick={() => setSelected?.(item)}
                >
                  {item.text}
                </div>
              ))}
          </Grid>
        </div>
      )}
    </div>
  )
}
