import { useState } from 'react'

export const useInput = (initialValue: string | number = '') => {
  const [value, setValue] = useState(initialValue)

  const onChange = ({ target }: any) => setValue(target.value)

  return {
    value,
    onChange,
    setValue,
  }
}
