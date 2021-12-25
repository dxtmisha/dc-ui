import useAttrs from '@/uses/useAttrs'
import { props as main } from '@/components/DList/props'

export default function attrList ({
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
    code: 'item',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
