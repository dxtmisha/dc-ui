import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DTop/props'
import { AppBar } from '@/media/demo/AppBar'

export const optionsTop = useProps(props, {
  appearance: AppBar.appBarAppearance
}, ['bar'])
