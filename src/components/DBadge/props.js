import { defaultInit, validator, validatorShape, validatorSize } from '@/uses/useDefault'
import { palette } from '@/uses/useColors'

const defaultProps = defaultInit('d-progress')

export const alignment = {
  type: String,
  default: 'overlap',
  validator: validator([
    'basic',
    'overlap',
    'static'
  ])
}
export const max = {
  type: Number,
  default: defaultProps('max', 99)
}
export const outline = {
  type: String,
  default: defaultProps('outlined', null)
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

export const props = {
  // Values
  icon: String,
  dot: Boolean,
  value: undefined,
  max,

  // Status
  disabled: Boolean,
  hide: Boolean,

  // Options
  palette,
  color: String,
  alignment,
  size,
  shape,
  outline,

  // Position
  left: Boolean,
  bottom: Boolean
}
