import { useState } from 'react'

export const useSwitch = (initialValue: boolean = false) => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(initialValue)

  return {
    isSwitchOn,
    setIsSwitchOn,
  }
}
