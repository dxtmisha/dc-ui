import { defaultInit, validator, validatorAdaptive, validatorShape } from '@/uses/useDefault'
import { palette } from '@/uses/useColor'

const defaultProps = defaultInit('d-list-item')
export const props = {
  // Values
  item: Object,
  value: undefined,
  text: String,
  textShort: String,
  underline: String,
  prefix: [Number, String],
  suffix: [Number, String],
  description: String,
  backgroundColor: {
    type: String,
    default: null
  },

  // Status
  focus: Boolean,
  selected: Boolean,
  turn: Boolean,
  disabled: Boolean,
  hide: Boolean,
  progress: Boolean,

  // Options
  palette,
  color: String,
  tag: {
    type: String,
    default: 'a'
  },
  appearance: {
    type: String,
    default: defaultProps('appearance'),
    validator: validator([
      'basic',
      'color',
      'contained',
      'contained-status'
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
    validator: validatorAdaptive
  },
  navigationRail: {
    type: String,
    validator: validator([
      'small',
      'medium',
      'medium-medium',
      'medium-large',
      'medium-extra',
      'medium-desktop',
      'large',
      'large-large',
      'large-extra',
      'large-desktop',
      'extra',
      'desktop',
      'always'
    ])
  },
  dense: Boolean,
  border: {
    type: Boolean,
    default: defaultProps('border')
  },
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  },

  // Icon
  badge: [Number, Object, String],
  thumbnail: undefined,
  icon: undefined,
  iconActive: undefined,
  iconTrailing: undefined,
  iconReadonly: Boolean,
  iconAnimationShow: Boolean,
  iconBackground: Boolean
}
