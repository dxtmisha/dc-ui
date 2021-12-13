import { validator } from '@/uses/useDefault'
import { palette } from '@/uses/useColor'

// const defaultProps = defaultInit('d-form')
export const props = {
  // Values
  method: {
    type: String,
    default: 'post',
    validator: validator([
      'get',
      'post'
    ])
  },

  // Status
  readonly: Boolean,
  disabled: Boolean,

  // Options
  palette
}
