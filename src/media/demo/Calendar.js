import GeoDate from '@/classes/GeoDate'
import { adaptiveCalendar } from '@/media/demo/data/adaptive'
import { valueCalendar } from '@/media/demo/data/value'

export const Calendar = {
  calendarAdaptive: { list: adaptiveCalendar },
  calendarMax: {
    message: (() => {
      const date = new GeoDate()
        .setType('date')

      date.getObject().setDate(date.getObject().getDate() + 5)
      return date.toStandard()
    })()
  },
  calendarMin: {
    message: (() => {
      const date = new GeoDate()
        .setType('date')

      date.getObject().setDate(date.getObject().getDate() - 5)
      return date.toStandard()
    })()
  },
  calendarValue: { list: valueCalendar }
}
