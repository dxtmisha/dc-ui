import { defaultInit, validator } from '@/--uses/useDefault'

const defaultProps = defaultInit('d-card')
export const props = {
  // Values
  text: String,
  description: String,
  backgroundColor: {
    type: String,
    default: null
  },

  // Status
  active: Boolean,
  selected: Boolean,
  hide: Boolean,
  dragged: Boolean,

  // Options
  appearance: {
    type: String,
    default: defaultProps('appearance', 'basic'),
    validator: validator([
      'basic',
      'outlined'
    ])
  },
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validator([
      'basic',
      'rounded',
      'tile'
    ])
  },

  // Icon
  thumbnail: undefined,
  icon: undefined,
  iconActive: undefined,
  iconBackground: Boolean
}
