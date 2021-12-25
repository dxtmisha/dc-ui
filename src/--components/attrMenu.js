import useBinds from '@/uses/useBinds'
import { props } from '@/components/DMenu/props'

export default function attrMenu (
  binds,
  items = {},
  attrs = {},
  pointer = []
) {
  return useBinds(
    'menu',
    props,
    binds,
    items,
    attrs,
    pointer
  )
}
