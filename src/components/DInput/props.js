import { defaultInit, validator } from '@/uses/useDefault'

export const defaultProps = defaultInit('d-input')
export const props = {
  // Values
  icon: undefined,
  iconActive: undefined,
  iconTrailing: undefined,
  item: undefined,
  value: undefined,
  name: undefined,
  text: undefined,
  prefix: undefined,
  suffix: undefined,
  helperMessage: undefined,
  validationMessage: String,
  required: Boolean,

  // Status
  selected: Boolean,
  readonly: Boolean,
  disabled: Boolean,

  // Input
  type: {
    type: String,
    validator: validator([
      'date',
      'datetime',
      'email',
      'month',
      'number',
      'password',
      'search',
      'tel',
      'text',
      'time',
      'url',
      'week'
    ])
  },
  autocomplete: String,
  autofocus: Boolean,
  inputmode: String,
  min: Number,
  max: Number,
  minlength: Number,
  maxlength: Number,
  pattern: String,
  placeholder: String,
  spellcheck: Boolean,
  step: Number,
  attrsInput: Object,
  on: {
    type: Object,
    default: {}
  },

  // Mask
  mask: undefined,
  locales: undefined,
  visibleMask: {
    type: Boolean,
    default: defaultProps('visibleMask', true)
  },

  // Field
  arrow: Boolean,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  align: undefined,
  adaptive: undefined,
  counter: Boolean,
  cancel: {
    type: Boolean,
    default: defaultProps('cancel', true)
  },
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  }
}
