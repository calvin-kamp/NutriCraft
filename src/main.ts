import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia, type Pinia } from 'pinia'

const pinia: Pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')