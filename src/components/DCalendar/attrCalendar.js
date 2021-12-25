import useAttrs from '@/uses/useAttrs'
import { props as main } from '@/components/DCalendar/props'

export default function attrCalendar ({
  props,
  pointer = [
    'min',
    'max',
    'multiple',
    'locales',
    'today'
  ],
  items = {},
  attrs = {}
}) {
  return useAttrs({
    code: 'calendar',
    props: main,
    pointer,
    original: props,
    items,
    attrs
  })
}
