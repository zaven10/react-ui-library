import React, { useState } from 'react'

import classNames from 'classnames'

import { ITooltipProps } from './ITooltipProps.interface'

import { ReactComponent as TooltipBg } from '@/assets/svg/tooltip-bg.svg'
import { ReactComponent as TooltipIcon } from '@/assets/svg/tooltip-icon.svg'

export const Tooltip: React.FC<ITooltipProps> = ({ text, className }) => {
  const [isHovered, setSetHovered] = useState(false)

  return (
    <div
      onMouseOver={() => setSetHovered(true)}
      onMouseLeave={() => setSetHovered(false)}
      className={classNames('relative cursor-pointer group py-1.5', className)}
    >
      {text && (
        <div
          className={classNames('absolute z-10 -top-[163px] -left-[94px]', {
            hidden: !isHovered,
          })}
        >
          <TooltipBg />
          <div className="p-3.5 absolute z-20 top-0">{text}</div>
        </div>
      )}
      <TooltipIcon className="transition-all group-hover:[&_path]:fill-app-baby-blue w-[15px] h-[15px]" />
    </div>
  )
}
