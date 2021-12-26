import useAttrs from '@/uses/useAttrs'
import { props as main } from '@/components/DCalendarSelect/props'

export default function attrCalendarSelect ({
  props,
  pointer = [
    'value',
    'min',
    'max',
    'multiple',
    'locales',
    'today',
    'calendarShape',
    'calendarAdaptive'
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
