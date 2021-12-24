import { computed } from 'vue'
import List from '@/classes/List'

export default function useBar (props) {
  const getList = list => new List(
    list,
    props.barInit,
    props.translation,
    props.keyText,
    props.keyValue,
    false
  ).get()

  const propBar = computed(() => getList(props.bar))
  const propBarMenu = computed(() => getList(props.barMenu))
  const propBarAction = computed(() => getList(props.barAction))

  return {
    propBar,
    propBarMenu,
    propBarAction
  }
}
