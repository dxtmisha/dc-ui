import attrButton from '../DButton/attrButton'
import { computed, toRefs } from 'vue'
import List from '../../classes/List'
import forEach from '../../functions/forEach'
import isSelected from '../../functions/isSelected'
import useWatch from '../../uses/useWatch'

export default function useItems (props, propValue, set) {
  const { list } = toRefs(props)
  const object = computed(() => new List(
    props.list,
    props.listInit,
    props.translation,
    props.keyText,
    props.keyValue
  ))

  const getItem = item => attrButton({
    props,
    items: item,
    attrs: {
      item,
      selected: computed(() => isSelected(item.value, propValue.value))
    }
  })

  const propList = useWatch(list, () => forEach(object.value.get(), getItem), ['init'])
  const propValueItem = computed(() => forEach(object.value.getSelected(propValue.value), item => {
    return {
      ...item,
      onHide: () => set(item.value)
    }
  }))

  return {
    propList,
    propValueItem
  }
}
