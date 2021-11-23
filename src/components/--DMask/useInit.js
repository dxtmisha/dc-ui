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

  return {
    propView,
    propMask,
    propPattern,
    // delete
    inputValue
  }
}
