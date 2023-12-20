// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    devtools: { enabled: false },
    ssr: false,
    modules: [
      '@nuxtjs/google-fonts',
    ],
    css:[
        'vuetify/styles/main.sass',
        '@mdi/font/css/materialdesignicons.css'
    ],
    typescript: { shim: false},
    build: { transpile: ['vuetify']},
    vite: { ssr: { noExternal: ['vuetify']}},
    googleFonts: {
      families: {
          Poppins: [100,200,300,400,500,600,700,800,900],
      },
        download: false,
        useStylesheet: true,
    }
})
