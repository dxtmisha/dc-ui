import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DBottomNavigation/props'
import { Icon } from '@/media/demo/Icon'

export const optionsBottomNavigation = useProps(props, {
  appearance: {
    list: [
      { value: undefined },
      { value: 'basic' },
      { value: 'contained' },
      { value: 'translucency' }
    ]
  },
  scroll: {
    list: [
      { value: undefined },
      { value: 'bottom' },
      { value: 'disappears' },
      { value: 'border' }
    ]
  },
  size: Icon.iconSize
}, ['selected'])
