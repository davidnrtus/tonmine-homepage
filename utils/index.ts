import { format as formatFns } from 'date-fns'
import { formatEther } from 'viem'
import { META_DATA, appMeta } from '~/constants'
import type { MetaData, PrecisionConfig } from '~/types'

export function generateMetaTags(metatag: string | MetaData, _addition?: Record<string, string>) {
  let meta
  if (typeof metatag === 'string' && metatag)
    meta = META_DATA[metatag]
  else if (typeof metatag === 'object')
    meta = metatag

  const title = meta?.title || appMeta.title
  const description = meta?.description || appMeta.description
  const image = meta?.image || appMeta.image
  const addition = _addition || {}
  return {
    title: () => title,
    ogTitle: () => title,
    description: () => description,
    ogDescription: () => description,
    ogImage: () => image,
    twitterTitle: () => title,
    twitterDescription: () => description,
    twitterImage: () => image,
    ...addition,
  }
}

export function truncateAddress(address: string | undefined, length = 4) {
  if (!address)
    return ''

  if (address === '--' || address.length <= length)
    return address

  return `${address.substring(0, length)}...${address.substring(
    address.length - length,
    address.length,
  )}`
}

// start format DATE
export function formatDate(date: Date | number | string, format = 'MMM dd, yyyy HH:mm', invalidValue = '') {
  if (!date)
    return invalidValue

  const f = new Date(date)

  if (!f || f.toString() === 'Invalid Date')
    return invalidValue

  return formatFns(f, format)
}
// end format DATE

// start format Number
const minPrecision = 0
const smallestNumber = 0.000000009
const precisionConfig: PrecisionConfig[] = [
  // { maxVal: smallestNumber, precision: 10 },
  // { maxVal: 0.00009, precision: 8 },
  // { maxVal: 0.0009, precision: 7 },
  { maxVal: 0.009, precision: 8 },
  { maxVal: 0.09, precision: 5 },
  { maxVal: 0.9, precision: 5 },
  { maxVal: 9, precision: 4 },
  { maxVal: 90, precision: 3 },
  { maxVal: 900, precision: 2 },
  { maxVal: 900000, precision: 1 },
  { maxVal: Number.MAX_SAFE_INTEGER, precision: 1 },
]
function beautyNumber(params: {
  value: number | string | undefined | null
  options?: {
    invalidValue?: string
    showLastestZero?: boolean
  }
}) {
  const { value, options } = params
  if (!value || Number.isNaN(Number(value))) {
    return options?.invalidValue || '0'
  }
  if (Number(value) < 1) {
    if (String(Number(value)).includes('e-')) {
      const parts = String(Number(value)).split('e-')
      return Number(value).toFixed(Number(parts[1]))
    }
    // prevent lastest zero
    return options?.showLastestZero ? value : Number(value).toString()
  }
  const parts = Number.parseFloat(value.toString()).toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}
function toFixed(value: number, fixed: number) {
  const re = new RegExp(`^-?\\d+(?:\.\\d{0,${fixed || -1}})?`)
  return value.toString().match(re)?.[0] || '0'
}
export function formatNumber(value?: any, isBigint = true, beauty = true, options?: { showLastestZero?: boolean }) {
  if (!value)
    return '0'

  let v
  if (isBigint) {
    v = formatEther(BigInt(value))
  }
  else {
    v = value
  }
  if (!v || Number.isNaN(v)) {
    return '0'
  }

  const num = Number(v)
  if (num <= smallestNumber) {
    return '0'
  }
  let precision
  for (const config of precisionConfig) {
    if (num < config.maxVal && config.precision > minPrecision) {
      precision = config.precision
      break
    }
  }
  if (precision === undefined) {
    precision = minPrecision
  }
  let result
  if (String(num).includes('e-')) {
    const parts = String(num).split('e-')
    result = num.toFixed(Number(parts[1]))
  }
  else {
    result = toFixed(num, precision)
  }
  if (beauty) {
    return beautyNumber({ value: result, options: { showLastestZero: options?.showLastestZero } })
  }
  return result
}
// end format Number

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
