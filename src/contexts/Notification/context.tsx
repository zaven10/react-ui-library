import { createContext } from 'react'

import { INotificationContextProps } from '@/interfaces'

export const NotificationContext = createContext<
  INotificationContextProps | undefined
>(undefined)
