import { defaultInit, validator } from '../../uses/useDefault'

const defaultProps = defaultInit('d-motion-transform')
export const props = {
  // Values
  ignore: undefined,
  ignoreSelector: {
    type: String,
    default: defaultProps('ignoreSelector', '.d-window')
  },

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

  topShow: {
    type: Boolean,
    default: defaultProps('topShow', false)
  },
  topBar: { default: defaultProps('topBar', []) },
  topAppearance: { default: defaultProps('topAppearance', 'transparent') },
  topAttrs: {
    type: Object,
    default: defaultProps('topAttrs', {})
  },

  // Position
  bottom: Boolean,

  // Icon
  iconArrowBack: { default: defaultProps('iconArrowBack', 'arrow_back') }
}
