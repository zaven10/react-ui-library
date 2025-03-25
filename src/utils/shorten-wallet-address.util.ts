export const $shortenWalletAddress = (address: string, length = 5): string => {
  if (address.length <= length * 2 + 2) {
    return address
  }

  return `${address.slice(0, length)}...${address.slice(-length)}`
}
