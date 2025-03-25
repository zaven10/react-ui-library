import React, { useState } from 'react'

import classNames from 'classnames'

import { Grid } from '@ui/Grid'
import { CardBox } from '@ui/CardBox'
import { EventChoiceCardBox } from '@ui/EventChoiceCardBox'

import { ReactComponent as ArrowDownOutlineIcon } from '@/assets/svg/arrow-down-outline-icon.svg'

import EventChoiceIndicator from '@/assets/images/event-choice-indicator.png'

import { IEventChoiceCardProps } from './IEventChoiceCardProps.interface'

export const EventChoiceCard: React.FC<IEventChoiceCardProps> = ({
  logo,
  title,
  label,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="rounded-lg bg-app-space-black overflow-hidden"
    >
      <CardBox className="bg-app-space-black py-0 pl-2.5 pr-[11.1px] grid-cols-[auto_1fr_auto] items-center group cursor-pointer">
        <div className="relative self-stretch">
          <div className="relative z-10 top-1/2 -translate-y-1/2">
            <img src={logo} alt="event-choice-logo" />
            <img
              src={EventChoiceIndicator}
              alt="event-choice-indicator"
              className="absolute bottom-0 -right-0.5"
            />
          </div>
          {isOpen && (
            <div className="bg-app-midnight-blue w-[3px] absolute bottom-0 h-1/2 left-1/2 -translate-x-1/2 mx-auto" />
          )}
        </div>
        <div className="ml-[7.89px] mr-[13px] py-[13px]">
          <Grid>
            <span
              className={classNames(
                'text-sm text-app-medium-gray group-hover:text-app-white transition-all',
                { 'text-app-white': isOpen },
              )}
            >
              {title}
            </span>
            <span
              className={classNames(
                'text-[10px] text-app-medium-gray group-hover:text-app-white transition-all',
                { 'text-app-white': isOpen },
              )}
            >
              {label}
            </span>
          </Grid>
        </div>
        <div className="py-[13px]">
          <ArrowDownOutlineIcon
            className={classNames(
              'w-4 h-[9px] group-hover:[&>g>g]:fill-app-white [&>g>g]:transition-all transition-all',
              { 'rotate-180': isOpen },
            )}
          />
        </div>
      </CardBox>
      {isOpen &&
        items.map((item) => (
          <EventChoiceCardBox
            title={item.title}
            label={item.label}
            type={item.type}
            trail={item.trail}
          />
        ))}
    </div>
  )
}
