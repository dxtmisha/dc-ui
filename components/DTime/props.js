import { defaultInit } from '../../uses/useDefault'

const defaultProps = defaultInit('d-time')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  name: undefined,
  text: undefined,
  helperMessage: undefined,
  validationMessage: undefined,

  // Input
  min: undefined,
  max: undefined,
  required: Boolean,
  on: {
    type: Object,
    default: {}
  },
  inputAttrs: Object,

  // Status
  selected: Boolean,
  readonly: Boolean,
  disabled: Boolean,

  // Field
  locales: undefined,
  format: undefined,
  palette: undefined,
  color: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  align: undefined,
  adaptive: undefined,
  cancel: undefined,
  ripple: undefined,
  fieldAttrs: undefined,

  // Picker
  pickerAttrs: undefined,

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconArrowDown: {
    type: String,
    default: defaultProps('iconArrowDown', 'arrow_drop_down')
  }
}
