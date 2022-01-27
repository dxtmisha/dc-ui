import { defaultInit, validator } from '../../uses/useDefault'
import Geo from '../../classes/Geo'

const defaultProps = defaultInit('d-currency')
export const props = {
  // Values
  value: [Number, String],
  currency: String,

  // Options
  locales: {
    type: String,
    default: defaultProps('locales', Geo.getGlobalLang())
  },
  display: {
    type: String,
    default: defaultProps('locales'),
    validator: validator([
      'symbol',
      'code',
      'name'
    ])
  },
  options: Object
}
