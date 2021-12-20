import { defaultInit, validator, validatorShape, validatorSize } from '@/uses/useDefault'
import { palette } from '@/uses/useColor'

const defaultProps = defaultInit('d-badge')
export const props = {
  // Values
  icon: String,
  badge: undefined,
  dot: Boolean,

  // Status
  hide: Boolean,

  // Options
  palette,
  color: String,
  max: {
    type: Number,
    default: defaultProps('max', 99)
  },
  alignment: {
    type: String,
    default: defaultProps('alignment', 'overlap'),
    validator: validator([
      'basic',
      'overlap',
      'static'
    ])
  },
  size: {
    type: String,
    default: defaultProps('size'),
    validator: validatorSize
  },
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validatorShape
  },
  outline: {
    type: String,
    default: defaultProps('outlined', null)
  },

  // Position
  left: Boolean,
  bottom: Boolean
}
