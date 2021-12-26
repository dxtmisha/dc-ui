import { defaultInit } from '@/uses/useDefault'

const defaultProps = defaultInit('d-card-media')
export const props = {
  // Values
  href: String,

  // Status
  active: Boolean,

  // Icon
  thumbnail: [File, String],
  iconCheck: { default: defaultProps('iconCheck', 'check_circle') }
}
