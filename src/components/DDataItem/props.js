import { defaultInit, validator, validatorShape } from '@/uses/useDefault'
import { palette } from '@/uses/useColor'

const defaultProps = defaultInit('d-data-item')
export const props = {
  // Values
  item: Object,
  value: undefined,
  text: String,
  underline: String,
  parameters: Array,
  backgroundColor: {
    type: [Boolean, String],
    default: null
  },

  // Status
  selected: Boolean,
  progress: Boolean,

  // Options
  palette,
  color: String,
  appearance: {
    type: String,
    default: defaultProps('appearance'),
    validator: validator([
      'basic',
      'color'
    ])
  },
  size: {
    type: String,
    default: defaultProps('size'),
    validator: validator([
      'dynamic',
      'compact',
      'small',
      'medium',
      'large',
      'rectangle'
    ])
  },
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validatorShape
  },
  adaptive: {
    type: String,
    validator: validator([
      'auto',
      'auto-small',
      'auto-medium',
      'auto-large',
      'auto-extra',
      'auto-desktop',
      'basic',
      'minimum'
    ])
  },
  dense: Boolean,
  column: {
    type: Number,
    default: null
  },
  border: {
    type: Boolean,
    default: defaultProps('border')
  },

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconBackground: undefined,
  iconAttrs: undefined
}
