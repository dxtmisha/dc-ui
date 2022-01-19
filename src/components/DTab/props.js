import { defaultInit, validator, validatorAdaptive } from './../../uses/useDefault'

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
      'contained'
    ])
  },
  adaptive: {
    type: String,
    default: defaultProps('adaptive', 'basic'),
    validator: validatorAdaptive
  },
  navigationRail: {
    type: String,
    default: defaultProps('navigationRail'),
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
  dynamic: {
    type: Boolean,
    default: defaultProps('dynamic', true)
  },
  ripple: undefined,
  itemAttrs: undefined,

  // Icon
  iconBackground: { default: defaultProps('iconBackground') }
}
