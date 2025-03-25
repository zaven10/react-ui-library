import { useState } from 'react'

import { DrawerContext } from './context'

import { IDrawerProviderProps } from '@/interfaces'

import { DrawerBackgroundTint } from '@ui/DrawerBackgroundTint'

import classNames from 'classnames'

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({
  children,
  className,
  isOpen: _isOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(_isOpen)

  const onClick = (cb?: any) => {
    setIsOpen(false)

    cb?.()
  }

  return (
    <DrawerContext.Provider value={{ isOpen, onClick, setIsOpen }}>
      <div className={classNames('relative w-fit', className)}>
        {children}
        {isOpen && <DrawerBackgroundTint />}
      </div>
    </DrawerContext.Provider>
  )
}
