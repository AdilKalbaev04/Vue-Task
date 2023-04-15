import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/Page/MainPage.vue'
import VueAdmin from '@/Admin/VueAdmin.vue'
import AdminPanel from '@/Admin/AdminPanel.vue'
import VueCard from '@/Admin/VueCard.vue'
import AuthForm from '../components/Auth/AuthForm.vue'
import CardImg from '@/Admin/CardImg.vue'
import VueItem from '@/Admin/VueItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Admin',
      name: 'Admin',
      component: VueAdmin
    },
    {
      path: '/AdminPanel',
      name: 'AdminPanel',
      component: AdminPanel
    },
    {
      path: '/',
      name: 'Home',
      component: MainPage
    },
    {
      path: '/card',
      name: 'Card',
      component: VueCard
    },
    {
      path: '/item',
      name: 'Item',
      component: VueItem
    },
    {
      path: '/auth',
      name: 'Auth',
      component: AuthForm
    },
    {
      path: '/card_Img',
      name: 'cardImg',
      component: CardImg
    }
  ]
})

export default router
