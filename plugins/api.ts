import { StorageKey } from '~/constants'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  const baseURL = runtimeConfig.public.apiUrl as string
  const accessToken = useStatefulStorage(StorageKey.ACCESS_TOKEN)
  const api = $fetch.create({
    baseURL,
    onRequest({ options }) {
      if (accessToken.value) {
        options.headers = options.headers || {};
        (options.headers as any).Authorization = `Bearer ${accessToken.value}`
      }
    },
    onResponseError({ error, response }) {
      // eslint-disable-next-line no-console
      console.log(`LOG: error_status=${response.status}: ${error}`)
    },
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  }
})
