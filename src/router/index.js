import { createRouter, createWebHistory } from 'vue-router'
import DemoBadge from '../views/DemoBadge'
import DemoButton from '../views/DemoButton'
import DemoIcon from '../views/DemoIcon'
import DemoIconItem from '../views/DemoIconItem'
import DemoProgress from '../views/DemoProgress'
import DemoRipple from '../views/DemoRipple'
import DemoScrollbar from '../views/DemoScrollbar'

const routes = [
  {
    path: '/d-badge',
    name: 'd-badge',
    component: DemoBadge
  },
  {
    path: '/d-button',
    name: 'd-button',
    component: DemoButton
  },
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
    path: '/d-progress',
    name: 'd-progress',
    component: DemoProgress
  },
  {
    path: '/d-ripple',
    name: 'd-ripple',
    component: DemoRipple
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
