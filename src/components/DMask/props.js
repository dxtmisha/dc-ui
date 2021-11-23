import Geo from '../../classes/Geo'
import { defaultInit, validator } from '@/uses/useDefault'

const defaultProps = defaultInit('d-mask')
export const props = {
  // Values
  mask: String,
  value: String,
  viewSpecial: {
    default: '0'
  },
  match: {
    default: /[0-9]/
  },
  pattern: undefined,
  on: {
    type: Object,
    default: {}
  },

  // Options
  type: {
    type: String,
    default: 'text',
    validator: validator([
      'text',
      'date',
      'datetime',
      'month',
      'time'
    ])
  },
  locales: {
    type: String,
    default: defaultProps('locales', Geo.getGlobalLang())
  },
  visibleMask: {
    type: Boolean,
    default: defaultProps('visibleMask', true)
  }
}
