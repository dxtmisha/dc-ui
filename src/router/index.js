import { createRouter, createWebHistory } from 'vue-router'
import DemoIcon from '../views/DemoIcon'
import DemoIconItem from '../views/DemoIconItem'
import DemoScrollbar from '../views/DemoScrollbar'

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
  },
  {
    path: '/d-scrollbar',
    name: 'd-scrollbar',
    component: DemoScrollbar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
