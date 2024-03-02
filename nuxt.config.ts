// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    'nuxt-headlessui',
    '@pinia/nuxt', // needed
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-simple-robots',
  ],
  features:{
      inlineStyles: true,
  } ,
  runtimeConfig: {
      public: {
          Domain: 'Nuxt Whois',
          DomainSuffix: 'Dns',
      }
  },
  app:{
    head: {
        title: 'Nuxt Whois',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt Whois' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    }
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'zh',
    detectBrowserLanguage: {
          useCookie: true,
    },
    locales: [
      { code: 'zh', iso: 'zh-Hans', file: 'zh.ts' },
      { code: 'en', iso: 'en-US', file: 'en.ts' },
      { code: 'tw', iso: 'zh-Hant', file: 'tw.ts' },
    ],
    langDir: 'lang/',
  },
  headlessui: {
    prefix: 'Headless'
  },
})
