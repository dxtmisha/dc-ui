import { computed } from 'vue'
import List from '../../classes/List'

export default function useHeaders (props) {
  return computed(() => {
    const list = new List(
      props.headers,
      props.headersInit,
      props.translation,
      props.keyText,
      props.keyValue
    ).get()

    list.forEach(item => {
      if (!('align' in item)) {
        item.align = props.align
      }
    })

    return list
  })
}
