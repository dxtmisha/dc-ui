import { defaultInit } from '@/uses/useDefault'
import { max, min } from '@/components/DCalendar/props'

const defaultProps = defaultInit('d-calendar-select')
export const props = {
  // Values
  value: undefined,

  // Input
  min,
  max,
  multiple: undefined,

  // Options
  locales: undefined,
  today: undefined,

  // Button
  buttonShape: undefined,
  buttonAttrs: undefined,

  // Calendar
  calendarShape: { default: defaultProps('calendarShape') },
  calendarAdaptive: { default: defaultProps('calendarAdaptive', 'auto') },
  calendarAttrs: undefined,

  // Icon
  iconArrowDown: { default: defaultProps('iconArrowDown', 'arrow_drop_down') },
  iconChevronLeft: { default: defaultProps('iconChevronLeft', 'chevron_left') },
  iconChevronRight: { default: defaultProps('iconChevronRight', 'chevron_right') }
}
