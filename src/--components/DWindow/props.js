import { defaultInit, validator } from '@/--uses/useDefault'

const defaultProps = defaultInit('d-window')
export const props = {
  // Values
  beforeOpening: Function,
  opening: Function,

  // Status
  disabled: Boolean,

  // Options
  width: {
    type: String,
    default: defaultProps('width', null)
  },
  size: {
    type: String,
    validator: validator([
      'basic',
      'fullscreen',
      'minimum'
    ])
  },
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validator([
      'basic',
      'rounded',
      'tile'
    ])
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
      'modal',
      'modal-left',
      'modal-right'
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
  indent: {
    type: Number,
    default: defaultProps('indent', 4)
  },
  autoClose: {
    type: Boolean,
    default: true
  },
  persistent: Boolean
}
