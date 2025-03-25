import { useMemo, useState } from 'react'

import { useModal } from '@/hooks'

export const useBagSwapMenu = () => {
  const { setIsOpen, onClick, isOpen } = useModal()

  const [isMenu, setIsMenu] = useState(false)

  const isMenuOpen = useMemo(() => isMenu && isOpen, [isMenu, isOpen])

  const onOpenMenu = () => {
    setIsOpen(true)

    setIsMenu(true)
  }

  const onCloseMenu = () => onClick(() => setIsMenu(false))

  return {
    onOpenMenu,
    onCloseMenu,
    isMenuOpen,
  }
}
