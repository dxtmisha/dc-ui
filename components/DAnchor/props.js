import { defaultInit, validator } from '../../uses/useDefault'

const defaultProps = defaultInit('d-anchor')
export const props = {
  // Values
  name: String,
  text: String,

  // Options
  copy: {
    type: Boolean,
    default: defaultProps('copy', true)
  },
  shift: {
    type: Number,
    default: defaultProps('shift')
  },
  behavior: {
    type: String,
    default: defaultProps('behavior', 'smooth'),
    validator: validator([
      'auto',
      'smooth'
    ])
  },
  block: {
    type: String,
    default: defaultProps('block', 'start'),
    validator: validator([
      'start',
      'center',
      'end',
      'nearest'
    ])
  },
  inline: {
    type: String,
    default: defaultProps('inline', 'nearest'),
    validator: validator([
      'start',
      'center',
      'end',
      'nearest'
    ])
  }
}
