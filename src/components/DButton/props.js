import { defaultInit, validator, validatorAdaptive, validatorShape, validatorSize } from '@/uses/useDefault'
import { palette } from '@/uses/useColors'

const defaultProps = defaultInit('d-button')
export const props = {
  // Values
  icon: undefined,
  iconActive: undefined,
  iconTrailing: undefined,
  badge: [Number, Object, String],
  badgeIcon: undefined,
  item: undefined,
  value: undefined,
  text: [Number, String],

  // Status
  selected: Boolean,
  turn: Boolean,
  dragged: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  progress: Boolean,

  // Options
  palette,
  color: String,
  tag: {
    type: String,
    default: 'button'
  },
  appearance: {
    type: String,
    default: defaultProps('appearance', 'contained'),
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
  },
  size: {
    type: String,
    default: defaultProps('size'),
    validator: validatorSize
  },
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validatorShape
  },
  adaptive: {
    type: String,
    validator: validatorAdaptive
  },
  lowercase: {
    type: Boolean,
    default: defaultProps('lowercase')
  },
  dense: Boolean,
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  },

  // Icon
  iconReadonly: Boolean,
  iconHide: Boolean,
  iconAnimationShow: Boolean,
  iconBackground: Boolean
}
