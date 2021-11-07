import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-progress')

export const bottom = {
  type: Boolean,
  default: defaultProps('bottom')
}
export const delay = {
  type: [Number, String],
  default: defaultProps('delay', 400)
}
export const indeterminate = {
  type: String,
  default: defaultProps('indeterminate', 'type1'),
  validator: validator([
    'type1',
    'type2'
  ])
}
export const max = {
  type: Number,
  default: 100
}
export const type = {
  type: String,
  default: 'linear',
  validator: validator([
    'linear',
    'circular'
  ])
}
export const value = {
  type: Number,
  default: null
}

export const props = {
  // Values
  value,
  max,

  // Status
  visible: Boolean,

  // Options
  type,
  indeterminate,
  delay,
  bottom
}
