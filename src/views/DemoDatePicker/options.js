import {
  locales,
  multiple,
  options,
  shape,
  status,
  values
} from '@/media/demo/options'
import { calendarAdaptive, calendarMax, calendarMin } from '@/views/DemoCalendar/options'
import { optionsCalendarSelect } from '@/views/DemoCalendarSelect/options'
import { optionsCalendarMultiple } from '@/views/DemoCalendarMultiple/options'

export const datePickerSwitchDate = {
  value: 'switchDate',
  default: true
}

export const optionsDatePicker = {
  values,
  value: {
    list: [
      { value: undefined },
      { value: optionsCalendarSelect.value.message },
      { value: optionsCalendarMultiple.value.message }
    ]
  },
  multiple,
  calendarMin,
  calendarMax,

  status,
  datePickerSwitchDate,

  options,
  locales,
  shape,
  calendarAdaptive
}
