import Geo from '../../classes/Geo'
import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-mask-date')
export const props = {
  // Values
  value: String,
  on: {
    type: Object,
    default: {}
  },

  // Options
  tag: {
    type: String,
    default: 'input'
  },
  type: {
    type: String,
    default: 'date',
    validator: validator([
      'date',
      'datetime',
      'month',
      'time'
    ])
  },
  locales: {
    type: String,
    default: defaultProps('locales', Geo.getGlobalLang())
  }
}
