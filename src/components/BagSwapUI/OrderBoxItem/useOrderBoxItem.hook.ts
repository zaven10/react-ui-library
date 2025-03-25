import { useMemo } from 'react'

import { $formattedDate } from '@/utils'

export const useOrderBoxItem = ({ marketPair, timestamp }: any) => {
  const [pairA, pairB] = useMemo<string[]>(
    () => marketPair?.split('/') || [],
    [marketPair],
  )

  const [date, time] = useMemo<string[]>(() => {
    if (!timestamp) {
      return []
    }

    const data = $formattedDate(timestamp).split(' ')

    if (!data?.length) {
      return []
    }

    data[1] = `${data[1]} ${data[2]}`

    return data
  }, [timestamp])

  return {
    pairA,
    pairB,
    date,
    time,
  }
}
