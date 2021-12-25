import useAttrs from '@/uses/useAttrs'
import { props as main } from './props'

export default function attrSelectValue ({
  props,
  pointer = [
    'multiple',
    'disabled',
    'palette',
    'color',
    'ripple'
  ],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'selectValue',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
