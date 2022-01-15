import { computed, toRefs } from 'vue'
import forEach from '@/functions/forEach'
import isSelected from '@/functions/isSelected'
import attrDataItem from '@/components/DDataItem/attrDataItem'
import useWatch from '@/uses/useWatch'

export default function useItems (props, propParameters) {
  const {
    items,
    underline
  } = toRefs(props)

  const getItem = item => attrDataItem({
    props,
    items: { parameters: propParameters },
    attrs: {
      item,
      value: item?.value,
      underline,
      selected: computed(() => isSelected(item?.value, props.selected))
    }
  })

  return useWatch(items, () => forEach(items.value, item => getItem(item)), ['init'])
}
