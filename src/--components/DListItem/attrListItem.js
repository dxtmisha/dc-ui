import useBinds from '@/uses/useBinds'
import { props } from '@/--components/DListItem/props'

export default function attrListItem (
  binds,
  items = {},
  attrs = {}
) {
  return useBinds(
    'item',
    props,
    binds,
    items,
    attrs
  )
}
