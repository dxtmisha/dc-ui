import { useTheme } from './uses/useTheme'

import EventControl from './classes/EventControl'
import Geo from './classes/Geo'
import GeoDate from './classes/GeoDate'
import List from './classes/List'
import Translation from './classes/Translation'

import addArrayValue from './functions/addArrayValue'
import createElement from './functions/createElement'
import createImage from './functions/createImage'
import forEach from './functions/forEach'
import frame from './functions/frame'
import getClientX from './functions/getClientX'
import getClientY from './functions/getClientY'
import getColumn from './functions/getColumn'
import getExp from './functions/getExp'
import getFileResult from './functions/getFileResult'
import getIdElement from './functions/getIdElement'
import getKey from './functions/getKey'
import getObjectValues from './functions/getObjectValues'
import getRandom from './functions/getRandom'
import goFunction from './functions/goFunction'
import goScroll from './functions/goScroll'
import isImage from './functions/isImage'
import isSelected from './functions/isSelected'
import setValues from './functions/setValues'
import toggleArrayValue from './functions/toggleArrayValue'
import toKebabCase from './functions/toKebabCase'

import useAdmin from './uses/useAdmin'
import useAttrs from './uses/useAttrs'
import useBinds from './uses/useBinds'
import useClass from './uses/useClass'
import useClassByFocus from './uses/useClassByFocus'
import useColor from './uses/useColor'
import useDateTime from './uses/useDateTime'
import useField from './uses/useField'
import useObjectList from './uses/useObjectList'
import useScroll from './uses/useScroll'
import useScrollBorder from './uses/useScrollBorder'
import useStyle from './uses/useStyle'
import useStyleList from './uses/useStyleList'
import useWatch from './uses/useWatch'

import DActions from './components/DActions'
import DAlert from './components/DAlert'
import DAppBar from './components/DAppBar'
import DAvatar from './components/DAvatar'
import DBadge from './components/DBadge'
import DBanner from './components/DBanner'
import DBottomNavigation from './components/DBottomNavigation'
import DButton from './components/DButton'
import DButtonGroup from './components/DButtonGroup'
import DButtonSelect from './components/DButtonSelect'
import DCalendar from './components/DCalendar'
import DCalendarMultiple from './components/DCalendarMultiple'
import DCalendarSelect from './components/DCalendarSelect'
import DCarcassField from './components/DCarcassField'
import DCard from './components/DCard'
import DCardMedia from './components/DCardMedia'
import DCardMenu from './components/DCardMenu'
import DCardText from './components/DCardText'
import DCardTitle from './components/DCardTitle'
import DCheckbox from './components/DCheckbox'
import DClockFace from './components/DClockFace'
import DControlPosition from './components/DControlPosition'
import DControlResize from './components/DControlResize'
import DControlSelection from './components/DControlSelection'
import DData from './components/DData'
import DDataItem from './components/DDataItem'
import DDataPicker from './components/DDataPicker'
import DDate from './components/DDate'
import DDatePicker from './components/DDatePicker'
import DDialog from './components/DDialog'
import DDrop from './components/DDrop'
import DFile from './components/DFile'
import DForm from './components/DForm'
import DIcon from './components/DIcon'
import DIconItem from './components/DIconItem'
import DImages from './components/DImages'
import DImagesBar from './components/DImagesBar'
import DImagesItem from './components/DImagesItem'
import DInput from './components/DInput'
import DList from './components/DList'
import DListItem from './components/DListItem'
import DMask from './components/DMask'
import DMenu from './components/DMenu'
import DMotionAxis from './components/DMotionAxis'
import DMotionCell from './components/DMotionCell'
import DMotionScroll from './components/DMotionScroll'
import DMotionSticky from './components/DMotionSticky'
import DMotionTransform from './components/DMotionTransform'
import DNavigation from './components/DNavigation'
import DPagination from './components/DPagination'
import DProgress from './components/DProgress'
import DRedactionFile from './components/DRedactionFile'
import DRipple from './components/DRipple'
import DScrollbar from './components/DScrollbar'
import DSelect from './components/DSelect'
import DSelectValue from './components/DSelectValue'
import DSkeleton from './components/DSkeleton'
import DSlider from './components/DSlider'
import DSliderPicker from './components/DSliderPicker'
import DSnackbar from './components/DSnackbar'
import DTab from './components/DTab'
import DTable from './components/DTable'
import DTablePicker from './components/DTablePicker'
import DTextarea from './components/DTextarea'
import DTextareaAutosize from './components/DTextareaAutosize'
import DTime from './components/DTime'
import DTimePicker from './components/DTimePicker'
import DTooltip from './components/DTooltip'
import DTop from './components/DTop'
import DWindow from './components/DWindow'

export {
  EventControl,
  Geo,
  GeoDate,
  List,
  Translation,

  addArrayValue,
  createElement,
  createImage,
  forEach,
  frame,
  getClientX,
  getClientY,
  getColumn,
  getExp,
  getFileResult,
  getIdElement,
  getKey,
  getObjectValues,
  getRandom,
  goFunction,
  goScroll,
  isImage,
  isSelected,
  setValues,
  toggleArrayValue,
  toKebabCase,

  useAdmin,
  useAttrs,
  useBinds,
  useClass,
  useClassByFocus,
  useColor,
  useDateTime,
  useField,
  useObjectList,
  useScroll,
  useScrollBorder,
  useStyle,
  useStyleList,
  useWatch,

  DActions,
  DAlert,
  DAppBar,
  DAvatar,
  DBadge,
  DBanner,
  DBottomNavigation,
  DButton,
  DButtonGroup,
  DButtonSelect,
  DCalendar,
  DCalendarMultiple,
  DCalendarSelect,
  DCarcassField,
  DCard,
  DCardMedia,
  DCardMenu,
  DCardText,
  DCardTitle,
  DCheckbox,
  DClockFace,
  DControlPosition,
  DControlResize,
  DControlSelection,
  DData,
  DDataItem,
  DDataPicker,
  DDate,
  DDatePicker,
  DDialog,
  DDrop,
  DFile,
  DForm,
  DIcon,
  DIconItem,
  DImages,
  DImagesBar,
  DImagesItem,
  DInput,
  DList,
  DListItem,
  DMask,
  DMenu,
  DMotionAxis,
  DMotionCell,
  DMotionScroll,
  DMotionSticky,
  DMotionTransform,
  DNavigation,
  DPagination,
  DProgress,
  DRedactionFile,
  DRipple,
  DScrollbar,
  DSelect,
  DSelectValue,
  DSkeleton,
  DSlider,
  DSliderPicker,
  DSnackbar,
  DTab,
  DTable,
  DTablePicker,
  DTextarea,
  DTextareaAutosize,
  DTime,
  DTimePicker,
  DTooltip,
  DTop,
  DWindow
}

export default {
  install (app, options) {
    app.config.globalProperties.$theme = useTheme(options?.theme, options?.options)
    app.config.globalProperties.$translate = Translation
  }
}
