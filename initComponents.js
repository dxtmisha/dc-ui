import init from './init'

import DActions from './components/DActions'
import DAlert from './components/DAlert'
import DAnchor from './components/DAnchor'
import DAnchorTo from './components/DAnchorTo'
import DAppBar from './components/DAppBar'
import DAvatar from './components/DAvatar'
import DBadge from './components/DBadge'
import DBanner from './components/DBanner'
import DBottomNavigation from './components/DBottomNavigation'
import DBreadcrumbs from './components/DBreadcrumbs'
import DButton from './components/DButton'
import DButtonGroup from './components/DButtonGroup'
import DButtonSelect from './components/DButtonSelect'
import DButtonSort from './components/DButtonSort'
import DCalendar from './components/DCalendar'
import DCalendarMultiple from './components/DCalendarMultiple'
import DCalendarSelect from './components/DCalendarSelect'
import DCarcassField from './components/DCarcassField'
import DCarcassMessage from './components/DCarcassMessage'
import DCard from './components/DCard'
import DCardMedia from './components/DCardMedia'
import DCardMenu from './components/DCardMenu'
import DCardText from './components/DCardText'
import DCardTitle from './components/DCardTitle'
import DCheckbox from './components/DCheckbox'
import DClipboard from './components/DClipboard'
import DClockFace from './components/DClockFace'
import DControlPosition from './components/DControlPosition'
import DControlResize from './components/DControlResize'
import DControlSelection from './components/DControlSelection'
import DCurrency from './components/DCurrency'
import DData from './components/DData'
import DDataItem from './components/DDataItem'
import DDataPicker from './components/DDataPicker'
import DDate from './components/DDate'
import DDateFormat from './components/DDateFormat'
import DDatePicker from './components/DDatePicker'
import DDialog from './components/DDialog'
import DDisplay from './components/DDisplay'
import DDrop from './components/DDrop'
import DFile from './components/DFile'
import DForm from './components/DForm'
import DIcon from './components/DIcon'
import DIconItem from './components/DIconItem'
import DImages from './components/DImages'
import DImagesBar from './components/DImagesBar'
import DImagesItem from './components/DImagesItem'
import DPhone from './components/DPhone'
import DInput from './components/DInput'
import DList from './components/DList'
import DListFormat from './components/DListFormat'
import DListItem from './components/DListItem'
import DMask from './components/DMask'
import DMenu from './components/DMenu'
import DMotionAxis from './components/DMotionAxis'
import DMotionCell from './components/DMotionCell'
import DMotionScroll from './components/DMotionScroll'
import DMotionSticky from './components/DMotionSticky'
import DMotionTransform from './components/DMotionTransform'
import DNavigation from './components/DNavigation'
import DNavigationFilter from './components/DNavigationFilter'
import DNumber from './components/DNumber'
import DPagination from './components/DPagination'
import DProgress from './components/DProgress'
import DRedactionFile from './components/DRedactionFile'
import DRipple from './components/DRipple'
import DScrollbar from './components/DScrollbar'
import DSelect from './components/DSelect'
import DSelectFilter from './components/DSelectFilter'
import DSelectValue from './components/DSelectValue'
import DSkeleton from './components/DSkeleton'
import DSlider from './components/DSlider'
import DSliderPicker from './components/DSliderPicker'
import DSnackbar from './components/DSnackbar'
import DTab from './components/DTab'
import DTable from './components/DTable'
import DTablePicker from './components/DTablePicker'
import DTabPicker from './components/DTabPicker'
import DTextarea from './components/DTextarea'
import DTextareaAutosize from './components/DTextareaAutosize'
import DTime from './components/DTime'
import DTimePicker from './components/DTimePicker'
import DTooltip from './components/DTooltip'
import DTop from './components/DTop'
import DUnit from './components/DUnit'
import DWindow from './components/DWindow'

