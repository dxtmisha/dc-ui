import { defaultInit, validator } from './../../uses/useDefault'

const defaultProps = defaultInit('d-progress')
export const props = {
  // Values
  value: {
    type: Number,
    default: null
  },

  // Input
  max: {
    type: Number,
    default: 100
  },

  // Status
  visible: Boolean,

  // Options
  type: {
    type: String,
    default: 'linear',
    validator: validator([
      'linear',
      'circular'
    ])
  },
  indeterminate: {
    type: String,
    default: defaultProps('indeterminate', 'type1'),
    validator: validator([
      'type1',
      'type2'
    ])
  },
  delay: {
    type: [Number, String],
    default: defaultProps('delay', 400)
  },

  // Position
  bottom: {
    type: Boolean,
    default: defaultProps('bottom')
  }
}
