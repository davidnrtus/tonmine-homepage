import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { StorageKey } from '~/constants'
import type { ApiResponse, UserProfile } from '~/types'

interface State {
  user?: UserProfile
}

export const useAuthStore = defineStore('auth', {
  state: (): State => ({
    user: undefined,
  }),
  getters: {
    isLogged(state) {
      return !!state.user?.address
    },
  },
  actions: {
    // DEMO of calling API. Please edit it
    async getUserProfile() {
      try {
        const config = useRuntimeConfig()
        const baseUrl = `${config.public.baseUrl}/user-profile`
        const { data, pending, execute } = await useAsyncData<
          ApiResponse<UserProfile>
        >(() =>
          $fetch(baseUrl, {
            method: 'GET',
          }),
        )
        if (pending.value)
          await execute()

        if (data.value?.data)
          this.user = data.value?.data
      }
      catch (error) {
        // eslint-disable-next-line no-console
        console.log(`ERROR_LOG: ${error}`)
      }
    },
    handleLogout() {
      const accessToken = useStorage(StorageKey.DEMO_KEY_JWT, '')
      const accessTokenCookie = useCookie(StorageKey.DEMO_KEY_JWT)
      this.user = undefined
      accessToken.value = null
      accessTokenCookie.value = null
    },
    updateUserProfile(data: UserProfile) {
      this.user = data
    },
  },
})
