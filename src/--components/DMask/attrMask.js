import useBinds from '@/uses/useBinds'
import { props } from '@/--components/DMask/props'

export default function attrMask (
  binds,
  items = {},
  attrs = {}
) {
  return useBinds(
    'mask',
    props,
    binds,
    items,
    attrs
  )
}
