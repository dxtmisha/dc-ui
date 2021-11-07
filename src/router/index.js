import { createRouter, createWebHistory } from 'vue-router'
import DemoIcon from '../views/DemoIcon'
import DemoIconItem from '../views/DemoIconItem'

const routes = [
  {
    path: '/d-icon',
    name: 'd-icon',
    component: DemoIcon
  },
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
