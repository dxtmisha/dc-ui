import { props } from '@/components/DIcon/props'
import useBinds from '@/uses/useBinds'

export default function setupIcon (
  binds,
  items = {},
  attrs = {}
) {
  return useBinds(
    'icon',
    props,
    binds,
    items,
    attrs
  )
}
