import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-window')
export const props = {
  // Status
  open: Boolean,
  disabled: Boolean,

  // Options
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validator([
      'basic',
      'rounded',
      'tile'
    ])
  },
  axis: {
    type: String,
    default: 'y',
    validator: validator([
      'x',
      'y',
      'on'
    ])
  },
  width: {
    type: String,
    default: defaultProps('width', null)
  },
  indent: {
    type: Number,
    default: defaultProps('indent', 4)
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
      'menu',
      'modal'
    ])
  },
  fullscreen: Boolean,
  persistent: Boolean,
  autoClose: {
    type: Boolean,
    default: true
  },
  widthByControl: Boolean,
  bodyWidthAuto: Boolean
}
