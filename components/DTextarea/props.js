import { defaultInit } from '../../uses/useDefault'

const defaultProps = defaultInit('d-textarea')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  modelValue: undefined,
  name: undefined,
  text: undefined,
  helperMessage: undefined,
  validationMessage: String,
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
  minlength: Number,
  maxlength: Number,
  placeholder: String,
  required: Boolean,
  spellcheck: Boolean,
  on: {
    type: Object,
    default: {}
  },
  inputAttrs: Object,

  // Status
  selected: Boolean,
  readonly: Boolean,
  disabled: Boolean,

  // Options
  palette: undefined,
  color: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  adaptive: undefined,
  counter: undefined,
  fieldAttrs: undefined,

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconTrailing: undefined
}
