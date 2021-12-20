import { defaultInit } from '@/--uses/useDefault'

const defaultProps = defaultInit('d-time')
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
  locales: undefined,
  format: undefined,
  min: undefined,
  max: undefined,
  required: Boolean,
  attrsInput: Object,

  // Field
  text: undefined,
  helperMessage: undefined,
  validationMessage: undefined,
  palette: undefined,
  color: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  align: undefined,
  adaptive: undefined,
  cancel: {
    type: Boolean,
    default: defaultProps('cancel', true)
  },

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconArrowDown: {
    type: String,
    default: defaultProps('iconArrowDown', 'arrow_drop_down')
  }
}
