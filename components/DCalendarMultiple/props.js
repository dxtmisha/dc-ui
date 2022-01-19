import { defaultInit } from '../../uses/useDefault'
import { max, min } from '../DCalendar/props'

const defaultProps = defaultInit('d-calendar-multiple')
export const props = {
  // Values
  value: undefined,

  // Input
  min,
  max,

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
  iconChevronLeft: { default: defaultProps('iconChevronLeft', 'chevron_left') },
  iconChevronRight: { default: defaultProps('iconChevronRight', 'chevron_right') }
}
