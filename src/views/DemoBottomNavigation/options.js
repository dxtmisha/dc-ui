import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DBottomNavigation/props'

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
  }
}, ['selected'])
