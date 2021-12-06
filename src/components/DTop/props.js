import Translation from '../../classes/Translation'
import { defaultInit } from '@/uses/useDefault'

const defaultProps = defaultInit('d-top')
export const props = {
  // Values
  bar: {
    type: Array,
    default: [
      {
        text: Translation.get('Save'),
        value: 'ok'
      }
    ]
  },
  barAction: Array,
  text: String,
  textAction: String,

  // Status
  action: Boolean,

  // Options
  shape: String,
  attrsButton: Object,

  // Icon
  iconClose: {
    type: String,
    default: defaultProps('iconClose', 'close')
  }
}
