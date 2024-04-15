import { META_DATA, appMeta } from '~/constants'
import type { MetaData } from '~/types'

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
