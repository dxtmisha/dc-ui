import { defaultInit, validator, validatorShape, validatorSize } from '@/uses/useDefault'
import { palette } from '@/uses/useColor'

const defaultProps = defaultInit('d-badge')
export const props = {
  // Values
  icon: String,
  value: undefined,
  max: {
    type: Number,
    default: defaultProps('max', 99)
  },
  dot: Boolean,

  // Status
  hide: Boolean,

  // Position
  left: Boolean,
  bottom: Boolean,

  // Options
  palette,
  color: String,
  alignment: {
    type: String,
    default: 'overlap',
    validator: validator([
      'basic',
      'overlap',
      'static'
    ])
  },
  size: {
    type: String,
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
  }
}
