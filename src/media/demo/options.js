import { dataIcon } from '@/media/demo/data/icon'
import { dataPalette } from '@/media/demo/data/palette'

// Subtitle
export const values = { subtitle: 'Values' }
export const status = { subtitle: 'Status' }
export const options = { subtitle: 'Options' }
export const optionsIcon = { subtitle: 'Option: icon' }
export const optionsPosition = { subtitle: 'Option: position' }

// Values
export const dot = {}
export const text = {
  default: true,
  message: 'Interactive demo'
}

// Status
export const active = {}
export const disabled = {}
export const dragged = {}
export const hide = {}
export const progress = {}
export const readonly = {}
export const selected = {}
export const turn = {}
export const visible = {}

// Options
export const adaptive = {
  list: [
    { value: undefined },
    { value: 'auto' },
    { value: 'auto-small' },
    { value: 'auto-medium' },
    { value: 'auto-large' },
    { value: 'auto-extra' },
    { value: 'auto-desktop' },
    { value: 'basic' },
    { value: 'icon' },
    { value: 'block' }
  ]
}
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
export const animationShow = {}
export const autoClose = { default: true }
export const background = {}
export const bottom = {}
export const delay = {
  list: [
    { value: undefined },
    {
      text: '0s',
      value: 0
    },
    {
      text: '400s',
      value: 400
    },
    {
      text: '800s',
      value: 800
    },
    {
      text: '1600s',
      value: 1600
    },
    {
      text: '3200s',
      value: 3200
    }
  ]
}
export const dense = {}
export const left = {}
export const lowercase = {}
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
