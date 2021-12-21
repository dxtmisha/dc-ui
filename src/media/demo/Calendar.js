import GeoDate from '@/classes/GeoDate'
import { adaptiveBasic } from '@/media/demo/data/adaptive'

export const Calendar = {
  calendarAdaptive: {
    list: [
      ...adaptiveBasic,
      { value: 'mobile' },
      { value: 'desktop' }
    ]
  },
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
  calendarValue: {
    list: [
      { value: undefined },
      { value: '2020-01-01' },
      { value: '2020-12-30' },
      { value: '2020-11' },
      { value: '2020-08-19 05:04' },
      { value: '2020-99-99' }
    ]
  }
}