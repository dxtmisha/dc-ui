import GeoDate from '@/classes/GeoDate'
import { ref, watch } from 'vue'
import { useWatch } from '@/uses/useWatch'

export const useInit = function (
  locales,
  type
) {
  const initGeoDate = () => new GeoDate(locales.value).setType(type.value)

  const geo = ref(undefined)
  const view = ref(undefined)
  const propMask = ref(undefined)

  const getDate = (date = '1987-12-18 10:20:00') => geo.value.toString(date)
  const resetGeo = () => {
    geo.value = initGeoDate()

    propMask.value = getDate()
      .replace('1987', '****')
      .replace(/12|18|10|20/ig, '**')
      .split('')
    view.value = getDate()
      .replace('1987', 'yyyy')
      .replace('12', 'mm')
      .replace('18', 'dd')
      .replace('10', 'HH')
      .replace('20', 'MM')
      .split('')
  }

  watch([locales, type], resetGeo)

  return {
    geo,
    view,
    propMask
  }
}
