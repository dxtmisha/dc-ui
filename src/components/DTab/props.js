import { defaultInit, validator, validatorAdaptive } from '@/uses/useDefault'

const defaultProps = defaultInit('d-tab')
export const props = {
  // Values
  list: undefined,
  listInit: {
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

  // Status
  selected: String,

  // Options
  appearance: {
    type: String,
    default: defaultProps('appearance', 'contained'),
    validator: validator([
      'basic',
      'contained',
      'translucency'
    ])
  },
  shape: { default: defaultProps('shape', 'tile') },
  adaptive: {
    type: String,
    default: defaultProps('shape', 'basic'),
    validator: validatorAdaptive
  },
  navigationRail: {
    type: String,
    default: defaultProps('shape', 'always'),
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
  ripple: undefined,
  itemAttrs: undefined,

  // Icon
  iconBackground: { default: defaultProps('iconBackground') }
}
