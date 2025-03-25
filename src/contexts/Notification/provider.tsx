import React, { ReactNode, useState } from 'react'

import { NotificationContext } from './context'

import { NotificationBar } from '@ui/NotificationBar'

import { IComponentWithChildrenProps } from '@/interfaces'

export const NotificationProvider: React.FC<IComponentWithChildrenProps> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(true)
  const [content, setContent] = useState<ReactNode>()
  const [bgColor, setBgColor] = useState('bg-app-midnight-blue')

  const showNotification = () => setIsVisible(true)

  const hideNotification = () => setIsVisible(false)

  return (
    <NotificationContext.Provider
      value={{ showNotification, hideNotification, setContent, setBgColor }}
    >
      {isVisible && <NotificationBar bgColor={bgColor} content={content} />}
      {children}
    </NotificationContext.Provider>
  )
}
