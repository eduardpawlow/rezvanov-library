// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	compatibilityDate: '2025-07-15',
	modules: ['@nuxt/ui'],
	css: ['~/assets/css/main.css'],
	devtools: { enabled: process.env.NODE_ENV !== 'production' },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    buildAssetsDir: '/_nuxt/'
  },
  nitro: {
    preset: process.env.NITRO_PRESET || '',
    prerender: {
      crawlLinks: true
    }
  },
})
