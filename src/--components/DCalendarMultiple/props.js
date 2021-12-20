import { defaultInit } from '@/uses/useDefault'
import { max, min } from '@/--components/DCalendar/props'

const defaultProps = defaultInit('d-calendar-multiple')
export const props = {
  // Values
  value: undefined,
  min,
  max,

  // Options
  locales: undefined,
  shape: undefined,
  adaptive: { default: defaultProps('adaptive', 'auto') },
  today: undefined,

  // Icon
  iconChevronLeft: {
    type: String,
    default: defaultProps('iconChevronLeft', 'chevron_left')
  },
  iconChevronRight: {
    type: String,
    default: defaultProps('iconChevronRight', 'chevron_right')
  }
}
