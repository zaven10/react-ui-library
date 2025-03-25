import React from 'react'

import classNames from 'classnames'

import { ITitleProps } from './ITitleProps.interface'

import { ReactComponent as LeftArrowIcon } from '@/assets/svg/left-arrow-icon.svg'

export const Title: React.FC<Partial<ITitleProps>> = ({
  withArrow,
  text,
  subtitle,
  action,
  className,
}) => {
  return (
    <div
      className={classNames('flex items-center gap-5 select-none', className)}
    >
      {withArrow && (
        <div className="group cursor-pointer" onClick={action}>
          <LeftArrowIcon className="w-3.5 h-[23px] transition-all group-hover:[&_path]:fill-app-medium-gray" />
        </div>
      )}
      <h1
        className={classNames(
          'font-normal text-app-white',
          subtitle ? 'text-sm' : 'text-[32px]',
        )}
      >
        {text}
      </h1>
    </div>
  )
}
