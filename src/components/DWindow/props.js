import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-window')

export const adaptive = {
  type: String,
  default: defaultProps('adaptive', 'auto'),
  validator: validator([
    'auto',
    'auto-small',
    'auto-medium',
    'auto-large',
    'auto-extra',
    'auto-desktop',
    'menu',
    'modal'
  ])
}
export const autoClose = {
  type: Boolean,
  default: true
}
export const axis = {
  type: String,
  default: 'y',
  validator: validator([
    'x',
    'y',
    'on'
  ])
}
export const indent = {
  type: Number,
  default: defaultProps('indent', 4)
}
export const shape = {
  type: String,
  default: defaultProps('shape'),
  validator: validator([
    'basic',
    'rounded',
    'tile'
  ])
}
export const width = {
  type: String,
  default: defaultProps('width', null)
}

export const props = {
  // Status
  open: Boolean,
  disabled: Boolean,

  // Options
  shape,
  axis,
  width,
  indent,
  adaptive,
  fullscreen: Boolean,
  persistent: Boolean,
  autoClose,
  bodyWidthAuto: Boolean
}
