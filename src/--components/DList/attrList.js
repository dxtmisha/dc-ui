import useBinds from '@/uses/useBinds'
import { props } from '@/--components/DList/props'

export default function attrList (
  binds,
  items = {},
  attrs = {},
  pointer = []
) {
  return useBinds(
    'item',
    props,
    binds,
    items,
    attrs,
    pointer
  )
}
