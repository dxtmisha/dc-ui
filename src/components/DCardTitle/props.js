import { defaultInit } from '@/uses/useDefault'

const defaultProps = defaultInit('d-card-title')
export const props = {
  // Values
  title: String,
  description: String,
  menu: [Array, Object],
  href: String,

  // Status
  active: Boolean,

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconSize: { default: defaultProps('iconSize', 'medium') },
  iconBackground: { default: defaultProps('iconBackground', true) }
}
