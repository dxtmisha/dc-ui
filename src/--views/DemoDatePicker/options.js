import {
  locales,
  multiple,
  options,
  palette,
  shape,
  status,
  values
} from '@/media/--demo/options'
// import { calendarAdaptive, calendarMax, calendarMin } from '@/views/DemoCalendar/options'
import { optionsCalendarSelect } from '@/views/DemoCalendarSelect/options'
import { optionsCalendarMultiple } from '@/--views/DemoCalendarMultiple/options'

export const datePickerValue = {
  value: 'value',
  list: [
    { value: undefined },
    { value: optionsCalendarSelect.value.message },
    { value: optionsCalendarMultiple.value.message }
  ]
}

export const datePickerSwitchDate = {
  value: 'switchDate',
  default: true
}

export const optionsDatePicker = {
  values,
  datePickerValue,
  multiple,
  // calendarMin,
  // calendarMax,

  status,
  datePickerSwitchDate,

  options,
  palette,
  locales,
  shape,
  // calendarAdaptive
}
