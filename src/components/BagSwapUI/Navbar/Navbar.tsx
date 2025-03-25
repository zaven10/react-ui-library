import React from 'react'

import { useWindowScroll } from 'react-use'

import { NavbarRightSide } from '@ui/NavbarRightSide/'
import { NavbarLeftSide } from '@ui/NavbarLeftSide'
import { Container } from '@ui/Container'

import { ModalProvider } from '@/contexts/Modal'
import classNames from 'classnames'

export const Navbar: React.FC = () => {
  const { y } = useWindowScroll()

  return (
    <Container
      fluid
      className={classNames(
        'transition-all rounded-xl !p-0 !pl-4 !pr-[7px] mt-[9px]',
        {
          'bg-app-charcoal-gray sticky top-4 z-50': y > 50,
        },
      )}
    >
      <ModalProvider className="flex justify-between items-center w-full">
        <NavbarLeftSide />
        <NavbarRightSide />
      </ModalProvider>
    </Container>
  )
}
