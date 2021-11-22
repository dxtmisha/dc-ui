import GeoDate from '@/classes/GeoDate'
import { ref } from 'vue'
import { useWatch } from '@/uses/useWatch'

export const useInit = function (
  input,
  mask,
  view,
  pattern,
  type,
  locales
) {
  /**
   * @type {GeoDate}
   */
  let geo

  const getDate = (date = '1987-12-18 10:20:00') => geo?.toString(date)

  // delete
  const inputValue = (value) => {
    input.value.value = value
  }

  const propView = ref([])
  const propMask = useWatch([mask, type, locales], data => {
    if (type.value === 'text') {
      const value = mask.value?.toString()

      propView.value = value.replace('*', view.value).split('')
      data.value = value.split('') || []
    } else {
      geo = new GeoDate(locales.value).setType(type.value)
      const value = getDate()

      propView.value = value
        .replace('1987', 'yyyy')
        .replace('12', 'mm')
        .replace('18', 'dd')
        .replace('10', 'HH')
        .replace('20', 'MM')
        .split('')

      data.value = value
        .replace('1987', '****')
        .replace(/12|18|10|20/ig, '**')
        .split('')
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
    propView,
    propMask,
    propPattern,
    inputValue
  }
}
