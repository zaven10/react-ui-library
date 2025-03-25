import { useTranslation } from 'react-i18next'

export const useNavbarLeftSide = () => {
  const { t } = useTranslation()

  const tradeMenu = {
    title: t('NAVBAR.TRADE.TITLE'),
    items: [
      {
        text: t('NAVBAR.TRADE.SWAP'),
        value: 'SWAP',
      },
      {
        text: t('NAVBAR.TRADE.TWAP'),
        value: 'TWAP',
      },
      {
        text: t('NAVBAR.TRADE.LIMIT'),
        value: 'LIMIT',
      },
    ],
  }

  const poolMenu = {
    title: t('NAVBAR.POOL.TITLE'),
    items: [
      {
        text: t('NAVBAR.POOL.LIQUIDITY_POOLS'),
        value: 'LIQUIDITY_POOLS',
      },
      {
        text: t('NAVBAR.POOL.LIQUIDITY_POSITIONS'),
        value: 'LIQUIDITY_POSITIONS',
      },
      {
        text: t('NAVBAR.POOL.IMPORT_POOL'),
        value: 'IMPORT_POOL',
      },
    ],
  }

  const restMenuItems = [
    {
      text: t('NAVBAR.EXPLORE'),
      value: 'EXPLORE',
    },
    {
      text: t('NAVBAR.BRIDGE'),
      isOnline: true,
      value: '/bridge',
    },
    {
      text: t('NAVBAR.ORBITAL'),
      value: 'ORBITAL',
    },
  ]

  return {
    tradeMenu,
    poolMenu,
    restMenuItems,
  }
}
