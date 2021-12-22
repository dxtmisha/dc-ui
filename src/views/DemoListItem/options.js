import useProps from '@/--components/InteractiveDemo/useProps'
import { props } from '@/components/DListItem/props'
import { Icon } from '@/media/demo/Icon'
import { Item } from '@/media/demo/Item'

export const optionsListItem = useProps(props, {
  appearance: Item.itemAppearance,
  size: Icon.iconSize
}, ['value'])
