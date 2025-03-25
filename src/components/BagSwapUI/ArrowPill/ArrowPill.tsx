import React from 'react'

import { IArrowPillProps } from './IArrowPillProps.interface'

import { ReactComponent as RightArrowIcon } from '@/assets/svg/right-arrow-icon.svg'

export const ArrowPill: React.FC<IArrowPillProps> = ({
  leftSideText,
  rightSideText,
  onClick,
}) => {
  return (
    <div
      className="px-3.5 py-3 cursor-pointer select-none bg-app-charcoal-gray flex items-center gap-2 rounded-lg"
      onClick={onClick}
    >
      <span className="font-semibold text-app-white text-sm">
        {leftSideText}
      </span>
      <RightArrowIcon className="w-[15px] h-[13px]" />
      <span className="font-semibold text-app-white text-sm">
        {rightSideText}
      </span>
    </div>
  )
}
