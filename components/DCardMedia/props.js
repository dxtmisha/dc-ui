import { defaultInit } from '../../uses/useDefault'

const defaultProps = defaultInit('d-card-media')
export const props = {
  // Values
  href: String,
  coordinator: undefined,
  zoom: undefined,
  x: undefined,
  y: undefined,

  // Status
  active: Boolean,

  // Options
  aspectRatio: {
    type: String,
    default: defaultProps('aspectRatio')
  },

  // Icon
  thumbnail: [File, String],
  iconCheck: { default: defaultProps('iconCheck', 'check_circle') }
}
