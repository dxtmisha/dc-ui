import useProps from '@/components/InteractiveDemo/useProps'
import { props } from '../../../components/DMotionAxis/props'
import { MotionAxis } from '@/media/demo/MotionAxis'

export const optionsMotionAxis = useProps(props, {
  axis: MotionAxis.motionAxisAxis,
  selected: MotionAxis.motionAxisSelected
})
