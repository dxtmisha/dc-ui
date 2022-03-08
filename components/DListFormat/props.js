import { defaultInit, validator } from '../../uses/useDefault'
import Geo from '../../classes/Geo'

const defaultProps = defaultInit('d-list-format')
export const props = {
  // Values
  value: Array,

  // Options
  locales: {
    type: String,
    default: defaultProps('locales', () => Geo.getGlobalLang())
  },
  type: {
    type: String,
    default: defaultProps('type', 'conjunction'),
    validator: validator([
      'conjunction',
      'disjunction',
      'unit'
    ])
  },
  display: {
    type: String,
    default: defaultProps('display', 'long'),
    validator: validator([
      'narrow',
      'short',
      'long'
    ])
  },
  options: Object
}
