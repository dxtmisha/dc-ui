import { defaultInit, validator } from '@/uses/useDefault'
import { palette } from '@/--uses/useColor'

const defaultProps = defaultInit('d-checkbox')
export const props = {
  // Values
  item: undefined,
  value: undefined,
  name: String,
  text: String,
  helperMessage: String,
  validationMessage: String,
  on: {
    type: Object,
    default: {}
  },

  // Status
  disabled: Boolean,

  // Options
  palette,
  color: String,
  right: Boolean,
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  },

  // Input
  type: {
    type: String,
    default: 'checkbox',
    validator: validator([
      'checkbox',
      'radio',
      'switch'
    ])
  },
  required: Boolean,
  attrsInput: Object,

  // Icon
  iconCheck: {
    type: String,
    default: defaultProps('iconCheck', 'check')
  }
}
