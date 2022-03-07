import { defaultInit } from '../../uses/useDefault'

const defaultProps = defaultInit('d-select-filter')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  name: undefined,
  text: undefined,
  helperMessage: undefined,
  validationMessage: undefined,
  list: undefined,
  listInit: undefined,
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
  required: Boolean,
  inputAttrs: undefined,

  // Status
  readonly: Boolean,
  disabled: Boolean,

  // Options
  counter: {
    type: Boolean,
    default: defaultProps('counter')
  },

  // Button
  buttonAppearance: { default: defaultProps('buttonAppearance', 'chip') },
  buttonSize: { default: defaultProps('buttonSize') },
  buttonShape: { default: defaultProps('buttonShape') },
  buttonAdaptive: { default: defaultProps('buttonAdaptive') },
  buttonAttrs: { default: defaultProps('buttonAttrs') },

  // Icon
  buttonIcon: undefined,
  buttonIconActive: { default: defaultProps('buttonIconActive', 'done') }
}
