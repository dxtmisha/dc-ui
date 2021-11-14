import { readonly, ref, toRefs, watch } from 'vue'

export const setupListItem = function (props) {
  const {
    // Values
    list,
    multiple,
    maxlength,

    // Options
    palette,
    color,
    tag,
    axis,
    appearance,
    navigationRail,
    size,
    shape,
    adaptive,
    groupShow,
    dense,
    border,
    ripple,

    // Icon
    iconReadonly,
    iconAnimationShow,
    iconBackground
  } = toRefs(props)

  const valueList = ref([])

  const getItem = (item) => readonly({
    item,
    tag,
    appearance,
    navigationRail,
    size,
    shape,
    adaptive,
    dense,
    border,
    ripple,
    iconReadonly,
    iconAnimationShow,
    iconBackground,
    ...item
  })
  const getList = (item) => 'list' in item
    ? readonly({
      ...props,
      list: item.list
    })
    : undefined
  const getMenu = (item) => 'menu' in item
    ? readonly({
      multiple,
      maxlength,
      palette,
      color,
      groupShow,
      tag,
      appearance,
      size,
      shape,
      ripple,
      ...item?.attrsMenu,
      list: item.menu,
      listInit: false,
      axis: axis.value === 'x' ? 'y' : 'x',
      indent: axis.value === 'x' ? undefined : -4
    })
    : undefined

  watch(list, () => {
    const data = []

    list.value?.forEach(item => data.push({
      value: item?.value,
      html: item?.html,
      subtitle: item?.subtitle,
      line: item?.line,
      space: item?.space,
      item: getItem(item),
      list: getList(item),
      menu: getMenu(item)
    }))

    valueList.value = data
  })

  return {
    valueList
  }
}
