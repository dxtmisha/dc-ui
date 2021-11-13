import { createRouter, createWebHistory } from 'vue-router'
import { getRoutes } from '@/uses/useRoutes'
import DemoBadge from '../views/DemoBadge'
import DemoButton from '../views/DemoButton'
import DemoIcon from '../views/DemoIcon'
import DemoIconItem from '../views/DemoIconItem'
import DemoList from '../views/DemoList'
import DemoListItem from '../views/DemoListItem'
import DemoMenu from '../views/DemoMenu'
import DemoProgress from '../views/DemoProgress'
import DemoRipple from '../views/DemoRipple'
import DemoScrollbar from '../views/DemoScrollbar'
import DemoWindow from '../views/DemoWindow'

const routes = getRoutes({
  'd-badge': DemoBadge,
  'd-button': DemoButton,
  'd-icon': DemoIcon,
  'd-icon-item': DemoIconItem,
  'd-list': DemoList,
  'd-list-item': DemoListItem,
  'd-menu': DemoMenu,
  'd-progress': DemoProgress,
  'd-ripple': DemoRipple,
  'd-scrollbar': DemoScrollbar,
  'd-window': DemoWindow
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
