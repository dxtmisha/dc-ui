import { validatorAxis } from '@/uses/useDefault'
import Translation from '../../classes/Translation'

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
  barManagement: Array,

  // Options
  axis: {
    type: String,
    validator: validatorAxis
  },
  attrsBar: Object,
  attrsBarManagement: Object
}
