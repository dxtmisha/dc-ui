import { defaultInit, validator } from '@/uses/useDefault'
import { palette } from '@/uses/useColor'

const defaultProps = defaultInit('d-slider')
export const props = {
  // Values
  value: undefined,
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

  // Input
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
  multiple: Boolean,
  minimumDistance: {
    type: Number,
    default: 1
  },

  // Status
  disabled: Boolean,

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
