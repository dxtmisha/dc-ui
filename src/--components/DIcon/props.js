import { validator, validatorShape } from '@/uses/useDefault'

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
  size: {
    type: String,
    validator: validator([
      'dynamic',
      'compact',
      'small',
      'medium',
      'large',
      'rectangle'
    ])
  },
  shape: {
    type: String,
    validator: validatorShape
  },
  animationHide: {
    type: String,
    validator: validator([
      'type1',
      'type2'
    ])
  },
  animationShow: Boolean,
  background: Boolean
}
