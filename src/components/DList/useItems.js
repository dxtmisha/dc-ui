import { reactive, readonly, ref, watch } from 'vue'
import { getObjectValues, isSelected } from '@/tool/functions'
import { useWatch } from '@/uses/useWatch'

export const useItems = function (
  list,
  group,
  menu,
  focus,
  selected,
  axis,
  navigationRail,
  tag,
  appearance,
  size,
  shape,
  adaptive,
  dense,
  border,
  ripple,
  iconArrowDown,
  iconArrowRight,
  iconAnimationShow,
  iconBackground
) {
  const cacheGroup = {}
  const propsItem = {
    tag,
    appearance,
    navigationRail,
    size,
    shape,
    adaptive,
    dense,
    border,
    ripple,
    iconAnimationShow,
    iconBackground
  }

  const getItem = item => reactive({
    item,
    focus: ref(isSelected(item.value, focus.value)),
    selected: ref(isSelected(item.value, selected.value)),
    ...propsItem,
    ...item,
    list: undefined,
    menu: undefined,
    menuProps: undefined
  })
  const getList = item => item?.list
    ? readonly({
      list: item.list,
      focus,
      selected,
      axis,
      navigationRail,
      ...propsItem,
      iconArrowDown,
      iconArrowRight
    })
    : undefined
  const getMenu = (item) => item?.menu
    ? readonly({
      ajax: undefined,
      tag,
      appearance,
      size,
      shape,
      ripple,
      ...menu.value,
      ...item?.menuProps,
      list: item.menu,
      listInit: false,
      selected,
      axis: axis.value === 'x' ? 'y' : 'x',
      indent: axis.value === 'x' ? undefined : -4
    })
    : undefined

  const setStatus = (type, value) => propList.value.forEach(({ item }) => {
    if (item) {
      item[type] = isSelected(item.value, value)
    }
  })

  const propList = useWatch(list, data => {
    const value = []

    if (list.value) {
      list.value.forEach(original => {
        const item = getObjectValues(original, [
          'value',
          'html',
          'subtitle',
          'line',
          'space'
        ])

        if (
          !item.html &&
          !item.subtitle &&
          !item.line &&
          !item.space
        ) {
          item.item = getItem(original)
          item.list = getList(original)
          item.menu = getMenu(original)

          if (item.list) {
            item.group = cacheGroup[item.value] || (cacheGroup[item.value] = ref(group.value?.[item.value] || false))
          }
        }

        value.push(item)
      })
    }

    data.value = value
  })

  watch(focus, (value) => setStatus('focus', value))
  watch(selected, (value) => setStatus('selected', value))

  return { propList }
}
