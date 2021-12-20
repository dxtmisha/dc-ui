import { defaultInit, validator, validatorShape } from '@/--uses/useDefault'
import { palette } from '@/--uses/useColor'

const defaultProps = defaultInit('d-carcass-field')
export const props = {
  // Values
  text: String,
  prefix: [Number, String],
  suffix: [Number, String],
  helperMessage: String,
  validationMessage: String,
  counterValue: Number,
  maxlength: Number,
  required: Boolean,

  // Status
  focus: Boolean,
  active: Boolean,
  filled: Boolean,
  selected: Boolean,
  turn: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  disabledPrevious: Boolean,
  disabledNext: Boolean,
  progress: Boolean,

  // Options
  palette,
  color: String,
  appearance: {
    type: String,
    default: defaultProps('appearance', 'filled'),
    validator: validator([
      'basic',
      'classic',
      'filled',
      'outlined'
    ])
  },
  size: {
    type: String,
    default: defaultProps('size'),
    validator: validator([
      'dense',
      'small',
      'medium',
      'large',
      'interactive-display'
    ])
  },
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validatorShape
  },
  align: {
    type: String,
    default: defaultProps('align'),
    validator: validator([
      'center',
      'left',
      'right'
    ])
  },
  adaptive: {
    type: String,
    default: 'basic',
    validator: validator([
      'basic',
      'block'
    ])
  },
  arrow: Boolean,
  counter: Boolean,
  cancel: {
    type: Boolean,
    default: defaultProps('cancel', true)
  },
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  },

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconTrailing: undefined,
  iconChevronLeft: {
    type: String,
    default: defaultProps('iconChevronLeft', 'chevron_left')
  },
  iconChevronRight: {
    type: String,
    default: defaultProps('iconChevronRight', 'chevron_right')
  },
  iconCancel: {
    type: String,
    default: defaultProps('iconCancel', 'cancel')
  }
}
