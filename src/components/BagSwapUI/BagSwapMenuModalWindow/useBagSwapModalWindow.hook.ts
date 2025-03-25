import { useTranslation } from 'react-i18next'

export const useBagSwapModalWindow = () => {
  const { t } = useTranslation()

  // TODO: change values
  const items: any[] = [
    {
      title: t('NAVBAR.BAG_SWAP.PROJECT.TITLE'),
      items: [
        {
          text: t('NAVBAR.BAG_SWAP.PROJECT.JOIN_US'),
          value: 'JOIN_US',
        },
        {
          text: t('NAVBAR.BAG_SWAP.PROJECT.BLOG'),
          value: 'BLOG',
        },
      ],
    },
    {
      title: t('NAVBAR.BAG_SWAP.PROTOCOL.TITLE'),
      items: [
        {
          text: t('NAVBAR.BAG_SWAP.PROTOCOL.SUPERNOVA'),
          value: 'SUPERNOVA',
        },
        {
          text: t('NAVBAR.BAG_SWAP.PROTOCOL.BAG_TOKEN'),
          value: 'BAG_TOKEN',
        },
        {
          text: t('NAVBAR.BAG_SWAP.PROTOCOL.TOKEN'),
          value: 'TOKEN',
        },
        {
          text: t('NAVBAR.BAG_SWAP.PROTOCOL.NATIVE_TOKEN'),
          value: 'NATIVE_TOKEN',
        },
      ],
    },
    {
      title: t('NAVBAR.BAG_SWAP.SUPPORT.TITLE'),
      items: [
        {
          text: t('NAVBAR.BAG_SWAP.SUPPORT.DOCUMENTATION'),
          value: 'DOCUMENTATION',
        },
        {
          text: t('NAVBAR.BAG_SWAP.SUPPORT.CONTACT'),
          value: 'CONTACT',
        },
      ],
    },
  ]

  return {
    items,
  }
}
