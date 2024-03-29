import { defaultInit, validator } from '../../uses/useDefault'

const defaultProps = defaultInit('d-input')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  modelValue: undefined,
  mask: undefined,
  name: undefined,
  text: undefined,
  prefix: undefined,
  suffix: undefined,
  helperMessage: undefined,
  validationMessage: undefined,
  validationCode: {
    type: Object,
    default: defaultProps('validationCode', {})
  },

  // Input
  autocomplete: {
    type: String,
    default: 'off'
  },
  autofocus: Boolean,
  inputmode: String,
  step: Number,
  min: [Number, String],
  max: [Number, String],
  minlength: Number,
  maxlength: Number,
  pattern: String,
  placeholder: String,
  required: Boolean,
  spellcheck: Boolean,
  on: {
    type: Object,
    default: {}
  },
  inputMatch: String,
  inputMatchText: String,
  inputAttrs: undefined,

  // Status
  selected: Boolean,
  readonly: Boolean,
  disabled: Boolean,

  // Options
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
  locales: undefined,
  palette: undefined,
  color: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  align: undefined,
  adaptive: undefined,
  arrow: undefined,
  counter: undefined,
  cancel: undefined,
  cancelShowAlways: undefined,
  ripple: undefined,
  fieldAttrs: undefined,

  // Mask
  maskVisible: { default: defaultProps('maskVisible', true) },
  maskAttrs: undefined,

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconTrailing: undefined,
  iconVisibility: { default: defaultProps('iconVisibility', 'visibility') },
  iconVisibilityOff: { default: defaultProps('iconVisibilityOff', 'visibility_off') }
}
