import attrList from '../DList/attrList'

export default function useList (
  props,
  propList,
  propSelected
) {
  return attrList({
    props,
    items: {
      list: propList,
      selected: propSelected
    },
    attrs: {
      tag: 'a',
      adaptive: 'basic',
      dense: true,
      iconAnimationShow: true
    }
  })
}
