import { defaultInit, validator } from '@/--uses/useDefault'

const defaultProps = defaultInit('d-motion-transform')
export const props = {
  // Status
  open: Boolean,
  click: {
    type: Boolean,
    default: true
  },
  staticElement: undefined,

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
  autoClose: {
    type: Boolean,
    default: true
  },
  animationShow: {
    type: Boolean,
    default: defaultProps('animationShow', true)
  },
  bottom: Boolean
}
