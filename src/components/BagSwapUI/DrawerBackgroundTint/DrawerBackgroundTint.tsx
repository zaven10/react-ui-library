import React from 'react'

import { useDrawer } from '@/hooks'

export const DrawerBackgroundTint: React.FC = () => {
  const { onClick } = useDrawer()

  return (
    <div className="fixed inset-0 z-40 bg-black/70" onClick={() => onClick()} />
  )
}
