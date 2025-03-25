import { useEffect, useRef, useState } from 'react'

export const useSelect = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggleHandler = () => setIsOpen(!isOpen)

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const onClickOutsideHandler = (event: any) => {
    if (!dropdownRef.current?.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', onClickOutsideHandler)

    return () => {
      document.removeEventListener('mousedown', onClickOutsideHandler)
    }
  }, [])

  return {
    isOpen,
    dropdownRef,
    onToggleHandler,
  }
}
