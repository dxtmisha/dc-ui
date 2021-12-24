import useBinds from '@/uses/useBinds'
import { props } from '@/components/DButton/props'

export default function attrButton (
  binds,
  items = {},
  attrs = {},
  pointer = []
) {
  return useBinds(
    'button',
    props,
    binds,
    items,
    attrs,
    pointer
  )
}