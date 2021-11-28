import Geo from '@/classes/Geo'
import { useWatch } from '@/--uses/useWatch'

export const useSelect = function (
  type,
  list,
  locales
) {
  const propList = useWatch([type, list, locales], data => {
    switch (type.value) {
      case 'month':
        data.value = new Geo(locales.value).getListMonth()
        break
      case 'week':
        data.value = new Geo(locales.value).getListWeekday()
        break
      default:
        data.value = list.value
        break
    }
  })

  return { propList }
}
