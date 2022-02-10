import { defaultInit, validator } from '../../uses/useDefault'
import Geo from '../../classes/Geo'

const defaultProps = defaultInit('d-date-format')
export const props = {
  // Values
  value: [Number, String],
  relative: Number,
  unit: String,

  // Options
  locales: {
    type: String,
    default: defaultProps('locales', Geo.getGlobalLang())
  },
  type: {
    type: String,
    default: 'datetime',
    validator: validator([
      'date',
      'datetime',
      'month',
      'time',
      'time-full'
    ])
  },
  display: {
    type: String,
    default: defaultProps('display', 'short'),
    validator: validator([
      'numeric',
      'long',
      'short',
      'narrow',
      '2-digit'
    ])
  },
  numeric: {
    type: String,
    default: defaultProps('numeric', 'always'),
    validator: validator([
      'always',
      'auto'
    ])
  },
  options: Object
}
