import { createRouter, createWebHistory } from 'vue-router'
import { getRoutes } from '@/dcUi'
import DemoActions from '../--views/DemoActions'
import DemoAlert from '../--views/DemoAlert'
import DemoAppBar from '../--views/DemoAppBar'
import DemoBadge from '../views/DemoBadge'
import DemoBanner from '../--views/DemoBanner'
import DemoButton from '../views/DemoButton'
import DemoButtonGroup from '../--views/DemoButtonGroup'
import DemoButtonSelect from '../--views/DemoButtonSelect'
import DemoCalendar from '../views/DemoCalendar'
import DemoCalendarMultiple from '../views/DemoCalendarMultiple'
import DemoCalendarSelect from '../views/DemoCalendarSelect'
import DemoCarcassField from '../views/DemoCarcassField'
import DemoCardMenu from '../--views/DemoCardMenu'
import DemoCheckbox from '../views/DemoCheckbox'
import DemoClockFace from '../views/DemoClockFace'
import DemoControlPosition from '../views/DemoControlPosition'
import DemoControlResize from '../views/DemoControlResize'
import DemoControlSelection from '../views/DemoControlSelection'
import DemoDate from '../--views/DemoDate'
import DemoDatePicker from '../--views/DemoDatePicker'
import DemoDialog from '../--views/DemoDialog'
import DemoDrop from '../views/DemoDrop'
import DemoFile from '../--views/DemoFile'
import DemoForm from '../--views/DemoForm'
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
import DemoNavigation from '../--views/DemoNavigation'
import DemoProgress from '../views/DemoProgress'
import DemoRedactionFile from '../--views/DemoRedactionFile'
import DemoRipple from '../views/DemoRipple'
import DemoScrollbar from '../views/DemoScrollbar'
import DemoSelect from '../--views/DemoSelect'
import DemoSelectValue from '../views/DemoSelectValue'
import DemoSlider from '../--views/DemoSlider'
import DemoSliderPicker from '../views/DemoSliderPicker'
import DemoSnackbar from '../--views/DemoSnackbar'
import DemoTextarea from '../views/DemoTextarea'
import DemoTextareaAutosize from '../views/DemoTextareaAutosize'
import DemoTime from '../--views/DemoTime'
import DemoTimePicker from '../--views/DemoTimePicker'
import DemoTooltip from '../views/DemoTooltip'
import DemoTop from '../--views/DemoTop'
import DemoWindow from '../views/DemoWindow'

export const routes = getRoutes({
  's-basic': { subtitle: 'Basic' },
  'd-alert': DemoAlert,
  'd-app-bar': DemoAppBar,
  'd-banner': DemoBanner,
  'd-button-group': DemoButtonGroup,
  'd-button-select': DemoButtonSelect,
  'd-dialog': DemoDialog,
  'd-navigation': DemoNavigation,
  'd-scrollbar': DemoScrollbar,
  'd-snackbar': DemoSnackbar,
  'd-tooltip': DemoTooltip,
  'l-interaction': { line: true },
  's-interaction': { subtitle: 'Interaction' },
  'd-button': DemoButton,
  'd-list': DemoList,
  'd-list-item': DemoListItem,
  'd-menu': DemoMenu,
  'l-form': { line: true },
  's-form': { subtitle: 'Form and Input' },
  'd-carcass-field': DemoCarcassField,
  'd-checkbox': DemoCheckbox,
  'd-date': DemoDate,
  'd-drop': DemoDrop,
  'd-file': DemoFile,
  'd-form': DemoForm,
  'd-input': DemoInput,
  'd-mask': DemoMask,
  'd-select': DemoSelect,
  'd-select-value': DemoSelectValue,
  'd-slider': DemoSlider,
  'd-slider-picker': DemoSliderPicker,
  'd-textarea': DemoTextarea,
  'd-textarea-autosize': DemoTextareaAutosize,
  'd-time': DemoTime,
  'l-datetime': { line: true },
  's-datetime': { subtitle: 'Date and Time' },
  'd-calendar': DemoCalendar,
  'd-calendar-multiple': DemoCalendarMultiple,
  'd-calendar-select': DemoCalendarSelect,
  'd-clock-face': DemoClockFace,
  'l-icons': { line: true },
  's-icons': { subtitle: 'Icon' },
  'd-badge': DemoBadge,
  'd-icon': DemoIcon,
  'd-icon-item': DemoIconItem,
  'l-motion': { line: true },
  's-motion': { subtitle: 'Motion' },
  'd-motion-axis': DemoMotionAxis,
  'd-motion-scroll': DemoMotionScroll,
  'd-motion-sticky': DemoMotionSticky,
  'd-motion-transform': DemoMotionTransform,
  'l-control': { line: true },
  's-control': { subtitle: 'Control' },
  'd-control-position': DemoControlPosition,
  'd-control-resize': DemoControlResize,
  'd-control-selection': DemoControlSelection,
  'l-components': { line: true },
  's-components': { subtitle: 'Components' },
  'd-actions': DemoActions,
  'd-card-menu': DemoCardMenu,
  'd-date-picker': DemoDatePicker,
  'd-progress': DemoProgress,
  'd-redaction-file': DemoRedactionFile,
  'd-ripple': DemoRipple,
  'd-time-picker': DemoTimePicker,
  'd-top': DemoTop,
  'd-window': DemoWindow
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
