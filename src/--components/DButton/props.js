import {
  defaultInit,
  validator,
  validatorAdaptive,
  validatorAlign,
  validatorShape,
  validatorSize
} from '@/uses/useDefault'
import { palette } from '@/--uses/useColor'

const defaultProps = defaultInit('d-button')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  text: [Number, String],
  badge: [Number, Object, String],

  // Status
  active: Boolean,
  selected: Boolean,
  turn: Boolean,
  dragged: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  hide: Boolean,
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
  align: {
    type: String,
    default: defaultProps('align'),
    validator: validatorAlign
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
  ellipsis: {
    type: Boolean,
    default: defaultProps('ellipsis', true)
  },
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  },

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconTrailing: undefined,
  iconTurn: undefined,
  iconReadonly: Boolean,
  iconHide: undefined,
  iconAnimationShow: undefined,
  iconBackground: undefined
}
