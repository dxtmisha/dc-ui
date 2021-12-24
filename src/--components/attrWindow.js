import useBinds from '@/uses/useBinds'
import { props } from '@/components/DWindow/props'

export default function attrWindow (
  binds,
  items = {},
  attrs = {},
  pointer = []
) {
  return useBinds(
    'window',
    props,
    binds,
    items,
    attrs,
    pointer
  )
}
