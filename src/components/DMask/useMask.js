import GeoDate from '@/classes/GeoDate'
import { useWatch } from '@/uses/useWatch'

export const useMask = function (
  mask,
  pattern,
  type,
  locales
) {
  const geo = useWatch([
    type,
    locales
  ], data => {
    console.log('type', type.value)
    console.log('locales', locales.value)
    data.value = type.value === 'text' ? undefined : new GeoDate(locales.value).setType(type.value)
  })

  const getDate = (date = '1987-12-18 10:20:00') => geo.value.toString(date)
  const setDate = (date) => {
    if (geo.value) {
      const object = geo.value.getObject()

      object.setFullYear(date.year)
      object.setMonth(date.month - 1)
      object.setDate(date.day)
      object.setHours(date.hour)
      object.setMinutes(date.minute)
    }
  }

  const propMask = useWatch([geo, mask], data => {
    if (geo.value) {
      data.value = getDate()
        .replace('1987', '****')
        .replace(/12|18|10|20/ig, '**')
        .split('')
    } else {
      data.value = mask.value?.toString().split('') || []
    }
  })
  const propView = useWatch([geo, mask], data => {
    if (geo.value) {
      data.value = getDate()
        .replace('1987', 'yyyy')
        .replace('12', 'mm')
        .replace('18', 'dd')
        .replace('10', 'HH')
        .replace('20', 'MM')
        .split('')
    } else {
      data.value = mask.value?.toString().split('') || []
    }
  })
  const propPattern = useWatch([propMask, pattern], data => {
    if (type.value === 'text') {
      data.value = pattern.value || `.{${propMask.value?.length}}`
    } else {
      const day = []
      const month = '01|02|03|04|05|06|07|08|09|10|11|12'
      const hour = `00|${month}|13|14|15|16|17|18|19|20|21|22|23|24`
      const minute = []

      for (let i = 1; i <= geo.getMaxDay(); i++) {
        if (i < 10) {
          day.push(`0${i}`)
        } else {
          day.push(i)
        }
      }

      for (let m = 0; m < 60; m++) {
        if (m < 10) {
          minute.push(`0${m}`)
        } else {
          minute.push(m)
        }
      }

      data.value = propView.value.join('')
        .replace('yyyy', '[12]{1}[0-9]{3}')
        .replace('mm', `(${month})`)
        .replace('dd', `(${day.join('|')})`)
        .replace('HH', `(${hour})`)
        .replace('MM', `(${minute.join('|')})`)
    }
  })

  return {
    geo,
    propMask,
    propView,
    propPattern,
    getDate,
    setDate
  }
}
