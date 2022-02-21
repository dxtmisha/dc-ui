import { defaultInit } from '../../uses/useDefault'

const defaultProps = defaultInit('d-data')
export const props = {
  // Values
  headers: undefined,
  headersInit: {
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
  items: [Array, Object],
  underline: String,
  parameters: Array,

  // Status
  selected: [Array, Number, String],
  open: [Array, Number, String],

  // Options
  palette: undefined,
  color: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  adaptive: undefined,
  sticky: {
    type: Boolean,
    default: defaultProps('sticky', false)
  },
  dense: undefined,
  column: undefined,
  border: undefined,

  // Icon
  iconBackground: undefined,
  iconAttrs: undefined,

  // Position
  positionClass: String,
  selectionClass: String
}
