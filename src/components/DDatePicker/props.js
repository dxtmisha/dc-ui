import { defaultInit } from '@/uses/useDefault'
import { max, min } from '@/components/DCalendar/props'
import { palette } from '@/uses/useColor'

const defaultProps = defaultInit('d-date-picker')
export const props = {
  // Values
  value: undefined,

  // Input
  multiple: undefined,
  min,
  max,

  // Status
  switchDate: {
    type: Boolean,
    default: defaultProps('switchDate', true)
  },

  // Options
  palette,
  color: String,
  shape: undefined,
  adaptive: { default: defaultProps('adaptive', 'auto') },
  locales: undefined,

  // Calendar
  calendarAttrs: undefined,

  // Actions
  actionsAttrs: undefined,

  // Top
  topAttrs: undefined,

  // Icon
  iconCalendar: { default: defaultProps('iconCalendar', 'calendar_today') },
  iconCancel: { default: defaultProps('iconCancel', 'cancel') },
  iconEdit: { default: defaultProps('iconEdit', 'edit') }
}
