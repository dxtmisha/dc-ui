import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DList/props'
import { Icon } from '@/media/demo/Icon'
import { Item } from '@/media/demo/Item'

export const optionsList = useProps(
  props,
  {
    appearance: Item.itemAppearance,
    focus: Item.itemFocus,
    size: Icon.iconSize
  },
  [
    'selected',
    'thumbnail',
    'icon',
    'iconActive'
  ]
)
