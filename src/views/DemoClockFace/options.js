import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DClockFace/props'
import { ClockFace } from '@/media/demo/ClockFace'

export const optionsClockFace = useProps(props, {
  selected: ClockFace.clockFaceSelected,
  type: ClockFace.clockFaceType
})
