import { defaultInit, validator, validatorAxis, validatorSize } from '@/--uses/useDefault'
import Translation from '../../classes/Translation'

const defaultProps = defaultInit('d-actions')
export const props = {
  // Values
  bar: {
    type: Array,
    default: [
      {
        text: Translation.get('Cancel'),
        value: 'cancel'
      },
      {
        text: Translation.get('Ok'),
        value: 'ok'
      }
    ]
  },
  management: Array,

  // Options
  size: {
    type: String,
    default: defaultProps('size'),
    validator: validatorSize
  },
  axis: {
    type: String,
    validator: validatorAxis
  },
  align: {
    type: String,
    validator: validator([
      'center',
      'left',
      'right',
      'block'
    ])
  },

  // Button
  buttonAttrs: undefined
}
