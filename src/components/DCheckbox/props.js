import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-checkbox')
export default {
  // Values
  item: undefined,
  value: undefined,
  name: String,
  text: String,
  icon: String,
  helperMessage: String,
  validationMessage: String,
  required: Boolean,

  // Options
  type: {
    type: String,
    default: 'checkbox',
    validator: validator([
      'checkbox',
      'radio',
      'switch'
    ])
  },
  right: Boolean,
  ripple: {
    type: Boolean,
    default: defaultProps('ripple', true)
  },

  // Icon
  iconCheck: {
    type: String,
    default: defaultProps('iconCheck', 'check')
  }
}
