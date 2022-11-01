import { computed } from 'vue'
import List from '../../classes/List'
import attrData from '../DData/attrData'

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
      }),
      itemsNew: computed(() => props.listNew
        ? new List(
          props.listNew,
          props.listInit,
          props.translation,
          props.keyText,
          props.keyValue
        ).get()
        : undefined
      )
    }
  })
}
