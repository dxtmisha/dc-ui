import {
  locales,
  multiple,
  options,
  outputDay,
  outputMonth,
  outputWeek,
  shape,
  today,
  values
} from '@/media/--demo/options'
import GeoDate from '@/classes/GeoDate'

export const calendarValue = {
  value: 'value',
  list: [
    { value: undefined },
    { value: '2020-01-01' },
    { value: '2020-12-30' },
    { value: '2020-11' },
    { value: '2020-08-19 05:04' },
    { value: '2020-99-99' }
  ]
}

export const calendarMin = {
  value: 'min',
  message: (() => {
    const date = new GeoDate()
      .setType('date')

    date.getObject().setDate(date.getObject().getDate() - 5)
    return date.toStandard()
  })()
}

export const calendarMax = {
  value: 'max',
  message: (() => {
    const date = new GeoDate()
      .setType('date')

    date.getObject().setDate(date.getObject().getDate() + 5)
    return date.toStandard()
  })()
}

export const calendarAdaptive = {
  value: 'adaptive',
  list: [
    { value: undefined },
    { value: 'auto' },
    { value: 'auto-small' },
    { value: 'auto-medium' },
    { value: 'auto-large' },
    { value: 'auto-extra' },
    { value: 'auto-desktop' },
    { value: 'mobile' },
    { value: 'desktop' }
  ]
}

export const optionsCalendar = {
  values,
  calendarValue,
  multiple,
  calendarMin,
  calendarMax,

  options,
  locales,
  shape,
  calendarAdaptive,
  today,
  outputMonth,
  outputWeek,
  outputDay
}
