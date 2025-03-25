import React from 'react'

import classNames from 'classnames'

import { ReactComponent as CloseIcon } from '@/assets/svg/close-icon.svg'

import { useNotification } from '@/hooks'

import { INotificationContextProps } from '@/interfaces'
import { INotificationBarProps } from './INotificationBarProps.interface'

export const NotificationBar: React.FC<INotificationBarProps> = ({
  content,
  bgColor,
}) => {
  const { hideNotification }: INotificationContextProps = useNotification()

  return (
    <div
      className={classNames(
        'h-[35px] flex items-center justify-center text-[13px] gap-3 px-3 select-none',
        bgColor,
      )}
    >
      <div className="grow text-center">{content}</div>
      <div className="cursor-pointer" onClick={hideNotification}>
        <CloseIcon className="w-[15px] h-[15px] close-icon" />
      </div>
    </div>
  )
}
