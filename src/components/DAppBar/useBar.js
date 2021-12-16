import List from '@/classes/List'
import { computed } from 'vue'

export default function useBar (props) {
  const getList = list => new List(
    list,
    props.barInit,
    props.translation,
    props.keyText,
    props.keyValue,
    false
  ).getFirst()

  const propBar = computed(() => getList(props.bar))
  const propBarMenu = computed(() => getList(props.barMenu))
  const propBarAction = computed(() => getList(props.barAction))

  const bindList = computed(() => {
    return {
      axis: 'x',
      tag: 'a',
      size: 'dynamic',
      dense: true
    }
  })

  return {
    propBar,
    propBarMenu,
    propBarAction,
    bindList
  }
}
