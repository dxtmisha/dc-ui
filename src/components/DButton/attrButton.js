import useAttrs from './../../uses/useAttrs'
import { props as main } from './../DButton/props'

export default function attrButton ({
  props,
  pointer = [
    'disabled',
    'palette',
    'color',
    'ripple'
  ],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'button',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
