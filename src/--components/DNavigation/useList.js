import attrList from '@/--components/attrList'

export default function useList (
  props,
  propList,
  propSelected
) {
  return attrList(
    props,
    {
      list: propList,
      selected: propSelected
    },
    {
      tag: 'a',
      adaptive: 'basic',
      dense: true,
      iconAnimationShow: true
    },
    ['navigationRail', 'iconBackground']
  )
}
