import { defineStore } from 'pinia'
import { StorageKey } from '~/constants'
import type { ApiResponse, UserProfile } from '~/types'

export const useAuthStore = defineStore('auth', () => {
  const nuxtApp = useNuxtApp()
  const accessTokenCookie = useStatefulStorage(StorageKey.ACCESS_TOKEN)

  const user = ref<UserProfile>()

  async function getUserProfile() {
    try {
      await nuxtApp.$api<ApiResponse<UserProfile>>('/users/profile', {
        onResponse({ response }) {
          if (response?._data?.data) {
            user.value = response._data.data
          }
        },
      })
    }
    catch (error) {}
  }

  function handleLogout() {
    user.value = undefined
    accessTokenCookie.value = null
  }

  return {
    getUserProfile,
    handleLogout,
  }
})
