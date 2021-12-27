import useWatch from '@/uses/useWatch'
import { computed, toRefs } from 'vue'
import forEach from '@/functions/forEach'
import attrItem from '@/components/DListItem/attrItem'

export default function useItems (props) {
  const { list } = toRefs(props)
  return useWatch(list, () => forEach(list.value, item => attrItem({
    props,
    items: {
      ...item,
      appearance: 'basic'
    },
    attrs: {
      selected: computed(() => props.selected === item.value),
      appearance: 'basic',
      size: 'compact',
      adaptive: 'basic',
      navigationRail: 'extra',
      dense: true
    }
  })), ['init'])
}
