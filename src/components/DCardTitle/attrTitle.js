import useAttrs from './../../uses/useAttrs'
import { props as main } from './../DCardTitle/props'

export default function attrTitle ({
  props,
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'title',
    props: main,
    pointer: [
      'title',
      'description',
      'menu',
      'href',
      'active',
      'icon',
      'iconActive',
      'iconBackground'
    ],
    original: props,
    items,
    attrs
  })
}
