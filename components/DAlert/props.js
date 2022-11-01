import { defaultInit, validator, validatorShape } from '../../uses/useDefault'
import { palette } from '../../uses/useColor'

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
  animationShow: Boolean,
  cancel: Boolean,
  dense: Boolean,

  // Button
  buttonAttrs: undefined,

  // Icon
  icon: undefined,
  iconClose: { default: defaultProps('iconClose', 'close') },
  iconSize: { default: defaultProps('iconSize') },
  iconBackground: undefined,
  iconAttrs: undefined
}
