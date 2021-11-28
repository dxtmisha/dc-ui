import { defaultInit } from '@/--uses/useDefault'

export const defaultProps = defaultInit('d-button-select')
export const props = {
  // Values
  icon: undefined,
  iconActive: undefined,
  item: undefined,
  value: undefined,
  name: undefined,
  text: undefined,

  // Status
  selected: Boolean,
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

  // Button
  tag: undefined,
  appearance: {
    type: String,
    default: defaultProps('appearance', 'chip')
  },
  size: undefined,
  shape: undefined,
  align: {
    type: String,
    default: defaultProps('align', 'left')
  },
  adaptive: undefined,
  lowercase: undefined,
  dense: undefined,
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  },

  // Menu
  menuAppearance: undefined,
  menuSize: undefined,
  menuShape: undefined,
  menuWidth: {
    type: String,
    default: defaultProps('menuWidth', '0px')
  },

  // Icon
  iconArrowDown: {
    type: String,
    default: defaultProps('iconArrowDown', 'arrow_drop_down')
  },
  iconBackground: undefined
}
