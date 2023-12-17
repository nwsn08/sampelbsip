import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {createVuetify, ThemeDefinition} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myThemes: ThemeDefinition = {
    dark: false,
    colors: {
        primary: '#009688'
    }
}
export default defineNuxtPlugin(app=>{
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        defaults: {
            VTextField: {
                variant: 'outlined',
                color: 'primary'
            }
        },
        theme: {
            defaultTheme: 'myThemes',
            themes: { myThemes }
        }
    })

    app.vueApp.use(vuetify);
})