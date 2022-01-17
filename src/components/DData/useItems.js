import { computed, toRefs } from 'vue'
import forEach from '@/functions/forEach'
import isSelected from '@/functions/isSelected'
import attrDataItem from '@/components/DDataItem/attrDataItem'
import useWatch from '@/uses/useWatch'

export default function useItems (
  props,
  propHeaders,
  propParameters
) {
  const {
    items,
    underline
  } = toRefs(props)

  const getItem = (item, attrs = {}) => attrDataItem({
    props,
    items: {
      parameters: propParameters,
      ...attrs
    },
    attrs: {
      item,
      value: item?.value,
      underline,
      selected: computed(() => isSelected(item?.value, props.selected)),
      open: computed(() => isSelected(item?.value, props.open))
    }
  })

  const propList = useWatch(items, () => forEach(items.value, item => getItem(item)), ['init'])
  const bindHeaders = getItem(propHeaders, {
    border: true,
    header: true
  })

  return {
    propList,
    bindHeaders
  }
}
