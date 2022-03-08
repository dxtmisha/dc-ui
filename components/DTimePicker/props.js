import { defaultInit, validator } from '../../uses/useDefault'
import Geo from '../../classes/Geo'

const defaultProps = defaultInit('d-time-picker')
export const props = {
  // Values
  value: String,

  // Input
  min: {
    type: String,
    default: '00:00',
    validator (min) {
      return min.match(/^[0-9]{1,2}:[0-9]{1,2}$/)
    }
  },
  max: {
    type: String,
    default: '24:00',
    validator (max) {
      return max.match(/^[0-9]{1,2}:[0-9]{1,2}$/)
    }
  },
  inputAttrs: undefined,

  // Status
  switchClock: {
    type: Boolean,
    default: defaultProps('switchClock', true)
  },

  // Options
  locales: {
    type: String,
    default: defaultProps('locales', () => Geo.getGlobalLang())
  },
  format: {
    type: String,
    default: 'auto',
    validator: validator([
      'auto',
      '12',
      '24'
    ])
  },

  // Actions
  actionsAttrs: undefined,

  // Icon
  iconSchedule: {
    type: String,
    default: defaultProps('iconSchedule', 'schedule')
  },
  iconSwitchActive: {
    type: String,
    default: defaultProps('iconKeyboard', 'keyboard')
  }
}
