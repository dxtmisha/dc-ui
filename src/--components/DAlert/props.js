import { defaultInit, validator, validatorShape } from '@/--uses/useDefault'
import { palette } from '@/--uses/useColor'

const defaultProps = defaultInit('d-alert')
export const props = {
  // Values
  text: String,
  description: String,

  // Status
  hide: Boolean,

  // Options
  palette,
  color: String,
  appearance: {
    type: String,
    default: defaultProps('appearance', 'prominent'),
    validator: validator([
      'prominent',
      'outlined',
      'outlined-prominent',
      'filled',
      'contained',
      'shadow'
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
  border: {
    type: String,
    default: defaultProps('border'),
    validator: validator([
      'top',
      'right',
      'bottom',
      'left'
    ])
  },
  dense: Boolean,
  animationShow: Boolean,
  cancel: Boolean,

  // Icon
  icon: undefined,
  iconClose: {
    type: String,
    default: defaultProps('iconClose', 'close')
  },
  iconBackground: undefined
}
