import { defaultInit, validator, validatorAdaptive, validatorShape, validatorSize } from '@/uses/useDefault'
import { palette } from '@/uses/useColors'

const defaultProps = defaultInit('d-button')

export const appearance = {
  type: String,
  default: defaultProps('appearance'),
  validator: validator([
    'text',
    'text-color',
    'outlined',
    'outlined-color',
    'outlined-contained',
    'contained',
    'fab',
    'chip',
    'chip-color',
    'chip-outlined'
  ])
}
export const adaptive = {
  type: String,
  default: 'basic',
  validator: validatorAdaptive
}
export const lowercase = {
  type: Boolean,
  default: defaultProps('lowercase')
}
export const ripple = {
  type: Boolean,
  default: defaultProps('ripple', true)
}
export const shape = {
  type: String,
  default: defaultProps('shape'),
  validator: validatorShape
}
export const size = {
  type: String,
  validator: validatorSize
}
export const tag = {
  type: String,
  default: 'button'
}

export const props = {
  // Values
  icon: undefined,
  iconActive: undefined,
  iconTrailing: undefined,
  item: undefined,
  value: undefined,
  text: [Number, String],

  // Status
  selected: Boolean,
  turn: Boolean,
  progress: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  iconHide: undefined,

  // Options
  palette,
  color: String,
  tag,
  appearance,
  size,
  shape,
  adaptive,
  lowercase,
  dense: Boolean,
  ripple,

  // Icon
  iconReadonly: Boolean,
  iconAnimationShow: Boolean,
  iconBackground: Boolean
}
