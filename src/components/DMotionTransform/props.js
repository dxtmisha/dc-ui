import { defaultInit, validator } from './../../uses/useDefault'

const defaultProps = defaultInit('d-motion-transform')
export const props = {
  // Values
  ignore: undefined,

  // Status
  open: Boolean,

  // Options
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
      'panel',
      'section',
      'window'
    ])
  },
  animationShow: {
    type: Boolean,
    default: defaultProps('animationShow', true)
  },
  autoClose: {
    type: Boolean,
    default: true
  },
  click: {
    type: Boolean,
    default: true
  },

  // Position
  bottom: Boolean
}
