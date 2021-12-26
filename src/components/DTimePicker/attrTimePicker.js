import useAttrs from '@/uses/useAttrs'
import { props as main } from '@/components/DTimePicker/props'

export default function attrTimePicker ({
  props,
  pointer = [
    'value',
    'min',
    'max',
    'switchClock',
    'locales',
    'format'
  ],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'picker',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
