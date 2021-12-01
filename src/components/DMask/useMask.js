import { computed } from 'vue'
import GeoDate from '@/classes/GeoDate'

export default function useMask (props) {
  const geo = computed(() => props.type === 'text' ? undefined : new GeoDate(props.locales).setType(props.type))

  const getDate = (date = '1987-12-18 10:20:00') => geo.value.toString(date)
  const setDate = (date) => {
    if (geo.value) {
      const object = geo.value.getObject()

      object.setFullYear(date.y)
      object.setMonth(date.m - 1)
      object.setDate(date.d)
      object.setHours(date.H)
      object.setMinutes(date.M)
    }
  }

  const propMask = computed(() => {
    if (geo.value) {
      return getDate()
        .replace('1987', '****')
        .replace(/12|18|10|20/ig, '**')
        .split('')
    } else {
      return props.mask?.toString().split('') || []
    }
  })
  const propView = computed(() => {
    if (geo.value) {
      return getDate()
        .replace('1987', 'yyyy')
        .replace('12', 'mm')
        .replace('18', 'dd')
        .replace('10', 'HH')
        .replace('20', 'MM')
        .split('')
    } else {
      return props.mask?.toString().split('') || []
    }
  })
  const propPattern = computed(() => {
    if (geo.value) {
      const day = []
      const month = '01|02|03|04|05|06|07|08|09|10|11|12'
      const hour = `00|${month}|13|14|15|16|17|18|19|20|21|22|23|24`
      const minute = []

      for (let i = 1; i <= geo.value.getMaxDay(); i++) {
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

      return propView.value.join('')
        .replace('yyyy', '[12]{1}[0-9]{3}')
        .replace('mm', `(${month})`)
        .replace('dd', `(${day.join('|')})`)
        .replace('HH', `(${hour})`)
        .replace('MM', `(${minute.join('|')})`)
    } else {
      return props.pattern || `.{${propMask.value?.length}}`
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
