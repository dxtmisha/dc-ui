import { defaultInit, validator, validatorShape } from '@/uses/useDefault'

const defaultProps = defaultInit('d-carcass-field')
export const props = {
  // Values
  text: String,
  value: undefined,
  isValue: Boolean,
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
  },
  prefix: [Number, String],
  suffix: [Number, String],
  helperMessage: String,
  validationMessage: String,
  counter: Boolean,
  counterValue: Number,
  maxlength: Number,
  required: Boolean,

  // Status
  focus: Boolean,
  selected: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  disabledPrevious: Boolean,
  disabledNext: Boolean,

  // Options
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
  adaptive: {
    type: String,
    default: 'full',
    validator: validator([
      'full',
      'block'
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
  arrow: Boolean,
  cancel: {
    type: Boolean,
    default: defaultProps('cancel', true)
  },
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  }
}
