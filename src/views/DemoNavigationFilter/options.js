import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DNavigationFilter/props'
import { AppBar } from '@/media/demo/AppBar'
import { Window } from '@/media/demo/Window'

export const optionsNavigationFilter = useProps(props, {
  adaptive: {
    list: [
      { value: undefined },
      { value: 'auto' },
      { value: 'auto-small' },
      { value: 'auto-medium' },
      { value: 'auto-large' },
      { value: 'auto-extra' },
      { value: 'auto-desktop' },
      { value: 'fixed' }
    ]
  },
  appearance: AppBar.appBarAppearance,
  width: Window.windowWidth
}, ['open', 'selected'])
