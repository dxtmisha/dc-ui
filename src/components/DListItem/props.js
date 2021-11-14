import { defaultInit, validator, validatorAdaptive, validatorShape } from '@/uses/useDefault'
import { palette } from '@/uses/useColors'

const defaultProps = defaultInit('d-list-item')
export const props = {
  // Values
  item: Object,
  value: undefined,
  thumbnail: undefined,
  icon: undefined,
  iconActive: undefined,
  iconTrailing: undefined,
  badge: [Number, Object, String],
  badgeIcon: undefined,
  text: String,
  textShort: String,
  prefix: [Number, String],
  suffix: [Number, String],
  description: String,
  backgroundColor: String,

  // Status
  focus: Boolean,
  selected: Boolean,
  turn: Boolean,
  disabled: Boolean,

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
      'tonal',
      'contained',
      'contained-status'
    ])
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
  iconReadonly: Boolean,
  iconAnimationShow: Boolean,
  iconBackground: Boolean
}
