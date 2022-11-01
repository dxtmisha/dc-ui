import { computed, toRefs } from 'vue'
import List from '../../classes/List'
import forEach from '../../functions/forEach'
import useWatch from '../../uses/useWatch'

export default function useSort (props) {
  const {
    value,
    desc
  } = toRefs(props)

  const propValue = useWatch(value, () => value.value, ['init'])
  const propDesc = useWatch(desc, () => desc.value, ['init'])

  const propListMain = computed(() => new List(
    props.list,
    props.listInit,
    props.translation,
    props.keyText,
    props.keyValue
  ).get())
  const propList = computed(() => forEach(propListMain.value, item => {
    return {
      ...item,
      turn: propDesc.value,
      iconTrailing: item.value === propValue.value ? props.iconArrowDownWard : undefined
    }
  }))

  return {
    propValue,
    propDesc,
    propList
  }
}
