import { defaultInit } from '../../uses/useDefault'
import Geo from '../../classes/Geo'

const defaultProps = defaultInit('d-number')
export const props = {
  // Values
  value: [Number, String],

  // Options
  locales: {
    type: String,
    default: defaultProps('locales', Geo.getGlobalLang())
  },
  options: Object
}
