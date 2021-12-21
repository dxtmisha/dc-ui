import useBinds from '@/uses/useBinds'
import { props } from '@/components/DCarcassField/props'

export default function attrField (
  binds,
  items = {},
  attrs = {}
) {
  return useBinds(
    'field',
    props,
    binds,
    items,
    attrs
  )
}
