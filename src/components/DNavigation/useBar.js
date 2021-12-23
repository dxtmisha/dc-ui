import { computed } from 'vue'
import List from '@/classes/List'

export default function useBar (props) {
  const propList = computed(() => new List(
    props.list,
    props.listInit,
    props.translation,
    props.keyText,
    props.keyValue
  ).get())

  return { propList }
}
