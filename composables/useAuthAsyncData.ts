import { StorageKey } from '~/constants'

type PayloadKey = 'params' | 'body'

export async function useAuthAsyncData<T>(
  path: string,
  method: any, // 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  payload?: Record<PayloadKey, any>,
  options?: Record<string, any>,
) {
  const config = useRuntimeConfig()
  const baseUrl = `${config.public.baseUrl}${path}`
  const accessToken = useStatefulStorage(StorageKey.ACCESS_TOKEN)
  return await useAsyncData<T>(path, () =>
    $fetch(baseUrl, {
      method,
      body: payload?.body,
      params: payload?.params,
      headers: {
        'Authorization': `Bearer ${accessToken.value}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      ...options,
    }))
}
