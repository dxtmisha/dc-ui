import {
  locales,
  options,
  shape,
  today,
  values
} from '@/media/--demo/options'
// import { calendarAdaptive, calendarMax, calendarMin } from '@/views/DemoCalendar/options'
import GeoDate from '@/classes/GeoDate'

export const optionsCalendarMultiple = {
  values,
  value: {
    message: (() => {
      const date1 = new GeoDate().setType('date')
      const date2 = new GeoDate().setType('date')

      date1.getObject().setDate(date1.getObject().getDate() - 5)
      date2.getObject().setDate(date2.getObject().getDate() + 5)

      return [date1.toStandard(), date2.toStandard()]
    })()
  },
  // calendarMin,
  // calendarMax,

  options,
  locales,
  shape,
  // calendarAdaptive,
  today
}
