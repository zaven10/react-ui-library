import { useEffect, useMemo, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { ReactComponent as SettingsIcon } from '@/assets/svg/settings-icon.svg'
import { ReactComponent as OKXIcon } from '@/assets/svg/okx-icon.svg'

import { $shortenWalletAddress } from '@/utils'

import { IButtonGroupItemData } from '@/interfaces'

import { useModal } from '@/hooks'

export const useNavbarRightSide = () => {
  const { t } = useTranslation()

  const { setIsOpen, isOpen } = useModal()

  const [isSettingModal, setIsSettingModal] = useState(false)

  // TODO: need to be changed just for design
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  const items = useMemo<IButtonGroupItemData[]>(() => {
    const data: IButtonGroupItemData[] = [
      {
        text: (
          <SettingsIcon className="w-[19px] h-[19px] group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
        ),
        disabled: !isWalletConnected,
        isOverTint: true,
        action() {
          if (!isWalletConnected) {
            return
          }

          setIsOpen(true)

          setIsSettingModal(true)

          this.isActive = true
        },
      },
    ]

    if (isWalletConnected) {
      data.push({
        prependIcon: <OKXIcon className="w-4 h-4" />,
        isActiveText: true,
        text: $shortenWalletAddress(
          '0x3219A6bC1234Fa6789bCdeFA6789A9BfDeaFg0znn',
        ),
      })
    } else {
      data.push({
        text: t('CONNECT_WALLET'),
        // TODO: need to be changed just for design
        action: () => {
          setIsWalletConnected(true)
        },
      })
    }

    return data
  }, [isWalletConnected, t, setIsOpen])

  useEffect(() => {
    if (isOpen) {
      return
    }

    setIsSettingModal(false)

    items.forEach((item: IButtonGroupItemData) => {
      if (!item.isOverTint) {
        return
      }

      item.isActive = false
    })

    setIsOpen(false)
  }, [isOpen, items, setIsOpen])

  return {
    isSettingModal,
    items,
  }
}
