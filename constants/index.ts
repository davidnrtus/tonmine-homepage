import type { MetaData, StorageValueKey } from '~/types'

export const appMeta = {
  title: 'Nuxt3 Typescript Template',
  description: 'Nuxt3 Typescript Template',
  image: '',
}

export const META_DATA: Record<string, MetaData> = {
  default: appMeta,
}

export enum StorageKey {
  DEMO_KEY_JWT = 'DEMO_KEY_JWT',
  DEMO_KEY_ADDRESS = 'DEMO_KEY_ADDRESS',
}
