import useProps from '@/--components/InteractiveDemo/useProps'
import { props } from '@/--components/DMenu/props'
import { Icon } from '@/media/demo/Icon'
import { Item } from '@/media/demo/Item'

export const optionsMenu = useProps(props, {
  appearance: Item.itemAppearance,
  focus: Item.itemFocus,
  size: Icon.iconSize
}, ['selected'])
