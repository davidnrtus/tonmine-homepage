export function useStatefulCookie(key: string, opts = {}) {
  const cookie = useCookie(key, { maxAge: 60 * 60 * 24 * 30, ...opts })
  return cookie
}
