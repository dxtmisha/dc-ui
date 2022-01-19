import { toRefs } from 'vue'
import attrList from '../DList/attrList'
import attrMenu from '../DMenu/attrMenu'

export default function useList (props, propSelected) {
  const {
    barNavigation,
    barInit
  } = toRefs(props)

  const bindList = attrList({
    props,
    items: { selected: propSelected },
    attrs: {
      tag: 'a',
      appearance: 'basic',
      size: 'dynamic',
      axis: 'x',
      dense: true,
      iconAnimationShow: true
    }
  })

  const bindMenu = attrMenu({
    props,
    items: {
      list: barNavigation,
      listInit: barInit,
      selected: propSelected
    },
    attrs: {
      readonly: true,
      tag: 'a'
    }
  })

  return {
    bindList,
    bindMenu
  }
}
