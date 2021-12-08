import { defaultInit, validatorAxis } from '@/uses/useDefault'

const defaultProps = defaultInit('d-button-group')
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
  multiple: Boolean,
  maxlength: Number,

  // Status
  selected: undefined,
  readonly: undefined,
  disabled: Boolean,

  // Options
  axis: {
    type: String,
    default: 'x',
    validator: validatorAxis
  },
  landscape: Boolean,

  // Button
  palette: undefined,
  color: undefined,
  appearance: {
    default: defaultProps('appearance', 'outlined')
  },
  size: {
    default: defaultProps('size')
  },
  shape: {
    default: defaultProps('shape')
  },
  adaptive: {
    default: defaultProps('adaptive', 'auto')
  },
  lowercase: {
    default: defaultProps('lowercase', true)
  },
  dense: {
    default: defaultProps('dense')
  },
  ripple: {
    default: defaultProps('ripple', true)
  },
  attrsButton: Object,

  // Menu
  attrsMenu: Object
}
