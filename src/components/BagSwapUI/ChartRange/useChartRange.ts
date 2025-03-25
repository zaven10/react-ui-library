import { useCallback, useEffect, useRef, useState } from 'react'

export const useChartRange = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [percent, setPercent] = useState('0%')
  const [isMouseDown, setIsMouseDown] = useState(false)
  const debounceTimeoutRef = useRef<any>(null)

  const onMouseMoveHandler = useCallback(
    (e: any) => {
      if (!isMouseDown) return

      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
      }

      debounceTimeoutRef.current = setTimeout(() => {
        const rect = containerRef.current?.getBoundingClientRect()

        if (!rect) {
          return
        }

        const startX = rect.right
        const endX = rect.left
        const clientX = e.clientX

        const percentage = Math.min(
          Math.max(((startX - clientX) / (startX - endX)) * 100, 0),
          100,
        )
        setPercent(`${percentage.toFixed(0)}%`)
      }, 15)
    },
    [isMouseDown],
  )

  const onMouseDownHandler = () => setIsMouseDown(true)
  const onMouseUpHandler = () => setIsMouseDown(false)

  useEffect(() => {
    if (isMouseDown) {
      document.addEventListener('mousemove', onMouseMoveHandler)
      document.addEventListener('mouseup', onMouseUpHandler)
    } else {
      document.removeEventListener('mousemove', onMouseMoveHandler)
      document.removeEventListener('mouseup', onMouseUpHandler)
    }

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
      }

      document.removeEventListener('mousemove', onMouseMoveHandler)
      document.removeEventListener('mouseup', onMouseUpHandler)
    }
  }, [isMouseDown, onMouseMoveHandler])

  return {
    percent,
    containerRef,
    onMouseDownHandler,
    setIsMouseDown,
  }
}
