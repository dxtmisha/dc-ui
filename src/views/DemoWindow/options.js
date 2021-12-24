import useProps from '@/--components/InteractiveDemo/useProps'
import { props } from '@/components/DWindow/props'
import { Window } from '@/media/demo/Window'

export const optionsWindow = useProps(props, {
  adaptive: Window.windowAdaptive,
  axis: Window.windowAxis,
  shape: Window.windowShape,
  size: Window.windowSize,
  width: Window.windowWidth
})
