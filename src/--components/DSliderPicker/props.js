import { defaultInit, validator } from '@/uses/useDefault'
import { palette } from '@/uses/useColor'

const defaultProps = defaultInit('d-slider')
export const props = {
  // Values
  marks: Array,
  marksInit: {
    type: Boolean,
    default: true
  },
  translation: {
    type: Array,
    default: defaultProps('translation')
  },
  keyText: {
    type: String,
    default: defaultProps('keyText', 'text')
  },
  keyValue: {
    type: String,
    default: defaultProps('keyValue', 'value')
  },
  value: undefined,

  // Status
  disabled: Boolean,

  // Input
  multiple: Boolean,
  step: {
    type: Number,
    default: 1
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  minimumDistance: {
    type: Number,
    default: 1
  },

  // Options
  palette,
  color: String,
  appearance: {
    type: String,
    default: defaultProps('appearance', 'basic'),
    validator: validator([
      'basic',
      'drop'
    ])
  },
  vertical: Boolean,
  magnet: {
    type: Boolean,
    default: defaultProps('magnet')
  },
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  }
}
