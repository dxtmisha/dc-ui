import useBinds from '@/uses/useBinds'
import { props } from '@/components/DIcon/props'

export default function attrIcon (
  binds,
  items = {},
  attrs = {},
  pointer = []
) {
  return useBinds(
    'icon',
    props,
    binds,
    items,
    attrs,
    pointer
  )
}
