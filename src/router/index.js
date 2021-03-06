import { createRouter, createWebHistory } from 'vue-router'
import { getRoutes } from '@/dcUi'
import DemoActions from '../views/DemoActions'
import DemoAlert from '../views/DemoAlert'
import DemoAnchor from '../views/DemoAnchor'
import DemoAnchorTo from '../views/DemoAnchorTo'
import DemoAppBar from '../views/DemoAppBar'
import DemoAvatar from '../views/DemoAvatar'
import DemoBadge from '../views/DemoBadge'
import DemoBanner from '../views/DemoBanner'
import DemoBottomNavigation from '../views/DemoBottomNavigation'
import DemoBreadcrumbs from '../views/DemoBreadcrumbs'
import DemoButton from '../views/DemoButton'
import DemoButtonGroup from '../views/DemoButtonGroup'
import DemoButtonSelect from '../views/DemoButtonSelect'
import DemoButtonSort from '../views/DemoButtonSort'
import DemoCalendar from '../views/DemoCalendar'
import DemoCalendarMultiple from '../views/DemoCalendarMultiple'
import DemoCalendarSelect from '../views/DemoCalendarSelect'
import DemoCarcassField from '../views/DemoCarcassField'
import DemoCarcassMessage from '../views/DemoCarcassMessage'
import DemoCard from '../views/DemoCard'
import DemoCardMedia from '../views/DemoCardMedia'
import DemoCardMenu from '../views/DemoCardMenu'
import DemoCardText from '../views/DemoCardText'
import DemoCardTitle from '../views/DemoCardTitle'
import DemoCheckbox from '../views/DemoCheckbox'
import DemoClipboard from '../views/DemoClipboard'
import DemoClockFace from '../views/DemoClockFace'
import DemoControlPosition from '../views/DemoControlPosition'
import DemoControlResize from '../views/DemoControlResize'
import DemoControlSelection from '../views/DemoControlSelection'
import DemoCurrency from '../views/DemoCurrency'
import DemoData from '../views/DemoData'
import DemoDataItem from '../views/DemoDataItem'
import DemoDataPicker from '../views/DemoDataPicker'
import DemoDate from '../views/DemoDate'
import DemoDateFormat from '../views/DemoDateFormat'
import DemoDatePicker from '../views/DemoDatePicker'
import DemoDialog from '../views/DemoDialog'
import DemoDisplay from '../views/DemoDisplay'
import DemoDrop from '../views/DemoDrop'
import DemoFile from '../views/DemoFile'
import DemoForm from '../views/DemoForm'
import DemoIcon from '../views/DemoIcon'
import DemoIconItem from '../views/DemoIconItem'
import DemoImages from '../views/DemoImages'
import DemoImagesBar from '../views/DemoImagesBar'
import DemoPhone from '@/views/DemoPhone'
import DemoInput from '../views/DemoInput'
import DemoList from '../views/DemoList'
import DemoListFormat from '../views/DemoListFormat'
import DemoListItem from '../views/DemoListItem'
import DemoMask from '../views/DemoMask'
import DemoMenu from '../views/DemoMenu'
import DemoMotionAxis from '../views/DemoMotionAxis'
import DemoMotionCell from '../views/DemoMotionCell'
import DemoMotionScroll from '../views/DemoMotionScroll'
import DemoMotionSticky from '../views/DemoMotionSticky'
import DemoMotionTransform from '../views/DemoMotionTransform'
import DemoNavigation from '../views/DemoNavigation'
import DemoNavigationFilter from '../views/DemoNavigationFilter'
import DemoNumber from '../views/DemoNumber'
import DemoPagination from '../views/DemoPagination'
import DemoProgress from '../views/DemoProgress'
import DemoRedactionFile from '../views/DemoRedactionFile'
import DemoRipple from '../views/DemoRipple'
import DemoScrollbar from '../views/DemoScrollbar'
import DemoSelect from '../views/DemoSelect'
import DemoSelectFilter from '../views/DemoSelectFilter'
import DemoSelectValue from '../views/DemoSelectValue'
import DemoSkeleton from '../views/DemoSkeleton'
import DemoSlider from '../views/DemoSlider'
import DemoSliderPicker from '../views/DemoSliderPicker'
import DemoSnackbar from '../views/DemoSnackbar'
import DemoTab from '../views/DemoTab'
import DemoTable from '../views/DemoTable'
import DemoTablePicker from '../views/DemoTablePicker'
import DemoTabPicker from '../views/DemoTabPicker'
import DemoTextarea from '../views/DemoTextarea'
import DemoTextareaAutosize from '../views/DemoTextareaAutosize'
import DemoTime from '../views/DemoTime'
import DemoTimePicker from '../views/DemoTimePicker'
import DemoTooltip from '../views/DemoTooltip'
import DemoTop from '../views/DemoTop'
import DemoUnit from '../views/DemoUnit'
import DemoWindow from '../views/DemoWindow'
import HomeView from '../views/HomeView'

