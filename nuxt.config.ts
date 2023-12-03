// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/style/_global.scss'],
  modules: ['@nuxtjs/eslint-module', '@nuxt/content'],
  content: {
    highlight: {
      theme: 'github-dark',
      preload: ['javascript', 'typescript', 'bash'],
    },
  },
})
