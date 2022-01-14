import { defaultInit } from '@/uses/useDefault'

const defaultProps = defaultInit('d-data')
export const props = {
  // Values
  items: [Array, Object],
  translation: {
    type: Array,
    default: defaultProps('translation')
  },
  keyText: {
    type: String,
    default: defaultProps('keyText', 'text')
  },
  underline: String,
  parameters: Array,

  // Status
  selected: [Array, String],

  // Options
  palette: undefined,
  color: undefined,
  appearance: undefined,
  size: undefined,
  shape: undefined,
  adaptive: undefined,
  dense: undefined,
  column: undefined,
  border: undefined,

  // Icon
  iconBackground: undefined,
  iconAttrs: undefined
}
