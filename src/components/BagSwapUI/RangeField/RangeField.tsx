import React, { useState } from 'react'

import classNames from 'classnames'

import './index.scss'

import { IRangeFieldProps } from './IRangeFieldProps.interface'

export const RangeField: React.FC<Partial<IRangeFieldProps>> = ({
  step = 1,
  max = 100,
  min = 0,
  thumbColor = 'var(--appBabyBlue)',
  bgColor = 'bg-app-charcoal-gray',
  thumbLineColor = 'bg-app-midnight-blue',
  thumbLineFilledColor = 'bg-app-baby-blue',
  isShowPrependValue = false,
  appendInner,
  className,
}) => {
  const [value, setValue] = useState(0)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(Number(e.target.value))

  return (
    <div
      className={classNames(
        'flex items-center gap-[13px] select-none',
        className,
      )}
      style={{ '--thumbColor': thumbColor } as React.CSSProperties}
    >
      {isShowPrependValue && (
        <div className="w-[70px] text-center">
          <span className="text-[26px] font-semibold text-app-white">
            {value}%
          </span>
        </div>
      )}
      <div
        className={classNames(
          'grow rounded-md p-[5px] overflow-hidden transition-all',
          bgColor,
        )}
      >
        <div className="relative grow">
          <div
            className={classNames(
              'absolute rounded-full w-full top-1/2 left-[15px] max-w-[calc(100%_-_21px)] h-0.5 -translate-y-1/2',
              thumbLineColor,
            )}
          ></div>
          <div className="absolute rounded-full overflow-hidden top-1/2 w-full max-w-[calc(100%_-_21px)] h-0.5 pl-2.5 -translate-y-1/2">
            <div
              className={classNames('relative h-full', thumbLineFilledColor)}
              style={{ width: `${(value * 100) / Number(max)}%` }}
            ></div>
          </div>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChangeHandler}
            className="relative appearance-none bg-transparent w-full"
          />
        </div>
        {appendInner?.(value)}
      </div>
    </div>
  )
}
