import { createApp } from 'vue'
import router from './router'
import store from './store'

import Translation from '@/classes/Translation'
import App from './App.vue'

import './main.scss'

Translation.init({
  'en-GB': [
    () => import('./translations/dc-ui/en-GB.json'),
    () => import('./translations/interactive-demo/en-GB.json')
  ]
})
  .then(() =>
    createApp(App)
      .use(store)
      .use(router)
      .mount('#app')
  )
