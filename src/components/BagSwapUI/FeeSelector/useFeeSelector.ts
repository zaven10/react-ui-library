import { useMemo } from 'react'

import { useFeeSelector } from '@/hooks'

export const useFeeSelectorComponent = (value?: string) => {
  const { selected, setSelected } = useFeeSelector()

  const isActive = useMemo<boolean>(() => selected === value, [selected, value])

  const onSelectHandler = () => setSelected(value)

  return {
    isActive,
    onSelectHandler,
  }
}
