import { defaultInit, validatorAxis, validatorShape } from '@/uses/useDefault'

const defaultProps = defaultInit('d-button-group')
export const props = {
  // Values
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

  // Input
  maxlength: Number,
  multiple: Boolean,

  // Status
  selected: undefined,
  readonly: undefined,
  disabled: Boolean,

  // Options
  shape: {
    type: String,
    default: defaultProps('shape'),
    validator: validatorShape
  },
  axis: {
    type: String,
    default: 'x',
    validator: validatorAxis
  },
  landscape: Boolean,

  // Button
  buttonPalette: undefined,
  buttonColor: undefined,
  buttonAppearance: { default: defaultProps('buttonAppearance', 'outlined') },
  buttonSize: { default: defaultProps('buttonSize') },
  buttonShape: { default: defaultProps('buttonShape', 'tile') },
  buttonAdaptive: { default: defaultProps('buttonAdaptive', 'auto') },
  buttonLowercase: { default: defaultProps('buttonLowercase', true) },
  buttonDense: { default: defaultProps('buttonDense') },
  buttonRipple: { default: defaultProps('buttonRipple', true) },
  buttonAttrs: undefined,

  // Menu
  menuAttrs: undefined
}
