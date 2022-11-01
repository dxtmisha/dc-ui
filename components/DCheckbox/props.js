import { defaultInit, validator } from '../../uses/useDefault'
import { palette } from '../../uses/useColor'

const defaultProps = defaultInit('d-checkbox')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  valueDefault: {
    type: String,
    default: '1'
  },
  modelValue: undefined,
  name: String,
  text: String,
  helperMessage: String,
  validationMessage: String,

  // Input
  required: Boolean,
  on: {
    type: Object,
    default: {}
  },
  inputAttrs: undefined,

  // Status
  disabled: Boolean,

  // Options
  palette,
  color: String,
  type: {
    type: String,
    default: 'checkbox',
    validator: validator([
      'checkbox',
      'radio',
      'switch'
    ])
  },
  inverse: {
    type: Boolean,
    default: defaultProps('inverse')
  },
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  },

  // Position
  right: Boolean,

  // Icon
  iconCheck: { default: defaultProps('iconCheck', 'check') }
}
