// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico' },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-icons',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      'Krona One': [300, 400, 500, 600, 700, 800, 900],
      'Monda': [300, 400, 500, 600, 700, 800, 900],
    },
  },
})
