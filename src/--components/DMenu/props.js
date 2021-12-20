import { defaultInit } from '@/uses/useDefault'

const defaultProps = defaultInit('d-menu')
export const props = {
  // Values
  list: undefined,
  listInit: {
    type: Boolean,
    default: true
  },
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
  multiple: Boolean,
  maxlength: Number,

  // Status
  selected: undefined,
  readonly: Boolean,
  disabled: Boolean,

  // Item
  palette: undefined,
  color: undefined,
  tag: undefined,
  appearance: undefined,
  size: {
    type: String,
    default: defaultProps('size')
  },
  shape: {
    type: String,
    default: defaultProps('shape')
  },
  ripple: undefined,

  // Window
  width: {
    type: String,
    default: defaultProps('width', '0px')
  },
  axis: undefined,
  indent: undefined
}
