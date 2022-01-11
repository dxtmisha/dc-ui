import { defaultInit } from '@/uses/useDefault'

const defaultProps = defaultInit('d-icon-item')
export const props = {
  // Values
  icon: [File, String],
  coordinator: Array,
  zoom: {
    type: String,
    default: defaultProps('zoom', null)
  },
  x: {
    type: String,
    default: null
  },
  y: {
    type: String,
    default: null
  },

  // Status
  disabled: Boolean,
  hide: Boolean
}
