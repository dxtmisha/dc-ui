import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-input')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  name: undefined,
  on: {
    type: Object,
    default: {}
  },

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
      'url'
    ])
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  autofocus: Boolean,
  inputmode: String,
  step: Number,
  min: Number,
  max: Number,
  minlength: Number,
  maxlength: Number,
  pattern: String,
  placeholder: String,
  required: Boolean,
  spellcheck: Boolean,
  attrsInput: Object,

  // Mask
  mask: undefined,
  locales: undefined,
  visibleMask: {
    type: Boolean,
    default: defaultProps('visibleMask', true)
  },

  // Field
  text: undefined,
  prefix: undefined,
  suffix: undefined,
  helperMessage: undefined,
  validationMessage: undefined,
  palette: undefined,
  color: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  align: undefined,
  adaptive: undefined,
  arrow: undefined,
  counter: undefined,
  cancel: {
    type: Boolean,
    default: defaultProps('cancel', true)
  },

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconTrailing: undefined
}