export const routes = getRoutes({
  '': HomeView,
  's-components': { subtitle: 'Components' },
  'd-actions': DemoActions,
  'd-alert': DemoAlert,
  'd-anchor': DemoAnchor,
  'd-anchor-to': DemoAnchorTo,
  'd-app-bar': DemoAppBar,
  'd-avatar': DemoAvatar,
  'd-badge': DemoBadge,
  'd-banner': DemoBanner,
  'd-bottom-navigation': DemoBottomNavigation,
  'd-breadcrumbs': DemoBreadcrumbs,
  'd-button': DemoButton,
  'd-button-group': DemoButtonGroup,
  'd-button-select': DemoButtonSelect,
  'd-button-sort': DemoButtonSort,
  'd-calendar': DemoCalendar,
  'd-calendar-multiple': DemoCalendarMultiple,
  'd-calendar-select': DemoCalendarSelect,
  'd-carcass-field': DemoCarcassField,
  'd-carcass-message': DemoCarcassMessage,
  'd-currency': DemoCurrency,
  'd-card': DemoCard,
  'd-card-media': DemoCardMedia,
  'd-card-menu': DemoCardMenu,
  'd-card-text': DemoCardText,
  'd-card-title': DemoCardTitle,
  'd-checkbox': DemoCheckbox,
  'd-clipboard': DemoClipboard,
  'd-clock-face': DemoClockFace,
  'd-control-position': DemoControlPosition,
  'd-control-resize': DemoControlResize,
  'd-control-selection': DemoControlSelection,
  'd-data': DemoData,
  'd-data-item': DemoDataItem,
  'd-data-picker': DemoDataPicker,
  'd-date': DemoDate,
  'd-date-format': DemoDateFormat,
  'd-date-picker': DemoDatePicker,
  'd-dialog': DemoDialog,
  'd-display': DemoDisplay,
  'd-drop': DemoDrop,
  'd-file': DemoFile,
  'd-form': DemoForm,
  'd-icon': DemoIcon,
  'd-icon-item': DemoIconItem,
  'd-images': DemoImages,
  'd-images-bar': DemoImagesBar,
  'd-input': DemoInput,
  'd-list': DemoList,
  'd-list-format': DemoListFormat,
  'd-list-item': DemoListItem,
  'd-mask': DemoMask,
  'd-menu': DemoMenu,
  'd-motion-axis': DemoMotionAxis,
  'd-motion-cell': DemoMotionCell,
  'd-motion-scroll': DemoMotionScroll,
  'd-motion-sticky': DemoMotionSticky,
  'd-motion-transform': DemoMotionTransform,
  'd-navigation': DemoNavigation,
  'd-navigation-filter': DemoNavigationFilter,
  'd-number': DemoNumber,
  'd-pagination': DemoPagination,
  'd-phone': DemoPhone,
  'd-progress': DemoProgress,
  'd-redaction-file': DemoRedactionFile,
  'd-ripple': DemoRipple,
  'd-scrollbar': DemoScrollbar,
  'd-select': DemoSelect,
  'd-select-filter': DemoSelectFilter,
  'd-select-value': DemoSelectValue,
  'd-skeleton': DemoSkeleton,
  'd-slider': DemoSlider,
  'd-slider-picker': DemoSliderPicker,
  'd-snackbar': DemoSnackbar,
  'd-tab': DemoTab,
  'd-table': DemoTable,
  'd-table-picker': DemoTablePicker,
  'd-tab-picker': DemoTabPicker,
  'd-textarea': DemoTextarea,
  'd-textarea-autosize': DemoTextareaAutosize,
  'd-time': DemoTime,
  'd-time-picker': DemoTimePicker,
  'd-tooltip': DemoTooltip,
  'd-top': DemoTop,
  'd-unit': DemoUnit,
  'd-window': DemoWindow
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    const position = savedPosition || {
      top: 0,
      left: 0
    }

    document.body.scrollTo(position)
    document.documentElement.scrollTo(position)
  }
})

export default router
