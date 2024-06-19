import { defineStore } from 'pinia'
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
    async getUserProfile() {
      try {
        const { pending, data, execute } = await useAuthAsyncData<ApiResponse<UserProfile>>(
          '/user/profile',
          'GET',
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
      const accessTokenCookie = useStatefulStorage(StorageKey.ACCESS_TOKEN)
      this.user = undefined
      accessTokenCookie.value = null
    },
  },
})
