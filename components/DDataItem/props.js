import { defaultInit, validator, validatorShape } from '../../uses/useDefault'
import { palette } from '../../uses/useColor'

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
  open: Boolean,
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
    default: defaultProps('size', 'medium'),
    validator: validator([
      'dynamic',
      'compact',
      'small',
      'medium',
      'large',
      'rectangle',
      'header'
    ])
  },
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validatorShape
  },
  adaptive: {
    type: String,
    default: defaultProps('adaptive', 'auto'),
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
  header: Boolean,
  dense: Boolean,
  column: {
    type: Number,
    default: null
  },
  border: {
    type: Boolean,
    default: defaultProps('border', true)
  },
  transformAttrs: { default: defaultProps('transformAttrs') },
  topAttrs: { default: defaultProps('topAttrs') },

  // Icon
  icon: undefined,
  iconActive: undefined,
  iconBackground: { default: defaultProps('iconBackground', true) },
  iconArrowBack: { default: defaultProps('iconArrowBack', 'arrow_back') },
  iconAttrs: undefined,

  // Position
  positionClass: String,
  selectionClass: String
}
