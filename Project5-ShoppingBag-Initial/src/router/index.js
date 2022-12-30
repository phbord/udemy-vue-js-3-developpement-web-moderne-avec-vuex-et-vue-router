import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BasketView from '../views/BasketView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/basket',
    name: 'Basket',
    component: BasketView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
