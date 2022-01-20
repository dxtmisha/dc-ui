import { defaultInit, validator, validatorAdaptive } from '../../uses/useDefault'
import { palette } from '../../uses/useColor'

const defaultProps = defaultInit('d-bottom-navigation')
export const props = {
  // Values
  element: { default: defaultProps('element', document.getElementById('app')) },
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
  palette,
  color: String,
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
  scroll: {
    type: String,
    default: defaultProps('scroll', 'bottom'),
    validator: validator([
      'bottom',
      'disappears',
      'border'
    ])
  },
  ripple: undefined,
  itemAttrs: undefined,

  // Icon
  iconBackground: { default: defaultProps('iconBackground') }
}
