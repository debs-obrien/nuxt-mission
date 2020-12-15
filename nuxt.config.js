export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-mission',
    titleTemplate: 'Jamstack Explorers | %s',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A mission to explore the Jamstack using Nuxt.',
      },
      // Twitter
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://jamstack-explorers-nuxt-mission.com',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Nuxt Mission',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'A mission to explore the Jamstack using Nuxt.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://jamstack-explorers-nuxt-mission.com/social-preview.png',
      },

      // Open Graph
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'JamStack Explorers - Nuxt',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://jamstack-explorers-nuxt-mission.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Nuxt Mission',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'A mission to explore the Jamstack using Nuxt.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://jamstack-explorers-nuxt-mission.com/social-preview.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content:
          'https://jamstack-explorers-nuxt-mission.com/social-preview.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Nuxt Mission',
      },
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://jamstack-explorers-nuxt-mission',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap',
      },
    ],
    // script: [
    //   {
    //     src:
    //       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    //   },
    // ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
