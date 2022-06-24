import { defaultInit, validator } from '../../uses/useDefault'
import Geo from '../../classes/Geo'

const defaultProps = defaultInit('d-mask')
export const props = {
  // Values
  value: String,
  valuePaste: Boolean,
  mask: {
    type: [Array, String],
    default: defaultProps('mask', '****************')
  },
  match: {
    default: /[0-9]/
  },

  // Input
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
  typeInput: {
    type: String,
    default: 'text'
  },
  locales: {
    type: String,
    default: defaultProps('locales', () => Geo.getGlobalLang())
  },
  viewSpecial: {
    default: defaultProps('viewSpecial', '_')
  },
  viewPlaceholder: {
    default: defaultProps('viewPlaceholder', true)
  },
  inputAttrs: undefined
}
