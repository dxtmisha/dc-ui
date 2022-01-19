import useAttrs from './../../uses/useAttrs'
import { props as main } from './../DCardMedia/props'

export default function attrMedia ({
  props,
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'media',
    props: main,
    pointer: [
      'href',
      'active',
      'aspectRatio',
      'thumbnail'
    ],
    original: props,
    items,
    attrs
  })
}
