import { createApp } from 'vue'
import App from './App.vue'
//router
import router from './router'
//vuex
import store from './store'

import 'styles/index.scss'

createApp(App).use(router).use(store).mount('#app')
