import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import FruitPage from '../views/FruitPage.vue'
import LoginPage from '../views/LoginPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  
  {
    path: '/fruit',
    //component:() => import('../components/FruitPage.vue')
    component:FruitPage
  },
  {
    path: '/home',
    component:HomePage
  },
  {
    path: '/login',
    component:LoginPage
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
