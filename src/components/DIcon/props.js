import { validator, validatorShape } from '@/uses/useDefault'

export const animationHide = {
  type: String,
  validator: validator([
    'type1',
    'type2'
  ])
}
export const shape = {
  type: String,
  validator: validatorShape()
}
export const size = {
  type: String,
  validator: validator([
    'dynamic',
    'compact',
    'small',
    'medium',
    'large',
    'rectangle'
  ])
}

export const props = {
  // Values
  icon: [File, String],
  iconActive: [File, String],
  // Status
  active: Boolean,
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  // Options
  size,
  shape,
  animationHide,
  animationShow: Boolean,
  background: Boolean
}