export default {
  install (app, options) {
    init.install(app, options)

    app.component('d-actions', DActions)
    app.component('d-alert', DAlert)
    app.component('d-anchor', DAnchor)
    app.component('d-anchor-to', DAnchorTo)
    app.component('d-app-bar', DAppBar)
    app.component('d-avatar', DAvatar)
    app.component('d-badge', DBadge)
    app.component('d-banner', DBanner)
    app.component('d-bottom-navigation', DBottomNavigation)
    app.component('d-breadcrumbs', DBreadcrumbs)
    app.component('d-button', DButton)
    app.component('d-button-group', DButtonGroup)
    app.component('d-button-select', DButtonSelect)
    app.component('d-button-sort', DButtonSort)
    app.component('d-calendar', DCalendar)
    app.component('d-calendar-multiple', DCalendarMultiple)
    app.component('d-calendar-select', DCalendarSelect)
    app.component('d-carcass-field', DCarcassField)
    app.component('d-carcass-message', DCarcassMessage)
    app.component('d-card', DCard)
    app.component('d-card-media', DCardMedia)
    app.component('d-card-menu', DCardMenu)
    app.component('d-card-text', DCardText)
    app.component('d-card-title', DCardTitle)
    app.component('d-checkbox', DCheckbox)
    app.component('d-clipboard', DClipboard)
    app.component('d-clock-face', DClockFace)
    app.component('d-control-position', DControlPosition)
    app.component('d-control-resize', DControlResize)
    app.component('d-control-selection', DControlSelection)
    app.component('d-currency', DCurrency)
    app.component('d-data', DData)
    app.component('d-data-item', DDataItem)
    app.component('d-data-picker', DDataPicker)
    app.component('d-date', DDate)
    app.component('d-date-format', DDateFormat)
    app.component('d-date-picker', DDatePicker)
    app.component('d-dialog', DDialog)
    app.component('d-display', DDisplay)
    app.component('d-drop', DDrop)
    app.component('d-file', DFile)
    app.component('d-form', DForm)
    app.component('d-icon', DIcon)
    app.component('d-icon-item', DIconItem)
    app.component('d-images', DImages)
    app.component('d-images-bar', DImagesBar)
    app.component('d-images-item', DImagesItem)
    app.component('d-phone', DPhone)
    app.component('d-input', DInput)
    app.component('d-list', DList)
    app.component('d-list-format', DListFormat)
    app.component('d-list-item', DListItem)
    app.component('d-mask', DMask)
    app.component('d-menu', DMenu)
    app.component('d-motion-axis', DMotionAxis)
    app.component('d-motion-cell', DMotionCell)
    app.component('d-motion-scroll', DMotionScroll)
    app.component('d-motion-sticky', DMotionSticky)
    app.component('d-motion-transform', DMotionTransform)
    app.component('d-navigation', DNavigation)
    app.component('d-navigation-filter', DNavigationFilter)
    app.component('d-number', DNumber)
    app.component('d-pagination', DPagination)
    app.component('d-progress', DProgress)
    app.component('d-redaction-file', DRedactionFile)
    app.component('d-ripple', DRipple)
    app.component('d-scrollbar', DScrollbar)
    app.component('d-select', DSelect)
    app.component('d-select-filter', DSelectFilter)
    app.component('d-select-value', DSelectValue)
    app.component('d-skeleton', DSkeleton)
    app.component('d-slider', DSlider)
    app.component('d-slider-picker', DSliderPicker)
    app.component('d-snackbar', DSnackbar)
    app.component('d-tab', DTab)
    app.component('d-table', DTable)
    app.component('d-table-picker', DTablePicker)
    app.component('d-tab-picker', DTabPicker)
    app.component('d-textarea', DTextarea)
    app.component('d-textarea-autosize', DTextareaAutosize)
    app.component('d-time', DTime)
    app.component('d-time-picker', DTimePicker)
    app.component('d-tooltip', DTooltip)
    app.component('d-top', DTop)
    app.component('d-unit', DUnit)
    app.component('d-window', DWindow)
  }
}
