import { defaultInit, validator, validatorShape } from '@/uses/useDefault'

const defaultProps = defaultInit('d-clock-face')
export const props = {
  // Values
  hour: {
    type: Number,
    default: -1
  },
  minute: {
    type: Number,
    default: -1
  },
  second: {
    type: Number,
    default: -1
  },
  select: {
    type: Number,
    default: -1
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 60
  },

  // Options
  type: {
    type: String,
    default: defaultProps('type', '12'),
    validator: validator([
      '12',
      '24',
      'minute',
      'second'
    ])
  },
  shape: {
    type: String,
    default: defaultProps('shape', 'pill'),
    validator: validatorShape
  }
}
