import { createApp } from 'vue'
import pinia from '@/stores/index'
import App from './App.vue'
import router from './router'

import 'vant/lib/index.css'
import './styles/main.scss'

const app = createApp(App)
app.use(router)
app.use(pinia)

app.mount('#app')
