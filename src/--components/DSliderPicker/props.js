import { defaultInit, validator } from '@/uses/useDefault'
import { palette } from '@/--uses/useColor'

const defaultProps = defaultInit('d-slider')
export const props = {
  // Values
  marks: Array,
  marksInit: {
    type: Boolean,
    default: true
  },
  value: [Array, Number, String],
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

  // Status
  disabled: Boolean,

  // Input
  multiple: Boolean,
  minimumDistance: {
    type: Number,
    default: 1
  },
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
