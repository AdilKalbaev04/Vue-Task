import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/Page/MainPage.vue'
import VueAdmin from '@/Admin/VueAdmin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Admin',
      name: 'Admin',
      component: VueAdmin
    },
    {
      path: '/',
      name: 'Home',
      component: MainPage
    }
  ]
})

export default router
