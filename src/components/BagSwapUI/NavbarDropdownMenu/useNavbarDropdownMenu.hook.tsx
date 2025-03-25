import { useEffect, useMemo, useState } from 'react'

import { useLocation } from 'react-router-dom'

import { useModal } from '@/hooks'

import { INavbarDropdownMenuProps } from './INavbarDropdownMenuProps.interface'

export const useNavbarDropdownMenu = ({
  items,
}: Partial<INavbarDropdownMenuProps>) => {
  const { setIsOpen, onClick, isOpen } = useModal()

  const $route = useLocation()

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(items!.some((item) => item.value === $route.pathname))
  }, [items, $route])

  const [isDropdownMenu, setIsDropdownMenu] = useState(false)

  const isDropdownMenuOpen = useMemo(
    () => isDropdownMenu && isOpen,
    [isDropdownMenu, isOpen],
  )

  const onOpenMenu = () => {
    setIsOpen(true)

    setIsDropdownMenu(true)
  }

  const onCloseMenu = () => onClick(() => setIsDropdownMenu(false))

  return {
    onOpenMenu,
    onCloseMenu,
    isActive,
    isDropdownMenuOpen,
  }
}
