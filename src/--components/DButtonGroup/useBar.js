import { computed } from 'vue'
import isSelected from '@/functions/isSelected'
import attrButton from '@/--components/attrButton'
import attrMenu from '@/--components/DMenu/attrMenu'
import useWatch from '@/uses/useWatch'

export default function useBar (
  props,
  propList,
  propSelected
) {
  const axis = computed(() => props.axis === 'y' ? 'x' : 'y')
  const menu = item => attrMenu(
    props,
    {
      ...item?.menuProps,
      list: item.menu,
      listInit: false,
      selected: propSelected,
      axis
    },
    {},
    [
      'multiple',
      'maxlength',
      'readonly',
      'disabled'
    ])
  const attr = item => attrButton(
    props,
    {
      item,
      selected: computed(() => isSelected(item?.value, propSelected.value))
    },
    {
      ...item,
      class: 'd-button-group__item bg-item notranslate',
      tag: 'a',
      translate: 'no'
    },
    ['readonly', 'disabled']
  )

  return useWatch(propList, data => {
    data.value = []
    propList.value.forEach((item, index) => data.value.push({
      value: item?.value || index,
      menu: 'menu' in item ? menu(item) : undefined,
      bind: attr(item)
    }))
  })
}
