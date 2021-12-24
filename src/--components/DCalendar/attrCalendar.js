import useBinds from '@/uses/useBinds'
import { props } from '@/--components/DCalendar/props'

export default function attrCalendar (
  binds,
  items = {},
  attrs = {}
) {
  return useBinds(
    'calendar',
    props,
    binds,
    items,
    attrs
  )
}
