import React from 'react'

import { ButtonGroup } from '@ui/ButtonGroup'
import { SettingsModalWindow } from '@ui/SettingsModalWindow'

import { useNavbarRightSide } from './useNavbarRightSide.hook'

export const NavbarRightSide: React.FC = () => {
  const { items, isSettingModal } = useNavbarRightSide()

  return (
    <>
      <ButtonGroup items={items} />
      {isSettingModal && <SettingsModalWindow />}
    </>
  )
}
