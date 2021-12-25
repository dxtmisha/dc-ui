import { defaultInit } from '@/uses/useDefault'
import { max, min } from '@/components/DCalendar/props'

const defaultProps = defaultInit('d-date-picker')
export const props = {
  // Values
  value: undefined,

  // Input
  min,
  max,
  multiple: undefined,

  // Status
  switchDate: {
    type: Boolean,
    default: defaultProps('switchDate', true)
  },

  // Options
  locales: undefined,

  // Actions
  actionsAttrs: undefined,

  // Calendar
  calendarShape: { default: defaultProps('calendarShape') },
  calendarAdaptive: { default: defaultProps('calendarAdaptive', 'auto') },
  calendarAttrs: undefined,

  // Top
  topAttrs: undefined,

  // Icon
  iconCalendar: { default: defaultProps('iconCalendar', 'calendar_today') },
  iconCancel: { default: defaultProps('iconCancel', 'cancel') },
  iconEdit: { default: defaultProps('iconEdit', 'edit') }
}
