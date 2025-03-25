import { useState } from 'react'

import { ModalContext } from './context'

import { IModalProviderProps } from '@/interfaces'

import { BackgroundTint } from '@ui/BackgroundTint'

import classNames from 'classnames'

export const ModalProvider: React.FC<IModalProviderProps> = ({
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
    <ModalContext.Provider value={{ isOpen, onClick, setIsOpen }}>
      <div className={classNames('relative w-fit', className)}>
        {children}
        {isOpen && <BackgroundTint />}
      </div>
    </ModalContext.Provider>
  )
}
