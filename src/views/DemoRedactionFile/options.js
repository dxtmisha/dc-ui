import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '@/components/DRedactionFile/props'
import { ControlResize } from '@/media/demo/ControlResize'
import { Options } from '@/media/demo/Options'

export const optionsRedactionFile = useProps(props, {
  value: ControlResize.controlResizeValue,
  thumbnail: Options.src
})
