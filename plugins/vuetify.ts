import {createVuetify, ThemeDefinition} from 'vuetify'

const myThemes: ThemeDefinition = {
    dark: false,
    colors: {
        primary: '#009688'
    }
}
export default defineNuxtPlugin(app=>{
    const vuetify = createVuetify({
        ssr: true,
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