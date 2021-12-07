import { dataAdaptive } from '@/media/demo/data/adaptive'
import { dataDelay } from '@/media/demo/data/delay'
import { dataIcon } from '@/media/demo/data/icon'
import { dataLocales } from '@/media/demo/data/locales'
import { dataNavigationRail } from '@/media/demo/data/navigationRail'
import { dataPalette } from '@/media/demo/data/palette'
import { helper1, quote1, validation1 } from '@/media/demo/data/text'

// Subtitle
export const values = { subtitle: 'Values' }
export const status = { subtitle: 'Status' }
export const options = { subtitle: 'Options' }
export const optionButton = { subtitle: 'Option: button' }
export const optionField = { subtitle: 'Option: field' }
export const optionIcon = { subtitle: 'Option: icon' }
export const optionInput = { subtitle: 'Option: input' }
export const optionItem = { subtitle: 'Option: item' }
export const optionList = { subtitle: 'Option: list' }
export const optionMask = { subtitle: 'Option: mask' }
export const optionMenu = { subtitle: 'Option: menu' }
export const optionPosition = { subtitle: 'Option: position' }
export const optionSelect = { subtitle: 'Option: select' }
export const optionWindow = { subtitle: 'Option: window' }

// Values
export const ajax = { message: '/demo/request/menu.json' }
export const backgroundColor = { message: '244,67,54' }
export const cache = {}
export const description = { message: quote1 }
export const dot = {}
export const helperMessage = { message: helper1 }
export const marks = {
  message: [
    { value: 0 },
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    {
      text: '50%',
      value: 50
    },
    {
      text: 'x2 / 100%',
      value: 100,
      mark: 60
    },
    {
      text: 'x4 / 200%',
      value: 200,
      mark: 80
    },
    {
      text: 'x5 / 250%',
      value: 250,
      mark: 90
    },
    {
      text: 'x10 / 2500%',
      value: 250,
      mark: 100
    }
  ]
}
export const mask = {
  default: '**** ****',
  list: [
    { value: undefined },
    { value: '+7 (***) ***-**-**' },
    { value: '**** ****' }
  ]
}
export const multiple = {}
export const prefix = { message: 'pr' }
export const required = {}
export const suffix = { message: 'sf' }
export const text = {
  default: true,
  message: 'Interactive demo'
}
export const textShort = {
  default: true,
  message: 'Demo'
}
export const validationMessage = { message: validation1 }
export const underline = { message: 'act|pro' }

// Status
export const action = {}
export const active = {}
export const click = { default: true }
export const disabled = {}
export const disabledBottom = {}
export const disabledLeft = {}
export const disabledNext = {}
export const disabledPrevious = {}
export const disabledRight = {}
export const disabledTop = {}
export const dragged = {}
export const filled = {}
export const focus = {}
export const hide = {}
export const progress = {}
export const readonly = {}
export const open = {}
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
export const arrow = {}
export const autoClose = { default: true }
export const background = {}
export const border = {}
export const bottom = {}
export const cancel = { default: true }
export const counter = {}
export const delay = { list: dataDelay }
export const dense = {}
export const left = {}
export const locales = { list: dataLocales }
export const lowercase = {}
export const magnet = {}
export const max = { message: 8 }
export const maxlength = { message: 8 }
export const min = { message: 2 }
export const minimumDistance = { message: 20 }
export const minlength = { message: 2 }
export const navigationRail = { list: dataNavigationRail }
export const palette = { list: dataPalette }
export const pattern = { message: '[A-Z]{1}[a-z]{3,}' }
export const persistent = {}
export const placeholder = { message: 'Placeholder' }
export const right = {}
export const ripple = { default: true }
export const scrollHide = {}
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
export const step = {
  list: [
    { value: undefined },
    { value: 1 },
    { value: 2 },
    { value: 4 },
    { value: 8 }
  ]
}
export const top = {}
export const vertical = {}
export const visibleMask = { default: true }

// Icon
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
