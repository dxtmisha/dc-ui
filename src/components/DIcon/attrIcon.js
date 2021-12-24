import useAttrs from '@/uses/useAttrs'
import { props as main } from '@/components/DIcon/props'

export default function attrIcon ({
  props,
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'icon',
    pointer: [
      'icon',
      'iconActive',
      'disabled'
    ],
    props: main,
    original: props,
    items,
    attrs
  })
}
