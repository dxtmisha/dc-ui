import { computed } from 'vue'
import attrData from './../DData/attrData'

export default function useData (props, items) {
  return attrData({
    props,
    items: {
      items: computed(() => {
        if (items.value?.length) {
          return items.value
        } else {
          return undefined
        }
      })
    }
  })
}
