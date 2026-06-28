import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import { colors } from './design.json'

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.primary,
        },
      },
    },
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
})

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')