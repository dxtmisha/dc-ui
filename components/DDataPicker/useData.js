import { computed, toRefs } from 'vue'
import attrData from '../DData/attrData'

export default function useData (props, items) {
  const { listNew } = toRefs(props)

  return attrData({
    props,
    items: {
      items: computed(() => {
        if (items.value?.length) {
          return items.value
        } else {
          return undefined
        }
      }),
      itemsNew: listNew
    }
  })
}
