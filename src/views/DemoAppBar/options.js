import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/--components/DAppBar/props'
import { AppBar } from '@/media/demo/AppBar'
import { Window } from '@/media/demo/Window'

export const optionsAppBar = useProps(props, {
  appearance: AppBar.appBarAppearance,
  scroll: AppBar.appBarScroll,
  width: Window.windowWidth
}, ['element', 'selected'])
