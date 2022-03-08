import { defaultInit, validator } from '../../uses/useDefault'
import Geo from '../../classes/Geo'

const defaultProps = defaultInit('d-display')
export const props = {
  // Values
  code: String,

  // Options
  locales: {
    type: String,
    default: defaultProps('locales', () => Geo.getGlobalLang())
  },
  type: {
    type: String,
    default: defaultProps('type', 'language'),
    validator: validator([
      'calendar',
      'currency',
      'language',
      'region'
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
