import attrList from '@/components/DList/attrList'
import attrMenu from '@/components/DMenu/attrMenu'
import { toRefs } from 'vue'

export default function useList (props, propSelected) {
  const {
    barNavigation,
    barInit
  } = toRefs(props)

  const bindList = attrList(
    props,
    { selected: propSelected },
    {
      tag: 'a',
      appearance: 'basic',
      axis: 'x',
      dense: true,
      iconAnimationShow: true
    }
  )

  const bindMenu = attrMenu(
    props,
    {
      list: barNavigation,
      listInit: barInit,
      selected: propSelected
    },
    {
      readonly: true,
      tag: 'a'
    },
    [
      'translation',
      'keyText',
      'keyValue'
    ]
  )

  return {
    bindList,
    bindMenu
  }
}
