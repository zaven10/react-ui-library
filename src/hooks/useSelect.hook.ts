import { useState } from 'react'

export const useSelect = (initialValue: any = null) => {
  const [selected, setSelected] = useState<any>(initialValue)

  return {
    selected,
    setSelected,
  }
}
