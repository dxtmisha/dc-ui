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

  // Options
  palette: undefined,
  color: undefined,

  // Input
  list: undefined,
  listInit: undefined,
  translation: {
    type: Array,
    default: defaultProps('translation')
  },
  keyText: {
    type: String,
    default: defaultProps('keyText', 'text')
  },
  keyValue: {
    type: String,
    default: defaultProps('keyValue', 'value')
  },
  ajax: String,
  request: Object,
  cache: Boolean,
  maxlength: Number,
  multiple: Boolean,

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
  },

  // Menu
  menuAppearance: undefined,
  menuSize: undefined,
  menuShape: undefined,
  menuWidth: undefined,

  // Icon
  iconArrowDown: {
    type: String,
    default: defaultProps('iconArrowDown', 'arrow_drop_down')
  }
}
