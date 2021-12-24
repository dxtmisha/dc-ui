import useAttrs from '@/uses/useAttrs'
import { props as main } from '@/components/DButton/props'

export default function attrButton ({
  props,
  pointer = [],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'button',
    props: main,
    pointer: [
      ...pointer,
      'disabled',
      'palette',
      'color',
      'ripple'
    ],
    original: props,
    items,
    attrs
  })
}
