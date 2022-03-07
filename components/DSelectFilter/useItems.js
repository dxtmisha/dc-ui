import attrButton from '../DButton/attrButton'
import { computed, toRefs } from 'vue'
import List from '../../classes/List'
import forEach from '../../functions/forEach'
import isSelected from '../../functions/isSelected'
import useWatch from '../../uses/useWatch'

export default function useItems (props, propValue) {
  const { list } = toRefs(props)

  const getItem = item => attrButton({
    props,
    items: item,
    attrs: {
      item,
      selected: computed(() => isSelected(item.value, propValue.value))
    }
  })

  return useWatch(list, () => {
    return forEach(
      new List(
        props.list,
        props.listInit,
        props.translation,
        props.keyText,
        props.keyValue
      ).get(),
      getItem
    )
  }, ['init'])
}
