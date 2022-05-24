import { defaultInit } from '../../uses/useDefault'

const defaultProps = defaultInit('d-icon-item')
export const props = {
  // Values
  icon: [File, Object, String],
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
  urlIcon: {
    type: String,
    default: defaultProps('urlIcon', '/icons/')
  },

  // Status
  disabled: Boolean,
  hide: Boolean
}
