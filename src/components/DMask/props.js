import { defaultInit, validator } from '@/uses/useDefault'
import Geo from '../../classes/Geo'

const defaultProps = defaultInit('d-mask')
export const props = {
  // Values
  value: String,
  mask: String,
  match: {
    default: /[0-9]/
  },
  pattern: undefined,
  on: {
    type: Object,
    default: {}
  },

  // Status
  visible: {
    type: Boolean,
    default: defaultProps('visible', true)
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
  viewSpecial: {
    default: defaultProps('viewSpecial', '_')
  },
  inputAttrs: undefined
}
