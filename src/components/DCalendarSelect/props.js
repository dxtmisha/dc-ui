import { defaultInit } from '@/uses/useDefault'
import { max, min } from '@/components/DCalendar/props'

const defaultProps = defaultInit('d-calendar-select')
export const props = {
  // Values
  value: undefined,
  multiple: undefined,

  // Options
  locales: undefined,
  shape: undefined,
  adaptive: { default: defaultProps('adaptive', 'auto') },
  min,
  max,
  today: undefined,

  // Button
  buttonAttrs: undefined,

  // Icon
  iconArrowDown: { default: defaultProps('iconArrowDown', 'arrow_drop_down') },
  iconChevronLeft: { default: defaultProps('iconChevronLeft', 'chevron_left') },
  iconChevronRight: { default: defaultProps('iconChevronRight', 'chevron_right') }
}
