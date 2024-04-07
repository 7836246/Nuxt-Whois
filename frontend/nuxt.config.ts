// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    routeRules: {
        '/admin/**': {ssr: false}
    },
    modules: [
        '@nuxt/devtools',  // Devtools开发工具
        '@nuxtjs/i18n', // 多语言
        '@pinia/nuxt', // Pinia 持久化状态管理
        '@pinia-plugin-persistedstate/nuxt', // Pinia 持久化状态管理插件
        'nuxt-simple-robots',
        'nuxt-headlessui', // 组件库
        '@bg-dev/nuxt-naiveui', // 组件库
        'nuxt-icon',
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    experimental: {
        appManifest: false,
    },
    features: {
        inlineStyles: true,
    },
    runtimeConfig: {
        public: {
            baseUrl: process.env.BASE_URL
        }
    },
    app: {
        head: {
            title: 'Nuxt Whois',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
            ],
            // script: [{src: "/darkModelVerify.js"}],
        }
    },
    i18n: {
        strategy: 'prefix_except_default',
        defaultLocale: 'zh',
        detectBrowserLanguage: {
            useCookie: true,
        },
        locales: [
            {code: 'zh', iso: 'zh-Hans', file: 'zh.ts'},
            {code: 'en', iso: 'en-US', file: 'en.ts'},
            {code: 'tw', iso: 'zh-Hant', file: 'tw.ts'},
        ],
        langDir: 'lang/',
    },
    headlessui: {
        prefix: 'Headless'
    },
    naiveui: {},
    colorMode: {
        classSuffix: '',
    },
})
