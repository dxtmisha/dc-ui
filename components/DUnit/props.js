import { defaultInit, validator } from '../../uses/useDefault'
import Geo from '../../classes/Geo'

const defaultProps = defaultInit('d-unit')
export const props = {
  // Values
  value: [Number, String],
  unit: String,

  // Options
  locales: {
    type: String,
    default: defaultProps('locales', Geo.getGlobalLang())
  },
  display: {
    type: String,
    default: defaultProps('display'),
    validator: validator([
      'narrow',
      'short',
      'long'
    ])
  },
  options: Object
}
