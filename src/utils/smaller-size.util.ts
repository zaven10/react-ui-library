export const $smallerSize = (value: string, { from, size, fillFull }: any) => {
  if (!value.trim()) {
    return ''
  }

  const start = value.slice(0, from)
  const end = value.slice(
    from,
    fillFull ? value.length : value.length - 1 - from,
  )

  return `${start}<span style="font-size: ${size}px;">${end}</span>`
}
