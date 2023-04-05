import { createApp } from 'vue'
import App from './App.vue'
import shared from './components/shared'
const app = createApp(App)
app.use(shared)
app.mount('#app')
