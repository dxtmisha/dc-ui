import { computed } from 'vue'
import forEach from '@/functions/forEach'
import isSelected from '@/functions/isSelected'
import attrButton from '@/components/DButton/attrButton'
import attrMenu from '@/components/DMenu/attrMenu'
import useWatch from '@/uses/useWatch'

export default function useBar (
  props,
  propList,
  propSelected
) {
  const axis = computed(() => props.axis === 'y' ? 'x' : 'y')

  const menu = item => attrMenu({
    props,
    items: {
      ...item?.menuProps,
      list: item.menu,
      listInit: false,
      selected: propSelected,
      axis
    }
  })

  const attr = item => attrButton({
    props,
    items: item,
    attrs: {
      selected: computed(() => isSelected(item?.value, propSelected.value)),
      tag: 'a',
      translate: 'no'
    }
  })

  return useWatch(propList, () => forEach(propList.value, (item, index) => {
    return {
      value: 'value' in item ? item.value : index,
      menu: 'menu' in item ? menu(item) : undefined,
      bind: attr(item)
    }
  }), ['init'])
}
