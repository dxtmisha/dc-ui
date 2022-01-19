import { defaultInit, validator } from './../../uses/useDefault'
import Translation from './../../classes/Translation'

const defaultProps = defaultInit('d-form')
export const props = {
  // Values
  fields: [Array, Object],
  values: Object,
  ajax: String,
  request: Object,
  method: {
    type: String,
    default: 'post',
    validator: validator([
      'get',
      'post'
    ])
  },

  // Actions
  bar: {
    type: [Array, Object],
    default: defaultProps('bar', [])
  },
  submit: {
    type: Object,
    default: defaultProps('submit', {
      text: Translation.get('Save'),
      appearance: 'contained',
      value: 'save',
      type: 'submit'
    })
  },

  // Status
  readonly: Boolean,
  disabled: Boolean,
  progress: Boolean,

  // Options
  options: {
    type: Object,
    default: defaultProps('options')
  },

  // Icon
  iconError: {
    type: String,
    default: defaultProps('iconError', 'error')
  },
  iconSuccess: {
    type: String,
    default: defaultProps('iconSuccess', 'check_circle')
  }
}
