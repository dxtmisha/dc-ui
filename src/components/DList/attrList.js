import useAttrs from '@/uses/useAttrs'
import { props as main } from '@/components/DList/props'

export default function attrItem ({
  props,
  pointer = [
    'palette',
    'color',
    'navigationRail',
    'ripple'
  ],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'list',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
