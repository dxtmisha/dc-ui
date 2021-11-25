import { defaultInit } from '@/uses/useDefault'

export const defaultProps = defaultInit('d-select')
export const props = {
  // Values
  icon: undefined,
  iconActive: undefined,
  item: undefined,
  value: undefined,
  name: undefined,
  text: undefined,
  helperMessage: undefined,
  validationMessage: String,
  required: Boolean,

  // Status
  selected: Boolean,
  readonly: Boolean,
  disabled: Boolean,

  // Input
  autofocus: Boolean,
  maxlength: Number,
  attrsInput: Object,
  on: {
    type: Object,
    default: {}
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
