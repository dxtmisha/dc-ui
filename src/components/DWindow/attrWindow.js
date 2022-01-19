import useAttrs from './../../uses/useAttrs'
import { props as main } from './../DWindow/props'

export default function attrWindow ({
  props,
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'window',
    props: main,
    pointer: ['disabled'],
    original: props,
    items,
    attrs
  })
}
