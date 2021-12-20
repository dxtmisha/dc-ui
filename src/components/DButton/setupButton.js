import useBinds from '@/uses/useBinds'
import { props } from '@/components/DButton/props'

export default function setupButton (
  binds,
  items = {},
  attrs = {}
) {
  return useBinds(
    'button',
    props,
    binds,
    items,
    attrs
  )
}
