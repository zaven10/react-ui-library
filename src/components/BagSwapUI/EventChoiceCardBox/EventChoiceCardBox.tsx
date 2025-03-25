import React from 'react'

import classNames from 'classnames'

import { CardBox } from '@ui/CardBox'
import { Grid } from '@ui/Grid'

import { IEventChoiceCardBoxPropsProps } from './IEventChoiceCardBoxProps.interface'

import { useEventChoiceCardBox } from './useEventChoiceCardBox'
import { Badge } from '../Badge'

export const EventChoiceCardBox: React.FC<
  Partial<IEventChoiceCardBoxPropsProps>
> = ({ title, label, type, trail }) => {
  const { isError, colorClasses, isTrailBottom, isTrailFull, isTrailTop } =
    useEventChoiceCardBox({ type, trail })

  return (
    <CardBox
      className={classNames(
        'bg-app-space-black py-0 pl-2.5 pr-[11.1px] grid-cols-[16px_1fr] items-center group/box cursor-pointer transition-all',
        colorClasses?.box,
      )}
    >
      <div className="self-stretch relative">
        {(isTrailTop || isTrailFull) && (
          <div className="bg-app-midnight-blue w-[3px] absolute top-0 h-1/2 left-1/2 -translate-x-1/2 mx-auto" />
        )}
        <div
          className={classNames(
            'w-2.5 h-2.5 rounded-full mx-auto absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            colorClasses.trailDot,
          )}
        />
        {(isTrailBottom || isTrailFull) && (
          <div className="bg-app-midnight-blue w-[3px] absolute bottom-0 h-1/2 left-1/2 -translate-x-1/2 mx-auto" />
        )}
      </div>
      <div className="ml-[7.89px] mr-[13px] py-[13px]">
        <Grid className="gap-1">
          <span
            className={classNames(
              'text-sm text-app-medium-gray transition-all',
              colorClasses?.title,
            )}
          >
            {title}
          </span>
          <div className="flex items-center gap-1.5">
            {isError && (
              <Badge
                text="Error"
                className="bg-app-salmon-pink group-hover/box:text-app-salmon-pink group-hover/box:bg-app-space-black"
              />
            )}
            <span
              className={classNames(
                'text-[10px] text-app-medium-gray transition-all',
                colorClasses?.label,
              )}
            >
              {label}
            </span>
          </div>
        </Grid>
      </div>
    </CardBox>
  )
}
