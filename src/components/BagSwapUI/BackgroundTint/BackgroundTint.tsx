import React from 'react'

import { useModal } from '@/hooks'

export const BackgroundTint: React.FC = () => {
  const { onClick } = useModal()

  return (
    <div className="fixed inset-0 z-40 bg-black/70" onClick={() => onClick()} />
  )
}
