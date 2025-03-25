import React from 'react'

import RouterProvider from './router/RouterProvider'

import { NotificationProvider } from './contexts/Notification'

const App: React.FC = () => (
  <NotificationProvider>
    <RouterProvider />
  </NotificationProvider>
)

export default App
