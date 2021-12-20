import {
  locales,
  multiple,
  options,
  shape,
  today,
  values
} from '@/media/--demo/options'
import { calendarAdaptive, calendarMax, calendarMin } from '@/--views/DemoCalendar/options'
import GeoDate from '@/classes/GeoDate'

export const optionsCalendarSelect = {
  values,
  value: { message: new GeoDate().setType('date').toStandard() },
  multiple,
  calendarMin,
  calendarMax,

  options,
  locales,
  shape,
  calendarAdaptive,
  today
}
