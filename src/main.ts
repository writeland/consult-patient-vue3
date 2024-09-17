import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './style/main.scss'
import 'vant/lib/index.css'
import persist from 'pinia-plugin-persistedstate'

const app = createApp(App)
app.use(createPinia().use(persist))
app.use(router)

app.mount('#app')
