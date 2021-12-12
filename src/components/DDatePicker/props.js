import { defaultInit } from '@/uses/useDefault'
import { max, min } from '@/components/DCalendar/props'

const defaultProps = defaultInit('d-date-picker')
export const props = {
  // Values
  value: undefined,
  multiple: undefined,
  min,
  max,

  // Status
  switchDate: {
    type: Boolean,
    default: defaultProps('switchDate', true)
  },

  // Options
  locales: undefined,
  shape: undefined,
  adaptive: { default: defaultProps('adaptive', 'auto') },

  // Icon
  iconEdit: {
    type: String,
    default: defaultProps('iconEdit', 'edit')
  },
  iconCalendar: {
    type: String,
    default: defaultProps('iconCalendar', 'calendar_today')
  },
  iconCancel: {
    type: String,
    default: defaultProps('iconCancel', 'cancel')
  }
}
