import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import FruitPage from '../views/FruitPage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/fruit'
  },
  {
    path: '/fruit',
    name: 'Fruit',
    component: FruitPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/message/:id',
    component: () => import('../views/ViewMessagePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
