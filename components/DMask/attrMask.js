import useAttrs from '../../uses/useAttrs'
import { props as main } from './props'

export default function attrMask ({
  props,
  pointer = [
    'value',
    'mask',
    'pattern',
    'on',
    'type',
    'locales'
  ],
  items,
  attrs
}) {
  return useAttrs({
    code: 'mask',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
