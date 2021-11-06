import { createRouter, createWebHistory } from 'vue-router'
import DemoIconItem from '../views/DemoIconItem/index'

const routes = [
  {
    path: '/d-icon-item',
    name: 'd-icon-item',
    component: DemoIconItem
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
