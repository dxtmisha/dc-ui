import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DImagesBar/props'
import { Bar } from '@/media/demo/Bar'

export const optionsImagesBar = useProps(props, {
  display: Bar.barDisplay
}, ['value'])
