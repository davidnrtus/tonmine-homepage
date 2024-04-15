export * from './User'

export type StorageValueKey = 'demo_key_jwt' | 'demo_key_address'

export interface MetaData {
  title?: string
  description?: string
  image?: string
}

export interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

export interface Select {
  label: string
  value: string
  icon?: string
}
