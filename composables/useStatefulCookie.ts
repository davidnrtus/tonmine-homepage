export function useStatefulCookie<T>(key: string, opts = {}) {
  const cookie = useCookie<T>(key, { maxAge: 60 * 60 * 24 * 7 * 30, ...opts })
  const state = useState(key, () => cookie.value)

  watch(state, () => {
    cookie.value = state.value
  }, { deep: true })

  return state
}
