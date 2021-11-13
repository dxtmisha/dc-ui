import { defaultInit } from '@/uses/useDefault'
import { palette } from '@/uses/useColors'

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

  // Options
  palette,
  color: String,
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
  groupShow: {
    type: Boolean,
    default: defaultProps('groupShow')
  },
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  },

  // Window
  axis: {
    type: String,
    default: defaultProps('axis')
  },
  width: {
    type: String,
    default: defaultProps('width')
  },
  indent: {
    type: Number,
    default: defaultProps('indent', 4)
  }
}
