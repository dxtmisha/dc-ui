import { defaultInit } from '@/--uses/useDefault'

const defaultProps = defaultInit('d-card-title')
export const props = {
  // Values
  text: String,
  description: String,

  // Status
  active: Boolean,

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconBackground: {
    type: Boolean,
    default: defaultProps('iconBackground', true)
  }
}
