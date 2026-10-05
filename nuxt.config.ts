// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/main.css"],

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/png", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    },
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "motion-v/nuxt",
    "@nuxtjs/seo",
  ],

  site: {
    url: "https://losaurojuan.vercel.app",
    name: "Juan Andrés Losauro",
    description:
      "Advanced Computer Engineering student and graduate IT Analyst with a strong focus on the design and development of full-stack architectures.",
    defaultLocale: "en",
  },

  schemaOrg: {
    identity: {
      type: "Person",
      name: "Juan Andrés Losauro",
      sameAs: [
        "https://github.com/Talkird",
        "https://www.linkedin.com/in/juanlosauro/",
      ],
    },
  },

  seo: {
    // Otherwise the title is derived from the last URL segment ("/es" -> "Es")
    fallbackTitle: false,
  },

  i18n: {
    baseUrl: "https://losaurojuan.vercel.app",
    defaultLocale: "en",
    locales: [
      { code: "en", language: "en-US", name: "English", file: "en.json" },
      { code: "es", language: "es-AR", name: "Español", file: "es.json" },
    ],
  },
});