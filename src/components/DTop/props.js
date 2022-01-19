import { defaultInit, validator, validatorSize } from './../../uses/useDefault'
import Translation from '../../classes/Translation'

const defaultProps = defaultInit('d-top')
export const props = {
  // Values
  text: String,
  textAction: String,
  bar: {
    type: Array,
    default: [
      {
        text: Translation.get('Save'),
        value: 'ok'
      }
    ]
  },
  barAction: Array,

  // Status
  action: Boolean,

  // Options
  appearance: {
    type: String,
    default: defaultProps('appearance', 'contained'),
    validator: validator([
      'contained',
      'translucency',
      'transparent'
    ])
  },
  size: {
    type: String,
    default: defaultProps('size'),
    validator: validatorSize
  },

  // Button
  buttonAppearance: { default: defaultProps('buttonAppearance', 'text') },
  buttonSize: { default: defaultProps('buttonSize', 'medium') },
  buttonShape: { default: defaultProps('buttonShape') },
  buttonAdaptive: { default: defaultProps('buttonAdaptive', 'auto') },
  buttonAttrs: Object,

  // Icon
  iconClose: { default: defaultProps('iconClose', 'close') }
}
