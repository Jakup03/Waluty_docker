import { en, pl } from 'vuetify/locale'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@invictus.codes/nuxt-vuetify'
  ],

  devtools: { enabled: true },
  typescript: { strict: true },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

  vuetify: {
    vuetifyOptions: {
      display: { mobileBreakpoint: 'sm' },
      locale: {
        locale: 'pl',
        fallback: 'pl',
        messages: { pl, en },
      },
      theme: {
        defaultTheme: 'dark',
        themes: {
          light: { dark: false, colors: { 'primary': '#FF7A00' } },
          dark: { dark: true, colors: { 'primary': '#FF7A00' } },
        },
      },
      defaults: {
        VTextField: { variant: 'outlined', color: 'primary' },
        VTextarea: { variant: 'outlined', color: 'primary' },
        VSelect: { variant: 'outlined', color: 'primary' },
        VAutocomplete: { variant: 'outlined', color: 'primary' },
        VCard: {},
        VBtn: {},
      },
    },
  },

  compatibilityDate: '2024-09-06',
});