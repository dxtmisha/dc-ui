import { defaultInit } from '@/uses/useDefault'

const defaultProps = defaultInit('d-select-value')
export const props = {
  // Values
  value: undefined,
  multiple: Boolean,

  // Status
  disabled: Boolean,

  // Options
  palette: undefined,
  color: undefined,
  tag: undefined,
  appearance: {
    type: String,
    default: defaultProps('appearance', 'chip')
  },
  size: {
    type: String,
    default: defaultProps('size', 'small')
  },
  shape: {
    type: String,
    default: defaultProps('shape', 'pill')
  },
  cancel: {
    type: Boolean,
    default: defaultProps('cancel', true)
  },
  attrsButton: Object,

  // Icon
  iconCancel: {
    type: String,
    default: defaultProps('iconCancel', 'cancel')
  },
  iconBackground: undefined
}
