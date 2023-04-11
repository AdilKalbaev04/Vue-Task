import { createApp } from 'vue'
import App from './App.vue'
import shared from './components/shared'
import router from './router'
const app = createApp(App)
app.use(shared)
app.use(router)
app.mount('#app')
