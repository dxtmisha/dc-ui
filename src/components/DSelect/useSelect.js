import { computed } from 'vue'
import Geo from '@/classes/Geo'

export default function useSelect (props) {
  const propList = computed(() => {
    switch (props.type) {
      case 'month':
        return new Geo(props.locales).getListMonth()
      case 'week':
        return new Geo(props.locales).getListWeekday()
      default:
        return props.list
    }
  })

  return { propList }
}
