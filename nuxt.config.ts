// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/style/_global.scss"],
  modules: ["@nuxtjs/eslint-module", "@nuxt/content"],

  content: {
    ignores: ["drafts/*"],
    highlight: {
      theme: "github-dark",
      preload: [
        "vue",
        "javascript",
        "typescript",
        "bash",
        "markdown",
        "c#",
        "yml",
        "json",
        "xml",
      ],
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "me", href: "https://phpc.social/@ricardoboss" },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },

  compatibilityDate: "2024-10-01",
})