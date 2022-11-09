import { defaultInit } from '../../uses/useDefault'

const defaultProps = defaultInit('d-phone')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  modelValue: undefined,
  name: undefined,
  text: undefined,
  helperMessage: undefined,
  validationMessage: undefined,
  validationCode: {
    type: Object,
    default: defaultProps('validationCode', {})
  },

  // Input
  autofocus: Boolean,
  placeholder: String,
  required: Boolean,
  on: {
    type: Object,
    default: {}
  },
  inputAttrs: undefined,

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
  cancel: undefined,
  cancelShowAlways: undefined,
  ripple: undefined,
  fieldAttrs: undefined,
  iconArrowFlag: undefined,

  // Mask
  filling: {
    type: Boolean,
    default: defaultProps('filling')
  },
  maskAttrs: undefined
}
