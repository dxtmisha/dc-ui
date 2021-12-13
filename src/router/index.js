import { createRouter, createWebHistory } from 'vue-router'
import { getRoutes } from '@/dcUi'
import DemoActions from '../views/DemoActions'
import DemoAlert from '../views/DemoAlert'
import DemoBadge from '../views/DemoBadge'
import DemoButton from '../views/DemoButton'
import DemoButtonGroup from '../views/DemoButtonGroup'
import DemoButtonSelect from '../views/DemoButtonSelect'
import DemoCalendar from '../views/DemoCalendar'
import DemoCalendarMultiple from '../views/DemoCalendarMultiple'
import DemoCalendarSelect from '../views/DemoCalendarSelect'
import DemoCarcassField from '../views/DemoCarcassField'
import DemoCheckbox from '../views/DemoCheckbox'
import DemoClockFace from '../views/DemoClockFace'
import DemoControlPosition from '../views/DemoControlPosition'
import DemoControlResize from '../views/DemoControlResize'
import DemoControlSelection from '../views/DemoControlSelection'
import DemoDate from '../views/DemoDate'
import DemoDatePicker from '../views/DemoDatePicker'
import DemoDialog from '../views/DemoDialog'
import DemoDrop from '../views/DemoDrop'
import DemoFile from '../views/DemoFile'
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
import DemoRedactionFile from '../views/DemoRedactionFile'
import DemoRipple from '../views/DemoRipple'
import DemoScrollbar from '../views/DemoScrollbar'
import DemoSelect from '../views/DemoSelect'
import DemoSelectValue from '../views/DemoSelectValue'
import DemoSlider from '../views/DemoSlider'
import DemoSliderPicker from '../views/DemoSliderPicker'
import DemoTextarea from '../views/DemoTextarea'
import DemoTextareaAutosize from '../views/DemoTextareaAutosize'
import DemoTime from '../views/DemoTime'
import DemoTimePicker from '../views/DemoTimePicker'
import DemoTooltip from '../views/DemoTooltip'
import DemoTop from '../views/DemoTop'
import DemoWindow from '../views/DemoWindow'

export const routes = getRoutes({
  'd-actions': DemoActions,
  'd-alert': DemoAlert,
  'd-badge': DemoBadge,
  'd-button': DemoButton,
  'd-button-group': DemoButtonGroup,
  'd-button-select': DemoButtonSelect,
  'd-calendar': DemoCalendar,
  'd-calendar-multiple': DemoCalendarMultiple,
  'd-calendar-select': DemoCalendarSelect,
  'd-carcass-field': DemoCarcassField,
  'd-checkbox': DemoCheckbox,
  'd-clock-face': DemoClockFace,
  'd-control-position': DemoControlPosition,
  'd-control-resize': DemoControlResize,
  'd-control-selection': DemoControlSelection,
  'd-date': DemoDate,
  'd-date-picker': DemoDatePicker,
  'd-dialog': DemoDialog,
  'd-drop': DemoDrop,
  'd-file': DemoFile,
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
  'd-redaction-file': DemoRedactionFile,
  'd-ripple': DemoRipple,
  'd-scrollbar': DemoScrollbar,
  'd-select': DemoSelect,
  'd-select-value': DemoSelectValue,
  'd-slider': DemoSlider,
  'd-slider-picker': DemoSliderPicker,
  'd-textarea': DemoTextarea,
  'd-textarea-autosize': DemoTextareaAutosize,
  'd-time': DemoTime,
  'd-time-picker': DemoTimePicker,
  'd-tooltip': DemoTooltip,
  'd-top': DemoTop,
  'd-window': DemoWindow
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
