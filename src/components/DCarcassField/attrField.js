import useBinds from '@/uses/useBinds'
import { props } from '@/components/DCarcassField/props'

export default function attrField (
  binds,
  items = {},
  attrs = {},
  pointer = []
) {
  return useBinds(
    'field',
    props,
    binds,
    items,
    attrs,
    pointer
  )
}
