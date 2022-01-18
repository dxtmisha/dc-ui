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
  ajax: [Function, String],
  request: Object,
  cache: Boolean,

  // Input
  maxlength: Number,
  multiple: Boolean,

  // Status
  selected: undefined,
  readonly: Boolean,
  disabled: Boolean,

  // Item
  palette: undefined,
  color: undefined,
  tag: undefined,
  appearance: undefined,
  size: { default: defaultProps('size') },
  shape: { default: defaultProps('shape') },
  ripple: undefined,
  itemAttrs: undefined,

  // Window
  windowWidth: { default: defaultProps('windowWidth', '0px') },
  windowShape: { default: defaultProps('windowShape') },
  windowAxis: { default: defaultProps('windowAxis') },
  windowIndent: { default: defaultProps('windowIndent') },
  windowInDom: { default: defaultProps('windowInDom') },
  windowAttrs: undefined
}
