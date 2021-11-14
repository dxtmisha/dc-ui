import { computed, readonly, toRefs } from 'vue'

export const setupListItem = function (props) {
  const {
    // Values
    list,

    // Options
    attrsMenu,
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

  const cash = {}

  const getItem = (item) => {
    if (item?.text || item?.icon) {
      return readonly({
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
    } else {
      return undefined
    }
  }
  const getList = (item) => {
    if (item?.list) {
      return readonly({
        ...props,
        list: item.list
      })
    } else {
      return undefined
    }
  }
  const getMenu = (item) => {
    if (item?.menu) {
      return readonly({
        ajax: undefined,
        request: undefined,
        palette,
        color,
        appearance,
        size,
        shape,
        groupShow,
        ripple,
        ...attrsMenu.value,
        ...item?.attrsMenu,
        list: item.menu,
        listInit: false,
        axis: axis.value === 'x' ? 'y' : 'x',
        indent: axis.value === 'x' ? undefined : -4
      })
    } else {
      return undefined
    }
  }

  const valueList = computed(() => {
    const data = []

    if (list.value?.length > 0) {
      list.value.forEach(item => {
        const value = item?.value

        if (!(value in cash)) {
          cash[value] = {
            value,
            html: item?.html,
            subtitle: item?.subtitle,
            line: item?.line,
            space: item?.space,
            item: getItem(item),
            list: getList(item),
            menu: getMenu(item)
          }
        }

        data.push(cash[value])
      })
    }

    return data
  })

  return {
    valueList
  }
}
