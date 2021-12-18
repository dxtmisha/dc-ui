import List from '@/classes/List'
import { computed, readonly, toRefs } from 'vue'

export default function useBar (props) {
  const refs = toRefs(props)

  const propList = computed(() => new List(
    props.list,
    props.listInit,
    props.translation,
    props.keyText,
    props.keyValue
  ).get())

  const bindList = readonly({
    class: 'd-navigation__list',
    tag: 'a',
    appearance: refs.listAppearance,
    size: refs.listSize,
    shape: refs.listShape,
    adaptive: 'block',
    navigationRail: refs.navigationRail,
    dense: false,
    border: false,
    iconBackground: refs.iconBackground
  })

  return {
    propList,
    bindList
  }
}
