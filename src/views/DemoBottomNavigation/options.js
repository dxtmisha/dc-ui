import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DBottomNavigation/props'
import { BottomNavigation } from '@/media/demo/BottomNavigation'

export const optionsBottomNavigation = useProps(props, {
  appearance: BottomNavigation.bottomNavigationAppearance,
  scroll: BottomNavigation.bottomNavigationScroll
}, ['selected'])
