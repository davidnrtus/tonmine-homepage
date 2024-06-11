import { useStatefulCookie } from './useStatefulCookie'
import { StorageKey } from '~/constants'
import type { ApiResponse } from '~/types'

type PayloadKey = 'params' | 'body'

export async function useAuthFetch<T>(
  path: string,
  method: any, // 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  payload?: Record<PayloadKey, any>,
  options?: Record<string, any>,
) {
  const config = useRuntimeConfig()
  const baseUrl = `${config.public.baseUrl}${path}`
  const accessToken = useStatefulCookie(StorageKey.ACCESS_TOKEN)
  return await useFetch<T>(baseUrl, {
    method,
    body: payload?.body,
    params: payload?.params,
    headers: {
      'Authorization': `Bearer ${accessToken.value}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    ...options,
  })
}
