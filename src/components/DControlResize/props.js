import { defaultInit } from '@/uses/useDefault'

const defaultProps = defaultInit('d-control-resize')
export const props = {
  // Values
  value: {
    type: Array,
    default: undefined,
    validator (value) {
      return value.length === 4
    }
  },
  min: {
    type: Number,
    default: defaultProps('min', 8)
  },

  // Status
  disabled: Boolean,
  disabledTop: Boolean,
  disabledRight: Boolean,
  disabledBottom: Boolean,
  disabledLeft: Boolean
}
