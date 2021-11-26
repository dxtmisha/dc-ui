import { createRouter, createWebHistory } from 'vue-router'
import { getRoutes } from '@/dcUi'
import DemoBadge from '../views/DemoBadge'
import DemoButton from '../views/DemoButton'
import DemoCarcassField from '../views/DemoCarcassField'
import DemoIcon from '../views/DemoIcon'
import DemoIconItem from '../views/DemoIconItem'
import DemoInput from '../views/DemoInput'
import DemoList from '../views/DemoList'
import DemoListItem from '../views/DemoListItem'
import DemoMask from '../views/DemoMask'
import DemoMenu from '../views/DemoMenu'
import DemoProgress from '../views/DemoProgress'
import DemoRipple from '../views/DemoRipple'
import DemoScrollbar from '../views/DemoScrollbar'
import DemoTextareaAutosize from '../views/DemoTextareaAutosize'
import DemoWindow from '../views/DemoWindow'

const routes = getRoutes({
  'd-badge': DemoBadge,
  'd-button': DemoButton,
  'd-carcass-field': DemoCarcassField,
  'd-icon': DemoIcon,
  'd-icon-item': DemoIconItem,
  'd-input': DemoInput,
  'd-list': DemoList,
  'd-list-item': DemoListItem,
  'd-mask': DemoMask,
  'd-menu': DemoMenu,
  'd-progress': DemoProgress,
  'd-ripple': DemoRipple,
  'd-scrollbar': DemoScrollbar,
  'd-textarea-autosize': DemoTextareaAutosize,
  'd-window': DemoWindow
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
