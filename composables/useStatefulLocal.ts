import { useStorage } from '@vueuse/core'

export function useStatefulStorage(key: string, initialValue?: any) {
  const storage = useStorage(key, initialValue || '')
  return storage
}
