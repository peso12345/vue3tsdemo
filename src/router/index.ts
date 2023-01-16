import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homes.vue'

import routess from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routess,
    {
      path: '/',
      name: 'home',
      component: HomeView,
    }
  ]
})

export default router
