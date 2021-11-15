import { defaultInit } from '@/uses/useDefault'
import { palette } from '@/tool/use/useColor'

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
  disabled: Boolean,

  // Options
  palette,
  color: String,
  groupShow: {
    type: Boolean,
    default: defaultProps('groupShow')
  },

  // Item
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
  axis: undefined,
  width: {
    type: String,
    default: defaultProps('width')
  },
  indent: undefined
}
