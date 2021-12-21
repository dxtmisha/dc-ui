import useProps from '@/--components/InteractiveDemo/useProps'
import { props } from '@/components/DControlResize/props'
import { ControlResize } from '@/media/demo/ControlResize'

export const optionsControlResize = useProps(props, {
  value: ControlResize.controlResizeValue
})
