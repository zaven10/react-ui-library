import { useTranslation } from 'react-i18next'

import { useSwitch } from '@/hooks'

export const useSettingsModalWindow = () => {
  const { t } = useTranslation()

  const switchButtonItems: any[] = [
    {
      text: t('NAVBAR.SETTINGS_MODAL.SHOW_TESTNET'),
      switchState: useSwitch(false),
    },
    {
      text: t('NAVBAR.SETTINGS_MODAL.FAST_ROUTING_BETA'),
      switchState: useSwitch(true),
      tooltip: true,
    },
    {
      text: t('NAVBAR.SETTINGS_MODAL.BAG_SWAP_V3'),
      switchState: useSwitch(true),
      tooltip: true,
    },
    {
      text: t('NAVBAR.SETTINGS_MODAL.BAG_SWAP_V2'),
      switchState: useSwitch(true),
      tooltip: true,
    },
    {
      text: t('NAVBAR.SETTINGS_MODAL.BAG_SWAP_STABLE'),
      switchState: useSwitch(true),
      tooltip: true,
    },
    {
      text: t('NAVBAR.SETTINGS_MODAL.BAG_SWAP_LINKED_POOL'),
      switchState: useSwitch(true),
      tooltip: true,
    },
    {
      text: t('NAVBAR.SETTINGS_MODAL.ALLOW_MULTIHOPS'),
      switchState: useSwitch(true),
      tooltip: true,
    },
    {
      text: t('NAVBAR.SETTINGS_MODAL.ALLOW_SPLIT_ROUTING'),
      switchState: useSwitch(true),
      tooltip: true,
    },
  ]

  return {
    switchButtonItems,
  }
}
