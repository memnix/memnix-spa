export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    titleTemplate: '%s - Spaced repetition web app',
    title: 'Memnix',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A spaced repetition learning system' },
      { hid: 'og:title', property: 'og:title', content: 'Memnix' },
      { hid: 'og:description', property: 'og:description', content: 'A spaced repetition learning system' },
      { hid: 'og:image', property: 'og:image', content: '/icon.png' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Memnix main page' },
      { hid: 'og:image:width', property: 'og:image:width', content: '512' },
      { hid: 'og:image:height', property: 'og:image:height', content: '512' },
      { hid: 'og:url', property: 'og:url', content: 'https://memnix.app' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'googlebot', content: 'notranslate' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-snip'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  i18n: {
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'memnix_i18n',
      redirectOn: 'root', // recommended
    },
    seo: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.json',
      },
      {
        code: 'ro',
        iso: 'ro',
        file: 'ro.json',
      },
      {
        code: 'ru',
        iso: 'ru',
        file: 'ru.json',
      },
    ],
    vueI18n: {
      fallbackLocale: 'en',
    },
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    baseUrl: 'https://memnix.app/',
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://memnix.app/sitemap.xml',
  },

  sitemap: {
    hostname: 'https://memnix.app',
    gzip: true,
    routes: [
      '/.well-known/assetlinks.json'
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Memnix',
      author: 'CorentinGS',
    },
    manifest: {
      name: 'Memnix - A spaced repetition learning system',
      short_name: 'Memnix',
      lang: 'en',
      display: 'standalone',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/safari-pinned-tab.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'monochrome',
        },
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes:
        {
          light: {
            primary: '#88C0D0', // Nord 8
            primarycontainer: '#81A1C1',
            accent: '#8FBCBB', // Nord 7
            secondary: '#81A1C1', // Nord 9
            info: '#5E81AC', // Nord 10
            warning: '#EBCB8B', // Nord 13
            error: '#BF616A', // Nord 11
            success: '#A3BE8C', // Nord 14
            background: '#ECEFF4', // Nord 6
            surface: '#E5E9F0', // Nord 5
            surfacevariant: '#D8DEE9', // Nord 4
            outline: '#5E81AC', // Nord 10
            oncolor: '#4C566A',
            onbackground: '#2E3440', // Nord 0
            onsuccess: '#4C566A',

          },
          dark: {
            primary: '#88C0D0', // Nord 8
            primarycontainer: '#81A1C1',
            accent: '#8FBCBB', // Nord 7
            secondary: '#81A1C1', // Nord 9
            info: '#5E81AC', // Nord 10
            warning: '#EBCB8B', // Nord 13
            error: '#BF616A', // Nord 11
            success: '#A3BE8C', // Nord 14
            background: '#2E3440', // Nord0
            surface: '#3B4252', // Nord 1
            surfacevariant: '#434C5E', // Nord 2
            outline: '#5E81AC', // Nord 10
            oncolor: '#4C566A',
            onbackground: '#ECEFF4', // Nord 6
            onsuccess: '#4C566A',

          },
        },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: '0.0.0.0',
    port: '1814',
  },
}
