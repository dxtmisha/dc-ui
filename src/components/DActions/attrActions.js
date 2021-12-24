import useAttrs from '@/uses/useAttrs'
import { props as main } from '@/components/DActions/props'

export default function attrActions ({
  props,
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'actions',
    props: main,
    pointer: [
      'bar',
      'barAction'
    ],
    original: props,
    items,
    attrs
  })
}
