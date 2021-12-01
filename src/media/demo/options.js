import { dataAdaptive } from '@/media/demo/data/adaptive'
import { dataDelay } from '@/media/demo/data/delay'
import { dataIcon } from '@/media/demo/data/icon'
import { dataLocales } from '@/media/demo/data/locales'
import { dataNavigationRail } from '@/media/demo/data/navigationRail'
import { dataPalette } from '@/media/demo/data/palette'
import { quote1 } from '@/media/demo/data/text'

// Subtitle
export const values = { subtitle: 'Values' }
export const status = { subtitle: 'Status' }
export const options = { subtitle: 'Options' }
export const optionsIcon = { subtitle: 'Option: icon' }
export const optionsItem = { subtitle: 'Option: item' }
export const optionsPosition = { subtitle: 'Option: position' }
export const optionsWindow = { subtitle: 'Option: window' }

// Values
export const ajax = { message: '/demo/request/menu.json' }
export const backgroundColor = { message: '244,67,54' }
export const cache = {}
export const description = { message: quote1 }
export const dot = {}
export const mask = {
  default: '**** ****',
  list: [
    { value: undefined },
    { value: '+7 (***) ***-**-**' },
    { value: '**** ****' }
  ]
}
export const maxlength = { message: 4 }
export const multiple = {}
export const prefix = { message: 'pr' }
export const suffix = { message: 'sf' }
export const text = {
  default: true,
  message: 'Interactive demo'
}
export const textShort = {
  default: true,
  message: 'Demo'
}
export const underline = { message: 'act|pro' }

// Status
export const active = {}
export const disabled = {}
export const dragged = {}
export const focus = {}
export const hide = {}
export const progress = {}
export const readonly = {}
export const selected = {}
export const turn = {}
export const visible = {}

// Options
export const adaptive = { list: dataAdaptive }
export const align = {
  list: [
    { value: undefined },
    { value: 'center' },
    { value: 'left' },
    { value: 'right' }
  ]
}
export const animationHide = {
  list: [
    { value: undefined },
    { value: 'type1' },
    { value: 'type2' }
  ]
}
export const axis = {
  list: [
    { value: undefined },
    { value: 'x' },
    { value: 'y' }
  ]
}
export const animationShow = {}
export const autoClose = { default: true }
export const background = {}
export const border = {}
export const bottom = {}
export const cancel = { default: true }
export const delay = { list: dataDelay }
export const dense = {}
export const left = {}
export const locales = { list: dataLocales }
export const lowercase = {}
export const navigationRail = { list: dataNavigationRail }
export const palette = { list: dataPalette }
export const persistent = {}
export const ripple = { default: true }
export const shape = {
  list: [
    { value: undefined },
    { value: 'basic' },
    { value: 'rounded' },
    { value: 'pill' },
    { value: 'tile' }
  ]
}
export const size = {
  list: [
    { value: undefined },
    { value: 'small' },
    { value: 'medium' },
    { value: 'large' }
  ]
}
export const visibleMask = { default: true }

// Icons
export const icon = {
  default: 'lock_open',
  list: dataIcon
}
export const iconActive = {
  default: 'lock',
  list: dataIcon
}
export const iconTrailing = {
  default: 'arrow_drop_down',
  list: dataIcon
}
export const thumbnail = { list: dataIcon }
export const iconAnimationShow = {}
export const iconBackground = {}
export const iconHide = {}
export const iconReadonly = {}
