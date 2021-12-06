import { createRouter, createWebHistory } from 'vue-router'
import { getRoutes } from '@/dcUi'
import DemoBadge from '../views/DemoBadge'
import DemoButton from '../views/DemoButton'
import DemoButtonSelect from '../views/DemoButtonSelect'
import DemoCarcassField from '../views/DemoCarcassField'
import DemoCheckbox from '../views/DemoCheckbox'
import DemoControlPosition from '../views/DemoControlPosition'
import DemoControlResize from '../views/DemoControlResize'
import DemoControlSelection from '../views/DemoControlSelection'
import DemoIcon from '../views/DemoIcon'
import DemoIconItem from '../views/DemoIconItem'
import DemoInput from '../views/DemoInput'
import DemoList from '../views/DemoList'
import DemoListItem from '../views/DemoListItem'
import DemoMask from '../views/DemoMask'
import DemoMenu from '../views/DemoMenu'
import DemoMotionAxis from '../views/DemoMotionAxis'
import DemoMotionScroll from '../views/DemoMotionScroll'
import DemoMotionSticky from '../views/DemoMotionSticky'
import DemoMotionTransform from '../views/DemoMotionTransform'
import DemoProgress from '../views/DemoProgress'
import DemoRipple from '../views/DemoRipple'
import DemoScrollbar from '../views/DemoScrollbar'
import DemoSelect from '../views/DemoSelect'
import DemoSelectValue from '../views/DemoSelectValue'
import DemoTextarea from '../views/DemoTextarea'
import DemoTextareaAutosize from '../views/DemoTextareaAutosize'
import DemoTooltip from '../views/DemoTooltip'
import DemoWindow from '../views/DemoWindow'

export const routes = getRoutes({
  'd-badge': DemoBadge,
  'd-button': DemoButton,
  'd-button-select': DemoButtonSelect,
  'd-carcass-field': DemoCarcassField,
  'd-checkbox': DemoCheckbox,
  'd-control-position': DemoControlPosition,
  'd-control-resize': DemoControlResize,
  'd-control-selection': DemoControlSelection,
  'd-icon': DemoIcon,
  'd-icon-item': DemoIconItem,
  'd-input': DemoInput,
  'd-list': DemoList,
  'd-list-item': DemoListItem,
  'd-mask': DemoMask,
  'd-menu': DemoMenu,
  'd-motion-axis': DemoMotionAxis,
  'd-motion-scroll': DemoMotionScroll,
  'd-motion-sticky': DemoMotionSticky,
  'd-motion-transform': DemoMotionTransform,
  'd-progress': DemoProgress,
  'd-ripple': DemoRipple,
  'd-scrollbar': DemoScrollbar,
  'd-select': DemoSelect,
  'd-select-value': DemoSelectValue,
  'd-textarea': DemoTextarea,
  'd-textarea-autosize': DemoTextareaAutosize,
  'd-tooltip': DemoTooltip,
  'd-window': DemoWindow
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
