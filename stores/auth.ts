import { defineStore } from "pinia";
import type { UserProfile } from "~/types";

interface State {
  user?: UserProfile
}

export const useAuthStore = defineStore("auth", {
  state: (): State => ({
    user: undefined
  }),
  getters: {
    isLogged(state) {
      return !!state.user?.address
    }
  },
  actions: {
    updateUserProfile(data: UserProfile) {
      this.user = data
    }
  },
});
