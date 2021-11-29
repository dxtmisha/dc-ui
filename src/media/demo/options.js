import { dataIcon } from '@/media/demo/data/icon'
import { dataPalette } from '@/media/demo/data/palette'

// Subtitle
export const values = { subtitle: 'Values' }
export const status = { subtitle: 'Status' }
export const options = { subtitle: 'Options' }
export const optionsPosition = { subtitle: 'Option: position' }

// Values
export const dot = {}

// Status
export const active = {}
export const disabled = {}
export const hide = {}
export const turn = {}
export const visible = {}

// Options
export const animationHide = {
  list: [
    { value: undefined },
    { value: 'type1' },
    { value: 'type2' }
  ]
}
export const animationShow = {}
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
export const left = {}
export const palette = { list: dataPalette }
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
