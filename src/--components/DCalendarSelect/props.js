import { defaultInit } from '@/--uses/useDefault'
import { max, min } from '@/--components/DCalendar/props'

const defaultProps = defaultInit('d-calendar-select')
export const props = {
  // Values
  value: undefined,
  multiple: undefined,
  min,
  max,

  // Options
  locales: undefined,
  shape: undefined,
  adaptive: { default: defaultProps('adaptive', 'auto') },
  today: undefined,

  // Icon
  iconArrowDown: {
    type: String,
    default: defaultProps('iconArrowDown', 'arrow_drop_down')
  },
  iconChevronLeft: {
    type: String,
    default: defaultProps('iconChevronLeft', 'chevron_left')
  },
  iconChevronRight: {
    type: String,
    default: defaultProps('iconChevronRight', 'chevron_right')
  }
}
