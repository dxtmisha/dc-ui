import {
  defaultInit,
  validator,
  validatorShape
} from '@/uses/useDefault'
import Geo from '../../classes/Geo'
import GeoDate from '../../classes/GeoDate'

const defaultProps = defaultInit('d-calendar')

export const min = {
  type: String,
  default () {
    const date = new GeoDate()
    date.getObject().setFullYear(date.getObject().getFullYear() - 15)
    return date.toStandard()
  }
}

export const max = {
  type: String,
  default () {
    const date = new GeoDate()
    date.getObject().setFullYear(date.getObject().getFullYear() + 25)
    return date.toStandard()
  }
}

export const props = {
  // Values
  value: String,

  // Input
  min,
  max,
  multiple: Boolean,

  // Status
  selected: [Array, String],

  // Options
  locales: {
    type: String,
    default: defaultProps('locales', Geo.getGlobalLang())
  },
  shape: {
    type: String,
    default: defaultProps('shape', 'pill'),
    validator: validatorShape
  },
  adaptive: {
    type: String,
    default: defaultProps('adaptive', 'auto'),
    validator: validator([
      'auto',
      'auto-small',
      'auto-medium',
      'auto-large',
      'auto-extra',
      'auto-desktop',
      'mobile',
      'desktop'
    ])
  },
  today: {
    type: Boolean,
    default: true
  },
  outputMonth: {
    type: Boolean,
    default: true
  },
  outputWeek: {
    type: Boolean,
    default: true
  },
  outputDay: {
    type: Boolean,
    default: true
  }
}
