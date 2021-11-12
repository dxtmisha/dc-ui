import { computed, readonly, toRefs } from 'vue'

export const useList = function (props) {
  const {
    // Values
    list,

    // Options
    attrsMenu,
    palette,
    tag,
    appearance,
    navigationRail,
    size,
    shape,
    adaptive,
    dense,
    border,
    ripple,

    // Icon
    iconReadonly,
    iconAnimationShow,
    iconBackground
  } = toRefs(props)

  const getItem = (item) => {
    if (item?.text || item?.icon) {
      return readonly({
        ...item,
        item,
        palette,
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
        iconBackground
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
      return {
        ...attrsMenu.value,
        ...item?.attrsMenu,
        list: item.menu,
        listInit: false
        /*
        attrsWindow: {
          ...this.attrsMenu?.attrsWindow,
          ...item.menu?.attrsWindow,
          axis: this.axis === 'x' ? 'y' : 'x',
          indent: this.axis === 'x' ? undefined : -4
        }
        */
      }
    } else {
      return undefined
    }
  }

  const valueList = computed(() => {
    const data = []

    if (list.value?.length > 0) {
      list.value.forEach(item => data.push({
        value: item?.value,
        html: item?.html,
        subtitle: item?.subtitle,
        line: item?.line,
        space: item?.space,
        item: getItem(item),
        list: getList(item),
        menu: getMenu(item)
      }))
    }

    return data
  })

  return {
    valueList
  }
}
