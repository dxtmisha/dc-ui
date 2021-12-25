import { toRefs } from 'vue'
import attrItem from '@/components/DList/attrList'
import attrMenu from '@/components/DMenu/attrMenu'

export default function useList (props, propSelected) {
  const {
    barNavigation,
    barInit
  } = toRefs(props)

  const bindList = attrItem({
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
