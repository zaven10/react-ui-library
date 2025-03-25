import { useMemo } from 'react'

import { useTabs } from '@/hooks'

import { ITab } from '@/interfaces'

export const useTabItem = (item: ITab) => {
  const { active, setActiveTab } = useTabs()

  const isActive = useMemo<boolean>(() => active === item.value, [active, item])

  const onSetTabHandler = () => !item.disabled && setActiveTab(item.value)

  return {
    isActive,
    onSetTabHandler,
  }
}
