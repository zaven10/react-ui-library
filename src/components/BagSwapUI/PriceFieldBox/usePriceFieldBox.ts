import { useInput } from '@/hooks'

export const usePriceFieldBox = () => {
  const { value, onChange, setValue } = useInput(0)

  const onMinusHandler = () => {
    const number: string = (Number(value) - 1e-9).toFixed(9)

    if (+number <= 0) {
      return setValue(0)
    }

    setValue(number)
  }

  const onPlusHandler = () => setValue((Number(value) + 1e-9).toFixed(9))

  return {
    inputAttrs: { value, onChange },
    onMinusHandler,
    onPlusHandler,
  }
}
