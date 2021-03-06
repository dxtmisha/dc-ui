import { defaultInit, validatorShape } from '../../uses/useDefault'

const defaultProps = defaultInit('d-tooltip')
export const props = {
  // Values
  text: String,

  // Status
  active: Boolean,
  disabled: Boolean,

  // Options
  width: {
    type: String,
    default: defaultProps('width', null)
  },
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validatorShape
  },
  indent: {
    type: Number,
    default: defaultProps('indent', 8)
  },
  arrow: {
    type: Boolean,
    default: defaultProps('arrow')
  },
  delay: {
    type: Number,
    default: defaultProps('delay', 40)
  },
  hideAfter: {
    type: Number,
    default: defaultProps('hideAfter')
  },

  // Position
  top: {
    type: Boolean,
    default: defaultProps('top')
  }
}
