import { defaultInit, validator } from '@/--uses/useDefault'

const defaultProps = defaultInit('d-progress')
export const props = {
  // Values
  value: {
    type: Number,
    default: null
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
  max: {
    type: Number,
    default: 100
  },
  delay: {
    type: [Number, String],
    default: defaultProps('delay', 400)
  },
  bottom: {
    type: Boolean,
    default: defaultProps('bottom')
  }
}
