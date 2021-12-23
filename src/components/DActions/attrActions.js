import useBinds from '@/uses/useBinds'
import { props } from '@/components/DActions/props'

export default function attrActions (
  binds,
  items = {},
  attrs = {},
  pointer = []
) {
  return useBinds(
    'actions',
    props,
    binds,
    items,
    attrs,
    pointer
  )
}
