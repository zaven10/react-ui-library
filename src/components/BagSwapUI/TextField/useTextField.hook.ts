import { useRef, useState } from 'react'

import { ITextFieldProps } from './ITextFieldProps.interface'

export const useTextField = ({
  disabled,
  onChange,
}: Partial<ITextFieldProps>) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [isFocused, setIsFocused] = useState(false)

  const onClickHandler = () => {
    if (disabled) {
      return
    }

    inputRef.current?.focus()

    setIsFocused(true)
  }

  const onInputHandler = (e: any) => {
    const inputWidth = inputRef.current!.offsetWidth

    const fontSize = parseInt(
      window.getComputedStyle(inputRef.current!).fontSize,
    )

    const charWidth = fontSize * 0.6

    const maxDigits = Math.floor(inputWidth / charWidth) - 1

    let inputValue = e.target.value.replace(/[^0-9\\.]/g, '')

    if (inputValue.length > maxDigits) {
      inputValue = inputValue.slice(0, maxDigits)
    }

    e.target.value = inputValue

    onChange?.(e)
  }

  return {
    isFocused,
    setIsFocused,
    onClickHandler,
    onInputHandler,
    inputRef,
  }
}
