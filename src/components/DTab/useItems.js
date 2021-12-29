import { computed } from 'vue'
import List from '@/classes/List'
import forEach from '@/functions/forEach'
import attrItem from '@/components/DListItem/attrItem'
import useWatch from '@/uses/useWatch'

export default function useItems (props, propSelected) {
  const propList = computed(() => new List(
    props.list,
    props.listInit,
    props.translation,
    props.keyText,
    props.keyValue
  ).get())

  return useWatch(propList, () => {
    return forEach(propList.value, item => attrItem({
      props,
      items: {
        ...item,
        appearance: 'basic'
      },
      attrs: {
        selected: computed(() => propSelected.value === item.value),
        appearance: 'basic',
        size: 'compact',
        shape: 'tile',
        align: 'center',
        navigationRail: 'always',
        dense: true
      }
    }))
  }, ['init'])
}
