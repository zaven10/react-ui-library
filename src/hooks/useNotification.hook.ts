import { useContext } from 'react'

import { INotificationContextProps } from '@/interfaces'

import { NotificationContext } from '@/contexts/Notification'

export const useNotification = (): INotificationContextProps => {
  const context = useContext(NotificationContext)

  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    )
  }

  return context
}
