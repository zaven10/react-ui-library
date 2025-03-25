import { DateTime } from 'luxon'

export const $formattedDate = (value: string): string =>
  DateTime.fromISO(value).toFormat('M/d/yy h:mm a')
